import { firestoreAction } from 'vuexfire';
import 'firebase/firestore';
import { db } from '../../main';

const state = () => ({
    todos: [],
});

const getters = {
    getTodos: (state) => {
        const firstClassTodos = state.todos.filter(todo => !todo.completed && todo.color === '#ca0101');
        const secondClassTodos = state.todos.filter(todo => !todo.completed && todo.color === '#ff3737');
        const nextClassTodos = state.todos.filter(todo => !todo.completed && todo.color === '#ff6e6e');
        const completedTodos = state.todos.filter(todo => todo.completed);

        return [
            ...firstClassTodos,
            ...secondClassTodos,
            ...nextClassTodos,
            ...completedTodos
        ];
    }
};

const actions = {
    bindTodos: firestoreAction(({ bindFirestoreRef }) => {
        return bindFirestoreRef('todos', db.collection('todos').orderBy('createdAt', 'desc'));
    }),
    toggleCompleteTodo: firestoreAction((context, todo) => {
        db.collection('todos')
          .doc(todo.id)
          .update({
              completed: !todo.completed
          });
    }),
    addTodo: firestoreAction((context, todo) => {
        db.collection('todos').add(todo);
    }),
    deleteTodo: firestoreAction((context, id) => {
        db.collection('todos')
            .doc(id)
            .delete();
    })
};

export default {
    namespaced: true,
    state,
    actions,
    getters
    //mutations
}