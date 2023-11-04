<template>
  <form class="form">
    <input v-model="articleData.name" class="input" placeholder="Название">
    <textarea
      v-model="articleData.text"
      class="input"
      placeholder="Текст статьи"
    ></textarea>
    <div v-if="editData">
      <button
        class="btn"
        @click="editArticle(this.$route.params.id)"
      >Изменить</button>
    </div>
    <div v-else>
      <button
        class="btn"
        @click="createArticle"
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
      createArticle: "articleForm/createArticle",
      editArticle: "articleForm/editArticle",
    }),
  },
  computed: {
    ...mapState({
      articleData: state => state.articleForm.articleData
    })
  }
};
</script>

<style lang="scss" scoped>
.input {
  resize: vertical;
  height: 30px;
  max-height: 300px;
  width: 95%;
  border-color: darkgreen;
  border-width: 5px;
  padding: 10px 15px;
  margin-top: 15px;
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