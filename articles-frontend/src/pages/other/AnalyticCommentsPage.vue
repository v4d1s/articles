<template>
  <div class="date-pick">
    <h3 style="width: 225px">Укажите период: </h3>
    <VueDatePicker range style="margin-top: 10px; width: 60%" v-model="date"></VueDatePicker>
    <button class="btn" @click="showComments">Готово</button>
  </div>
  <div v-if="(date && isClicked) ||
  (this.$route.query.dateFrom !== undefined && this.$route.query.dateTo !== undefined)
  ">
    <comments-list
      :have-date="true"
    />
  </div>
</template>

<script>
import VueDatePicker from '@vuepic/vue-datepicker';
import CommentsList from "@/components/comments/CommentsList.vue";
import '@vuepic/vue-datepicker/dist/main.css'
export default {
  components: {VueDatePicker, CommentsList},
  data() {
    return {
      date: null,
      isClicked: false,
    }
  },
  methods: {
    showComments() {
      if (this.date == null) {
        return
      }
      this.$router.push('/analytic/comments/' +
        '?dateFrom='
        + this.date[0].toISOString() +
        '&dateTo='
        + this.date[1].toISOString())
        .then(() => { this.$router.go() })
    },
  },
};
</script>

<style lang="scss" scoped>
.date-pick {
  display: inline-flex;
  justify-content: space-between;
  width: 70%;
}
.btn {
  margin: 10px;
  background: none;
  color: darkgreen;
  border-color: yellow;
  border-radius: 20px;
}
</style>