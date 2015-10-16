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
        prefs.push(1);
      }
      if(pref == 'starving'){
        prefs.push(10);
      }
      if(pref == 'sweet'){
        prefs.push(5);
      }
      if(pref == 'savory'){
        prefs.push(15);
      }
      if(pref == 'both'){
        prefs.push(25);
      }
      if(pref == 'veg'){
        prefs.push(100);
        // finalResults(prefs, 'vegan');
        showResults(prefs);
      }
      if(pref == 'omni'){
        prefs.push(-100);
        // finalResults(prefs, 'omni');.
        showResults(prefs);
      }
    });

    function showResults(p){
      var tally= p;
      console.log(tally);
      var total = 0;
      for(var i = 0; i<tally.length; i++){
        total += tally[i];
      }

      if(total < 0){
        console.log('omnivore');
        $('#eats').load('partials/omni.html');
      }

      if(total > 0){
        console.log('vegetarian')
        $('#eats').load('partials/veggie.html');
      }

    }

  }

  eatPrefs();

  // function finalResults(p, t){
  //   var preference = p;
  //   var type = t;
  //   var total = 0;

  //   for(i=0; i<preference.length; i++){
  //       total += preference[i];
  //       console.log(total)
  //     }

  //   if(total == 0){
  //     console.log('savory meal');
  //     loadPartial(type, 'savory', 'meal');
  //     recommendationList('savory', 'meal');
  //   } else if (total == -2){
  //     console.log('sweet snack');
  //     loadPartial(type, 'sweet', 'snack');
  //     recommendationList('sweet', 'snack');
  //   }else if (total == -3){
  //     console.log('savory snack');
  //     loadPartial(type, 'savory', 'snack');
  //     recommendationList('savory', 'snack');
  //   } else if (total == 1) {
  //     console.log('sweet meal');
  //     loadPartial(type, 'sweet', 'meal');
  //     recommendationList('sweet', 'meal');
  //   } else if (total == -1) {
  //     console.log('savory snack');
  //     loadPartial(type, 'savory', 'snack');
  //     recommendationList('savory', 'snack');
  //   } else if (total == 2){
  //     console.log('savory meal');
  //     loadPartial(type, 'savory', 'meal');

  //   }

  //   function loadPartial(type, flavor, size){
  //     var taste = flavor;
  //     var qty = size;
  //     if(type == 'vegan'){
  //       console.log('vegan');
  //       $('#eats').load('partials/vegan.html', function(r, s, x){
  //         var append = document.getElementById('res-append');
  //         $(append).text(taste + ' ' + qty);
  //         recommendationList(taste, qty, 'vegan');
  //       });

  //     }
  //     if(type == 'veg'){
  //       console.log('veg');
  //        $('#eats').load('partials/veggie.html', function(r, s, x){
  //         var append = document.getElementById('res-append');
  //         $(append).text(taste + ' ' + qty);
  //         recommendationList(taste, qty, 'veg');
  //        });
  //     }
  //     if(type == 'flex'){
  //       console.log('flex');
  //       $('#eats').load('partials/flex.html', function(r, s, x){
  //         var append = document.getElementById('res-append');
  //         $(append).text(taste + ' ' + qty);
  //         recommendationList(taste, qty, 'flex');
  //       });
  //     }
  //     if(type == 'omni'){
  //       console.log('omni');
  //       $('#eats').load('partials/omni.html', function(r, s, x){
  //         var append = document.getElementById('res-append');
  //         $(append).text(taste + ' ' + qty);
  //         recommendationList(taste, qty, 'omni');

  //       });
  //     }

  //   }

  //   function recommendationList(t, q, p){
  //     console.log(t);
  //     console.log(q);
  //     console.log(p);

  //   }

  // }

})();
