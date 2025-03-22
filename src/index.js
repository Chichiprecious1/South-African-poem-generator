function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: " Our own shadows disappear as the feet of thousands",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
