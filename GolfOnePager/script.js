$(document).ready(function(){
    $(".navElem").click(function(){
        $(this).animate({top: '-5px'}, 100, 'linear').animate({top: '5px'}, 100, 'linear').animate({top: '0px'}, 100, 'linear');
    });

    $dropped = false;
    $dropping = false;

    $("#lines").click(function(){
          if(!$dropping) {
                $dropping = true;
                if(!$dropped) {
                      $("#dropdown").animate({top: '70px'}, 300, function() {
                           $dropped = true;
                           $dropping = false;
                     });
                } else {
                      $("#dropdown").animate({top: '-325px'}, 300, function() {
                           $dropped = false;
                           $dropping = false;
                     });
                }
          }
    });
});
