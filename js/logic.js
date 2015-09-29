//options: hotdog, falafel, street meat, pretzel, tacos, ice cream, fruit, waffel, nuts

//carts: hotdog, streetmeat, tacos, ice cream, fruit, waffel, nut cart

//write a function to determine if the user is vegetarian, vegan, omnivore or flexitarian (boolean)
function eatPrefs(){
  var eatButtons = document.getElementsByClassName('eating-prefs');
  var prefButton = eatButtons.id;
  $(thisButton).click(function(){
    var likes = this;
    var anything;
    if(likes === 'veggie'){
      console.log('Vegetarian');
      anything = false;
    }
    if(likes === 'vegan'){
      console.log('Vegan');
      anything = false;
    }
    if(likes === 'omni'){
      console.log('Omnivore');
      anything = true;
    }
    if(likes === 'flex'){
      console.log('Flexitarian');
      anything = true;
    }
  });
}
//write a function to determine if the user wants savory or sweet (boolean)
function tasteType(){
  var tasteButtons = document.getElementsByClassName('taste-type');
  var yumButton = tasteButtons.id;
  $(yumbutton).click(function(){
    var taste = this;
    var craving;
    if(taste == 'sweet'){
      console.log('Sweet Treat!');
      craving = false;
    }
    if(taste == 'savory'){
      console.log('Savory Treat!');
      craving = true;
    }
  })

}
//write a function to determine hunger level?
function howHungry(){
  var hungerGames = document.getElementsByClassName('hunger-games');
  var portionButton = hungerGames.id;
  $(portionButton).click(function(){
    var level = this;
    var starving;
    if(level == 0){
      console.log('snacktime');
      starving = false;
    }
    if(level == 1){
      console.log('meal');
      starving = true;
    }
  })
}

//write a function to tally results of trues and falses
  // food results
  // if vegan, sweet, snack = true, fruit
  // if vegan, savory, snack = true, pretzel
  // if vegan, sweet, meal = true, fruit and nuts
  // if vegan, savory, meal = true, falafel and fruit

  // if veg, sweet, snack = true, ice cream
  // if veg, savory, snack = true, pretzel
  // if veg, sweet, meal = true, waffel & nuts
  // if veg, savory, meal = true, tacos and fruit

  // if omni, sweet, snack = true, ice cream
  // if omni, savory, snack = true, hot dog
  // if omni, sweet, meal = true, ice cream, nuts and fruit
  // if omni, savory, meal = true, street meat and ice cream

  // if flex, sweet, snack = true, nuts
  // if flex, savory, snack = true, hot dog
  // if flex, sweet, meal = true, waffel and hot dog
  // if flex, savory, meal = true, street meat and fruit

//write a function to display street treat