<template>
  <div>
    <!-- <div class="card">
      <legend>Event details</legend>
      <br />
      <b>Title:</b> {{ event.title }} <br />
      <b>Start:</b> {{ event.start }} <br />
      <b>End:</b> {{ event.end }} <br />
      <b>ID:</b> {{ event.id }} <br />
    </div> -->

    <div class="p-3">
      <legend>Edit event</legend>
      <b>Title:</b> {{ event.title }} <br />
      <b-form-input type="text" v-model="title" class="px-4"></b-form-input>
      <br />
      <b-form-input type="date" v-model="start" class="px-4"></b-form-input>
      <br />
      <b-form-input type="date" v-model="end" class="px-4"></b-form-input>
    <div class="pt-2">
        <b-button @click="updateEvent">Save</b-button>
    </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  padding: 20px;
}
</style>
<script>
export default {
  data: () => ({
    title: "",
    start: {},
    end: {},
  }),
  methods: {
    updateEvent() {
      this.$store.commit("UPDATE_EVENT", {
        id: this.event.id,
        title: this.title,
        start: this.start,
        end: this.end,
      });
    },
  },
  props: {
    text: String,
    event: Object,
  },
  mounted() {
    this.title = this.event.title;
    this.start = formatDate(this.event.start);
    this.end = formatDate(this.event.end);
  },
};

function formatDate(date) {
  // YYYY-MM-DD
  var options = { year: "numeric", month: "2-digit", day: "2-digit" };
  let string = date.toLocaleDateString("ko-KR", options).replace(/\. /g, "-");

  return string.substr(0, string.length - 1);
}
</script>

<style>
</style>