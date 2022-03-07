import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        events: []
    },
    getters: {
        EVENTS: state => state.events
    },
    mutations: {
        ADD_EVENT: (state, event) => {
            state.events.push(event)
        },
       
        DELETE_EVENT: (state, {id, title, start, end}) => {
            // let index = state.events.indexOf(_event => _event.id == id)
            // this.events.splice(index, 1)
          let en=  state.events.filter((val)=> val.id != id)

          state.events=en
        },
        UPDATE_EVENT: (state, {id, title, start, end}) => {
            let index = state.events.findIndex(_event => _event.id == id)
            state.events[index].title = title;
            state.events[index].start = start;
            state.events[index].end = end;
        }
    },
    actions: {}
})

export default store;