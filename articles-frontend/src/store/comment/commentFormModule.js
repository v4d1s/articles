import axios from "axios";
import router from "@/router";

export const commentFormModule = {
  state: () => ({
    commentData: {
      text: '',
    },
  }),
  mutations: {
    setCommentData(state, commentData) {
      state.commentData.text = commentData.text
    }
  },
  actions: {
    async createComment({state, commit}, id) {
      if (state.commentData.text.trim() === '') {
        return
      }
      await axios({
        url: 'http://localhost:3000/article/' + id + '/comment/',
        method: 'post',
        data: {
          text: state.commentData.text
        }
      })
      commit('setCommentData', {text: ''})
      router.push('/article/' + id)
    },
    async editComment({state, commit}, payload) {
      if (state.commentData.text.trim() === '')
        return
      await axios({
        url: 'http://localhost:3000/article/' + payload.id + '/comment/' + payload.commentId,
        method: 'patch',
        data: {
          text: state.commentData.text
        }
      })
      commit('setCommentData', {text: ''})
      router.go('/article/' + payload.id +'/comment/' + payload.commentId)
    },
  },
  namespaced: true
}