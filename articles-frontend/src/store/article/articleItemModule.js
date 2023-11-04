import axios from "axios";
import router from "@/router";

export const articleItemModule = {
  state: () => ({
    article: {
        id: '',
        name: '',
        text: '',
      },
  }),
  mutations: {
    setArticle(state, article) {
      state.article.id = article.id
      state.article.name = article.name
      state.article.text = article.text
    }
  },
  actions: {
    async getArticle({commit}, id) {
      const article = await axios({
        url: 'http://localhost:3000/article/' + id,
        method: 'get',
      })
      if (article.data != null) {
        commit('setArticle', article.data)
      }
    },
    async deleteArticle({commit}, id) {
      await axios({
        url: 'http://localhost:3000/article/' + id,
        method: 'delete',
      })
      commit('setArticle', {id: '', name: '', text: ''})
      await router.push('/')
    },
  },
  namespaced: true
}