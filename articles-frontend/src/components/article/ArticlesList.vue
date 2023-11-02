<template>
  <!--  TODO IF-ELSE-->
  <div v-if="articles.data !== undefined">
    <div v-for="article in articles.data" v-bind:key="article.id">
      <div class="article" style="overflow-wrap: break-word">
        <div style="display: flex; justify-content: space-between;">
          <div><a :href="'/article/' + article.id">#{{ article.id }}</a></div>
          <div>Создано: {{ article.createdAt.split('T')[0] }} {{ article.createdAt.split('T')[1].split('.')[0] }}</div>
        </div>
        <div><strong>{{ article.name }}</strong></div>
      </div>
    </div>
  </div>
  <div v-else>
    <h2 class="errorMessage">Статьи отустствует!</h2>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      articles: []
    }
  },
  methods: {
    async getArticles() {
      const articles = await axios({
        url: 'http://localhost:3000/articles/',
        method: 'get',
      })
      // console.log(articles)
      if (articles.data != null) {
        this.articles = articles
      }
    }
  },
  mounted() {
    this.getArticles()
  },
};
</script>

<style lang="scss" scoped>
.article {
  padding: 15px;
  border: 2px solid teal;
  margin-top: 15px;
  display: inline-block;
  width: 100%;
}
.errorMessage {
  color: red;
}
</style>