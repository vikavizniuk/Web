import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase, ref, push, onValue, remove } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

const appSettings = {
    databaseURL: "https://to-do-list-8e19f-default-rtdb.europe-west1.firebasedatabase.app/"
}

const app = initializeApp(appSettings);
const database = getDatabase(app);
const tasksInDB = ref(database, "tasks");

const inputFieldEl = document.getElementById("input-field");
const addButtonEl = document.getElementById("add-button");
const taskListEl = document.getElementById("task-list");

addButtonEl.addEventListener("click", function() {
    let taskText = inputFieldEl.value.trim();
    if (taskText) {
        push(tasksInDB, taskText);
        clearInputField();
    }
});

onValue(tasksInDB, function(snapshot) {
    if (snapshot.exists()) {
        let tasksArray = Object.entries(snapshot.val());
        
        clearTaskList();
        
        tasksArray.forEach((task) => {
            appendTaskToList(task);
        });
    } else {
        taskListEl.innerHTML = "<li>Завдань ще немає...</li>";
    }
});

function clearTaskList() {
    taskListEl.innerHTML = "";
}

function clearInputField() {
    inputFieldEl.value = "";
}

function appendTaskToList(task) {
    let taskID = task[0];
    let taskText = task[1];

    let newEl = document.createElement("li");
    newEl.textContent = taskText;

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Видалити";
    deleteBtn.classList.add("delete-btn");

    deleteBtn.addEventListener("click", function() {
        let exactTaskLocation = ref(database, `tasks/${taskID}`);
        remove(exactTaskLocation);
    });

    newEl.appendChild(deleteBtn);
    taskListEl.append(newEl);
}
