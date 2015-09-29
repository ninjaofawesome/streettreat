//options: hotdog, falafel, street meat, pretzel, tacos, ice cream, fruit, waffel, nuts, coffee/danish or egg and cheese on a roll

//carts: hotdog, streetmeat, tacos, ice cream, fruit, waffel, nut cart, coffee cart

//write a function to determine if the user is vegetarian, vegan, omnivore or flexitarian (boolean)
function eatPrefs(){
  var eatButtons = document.getElementsByClassName('eating-prefs');
  var prefButton = eatButtons.id;
  $(thisButton).click(function(){
    var likes = this;
    if(likes === 'veggie'){
      console.log('Vegetarian');
      var anything = false;
    }
    if(likes === 'vegan'){
      console.log('Vegan');
      var anything = false;
    }
    if(likes === 'omni'){
      console.log('Omnivore');
      var anything = true;
    }
    if(likes === 'flex'){
      console.log('Flexitarian');
      var anything = true;
    }
  });
  return anything;
}

var prefs = eatPrefs();
//write a function to determine if the user wants savory or sweet (boolean)
function tasteType(){
  var tasteButtons = document.getElementsByClassName('taste-type');
  var yumButton = tasteButtons.id;
  $(yumbutton).click(function(){
    var taste = this;
    if(taste == 'sweet'){
      console.log('Sweet Treat!');
      var craving = false;
    }
    if(taste == 'savory'){
      console.log('Savory Treat!');
      var craving = true;
    }
  })
  return craving;
}

var tasty = tasteType();
//write a function to determine hunger level?
function howHungry(){
  var hungerGames = document.getElementsByClassName('hunger-games');
  var portionButton = hungerGames.id;
  $(portionButton).click(function(){
    var level = this;
    if(level == 0){
      console.log('snacktime');
      var starving = false;
    }
    if(level == 1){
      console.log('meal');
      var starving = true;
    }
  })
  return starving;
}

var hangry = howHungry();

//write a function to tally results of trues and falses

function sweetOrNah(ep, hl, c){
  var eatType = ep,
      hunger = hl,
      crave = c;

  var result = [];
  //add results, determine likelyhood of flex, omni, veg, vegan
  //use mustache to template results.

}

sweetOrNah(prefs, tasty, hangry);
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
  // if omni, savory, meal = true, street meat and fruit

  // if flex, sweet, snack = true, nuts
  // if flex, savory, snack = true, hot dog
  // if flex, sweet, meal = true, waffel and hot dog
  // if flex, savory, meal = true, egg and cheese or street meat

//write a function to display street treat