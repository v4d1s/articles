<template>
  <div v-if="haveDate">
    <h2>Период: {{ $route.query.dateFrom.split('T')[0] }} {{ $route.query.dateFrom.split('T')[1].split('.')[0] }}
      -- {{ $route.query.dateTo.split('T')[0] }} {{ $route.query.dateTo.split('T')[1].split('.')[0] }}</h2>
  </div>
  <div v-if="comments.length !== 0">
    <div v-for="comment in comments.data" v-bind:key="comment.id">
      <div class="comment" style="overflow-wrap: break-word">
        <div style="display: flex; justify-content: space-between;">
          <div><a :href="'/article/' + comment.articleId + '/comment/' + comment.id">#{{ comment.id }}</a></div>
          <div>Создано: {{ comment.createdAt.split('T')[0] }} {{ comment.createdAt.split('T')[1].split('.')[0] }}</div>
        </div>
        <div style="display: flex">
          <textarea disabled class="text-form" v-model="comment.text"></textarea>
        </div>
      </div>
    </div>
  </div>
  <div v-else>
    <h2>Комментарии отсутствуют!</h2>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  props: {
    haveDate: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    ...mapActions({
      getComments: 'commentsList/getComments',
    }),
  },
  computed: {
    ...mapState({
      comments: state => state.commentsList.comments,
    }),
  },
  mounted() {
    this.getComments({
      id: this.$route.params.id,
      haveDate: this.haveDate,
      // dateFrom: (typeof this.$route.query.dateFrom !== 'undefined') ? this.$route.query.dateFrom : '',
      // dateTo: (typeof this.$route.query.dateTo !== 'undefined') ? this.$route.query.dateTo : '',
      dateFrom: this.$route.query.dateFrom,
      dateTo: this.$route.query.dateTo,
    })
  },
};
</script>

<style lang="scss" scoped>
.text-form {
  resize: none;
  background-color: unset;
  height: 100px;
  width: 100%;
  padding: 10px 15px;
  margin-top: 15px;
}
.comment {
  padding: 15px;
  border: 2px solid #4d75d5;
  margin-top: 15px;
  display: inline-block;
  width: 100%;
}
</style>