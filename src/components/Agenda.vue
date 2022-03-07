<template>
  <div>
    <div class="row" >
      <div class="col-md-3 p-3" >
          
        <!-- <h2>hello miles</h2> -->
        <br>
        <br>
        <div class="card mb-3" style="max-width: 540px" v-for="i in 5" :key="i" >
          <div class="row g-0">
            <div class="col-md-5">
              <img
                src="https://cdn.pixabay.com/photo/2014/09/07/21/34/child-438373__480.jpg"
                class="img-fluid p-2 rounded-start"
                alt="..."
              />
            </div>
            <div class="col-md-7">
              <div class="card-body">
                <h5 class="card-title text-capitalize">Bmw Gh3456788</h5>
                <p class="card-text text-capitalize">Hl4566</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-9">
        <Fullcalendar
          :plugins="calendarPlugins"
          :header="{
            left: 'title',
            center: 'dayGridMonth, timeGridWeek, timeGridDay, listWeek',
            right: 'prev today next',
          }"
          :buttonText="{
            today: 'Today',
            month: 'Month',
            week: 'Week',
            day: 'Day',
            list: 'List',
          }"
          :weekends="false"
          :selectable="true"
          :editable="true"
          :events="EVENTS"
          @select="handleSelect"
          @eventClick="handleEventClick"
          @eventResize="updateEvent"
          @eventDrop="updateEvent"
          @eventRender="renderEvent"
        />

        <modals-container />
      </div>
    </div>
  </div>
</template>
<style scoped>
.image {
  width: 30%;
}
</style>

<script>
require("@fullcalendar/core/main.min.css");
require("@fullcalendar/daygrid/main.min.css");
require("@fullcalendar/timegrid/main.min.css");

import Fullcalendar from "@fullcalendar/vue";
import DayGridPlugin from "@fullcalendar/daygrid";
import TimeGridPlugin from "@fullcalendar/timegrid";
import InteractionPlugin from "@fullcalendar/interaction";
import ListPlugin from "@fullcalendar/list";

import { mapGetters } from "vuex";

import EventModal from "./EventModal";
import CommentsModal from "./CommentsModal";
// import Modal from './Modal'

export default {
  data: () => ({
    calendarPlugins: [
      DayGridPlugin,
      TimeGridPlugin,
      InteractionPlugin,
      ListPlugin,
    ],
  }),
  components: { Fullcalendar },
  computed: {
    ...mapGetters(["EVENTS"]),
  },
  methods: {
    newEvent() {
      this.$modal.show(Modal, {
        text: "TExt",
      });
    },
    renderEvent(arg) {
      let span = document.createElement("span");

      span.setAttribute("class", "fa fa-comments");

      arg.el.appendChild(span);

      span.addEventListener("click", (event) => {
        event.stopPropagation();
        this.$modal.show(CommentsModal, {
          text: "This is for the comments",
        });
      });
    },
    updateEvent(arg) {
      this.$store.commit("UPDATE_EVENT", arg.event);
    },
    handleSelect(arg) {
      this.$store.commit("ADD_EVENT", {
        id: new Date().getTime(),
        title: "Something",
        start: arg.start,
        end: arg.end,
        allDay: arg.allDay,
      });
    },
    handleEventClick(arg) {
      console.log(arg);
      this.$modal.show(EventModal, {
        text: "This is from the component",
        event: arg.event,
      });
    },
  },
};
</script>

<style>
</style>
