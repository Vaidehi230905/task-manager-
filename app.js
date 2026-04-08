const fs = require('fs');

function loadTasks() {
    if (fs.existsSync('tasks.json')) {
        return JSON.parse(fs.readFileSync('tasks.json'));
    }
    return [];
}

function saveTasks(tasks) {
    fs.writeFileSync('tasks.json', JSON.stringify(tasks));
}

function addTask(task) {
    let tasks = loadTasks();
    tasks.push(task);
    saveTasks(tasks);
    console.log("Task added:", task);
    return tasks;
}

function listTasks() {
    let tasks = loadTasks();
    console.log("Tasks:", tasks);
}

function deleteTask() {
    let tasks = loadTasks();
    tasks.pop();
    saveTasks(tasks);
    console.log("Last task deleted");
}

const command = process.argv[2];
const input = process.argv[3];

if (command === "add") addTask(input);
else if (command === "list") listTasks();
else if (command === "delete") deleteTask();
else console.log("Invalid command");

module.exports = { addTask };