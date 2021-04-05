// Write your Pizza Builder JavaScript in this file.

//QUESTIONS: How are state and ingredients connected when renderPepperoni() ?
//Iteration 2, L74. How to do it without forEach

// Constants
let basePrice = 10;
let ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
let state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach(onePep => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll('.mushroom').forEach(oneMush => {
    if (state.mushrooms) {
      oneMush.style.visibility = 'visible';
    } else {
      oneMush.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  const green = document.querySelectorAll('.green-pepper').forEach(onePepp => {
    if (state.greenPeppers) {
      onePepp.style.visibility = 'visible';
    } else {
      onePepp.style.visibility = 'hidden';
    }
  });
}



function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  document.querySelectorAll('.sauce').forEach(whiteSau => {
    if (state.whiteSauce) {
      whiteSau.classList.add('sauce-white')
    } else {      
      whiteSau.classList.remove('sauce-white')
    }
  });
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  document.querySelectorAll('.crust').forEach(crust => {
    if (state.glutenFreeCrust) {
      crust.classList.add('crust-gluten-free')
    } else {      
      crust.classList.remove('crust-gluten-free')
    }
  });
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  const btnArr = document.querySelectorAll('.btn')
  let count = 0

  for(const ingred in state){
    if(state[ingred] === true){
      btnArr[count].classList.add('active')
      count++
    }else{
      btnArr[count].classList.remove('active')
      count++
    }
  }

 /*  const ingredBtn = document.querySelectorAll('.btn')
  console.log(...ingredBtn)
  for(ingred in Object.values(state)){
    if(ingred === true){
      console.log('aqui',ingred)
    }
    console.log('mierda')
  } */

  //console.log(Object.values(object1));
// expected output: Array ["somestring", 42, false]
  /* 
1.checkear el estado del btn (activo o no)
2.checkear si state.key es true o false
3.cambiar el estado DE ESE btn
  const ingredBtn = document.querySelectorAll('.btn')
  ingredBtn.forEach(item =>{
    console.log(state, item)
  
  })
  .forEach(itembtn => {
    if(state.pepperoni){
      itembtn.classList.remove('active')
    }else{
      itembtn.classList.add('active')
    }
     */
 

  //const ingred = Object.keys(state)
   
  /*   for (const item of ingred){

      if(state.item){
        console.log(item)
        return btn.classList.add('active')
      }
      return btn.classList.remove('active')
    } */
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  //Displays the list of all items selected
//Displays the total price.
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', () => {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').addEventListener('click', () => {
  state.mushrooms = !state.mushrooms;
  renderEverything();
});
// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').addEventListener('click', () => {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
});
// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').addEventListener('click', () => {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click', () => {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});
