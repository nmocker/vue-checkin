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
      this.attendees.push({
        name: "",
        time: "",
        email: ""
      });
      this.newPersonName = "";
    }
  }
});
//# sourceMappingURL=app.js.map
