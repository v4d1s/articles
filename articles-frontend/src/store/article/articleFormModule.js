import axios from "axios";
import router from "@/router";

export const articlesFormModule = {
  state: () => ({
    articleData: {
      name: '',
      text: '',
    },
  }),
  mutations: {
    setArticleData(state, articleData) {
      state.articleData.name = articleData.name
      state.articleData.text = articleData.text
    }
  },
  actions: {
    async createArticle({state, commit}) {
      if (state.articleData.name.trim() === '') {
        return
      }
      await axios({
        url: 'http://localhost:3000/article',
        method: 'post',
        data: {
          name: state.articleData.name,
          text: state.articleData.text
        }
      })
      commit('setArticleData', {name: '', text: ''})
      router.push('/articles')
    },
    async editArticle({state, commit}, id) {
      if (state.articleData.name.trim() === '')
        return
      await axios({
        url: 'http://localhost:3000/article/' + id,
        method: 'patch',
        data: {
          name: state.articleData.name,
          text: state.articleData.text
        }
      })
      commit('setArticleData', {name: '', text: ''})
      router.go('/article/' + id)
    },
  },
  namespaced: true
}