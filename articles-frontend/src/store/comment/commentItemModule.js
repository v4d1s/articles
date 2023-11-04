import axios from "axios";
import router from "@/router";

export const commentItemModule = {
  state: () => ({
    comment: {
      id: '',
      text: '',
    },
  }),
  mutations: {
    setComment(state, comment) {
      state.comment.id = comment.id
      state.comment.text = comment.text
    }
  },
  actions: {
    async getComment({commit}, payload) {
      const comment = await axios({
        url: 'http://localhost:3000/article/' + payload.id +
          '/comment/' + payload.commentId,
        method: 'get',
      })
      if (comment.data != null) {
        commit('setComment', comment.data)
      }
    },
    async deleteComment({commit}, payload) {
      await axios({
        url: 'http://localhost:3000/article/' + payload.id
          + '/comment/' + payload.commentId,
        method: 'delete',
      })
      commit('setComment', {id: '', text: ''})
      router.push('/article/' + payload.id)
    },
  },
  namespaced: true
}