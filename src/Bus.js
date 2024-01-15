import Vue from 'vue';
export const Bus = new Vue({

  data: () => {
    return {
      routes: {
        physical_person: true,
        legal_person: true,
        password: true,
        review_information: true
      }
    }
  },
  methods: {
    lockStep2() {
        this.routes.physical_person = false;
    },
    unLockStep2() {
        this.routes.physical_person = true;
    },
    lockStep3() {
        this.routes.legal_person = false;
    },
    unLockStep3() {
        this.routes.legal_person = true;
    },
    lockStep4() {
        this.routes.password = false;
    },
    unLockStep4() {
        this.routes.password = true;
    },
    lockStep5() {
        this.routes.review_information = false;
    },
    unLockStep5() {
        this.routes.review_information = true;
    }
  }
});