"use strict";

var app = new Vue({
  el: "#app",
  data: {
    attendees: [],
    newPerson: {
      name: "",
      time: "",
      email: ""
    }
  },
  methods: {
    addPerson: function addPerson() {
      this.attendees.unshift({
        name: this.newPerson.name,
        time: Date.now(),
        timeElapsed: 0,
        email: this.newPerson.email,
        image: "https://www.gravatar.com/avatar/"
      });
      this.newPerson.name = "";
      this.newPerson.email = "";
    }
  }
});
//# sourceMappingURL=app.js.map
