import {createStore} from 'vuex'

export default createStore({
  state: {
    todoList: [
      {
        id: '1',
        title: '今天下午有个会议',
        time: 1622796685000
      }
    ]
  },
  mutations: {
    addTodoList(state, item) {
      state.todoList.unshift({...item});
    },
    deleteTodoList(state, id) {
      state.todoList = state.todoList.filter(item => item.id !== id);
    }
  }
})
