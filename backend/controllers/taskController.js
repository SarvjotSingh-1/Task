import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
const filePath = "../data/tasks.json";


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const tasksFile = path.join(__dirname, "../data/tasks.json");

export const readTasks = () => {
  try {
    if (!fs.existsSync(filePath)) {
      fs.mkdirSync(path.dirname(filePath), { recursive: true }); // Ensure directory exists
      fs.writeFileSync(filePath, "[]", "utf-8"); // Create file with empty array
    }
    const data = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    console.error("Error reading tasks.json:", error);
    return [];
  }
};


  export const writeTasks = (tasks) => {
    try {
      fs.writeFileSync(filePath, JSON.stringify(tasks, null, 2), "utf-8");
    } catch (error) {
      console.error("Error writing tasks.json:", error);
    }
  };

export const getTasks = (req, res) => {
  const tasks = readTasks();
  res.json(tasks);
};

export const addTask = (req, res) => {


  try {
    const tasks = readTasks(); // ✅ Read existing tasks
    const newTask = {
      id: tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1,
      title: req.body.title,
      completed: req.body.completed || false,
    };
    
    tasks.push(newTask);
    writeTasks(tasks); // ✅ Save tasks

    console.log("✅ Task added:", newTask); // Debugging

    res.status(201).json(newTask); // ✅ Send JSON response
  } catch (error) {
    console.error("❌ Error adding task:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};



export const updateTask = (req, res) => {
    // const tasks = readTasks();
    // const { id } = req.params;
    // const taskIndex = tasks.findIndex(task => task.id === parseInt(id));
  
    // console.log("🔍 Looking for task ID:", id); // Debugging log
    // console.log("📂 Existing tasks:", tasks); // Show current tasks
  
    // if (taskIndex === -1) {
    //   return res.status(404).json({ message: "Task not found" });
    // }
  
    // tasks[taskIndex] = { ...tasks[taskIndex], ...req.body };
    // writeTasks(tasks);
    // res.json(tasks[taskIndex]);

    const tasks = readTasks();
    const { id } = req.params;
    const taskIndex = tasks.findIndex(task => task.id === parseInt(id));

    console.log("🔍 Looking for task ID:", id); // Debugging log
    console.log("📂 Existing tasks:", tasks); // Show current tasks

    if (taskIndex === -1) {
        return res.status(404).json({ message: "Task not found" });
    }

    tasks[taskIndex] = {
        ...tasks[taskIndex],
        completed: req.body.completed === "true", // ✅ Ensure boolean
    };

    writeTasks(tasks);
    console.log("✅ Task updated:", tasks[taskIndex]); // Debugging

    res.redirect("/"); // Redirect back to the homepage
  };
  

export const deleteTask = (req, res) => {
  let tasks = readTasks();
  tasks = tasks.filter((t) => t.id !== parseInt(req.params.id));
  writeTasks(tasks);
  res.json({ message: "Task deleted successfully" });
};
