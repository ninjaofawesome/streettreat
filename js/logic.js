//options: hotdog, falafel, street meat, pretzel, tacos, ice cream, fruit, waffel, nuts, coffee/danish or egg and cheese on a roll

//carts: hotdog, streetmeat, tacos, ice cream, fruit, waffel, nut cart, coffee cart

//write a function to determine if the user is vegetarian, vegan, omnivore or flexitarian (boolean)

(function(){
  console.log('logic loaded');
  function eatPrefs(){
    var buttons = document.getElementsByClassName('btn');
    var prefs = [];
    $(buttons).click(function(){
      var pref = this.id;
      if(pref === 'nosh'){
        prefs.push(0);
      }
      if(pref == 'starving'){
        prefs.push(1);
      }
      if(pref == 'sweet'){
        prefs.push(-2);
      }
      if(pref == 'savory'){
        prefs.push(-1);
      }
      if(pref == 'vegan'){
        finalResults(prefs, 'vegan');
      }
      if(pref == 'veggie'){
        finalResults(prefs, 'veg');
      }
      if(pref == 'flex'){
        finalResults(prefs, 'flex');
      }
      if(pref == 'omni'){
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
        console.log(total)
      }

    if(total == 0){
      console.log('savory meal');
      loadPartial(type, 'savory', 'meal');
      recommendationList('savory', 'meal');
    } else if (total == -2){
      console.log('sweet snack');
      loadPartial(type, 'sweet', 'snack');
      recommendationList('sweet', 'snack');
    }else if (total == -3){
      console.log('savory snack');
      loadPartial(type, 'savory', 'snack');
      recommendationList('savory', 'snack');
    } else if (total == 1) {
      console.log('sweet meal');
      loadPartial(type, 'sweet', 'meal');
      recommendationList('sweet', 'meal');
    } else if (total == -1) {
      console.log('savory snack');
      loadPartial(type, 'savory', 'snack');
      recommendationList('savory', 'snack');
    } else if (total == 2){
      console.log('savory meal');
      loadPartial(type, 'savory', 'meal');

    }

    function loadPartial(type, flavor, size){
      var taste = flavor;
      var qty = size;
      if(type == 'vegan'){
        console.log('vegan');
        $('#eats').load('partials/vegan.html', function(r, s, x){
          var append = document.getElementById('res-append');
          $(append).text(taste + ' ' + qty);
          recommendationList(taste, qty, 'vegan');
        });

      }
      if(type == 'veg'){
        console.log('veg');
         $('#eats').load('partials/veggie.html', function(r, s, x){
          var append = document.getElementById('res-append');
          $(append).text(taste + ' ' + qty);
          recommendationList(taste, qty, 'veg');
         });
      }
      if(type == 'flex'){
        console.log('flex');
        $('#eats').load('partials/flex.html', function(r, s, x){
          var append = document.getElementById('res-append');
          $(append).text(taste + ' ' + qty);
          recommendationList(taste, qty, 'flex');
        });
      }
      if(type == 'omni'){
        console.log('omni');
        $('#eats').load('partials/omni.html', function(r, s, x){
          var append = document.getElementById('res-append');
          $(append).text(taste + ' ' + qty);
          recommendationList(taste, qty, 'omni');

        });
      }

    }

    function recommendationList(t, q, p){
      console.log(t);
      console.log(q);
      console.log(p);

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