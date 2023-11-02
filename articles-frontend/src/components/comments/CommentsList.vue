<template>
<!--  TODO IF-ELSE-->
  <div v-if="comments.data !== undefined">
    <div v-for="comment in comments.data" v-bind:key="comment.id">
      <div class="comment" style="overflow-wrap: break-word">
        <div style="display: flex; justify-content: space-between;">
          <div><a :href="'/article/' + comment.articleId + '/comment/' + comment.id">#{{ comment.id }}</a></div>
          <div>Создано: {{ comment.createdAt.split('T')[0] }} {{ comment.createdAt.split('T')[1].split('.')[0] }}</div>
        </div>
        <div style="display: flex">{{ comment.text }}</div>
      </div>
    </div>
  </div>
  <div v-else>
    <h2>Комментарии отустствуют. Будьте первыми!</h2>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      comments: []
    }
  },
  methods: {
    async getComments() {
      // console.log(this.comments.data)
      const comments = await axios({
        url: 'http://localhost:3000/article/' + this.$route.params.id + '/comments/',
        method: 'get',
      })
      // console.log(comments.data)
      if (comments.data != null) {
        this.comments = comments
      }
      // console.log(this.comments.data)
    }
  },
  mounted() {
    this.getComments()
  },
};
</script>

<style lang="scss" scoped>
.comment {
  padding: 15px;
  border: 2px solid #4d75d5;
  margin-top: 15px;
  display: inline-block;
  width: 100%;
}
</style>