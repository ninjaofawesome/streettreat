//options: hotdog, falafel, street meat, pretzel, tacos, ice cream, fruit, waffel, nuts, coffee/danish or egg and cheese on a roll

//carts: hotdog, streetmeat, tacos, ice cream, fruit, waffel, nut cart, coffee cart

//write a function to determine if the user is vegetarian, vegan, omnivore or flexitarian (boolean)

(function(){
  console.log('logic loaded');
  function eatPrefs(){
    var buttons = document.getElementsByClassName('btn');
    var results=[];
    $(buttons).click(function(){
      var pref = this.id;
      if(pref === 'nosh'){
        results.push(0);
      }
      if(pref == 'starving'){
        results.push(1);
      }
      if(pref == 'sweet'){
        results.push(0);
      }
      if(pref == 'savory'){
        results.push(1);
      }
      if(pref == 'vegan'){
        results.push(3);
        sweetOrNah(results);
      }
      if(pref == 'veggie'){
        results.push(2);
        sweetOrNah(results);
      }
      if(pref == 'flex'){
        results.push(1);
        sweetOrNah(results);
      }
      if(pref == 'omni'){
        results.push(0);
        sweetOrNah(results);
      }
    });

  }

  eatPrefs();
  //write a function to tally results of trues and falses

  function sweetOrNah(r){

    //get results after clicks.
    console.log(r)

    //add results, determine likelyhood of flex, omni, veg, vegan
    //use mustache to template results.

  }

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