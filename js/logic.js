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

      var data = 'js/results.json';

      if(total == 116){
        console.log("savory veg snack");
        var template = 'partials/veg/savVegSnack.html';
        $('#eats').load(template);
        mustacheLoad(template);
      } else if(total == 126){
        console.log('mixed veg snack');
        var template = 'partials/veg/veggieSnack.html';
        $('#eats').load(template);
        mustacheLoad(template);
      } else if(total == 106){
        console.log('sweet veg snack');
        var template = 'partials/veg/sweetVegSnack.html';
        $('#eats').load(template);
        mustacheLoad(template);
      } else if(total == 125){
        console.log("savory veg meal");
        var template ='partials/veg/savVegMeal.html';
        $('#eats').load(template);
        mustacheLoad(template);
      } else if(total == 135){
        console.log('mixed veg meal');
        var template = 'partials/veg/veggieMeal.html';
        $('#eats').load(template);
        mustacheLoad(template);
      } else if(total == 115){
        console.log('sweet veg meal');
        var template = 'partials/veg/sweetVegMeal.html';
        $('#eats').load(template);
        mustacheLoad(template);
      } else if(total == -75){
        console.log("savory omni meal");
        var template = 'partials/omni/savOmniMeal.html';
        $('#eats').load(template);
        mustacheLoad(template);
      }
      if(total == -65){
        console.log('mixed omni meal');
        var template = 'partials/omni/omni.html';
        $('#eats').load(template);
        mustacheLoad(template);
      }
      if(total == -85){
        console.log('sweet omni meal');
        var template = 'partials/omni/sweetOmniMeal.html';
        $('#eats').load(template);
        mustacheLoad(template);
      } else if(total == -94){
        console.log("savory omni snack");
        var template = 'partials/omni/savOmniSnack.html';
        $('#eats').load(template);
        mustacheLoad(template);
      }
      if(total == -74){
        console.log('mixed omni snack');
        var template = 'partials/omni/omniSnack.html';
        $('#eats').load(template);
        mustacheLoad(template);
      }
      if(total == -84){
        console.log('sweet omni snack');
        var template = 'partials/omni/sweetOmniSnack.html';
        $('#eats').load(template);
        mustacheLoad(template);
      }
    }
  }


  function mustacheLoad(tmpl){
    console.log('mustache templates');
    $.ajax({
      url: 'js/results.json',
      type: 'GET',
      dataType: 'json',
      success: function(data){
        console.log('success!')
        var vegData = data.veggie;
        var omniData = data.omni;
        console.log(tmpl);

        function getVeg(t){
          return t.indexOf('veg') > -1;
        }
        var vegetarian = getVeg(tmpl);

        if (vegetarian == true){
            console.log('veggie');
            console.log(vegData);
            var rendered = Mustache.to_html(tmpl, vegData);
            $('#eating').html(rendered);
        } else {
          console.log('omni');
          console.log(omniData);
          var rendered = Mustache.to_html(tmpl, omniData);
          $('#eating').html(rendered);
        }
      },
      error: function(data, xhr){
        console.log(xhr);
      }
    })
      // $.ajax({
      //   cache: false,
      //   url: 'js/results.json',
      //   type: 'GET',
      //   dataType: 'json',
      //   success: function(data){
      //   console.log('success!');
      //   var allData = data;
      //   var template = tmpl;
      //   var vegetarian = allData.veggie;
      //   var omnivore = allData.omni;
      //   console.log(template);

      //   //check documentation on appending templates, passing datas
      //   var rendered = Mustache.to_html('./partials/results.html', data);
      //   $('#eating').html(rendered);
      // },
      // error: function(data, xhr){
      //   console.log('Fail!');
      //   console.log(data);
      //   console.log(xhr);
      // }
   // });

  }
  eatPrefs();

})();
