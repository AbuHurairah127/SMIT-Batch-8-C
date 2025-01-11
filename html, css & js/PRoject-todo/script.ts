let todos: string[] = [];
const addTodo = () => {
  let todo = prompt("Enter todo?");
  if (todo !== null) {
    todos.push(todo);
  }
  console.log(todos);
};

const deleteAllTodos = () => {
  todos = [];
  console.log(todos);
};

const deleteTodo = () => {
  let todoId = Number(
    prompt("Enter the number of Todo which you want to delete?")
  );

  todos.splice(todoId - 1, 1);
  console.log(todos);
};

const printAllTodos = () => {
  let i = 0;
  while (i < todos.length) {
    console.log(`${i + 1}) ${todos[i]}`);
    i++;
  }
};
const updateTodo = () => {
  let todoId = Number(
    prompt("Enter the number of Todo which you want to update?")
  );
  let newTodo = prompt("Enter the new value?");
  if (newTodo !== null) {
    todos.splice(todoId - 1, 1, newTodo);
  }
  console.log(todos);
};

const updateTodoByIndex = () => {
  let todoId = Number(
    prompt("Enter the number of Todo which you want to update?")
  );
  let newTodo = prompt("Enter the new value?");
  if (newTodo !== null) {
    todos[todoId - 1] = newTodo;
  }
  console.log(todos);
};

for (let i = 0; i < todos.length; i++) {
  console.log(todos[i]);
}
