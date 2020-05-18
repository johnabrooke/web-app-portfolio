const quiz = [
  { name: "Superman", realName: "Clark Kent" },
  { name: "Wonder Woman", realName: "Diana Prince"},
  { name: "Batman", realName: "Bruce Wayne"},
];

window.onload = function() {
  setTimeout(() => {
      // Write your code below
      const game = {
        start(quiz){
          this.questions = [...quiz];
          this.score = 0;
          // main game loop
          for(const question of this.questions){
            this.questions = question;
            this.ask();
          }
          // end of main game loop
          this.gameOver();
        },
        ask(){
          const question = `What is ${this.questions.name}'s real name?`;
          const response = prompt(question);
          this.check(response);
        },
        check(response){
          const answer = this.questions.realName;
          if(response === answer){
            alert('Correct!');
            this.score++;
            } else {
            alert(`Wrong! The correct answer was ${answer}`);
            }
          },
          gameOver(){
            alert(`Game Over, you scored ${this.score} 
            point${this.score !== 1 ? 's' : ''}`);
          }
        }
        game.start(quiz);
  }, 100);
};
