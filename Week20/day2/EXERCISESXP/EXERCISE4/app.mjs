// app.js
import { TodoList } from "./todo.mjs";

const myTodo = new TodoList();

// Add tasks
myTodo.addTask("Finish Power BI report");
myTodo.addTask("Email project update");
myTodo.addTask("Clean workspace");

// Mark one as complete
myTodo.markComplete("Email project update");

// List all tasks
myTodo.listTasks();
