const app = new Vue({
  el: "#app",
  data: {
    end: [],

    notEnd: [],
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
      await project.update(JSON.parse(JSON.stringify(id)), { done: true });
      let obj = null;
      this.notEnd = this.notEnd.filter(e => {
        if (e._id == id) {
          obj = e;
          return false;
        }
        return true;
      });
      this.end = [...this.end, obj];
    },
    async notDone(id) {
      await project.update(JSON.parse(JSON.stringify(id)), { done: false });
      let obj = null;
      this.end = this.end.filter(e => {
        if (e._id == id) {
          obj = e;
          return false;
        }
        return true;
      });
      this.notEnd = [...this.notEnd, obj];
    }
  }
});

const start = async () => {
  await dbConnect();
  const allProject = await project.getAll();
  allProject.forEach(e => {
    if (e.done) {
      app.end.push(e);
    } else {
      app.notEnd.push(e);
    }
  });
  console.log(app.end.length, app.notEnd.length);
};

start();
