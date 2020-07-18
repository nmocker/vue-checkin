var app = new Vue({
  el: "#app",
  data: {
    attendees: [],
    newPerson: {
      name: "",
      time: "",
      email: "",
    },
  },
  methods: {
    addPerson: function () {
      this.attendees.push({
        name: "",
        time: "",
        email: "",
      });
      this.newPersonName = "";
    },
  },
});
