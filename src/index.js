function displayPoem(response) {
  console.log("poem generated");

  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "6b9ecc0tb4b57ae4e51e839o1046fad3";
  let context =
    "You are an expect at peaceful poem writering and love to write short poems. Your mission is to generate a 4 line poem and separate each line with a <br/>. Make sure to follow the user instructions. sign the poem with SheCodes AI inside a <strong> element";
  let prompt = `User instructions: Generate a South African poem about ${instructionsInput.value}`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="blink">⌛Generating a South African poem about ${instructionsInput.value}</div>`;

  console.log("generating poem");
  console.log(`prompt: ${prompt}`);
  console.log(`contex: ${context}`);
  axios.get(apiURL).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
