// script.js
document.getElementById('addTaskBtn').addEventListener('click', function() {
    const checklist = document.getElementById('checklist');
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    
    if (taskText === '') {
        alert('Please enter a task');
        return;
    }
    
    // Create a new list item with a checkbox and label
    const newItem = document.createElement('li');
    const newCheckbox = document.createElement('input');
    newCheckbox.type = 'checkbox';
    newCheckbox.id = 'item' + (checklist.children.length + 1);
    
    const newLabel = document.createElement('label');
    newLabel.htmlFor = newCheckbox.id;
    newLabel.textContent = taskText;
    
    // Append the checkbox and label to the list item
    newItem.appendChild(newCheckbox);
    newItem.appendChild(newLabel);
    
    // Append the new list item to the checklist
    checklist.appendChild(newItem);
    
    // Clear the input field
    taskInput.value = '';
});
