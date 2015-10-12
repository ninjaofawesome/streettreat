(function(){
  console.log('appearance loaded');
  var q1 = $('#firstQuestion'),
      q2 = $('#secondQuestion'),
      q3 = $('#thirdQuestion');


  $('.hunger-games').click(function(){
    $(q1).fadeOut().slideUp(function(){
      $(q2).fadeIn();
    });
  });

  $('.taste-type').click(function(){
    $(q2).fadeOut().slideUp(function(){
      $(q3).fadeIn();
    });
  });

  $('.eating-prefs').click(function(){
    $(q3).fadeOut();
  })
})();