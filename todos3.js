let todos = [];

async function fetchTodos() {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await response.json();

   
    const myTitles = [
        "Learn JavaScript",
        "Complete HTML Assignment",
        "Practice CSS",
        "Build Todo App",
        "Revise React Basics",
        "Study for Exam",
        "Prepare Project Report",
        "Fix Bugs",
        "Read Documentation",
        "Push Code to GitHub"
    ];

  
    todos = data.slice(0, 10).map((todo, index) => {
        todo.title = myTitles[index];
        return todo;
    });

    displayTodos(todos);
}

function displayTodos(todosToDisplay) {
    const tbody = document.querySelector("#todosTable tbody");
    tbody.innerHTML = "";

    todosToDisplay.forEach(todo => {
        const row = document.createElement("tr");
        row.className = todo.completed ? "completed" : "uncompleted";

        row.innerHTML = `
            <td>${todo.id}</td>
            <td>${todo.title}</td>
            <td>${todo.completed ? "Completed" : "Not Completed"}</td>
            <td>
                <button onclick="toggleStatus(${todo.id})">
                    Change Status
                </button>
            </td>
        `;

        tbody.appendChild(row);
    });
}

function showAll() {
    displayTodos(todos);
}

function showCompleted() {
    displayTodos(todos.filter(todo => todo.completed));
}

function showUncompleted() {
    displayTodos(todos.filter(todo => !todo.completed));
}

function toggleStatus(id) {
    for (let i = 0; i < todos.length; i++) {
        if (todos[i].id === id) {
            todos[i].completed = !todos[i].completed;
            break;
        }
    }
    displayTodos(todos);
}


fetchTodos();
