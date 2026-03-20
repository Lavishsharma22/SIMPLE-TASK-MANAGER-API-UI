const API = "http://127.0.0.1:8000/api/tasks/";

function fetchTasks() {
    fetch(API)
        .then(res => res.json())
        .then(data => {
            let list = document.getElementById("taskList");
            list.innerHTML = "";

            data.forEach(task => {
                let li = document.createElement("li");

                li.innerHTML = `
                    <div class="d-flex justify-content-between align-items-center">
                        <span>
                            ${task.status ? "✅" : "❌"} 
                            ${task.title}
                        </span>

                        <div>
                            <button class="btn btn-sm btn-success" onclick="toggleTask(${task.id})">Toggle</button>
                            <button class="btn btn-sm btn-warning" onclick="updateTask(${task.id})">Edit</button>
                            <button class="btn btn-sm btn-danger" onclick="deleteTask(${task.id})">Delete</button>
                         </div>
                    </div>
                    
                `;

                list.appendChild(li);
            });
        });
}

function addTask() {
    let title = document.getElementById("title").value;

    fetch(API + "create/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ title: title })
    })
    .then(() => {
        document.getElementById("title").value = "";
        fetchTasks();
    });
}

function deleteTask(id) {
    fetch(API + "delete/" + id + "/", {
        method: "DELETE"
    }).then(() => fetchTasks());
}

function toggleTask(id) {
    fetch(API + "toggle/" + id + "/", {
        method: "PATCH"
    }).then(() => fetchTasks());
}

function updateTask(id) {
    let newTitle = prompt("Enter new title:");

    if (!newTitle || !newTitle.trim()) {
        alert("Title cannot be empty");
        return;
    }

    fetch(API + "update/" + id + "/", {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ title: newTitle })
    }).then(() => fetchTasks());
}

// load tasks automatically
fetchTasks();