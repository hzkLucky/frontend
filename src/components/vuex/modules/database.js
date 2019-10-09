import type from '../type'
const state = {
    userName: ''
}

const getters = {
    userName: state => state.userName
}

const actions = {
    setUserName: ({commit}, data) => {
        data && commit(type.GET_USER_NAME, data)
    }
}

const mutations = {
  [type.GET_USER_NAME]: (state, data) => {
    state.userName = data
  }
}

export default {
    state, 
    getters,
    actions,
    mutations
}
