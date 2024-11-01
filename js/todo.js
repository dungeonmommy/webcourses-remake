document.addEventListener('DOMContentLoaded', function() {
    // Get references to elements - update the selector to target the To-Do List section specifically
    const addTodoBtn = document.querySelector('.card-header .btn-outline-primary');
    const todoList = document.querySelector('.card[data-card-type="todo-list"] .list-group');
    const modal = new bootstrap.Modal(document.getElementById('addTodoModal'));
    const saveTodoBtn = document.getElementById('saveTodoBtn');
    const todoForm = document.getElementById('addTodoForm');

    // Counter for unique IDs
    let todoCounter = document.querySelectorAll('.form-check').length + 1;

    // Add click handler to the "+" button
    addTodoBtn.addEventListener('click', function() {
        modal.show();
    });

    // Handle saving new todo
    saveTodoBtn.addEventListener('click', function() {
        const todoText = document.getElementById('todoText').value.trim();

        if (todoText) {
            // Create new todo item
            const todoItem = document.createElement('div');
            todoItem.className = 'list-group-item';
            
            // Create the todo content
            todoItem.innerHTML = `
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="todo${todoCounter}">
                    <label class="form-check-label" for="todo${todoCounter}">
                        ${todoText}
                    </label>
                </div>
            `;

            // Add to list
            todoList.appendChild(todoItem);
            todoCounter++;

            // Reset form and close modal
            todoForm.reset();
            modal.hide();

            // Add checkbox handler
            const checkbox = todoItem.querySelector('.form-check-input');
            checkbox.addEventListener('change', function() {
                const label = this.nextElementSibling;
                if (this.checked) {
                    label.style.textDecoration = 'line-through';
                    label.style.color = '#6c757d';
                } else {
                    label.style.textDecoration = 'none';
                    label.style.color = 'inherit';
                }
            });
        }
    });

    // Add handlers to existing checkboxes
    document.querySelectorAll('.form-check-input').forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            const label = this.nextElementSibling;
            if (this.checked) {
                label.style.textDecoration = 'line-through';
                label.style.color = '#6c757d';
            } else {
                label.style.textDecoration = 'none';
                label.style.color = 'inherit';
            }
        });
    });
}); 