function generateRecipe(event) {
    event.preventDefault()
    new Typewriter('#recipe', {
        strings: "Generating recipe",
        autoStart: true,
        cursor: "",
        delay:"50",
      });
}

let ingFormElement = document.querySelector("#ing-form")
ingFormElement.addEventListener("submit",generateRecipe)