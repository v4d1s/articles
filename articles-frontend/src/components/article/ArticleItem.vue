<template>
  <div v-if="article.id !== undefined">
    <h3>{{ article.name }}</h3>
    <textarea disabled class="input" v-model="article.text"></textarea>
    <my-dialog-article
      v-model:show="dialogVisible"
    ></my-dialog-article>
    <div>
      <button class="btn-edit" @click="showEditArticle">Изменить</button>
      <button class="btn-delete" @click="deleteArticle">Удалить</button>
    </div>
  </div>
  <div v-else>
    <h2 class="errorMessage">Статья с ID: '{{ $route.params.id }}' отсутствует!</h2>
  </div>
</template>

<script>
import axios from "axios";
import MyDialogArticle from "@/components/UI/MyDialogArticle.vue";
export default {
  components: { MyDialogArticle },
  data() {
    return {
      article: {
        id: '',
        name: '',
        text: '',
      },
      dialogVisible: false
    }
  },
  methods: {
    async getArticle() {
      const article = await axios({
        url: 'http://localhost:3000/article/' + this.$route.params.id,
        method: 'get',
      })
      // console.log(article)
      if (article.data != null) {
        this.article.id = article.data.id
        this.article.name = article.data.name
        this.article.text = article.data.text
      }
    },
    async deleteArticle() {
      await axios({
        url: 'http://localhost:3000/article/' + this.$route.params.id,
        method: 'delete',
      })
      this.$router.push('/articles/')
    },
    showEditArticle() {
      this.dialogVisible = true
    },

  },
  mounted() {
    this.getArticle()
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