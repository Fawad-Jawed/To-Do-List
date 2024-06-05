function addTodo() {
    var todoInput = document.getElementById('todoInput');
    var todoList = document.getElementById('todoList');
    
    if (todoInput.value === '') {
      alert("Please enter a todo!");
      return;
    }
    
    var li = document.createElement('li');
    li.innerHTML = todoInput.value;
    
    var deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = '❌';
    deleteBtn.className = 'delete-btn';
    deleteBtn.onclick = function() {
      todoList.removeChild(li);
    };
    
    li.appendChild(deleteBtn);
    todoList.appendChild(li);
    
    todoInput.value = '';
}
