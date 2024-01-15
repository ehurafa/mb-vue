import Vue from 'vue';
export const Bus = new Vue({

  data: () => {
    return {
      routes: {
        physical_person: false,
        legal_person: false,
        password: false,
        review_information: false
      }
    }
  },
  methods: {
    lockStep2() {
        this.routes.physical_person = false;
    },
    unLockStep2() {
        this.routes.physical_person = true;
    }
  }
});