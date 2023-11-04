import axios from "axios";

export const commentsListModule = {
  state: () => ({
    comments: [],
  }),
  mutations: {
    setComments(state, comments) {
      state.comments = comments
    }
  },
  actions: {
    async getComments({commit}, payload) {
      let comments
      if (!payload.haveDate) {
        comments = await axios({
          url: 'http://localhost:3000/article/' + payload.id + '/comments/',
          method: 'get',
        })
      } else {
        comments = await axios({
          url: 'http://localhost:3000/analytic/comments/?dateFrom=' + payload.dateFrom + '&dateTo=' + payload.dateTo,
          method: 'get',
        })
      }
      if (comments.data.length > 0) {
        commit('setComments', comments)
      }
    },
  },
  namespaced: true
}