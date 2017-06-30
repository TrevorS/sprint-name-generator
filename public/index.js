const sprint = new Vue({
  el: '#sprint',
  data: {
    name: null,
  },
});

// eslint-disable-next-line no-new
new Vue({
  el: '#new-sprint-button',
  methods: {
    newSprint: function newSprint() {
      fetch('/name')
        .then(results => results.json())
        .then((data) => {
          sprint.name = data.sprintName;
        });
    },
  },
});
