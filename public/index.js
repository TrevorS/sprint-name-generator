const sprint = new Vue({
  el: '#sprint',
  data: {
    words: [],
  },
  methods: {
    newWord: function newWord(index) {
      fetch('/word')
        .then(results => results.json())
        .then(data =>
          Vue.set(this.words, index, data.word));
    },
  },
});

const newSprintButton = new Vue({
  el: '#new-sprint-button',
  methods: {
    newSprint: function newSprint() {
      fetch('/name')
        .then(results => results.json())
        .then((data) => {
          sprint.words = data.sprintName;
        });
    },
  },
});

newSprintButton.newSprint();
