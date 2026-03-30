const containerEl = document.getElementById("container");

const careers = ["Web developer", "Video editor", "Freelancer" , "Learner"];
let careerIndex = 0;
let characterIndex = 0;

updateText();

function updateText() {
  characterIndex++;
  const career = careers[careerIndex];

  const article = "aeiou".includes(career[0].toLowerCase()) ? "an" : "a";

  containerEl.innerHTML = `
    <h1>
      I am ${article} ${career.slice(0, characterIndex)}  
    </h1> 
    `;

  if (characterIndex === careers[careerIndex].length) {
    careerIndex++;
    characterIndex = 0;
  }

  if (careerIndex === careers.length) {
    careerIndex = 0;
  }

  setTimeout(updateText, 400);
}

/* Article correction version 1. only corrects I.

<h1>I am ${careers[careerIndex].slice(0, 1) === "I" ? "an" : "a"}
${careers[careerIndex].slice(0, characterIndex)}</h1>
*/

/* Article correction version 2. corrects all article but inefficient.

const firstLetter = careers[careerIndex][0].toLowerCase();
I am ${["a", "e", "i", "o", "u"].includes(firstLetter) ? "an" : "a"}
${careers[careerIndex].slice(0, characterIndex)}
*/
