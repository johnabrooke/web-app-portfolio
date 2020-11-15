const url = 'http://spbooks.github.io/questions.json';

fetch(url, { mode: 'no-cors'})
  .then(res => res.json())
  .then(quiz => {
    view.start.addEventListener('click', () => game.start(quiz.questions), false);
    view.response.addEventListener('click', (event) => game.check(event), false);
  });