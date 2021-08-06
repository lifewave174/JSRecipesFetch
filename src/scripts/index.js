// Import any additional modules you want to include below \/

import {jsonRecipes} from "./data.js"

// \/ All of your javascript should go here \/

const recipesObject= JSON.parse(jsonRecipes)


//store the sections into a variable 

const cakes=document.querySelector("#cakes")
const biscuits=document.querySelector("#biscuits")
const bread=document.querySelector("#bread")

//create a single function to append all the cards

function createCard(section) {
    for (let item of recipesObject[section]) { //here we are iterating through each key value pair in our object
        let card = document.createElement("div");
        if (section === "cakes") { //section name needs to be individually appended as it is a string value
            cakes.appendChild(card)
        } else if (section === "bread") {
            bread.appendChild(card)
        } else {
            biscuits.appendChild(card)
        }
        card.classList.add("card");
        card.style = ("width: 18rem; margin: 20px;");
        card.innerHTML = 
          `<img src=${item.image} class="card-img-top" alt="..." style="height: 24vh">
           <div class="card-body">
           <h5 class="card-title">${item.title}</h5>
           <h6 class="card-subtitle mb-2 text-muted">${item.author}</h6>
           <p class="card-text"><b>Ingredients:</b> ${item.ingredients}</p>
           </div>`
    }
}

//calling the functions here 

createCard("cakes");
createCard("biscuits");
createCard("bread");




