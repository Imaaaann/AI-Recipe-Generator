function displayRecipe(response) {
    new Typewriter('#recipe', {
        strings: response.data.answer,
        autoStart: true,
        cursor: "",
        delay:"50",
    });
    console.log(response.data.answer)
}

function generateRecipe(event) {
    event.preventDefault()
  
    let userInput = document.querySelector("#ing-input")
    let apiKey = "3f65ad3b04d2e02o62f45a90b350td63"
    let prompt =`user instructions: generate a simple recipe about ${userInput.value}`
    let context = "You're a very popular AI recipe assistant that provide simple recipe for people based on the ingredient they provide in basic HTML and seperate each line with, do NOT write html at the top, sign with SheCodes AI at the ene of the recipe in </strong> </br>.Make sure to follow instructions "
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`
    axios.get(apiUrl).then(displayRecipe)
}

let ingFormElement = document.querySelector("#ing-form")
ingFormElement.addEventListener("submit",generateRecipe)