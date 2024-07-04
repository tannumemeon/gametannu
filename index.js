
document.addEventListener('DOMContentLoaded', function() {
    const truthButton = document.getElementById('truthButton');
    const dareButton = document.getElementById('dareButton');
    const questionElement = document.getElementById('question');

    // Truth questions
    const truthQuestions = [
    "Have you ever lied to get out of trouble? What was it about?",
      "What is your biggest fear?",
      "What is your guilty pleasure?",
      "Have you ever cheated in a someone?",
      "What is the most embarrassing thing that has happened to you?",
      "If you could swap lives with someone for a day, who would it be and why?"

    ];
    truthButton.addEventListener('click', function() {
        const randomTruth = getRandomElement(truthQuestions);
        questionElement.textContent = randomTruth;
      });

    // Dare challenges
    const dareChallenges = [
      "message your cursh and tell the dinner date with me..🍽",
      "sing a song and post on instagram.🎶",
      "meassage to your love and tell break_up💔",
      "Let the group give you a new hairstyle.💇‍♂️",
      "Do your best poll dance..💃"
    ];

    function getRandomElement(array) {
      return array[Math.floor(Math.random() * array.length)];
    }

    
  

    dareButton.addEventListener('click', function() {
      const randomDare = getRandomElement(dareChallenges);
      questionElement.textContent = randomDare;
    });
  });