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
        showResults(prefs);
      }
      if(pref == 'omni'){
        prefs.push(-100);
        showResults(prefs);
      }
    });

    function showResults(p){
      var tally= p;
      var total = 0;
      for(var i = 0; i<tally.length; i++){
        total += tally[i];
      }
      console.log(total);

      if(total == 116){
        console.log("savory veg snack");
        var template = 'partials/savVegSnack.html';
        // $('#eats').load(template);
        mustacheLoad(template);
      } else if(total == 126){
        console.log('mixed veg snack');
        var template = 'partials/veggieSnack.html';
        // $('#eats').load(template);
        mustacheLoad(template);
      } else if(total == 106){
        console.log('sweet veg snack');
        var template = 'partials/sweetVegSnack.html';
        // $('#eats').load(template);
        mustacheLoad(template);
      } else if(total == 125){
        console.log("savory veg meal");
        var template ='partials/savVegMeal.html';
        // $('#eats').load(template);
        mustacheLoad(template);
      } else if(total == 135){
        console.log('mixed veg meal');
        var template = 'partials/veggieMeal.html';
        // $('#eats').load(template);
        mustacheLoad(template);
      } else if(total == 115){
        console.log('sweet veg meal');
        var template = 'partials/sweetVegMeal.html';
        // $('#eats').load(template);
        mustacheLoad(template);
      } else if(total == -75){
        console.log("savory omni meal");
        var template = 'partials/savOmniMeal.html';
        // $('#eats').load(template);
        mustacheLoad(template);
      }
      if(total == -65){
        console.log('mixed omni meal');
        var template = 'partials/omni.html';
        // $('#eats').load(template);
        mustacheLoad(template);
      }
      if(total == -85){
        console.log('sweet omni meal');
        var template = 'partials/sweetOmniMeal.html';
        // $('#eats').load(template);
        mustacheLoad(template);
      } else if(total == -94){
        console.log("savory omni snack");
        var template = 'partials/savOmniSnack.html';
        // $('#eats').load(template);
        mustacheLoad(template);
      }
      if(total == -74){
        console.log('mixed omni snack');
        var template = 'partials/omniSnack.html';
        // $('#eats').load(template);
        mustacheLoad(template);
      }
      if(total == -84){
        console.log('sweet omni snack');
        var template = 'partials/sweetOmniSnack.html';
        // $('#eats').load(template);
        mustacheLoad(template);
      }
    }
  }


  function mustacheLoad(tmpl){
    console.log('mustache templates');
    console.log(tmpl);
    var url = 'js/results.js';
    var template = tmpl;
    $.ajax({
        cache: false,
        url: 'js/results.json',
        type: 'GET',
        dataType: 'json',
        success: function(data){
        console.log('success!');
        var allData = data;


        var rendered = Mustache.to_html(template, data);
        $('#eating').html(rendered);
      },
      error: function(data, xhr){
        console.log('Fail!');
        console.log(data);
        console.log(xhr);
      }
    });

  }
  eatPrefs();

})();
