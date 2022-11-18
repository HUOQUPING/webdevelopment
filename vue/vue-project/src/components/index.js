
export const addTodo = () => {
    state.todos.push({
        id: state.todos.length + 1,
        title: state.newTodo,
        completed: false
    })
    state.newTodo = ''
}


export const filters = {
    all(todos) {
        return todos
    },
    active(todos) {
        return todos.filter(todo=>!todo.completed)
    },
    completed() {
        return todos.filter(todo=>!todo.completed)
    }
}
