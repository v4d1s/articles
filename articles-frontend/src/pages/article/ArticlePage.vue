<template>
  <div>
    <article-item/>
    <div style="display: flex; justify-content: space-between;">
      <h2 style="">Комментарии</h2>
      <a :href="'/article/' + $route.params.id + '/comments'">Все комментарии</a>
    </div>
    <comments-list/>
    <h3 style="display: flex">Оставить комментарий:</h3>
    <comment-form/>
  </div>
</template>

<script>
import ArticleItem from "@/components/article/ArticleItem.vue";
import CommentForm from "@/components/comments/CommentForm.vue";
import CommentsList from "@/components/comments/CommentsList.vue";

export default {
  components: { CommentsList, ArticleItem, CommentForm },
};
</script>

<style lang="scss" scoped>

</style>