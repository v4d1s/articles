<template>
  <div>
    <article-item/>
    <div style="display: flex; justify-content: space-between;">
      <h2 style="">Комментарии</h2>
      <a :href="'/article/' + $route.params.id + '/comments'">Все комментарии</a>
    </div>
    <comments-list/>
    <h3 style="display: flex">Оставить комментарий:</h3>
    <comment-form
      @create="createComment"
      :commentDate="commentData"
    />
  </div>
</template>

<script>
import ArticleItem from "@/components/article/ArticleItem.vue";
import CommentForm from "@/components/comments/CommentForm.vue";
import CommentsList from "@/components/comments/CommentsList.vue";
import axios from "axios";

export default {
  components: { CommentsList, ArticleItem, CommentForm },
  data() {
    return {
      commentData: {
        text: '',
      },
    }
  },
  methods: {
    async createComment(comment) {
      this.commentData.text = comment.text
      console.log(comment)
      await axios({
        url: 'http://localhost:3000/article/' + this.$route.params.id + '/comment/',
        method: 'post',
        data: {
          text: this.commentData.text
        }
      })
      this.$router.push('/article/' + this.$route.params.id)
    }
  },
};
</script>

<style lang="scss" scoped>

</style>