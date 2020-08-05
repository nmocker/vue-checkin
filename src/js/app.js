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
  function() {SetInterval(this.updateTime, 3000);
  }
  methods: {
    addPerson() {0000
      if (!this.newArrival.name || !this.newArrival.email) return;

      this.attendees.unshift({
        name: this.newPerson.name,
        time: Date.now(),
        timeElapsed: 0,
        email: this.newPerson.email,
        image: "https://www.gravatar.com/avatar/",
      });
      this.newPerson.name = "";
      this.newPerson.email = "";
    },
    updateTime() {
      this.arrived.forEach(function(arrival) {
        arrival.timeElapsed = Math.round((Date.now() - arrival.time) / 60000);

      })
    }
  }  
})
  
