//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM

// fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=vodka')
//     .then(res => res.json()) // parse response as JSON
//     .then(data => {
//         console.log(data);
 
//         })
//         .catch(err => {
//             console.log(`error ${err}`)
//     });

// let selectedDrinks = '';

document.querySelector('#drinks').addEventListener('click', getDrinkList);

function getDrinkList(){
    let drink =  document.querySelector('input').value;
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
          console.log(data.drinks);
        //   document.querySelector('h2').innerText = data.drinks[0].strDrink;
        //   document.querySelector('img').src = data.drinks[0].strDrinkThumb;
        //   document.querySelector('h3').innerText = data.drinks[0].strInstructions;
        // data.drinks.forEach(each => console.log(each.strDrink))
        document.querySelector('h4').innerText = '';
        data.drinks.forEach((each, i) => document.querySelector('h4').innerText += `${i} ${each.strDrink}\r`) 
        let selectedDrinks = document.querySelector('h4').innerText.split('\n');
        console.log(selectedDrinks);

        document.querySelector('#drinkNumber').classList.toggle('hidden');
        document.querySelector('#getDrinkNumber').classList.toggle('hidden');
        })
        .catch(err => {
            console.log(`error ${err}`)
    });
}

document.querySelector('#getDrinkNumber').addEventListener('click', getDrinkByNumber);

function getDrinkByNumber(){
    let drinkNumber = document.querySelector('#drinkNumber').value;
    let drink =  document.querySelector('input').value;
    // fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
    fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=vodka')
    .then(res => res.json()) // parse response as JSON
    .then(data => {
        document.querySelector('h2').innerText = data.drinks[drinkNumber].strDrink;
        document.querySelector('img').src = data.drinks[drinkNumber].strDrinkThumb;
        document.querySelector('h3').innerText = data.drinks[drinkNumber].strInstructions;
        // console.log(drinkNumber);
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}




console.log(document.querySelector('h4').innerText);









