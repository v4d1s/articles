<template>
  <div>
    <article-form
      @create="createArticle"
      :articleDate="articleData"
    />
  </div>
</template>

<script>
import ArticleForm from "@/components/article/ArticleForm.vue";
import axios from "axios";
export default {
  components: {ArticleForm},
  data() {
    return {
      articleData: {
        name: '',
        text: '',
      },
    }
  },
  methods: {
    async createArticle(article) {
      this.articleData.name = article.name
      this.articleData.text = article.text
      await axios({
        url: 'http://localhost:3000/article',
        method: 'post',
        data: {
          name: this.articleData.name,
          text: this.articleData.text
        }
      })
      this.$router.push('/articles')
    }
  },
};
</script>

<style lang="scss" scoped>

</style>