<template>
  <form class="form">
    <textarea
      v-model="commentData.text"
      class="input"
      placeholder="Комментарий"
    ></textarea>
    <button
      class="btn"
      @click="createComment"
    >Готово</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      commentData: {
        text: '',
      },
    }
  },
  methods: {
    createComment() {
      this.$emit('create', this.commentData)
    }
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