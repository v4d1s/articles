<template>
  <div v-if="articles.length !== 0">
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
    <h2>Статьи отустствуют!</h2>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  methods: {
    ...mapActions({
      getArticles: 'articleList/getArticles',
    }),
  },
  computed: {
    ...mapState({
      articles: state => state.articleList.articles,
    }),
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
</style>