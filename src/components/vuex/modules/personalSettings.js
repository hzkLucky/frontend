import type from '../type'
const state = {
    test : '',
    adminType: ''
}

const getters = {
    test: state => state.test
}

const actions = {
    test: ({commit}, data) => {
        data && commit(type.TEST)
    }
}

const mutations = {
    [type.TEST]: (state, data) => {
    state.userName = data
  },
    admin: (state, data) => {
        state.adminType = data
    }
}

export default {
    state, 
    getters,
    actions,
    mutations
}
