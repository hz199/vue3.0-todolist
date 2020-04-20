import Vuex from 'vuex'

export default Vuex.createStore({
  state: {
    taskList: [
    ]
  },
  getters: {

  },
  mutations: {
    createTask (state, newTask) {
      state.taskList.push(newTask)
    },
    deleteTask (state, index) {
      state.taskList.splice(index, 1)
    },
    updateStatus (state, payload) {
      const { index, status } = payload

      state.taskList[index].isfinished = status
    }
  },
  actions: {
  },
  modules: {
  }
});
