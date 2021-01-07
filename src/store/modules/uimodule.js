const state = () => ({
    todoColor: '#ff6e6e',
});

//const getters = {
//}

const mutations = {
    setTodoColor: (state, color) => state.todoColor = color
};

/*const actions = {
    
};*/

export default {
    namespaced: true,
    state,
    mutations
}