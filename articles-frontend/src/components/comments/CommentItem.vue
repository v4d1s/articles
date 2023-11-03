<template>
  <div v-if="comment.id !== undefined">
    <textarea disabled class="input" v-model="comment.text"></textarea>
    <my-dialog-comment
      v-model:show="dialogVisible"
    ></my-dialog-comment>
    <div>
      <button class="btn-edit" @click="showEditComment">Изменить</button>
      <button class="btn-delete" @click="deleteComment">Удалить</button>
    </div>
  </div>
  <div v-else>
    <h2 class="errorMessage">Комментарий с ID: '{{ $route.params.commentId }}' отсутствует!</h2>
  </div>
</template>

<script>
import axios from "axios";
import MyDialogComment from "@/components/UI/MyDialogComment.vue";
export default {
  components: { MyDialogComment },
  data() {
    return {
      comment: {
        id: '',
        text: '',
      },
      dialogVisible: false
    }
  },
  methods: {
    async getComment() {
      const comment = await axios({
        url: 'http://localhost:3000/article/' + this.$route.params.id +
          '/comment/' + this.$route.params.commentId,
        method: 'get',
      })
      // console.log(article)
      if (comment.data != null) {
        this.comment.id = comment.data.id
        this.comment.text = comment.data.text
      }
    },
    async deleteComment() {
      await axios({
        url: 'http://localhost:3000/article/' + this.$route.params.id
          + '/comment/' + this.$route.params.commentId,
        method: 'delete',
      })
      this.$router.push('/article/' + this.$route.params.id)
    },
    showEditComment() {
      this.dialogVisible = true
    },

  },
  mounted() {
    this.getComment()
  },
};
</script>

<style lang="scss" scoped>
.errorMessage {
  color: red;
}
.input {
  resize: none;
  height: 200px;
  width: 100%;
  border-color: darkblue;
  border-width: 5px;
  padding: 10px 15px;
  margin-top: 15px;
}
.btn-edit {
  margin: 15px;
  align-self: flex-end;
  padding: 15px 10px;
  background: none;
  color: darkgreen;
  border-color: yellow;
  border-radius: 20px;
}
.btn-delete {
  margin: 15px;
  align-self: flex-end;
  padding: 15px 10px;
  background: none;
  color: darkgreen;
  border-color: red;
  border-radius: 20px;
}
</style>