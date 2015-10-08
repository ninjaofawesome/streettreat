//options: hotdog, falafel, street meat, pretzel, tacos, ice cream, fruit, waffel, nuts, coffee/danish or egg and cheese on a roll

//carts: hotdog, streetmeat, tacos, ice cream, fruit, waffel, nut cart, coffee cart

//write a function to determine if the user is vegetarian, vegan, omnivore or flexitarian (boolean)

(function(){
  console.log('logic loaded');
  function eatPrefs(){
    var result = [];

    var eatButtons = document.getElementsByClassName('eating-prefs');
    var tasteButtons = document.getElementsByClassName('taste-type');
    var hungerGames = document.getElementsByClassName('hunger-games');

    $(eatButtons).click(function(){
      var likes = this.id;
      if(likes === 'veggie'){
        console.log('Vegetarian');
        var anything = 2;
      }
      if(likes === 'vegan'){
        console.log('Vegan');
        var anything = 3;
      }
      if(likes === 'omni'){
        console.log('Omnivore');
        var anything = 1;
      }
      if(likes === 'flex'){
        console.log('Flexitarian');
        var anything = 0;
      }
      result.push(anything);
    });


    $(tasteButtons).click(function(){
      var taste = this.id;
      if(taste == 'sweet'){
        console.log('Sweet Treat!');
        var craving = 0;
      }
      if(taste == 'savory'){
        console.log('Savory Treat!');
        var craving = 1;
      }
      result.push(craving);
    });


    $(hungerGames).click(function(){
      var level = this.id;
      if(level == 0){
        console.log('snacktime');
        var starving = 0;
      }
      if(level == 1){
        console.log('meal');
        var starving = 1;
      }
      result.push(starving);
    });

    console.log(result);

  }

  eatPrefs();


  //write a function to tally results of trues and falses

  function sweetOrNah(results){

    //get results after clicks.
    console.log(results)

    //add results, determine likelyhood of flex, omni, veg, vegan
    //use mustache to template results.

  }

  sweetOrNah(result);

})();

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