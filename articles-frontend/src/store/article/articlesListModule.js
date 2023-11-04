import axios from "axios";

export const articlesListModule = {
  state: () => ({
    articles: [],
  }),
  mutations: {
    setArticles(state, articles) {
      state.articles = articles
    }
  },
  actions: {
    async getArticles({commit}) {
      const articles = await axios({
        url: 'http://localhost:3000/articles/',
        method: 'get',
      })
      if (articles.data.length > 0) {
        commit('setArticles', articles)
      }
    }
  },
  namespaced: true
}