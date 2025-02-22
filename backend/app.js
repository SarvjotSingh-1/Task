// // // import express from "express";
// // // import cors from "cors";
// // // import taskRoutes from "./routes/taskRoutes.js";
// // // // import connectDB from "./config/db.js";
// // // import dotenv from "dotenv";
// // // dotenv.config();
// // // const app = express();
// // // const PORT = process.env.PORT || 5000;

// // // // Connect to database (if using MongoDB)
// // // // connectDB();

// // // app.use(express.json()); // Middleware to parse JSON requests
// // // app.use(cors()); // Enable CORS for frontend communication
// // // app.use("/tasks", taskRoutes);

// // // app.listen(PORT, () => console.log(`Server running on port ${PORT}`));



// // import express from "express";
// // import cors from "cors";
// // import taskRoutes from "./routes/taskRoutes.js";
// // import dotenv from "dotenv";
// // import path from "path";

// // dotenv.config();
// // const app = express();
// // const PORT = process.env.PORT || 5000;

// // // Middleware
// // app.use(express.json());
// // app.use(cors());

// // // Set EJS as the view engine
// // app.set("view engine", "ejs");

// // // Serve static files (for Tailwind CSS)
// // app.use(express.static("public"));

// // // Routes
// // app.use("/tasks", taskRoutes);

// // // Render the frontend
// // app.get("/", (req, res) => {
// //   res.render("index", { tasks: [] }); // Pass empty tasks initially
// // });

// // app.listen(PORT, () => console.log(`Server running on port ${PORT}`));



// import express from "express";
// import cors from "cors";
// import taskRoutes from "./routes/taskRoutes.js";
// import dotenv from "dotenv";
// import path from "path";
// import methodOverride from "method-override";
// import { getTasks, addTask, updateTask, deleteTask } from "./controllers/taskController.js";

// dotenv.config();
// const app = express();
// const PORT = process.env.PORT || 5000;

// // Middleware
// app.use(express.json());
// app.use(express.urlencoded({ extended: true })); // Parse form data
// app.use(cors());
// app.use(methodOverride("_method")); // Support DELETE/PUT from forms

// // Set EJS as the view engine
// app.set("view engine", "ejs");

// // Serve static files (for Tailwind CSS)
// app.use(express.static("public"));

// // Routes
// app.use("/tasks", taskRoutes);

// // Render the frontend with tasks from the backend
// app.get("/", (req, res) => {
//   const tasks = getTasks();
//   res.render("index", { tasks });
// });

// // Handle form submissions
// app.post("/tasks", (req, res) => {
//   addTask({ body: req.body }, { json: () => {} }); // Add task
//   res.redirect("/");
// });

// app.post("/tasks/:id?_method=PUT", (req, res) => {
//   updateTask({ params: req.params, body: req.body }, { json: () => {} });
//   res.redirect("/");
// });

// app.post("/tasks/:id?_method=DELETE", (req, res) => {
//   deleteTask({ params: req.params }, { json: () => {} });
//   res.redirect("/");
// });

// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));






// import express from "express";
// import cors from "cors";
// import methodOverride from "method-override";
// import taskRoutes from "./routes/taskRoutes.js";
// import dotenv from "dotenv";
// import path from "path";
// import { fileURLToPath } from "url";
// import { getTasks, addTask, updateTask, deleteTask } from "./controllers/taskController.js";

// dotenv.config();
// const app = express();
// const PORT = process.env.PORT || 5000;

// // Middleware
// app.use(express.json());
// app.use(express.urlencoded({ extended: true })); // To handle form submissions
// app.use(cors());
// app.use(methodOverride("_method")); // Enable PUT/DELETE via forms

// // Set EJS as the view engine
// app.set("view engine", "ejs");
// app.set("views", path.join(path.dirname(fileURLToPath(import.meta.url)), "views"));

// // Serve static files
// app.use(express.static("public"));

// // Render the frontend with tasks
// // app.get("/", (req, res) => {
// //   const tasks = getTasks(); // Fetch tasks from the controller
// //   res.render("index", { tasks });
// // });
// app.get("/", (req, res) => {
//     const tasks = readTasks(); // ✅ Get tasks manually without calling getTasks()
//     res.render("index", { tasks });
//   });
// // Task Routes
// app.use("/tasks", taskRoutes);

// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));



// import express from "express";
// import cors from "cors";
// import methodOverride from "method-override";
// import taskRoutes from "./routes/taskRoutes.js";
// import dotenv from "dotenv";
// import path from "path";
// import { fileURLToPath } from "url";
// import { getTasks } from "./controllers/taskController.js"; // ✅ Import getTasks (not readTasks)

// dotenv.config();
// const app = express();
// const PORT = process.env.PORT || 5000;

// // Middleware
// app.use(express.json());
// app.use(express.urlencoded({ extended: true })); // To handle form submissions
// app.use(cors());
// app.use(methodOverride("_method")); // Enable PUT/DELETE via forms

// // Set EJS as the view engine
// app.set("view engine", "ejs");
// app.set("views", path.join(path.dirname(fileURLToPath(import.meta.url)), "views"));

// // Serve static files
// app.use(express.static("public"));

// // ✅ Use getTasks correctly inside the route
// app.get("/", (req, res) => {
//   const tasks = getTasks; // ✅ Corrected: Call getTasks properly
//   res.render("index", { tasks });
// });

// // Task Routes
// app.use("/tasks", taskRoutes);

// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));



// import express from "express";
// import cors from "cors";
// import methodOverride from "method-override";
// import taskRoutes from "./routes/taskRoutes.js";
// import dotenv from "dotenv";
// import path from "path";
// import { fileURLToPath } from "url";
// import { getTasks } from "./controllers/taskController.js"; // ✅ Import correctly

// dotenv.config();
// const app = express();
// const PORT = process.env.PORT || 5000;

// // Middleware
// app.use(express.json());
// app.use(express.urlencoded({ extended: true })); // To handle form submissions
// app.use(cors());
// app.use(methodOverride("_method")); // Enable PUT/DELETE via forms

// // Set EJS as the view engine
// app.set("view engine", "ejs");
// app.set("views", path.join(path.dirname(fileURLToPath(import.meta.url)), "views"));

// // Serve static files
// app.use(express.static("public"));

// // ✅ FIX: Call `getTasks()` properly and pass tasks correctly
// app.get("/", (req, res) => {
//   const tasks = getTasks(); // 🔥 Ensure tasks is an array
//   res.render("index", { tasks });
// });

// // Task Routes
// app.use("/tasks", taskRoutes);

// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));



// import express from "express";
// import cors from "cors";
// import methodOverride from "method-override";
// import taskRoutes from "./routes/taskRoutes.js";
// import dotenv from "dotenv";
// import path from "path";
// import { fileURLToPath } from "url";
// import { readTasks } from "./controllers/taskController.js"; // ✅ Import readTasks instead

// dotenv.config();
// const app = express();
// const PORT = process.env.PORT || 5000;

// // Middleware
// app.use(express.json());
// app.use(express.urlencoded({ extended: true })); // To handle form submissions
// app.use(cors());
// app.use(methodOverride("_method")); // Enable PUT/DELETE via forms

// // Set EJS as the view engine
// app.set("view engine", "ejs");
// app.set("views", path.join(path.dirname(fileURLToPath(import.meta.url)), "views"));

// // Serve static files
// app.use(express.static("public"));

// // ✅ FIX: Call `readTasks()` instead of `getTasks()`
// app.get("/", (req, res) => {
//   const tasks = readTasks(); // ✅ Ensure tasks is an array
//   res.render("index", { tasks });
// });

// // Task Routes
// app.use("/tasks", taskRoutes);

// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));




// import express from "express";
// import cors from "cors";
// import dotenv from "dotenv";
// import path from "path";
// import methodOverride from "method-override";
// import { fileURLToPath } from "url";
// import {
//   getTasks,
//   addTask,
//   updateTask,
//   deleteTask,
//   readTasks,
// } from "./controllers/taskController.js"; // ✅ Import controller functions

// dotenv.config();
// const app = express();
// const PORT = process.env.PORT || 5000;

// // Middleware
// app.use(express.json());
// app.use(express.urlencoded({ extended: true })); // For form submissions
// app.use(cors());
// app.use(methodOverride("_method")); // Enable PUT and DELETE via forms

// // Set EJS as the view engine
// app.set("view engine", "ejs");

// // Serve static files (for Tailwind CSS)
// app.use(express.static("public"));

// // 📂 **Render the frontend with tasks**
// app.get("/", (req, res) => {
//   const tasks = readTasks(); // Get tasks from JSON file
//   res.render("index", { tasks });
// });

// // ✅ **Add a task**
// app.post("/tasks", (req, res) => {
//   addTask({ body: req.body }, { json: () => {} });
//   res.redirect("/");
// });

// // ✅ **Update a task**
// app.post("/tasks/:id?_method=PUT", (req, res) => {
//   updateTask({ params: req.params, body: req.body }, { json: () => {} });
//   res.redirect("/");
// });

// // ✅ **Delete a task**
// app.post("/tasks/:id?_method=DELETE", (req, res) => {
//   deleteTask({ params: req.params }, { json: () => {} });
//   res.redirect("/");
// });

// // Start the server
// app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));



import express from "express";
import cors from "cors";
import methodOverride from "method-override";
import taskRoutes from "./routes/taskRoutes.js";
import dotenv from "dotenv";
import path from "path";



import { fileURLToPath } from "url";
import { readTasks } from "./controllers/taskController.js"; // ✅ Correct import

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // To handle form submissions
app.use(cors());
app.use(methodOverride("_method")); // Enable PUT/DELETE via forms

// Set EJS as the view engine
app.set("view engine", "ejs");
app.set("views", path.join(path.dirname(fileURLToPath(import.meta.url)), "views"));

// Serve static files
app.use(express.static("public"));

// ✅ Fetch tasks for rendering frontend
app.get("/", (req, res) => {
  const tasks = readTasks(); // ✅ Get tasks manually
  res.render("index", { tasks }); // ✅ Send tasks to EJS
});

// ✅ Register Task Routes (Correctly passing `req` & `res`)
app.use("/tasks", taskRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
