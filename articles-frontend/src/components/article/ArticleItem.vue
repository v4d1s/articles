<template>
  <div v-if="article.id !== undefined">
    <h3>{{ article.name }}</h3>
    <textarea disabled class="input" v-model="article.text"></textarea>
    <my-dialog-article
      v-model:show="dialogVisible"
    ></my-dialog-article>
    <div>
      <button class="btn-edit" @click="showEditArticle">Изменить</button>
      <button class="btn-delete" @click="deleteArticle(this.$route.params.id)">Удалить</button>
    </div>
  </div>
  <div v-else>
    <h2 class="errorMessage">Статья с ID: '{{ $route.params.id }}' отсутствует!</h2>
  </div>
</template>

<script>
import MyDialogArticle from "@/components/UI/MyDialogArticle.vue";
import { mapActions, mapState } from "vuex";
export default {
  components: { MyDialogArticle },
  data() {
    return {
      dialogVisible: false
    }
  },
  methods: {
    ...mapActions({
      getArticle: 'articleItem/getArticle',
      deleteArticle: 'articleItem/deleteArticle'
    }),
    showEditArticle() {
      this.dialogVisible = true
    },
  },
  computed: {
    ...mapState({
      article: state => state.articleItem.article,
    }),
  },
  mounted() {
    this.getArticle(this.$route.params.id)
  },
};
</script>

<style lang="scss" scoped>
.errorMessage {
  color: red;
}
.input {
  resize: none;
  height: 500px;
  width: 100%;
  border-color: darkgreen;
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