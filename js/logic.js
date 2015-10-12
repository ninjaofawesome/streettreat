//options: hotdog, falafel, street meat, pretzel, tacos, ice cream, fruit, waffel, nuts, coffee/danish or egg and cheese on a roll

//carts: hotdog, streetmeat, tacos, ice cream, fruit, waffel, nut cart, coffee cart

//write a function to determine if the user is vegetarian, vegan, omnivore or flexitarian (boolean)

(function(){
  console.log('logic loaded');
  function eatPrefs(){
    var buttons = document.getElementsByClassName('btn');
    var results=[];
    var prefs = [];
    $(buttons).click(function(){
      var pref = this.id;
      if(pref === 'nosh'){
        results.push(0);
        prefs.push(0);
      }
      if(pref == 'starving'){
        results.push(1);
        prefs.push(1);
      }
      if(pref == 'sweet'){
        results.push(0);
        prefs.push(-2);
      }
      if(pref == 'savory'){
        results.push(1);
        prefs.push(-3);
      }
      if(pref == 'vegan'){
        results.push(3);
        // console.log(results);
        finalResults(prefs, 'vegan');
      }
      if(pref == 'veggie'){
        results.push(2);
        // console.log(results);
        finalResults(prefs, 'veg');
      }
      if(pref == 'flex'){
        results.push(-1);
        // console.log(results);
        finalResults(prefs, 'flex');
      }
      if(pref == 'omni'){
        results.push(-2);
        // console.log(results);
        finalResults(prefs, 'omni');
      }
    });

  }

  eatPrefs();

  function finalResults(p, t){
    var preference = p;
    var type = t;
    var total = 0;
    for(i=0; i<preference.length; i++){
        total += preference[i];
      }

    if(total == -2){
      console.log('sweet snack');
      if(type == 'vegan'){
        console.log('vegan');
      }
      if(type == 'veg'){
        console.log('veg');
      }
      if(type == 'flex'){
        console.log('flex');
      }
      if(type == 'omni'){
        console.log('omni');
      }
    } else if (total == -3){
      console.log('savory snack');
      if(type == 'vegan'){
        console.log('vegan');
      }
      if(type == 'veg'){
        console.log('veg');
      }
      if(type == 'flex'){
        console.log('flex');
      }
      if(type == 'omni'){
        console.log('omni');
      }
    } else if (total == 1) {
      console.log('sweet meal');
      if(type == 'vegan'){
        console.log('vegan');
      }
      if(type == 'veg'){
        console.log('veg');
      }
      if(type == 'flex'){
        console.log('flex');
      }
      if(type == 'omni'){
        console.log('omni');
      }
    } else if (total == 2){
      console.log('savory meal');
      if(type == 'vegan'){
        console.log('vegan');
      }
      if(type == 'veg'){
        console.log('veg');
      }
      if(type == 'flex'){
        console.log('flex');
      }
      if(type == 'omni'){
        console.log('omni');
      }
    }

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