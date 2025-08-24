function displayRecipe(response){

  new Typewriter("#recipe", {
      strings: response.data.answer,
      autoStart: true,
      delay:1,
      cursor:"",
});
}

function generateRecipe(event){
  event.preventDefault();

let instructionsInput=document.querySelector("#user-instructions");


let apiKey="ff43f96f1et38ea9470b0c722o5c6709";
let context= "You are a professional chef with exceptional experience at creating multiple recipes that involve chicken. Make sure to follow the user instructions. At the end of the recipe sign with 'Bon Apetite 👨🏻‍🍳' inside a <strong> element.";
let prompt= `Generate the sentences wrapped in <p> HTML tags and seperate each line with a <br>. Here are the user instructions:Generate a recipe ${instructionsInput.value}`;
let apiUrl= `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

let recipeElement=document.querySelector("#recipe");
recipeElement.classList.remove("hidden");
recipeElement.innerHTML=`<div class="blink">⌛Generating recipe ${instructionsInput.value} </div>`;

axios.get(apiUrl).then(displayRecipe);

}

let recipeFormElement=document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit",generateRecipe);