const app = new Vue({
  el: "#app",
  data: {
    end: [],
    endTime: 0,

    notEnd: [],
    notEndTime: 0,
    searchEnd: "",
    searchNotEnd: ""
  },
  computed: {
    showEnd() {
      return this.end
        .filter(e =>
          e.name.toLowerCase().startsWith(this.searchEnd.toLowerCase())
        )
        .sort((a, b) => a.name > b.name);
    },
    showNotEnd() {
      return this.notEnd
        .filter(e =>
          e.name.toLowerCase().startsWith(this.searchNotEnd.toLowerCase())
        )
        .sort((a, b) => a.name > b.name);
    }
  },
  methods: {
    async done(id) {
      await courses.update(JSON.parse(JSON.stringify(id)), { done: true });
      let obj = null;
      this.notEnd = this.notEnd.filter(e => {
        if (e._id == id) {
          obj = e;
          return false;
        }
        return true;
      });
      this.end = [...this.end, obj];
      this.notEndTime -= parseInt(obj.length);
      this.endTime += parseInt(obj.length);
    },
    async notDone(id) {
      await courses.update(JSON.parse(JSON.stringify(id)), { done: false });
      let obj = null;
      this.end = this.end.filter(e => {
        if (e._id == id) {
          obj = e;
          return false;
        }
        return true;
      });
      this.notEnd = [...this.notEnd, obj];
      this.notEndTime += parseInt(obj.length);
      this.endTime -= parseInt(obj.length);
    }
  }
});

const start = async () => {
  await dbConnect();
  const allCourese = await courses.getAll();
  allCourese.forEach(e => {
    if (e.done) {
      app.end.push(e);
      app.endTime += parseInt(e.length);
    } else {
      app.notEnd.push(e);
      app.notEndTime += parseInt(e.length);
    }
  });
  console.log(app.end.length, app.notEnd.length);
};

start();
