<template>
  <div v-if="comment.id !== undefined">
    <textarea disabled class="input" v-model="comment.text"></textarea>
    <my-dialog-comment
      v-model:show="dialogVisible"
    ></my-dialog-comment>
    <div>
      <button class="btn-edit" @click="showEditComment">Изменить</button>
      <button class="btn-delete" @click="deleteComment(
        {id: this.$route.params.id, commentId: this.$route.params.commentId}
        )">Удалить</button>
    </div>
  </div>
  <div v-else>
    <h2 class="errorMessage">Комментарий с ID: '{{ $route.params.commentId }}' отсутствует!</h2>
  </div>
</template>

<script>
import MyDialogComment from "@/components/UI/MyDialogComment.vue";
import { mapActions, mapState } from "vuex";
export default {
  components: { MyDialogComment },
  data() {
    return {
      dialogVisible: false
    }
  },
  methods: {
    ...mapActions({
      getComment: "commentItem/getComment",
      deleteComment: "commentItem/deleteComment",
    }),
    showEditComment() {
      this.dialogVisible = true
    },
  },
  computed: {
    ...mapState({
      comment: state => state.commentItem.comment,
    }),
  },
  mounted() {
    this.getComment({id: this.$route.params.id, commentId: this.$route.params.commentId})
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