// todo.js

export class TodoList {
  constructor() {
    this.tasks = [];
  }

  // Add a new task
  addTask(taskName) {
    const task = {
      name: taskName,
      completed: false
    };
    this.tasks.push(task);
    console.log(` Added task: "${taskName}"`);
  }

  // Mark a task as complete
  markComplete(taskName) {
    const task = this.tasks.find(t => t.name === taskName);
    if (task) {
      task.completed = true;
      console.log(`Marked as complete: "${taskName}"`);
    } else {
      console.log(` Task not found: "${taskName}"`);
    }
  }

  // List all tasks
  listTasks() {
    console.log("\n To-Do List:");
    this.tasks.forEach((task, index) => {
      const status = task.completed ? " Completed" : "Pending";
      console.log(`${index + 1}. ${task.name} — ${status}`);
    });
  }
}
