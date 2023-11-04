<template>
  <form class="form">
    <textarea
      v-model="commentData.text"
      class="input"
      placeholder="Комментарий"
    ></textarea>
    <div v-if="editData">
      <button
        class="btn"
        @click="editComment({
        id: this.$route.params.id,
        commentId: this.$route.params.commentId
        })"
      >Изменить</button>
    </div>
    <div v-else>
      <button
        class="btn"
        @click="createComment(this.$route.params.id)"
      >Создать</button>
    </div>
  </form>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  props: {
    editData: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    ...mapActions({
      createComment: "commentForm/createComment",
      editComment: "commentForm/editComment",
    }),
  },
  computed: {
    ...mapState({
      commentData: state => state.commentForm.commentData
    })
  }
};
</script>

<style lang="scss" scoped>
.input {
  resize: vertical;
  height: 30px;
  max-height: 300px;
  width: 100%;
  border-color: darkblue;
  border-width: 5px;
  padding: 10px 15px;
}
.btn {
  margin-top: 15px;
  align-self: flex-end;
  padding: 15px 10px;
  background: none;
  color: darkgreen;
  border-color: darkgreen;
  border-radius: 20px;
}
.form {
  display: flex;
  flex-direction: column;
}
</style>