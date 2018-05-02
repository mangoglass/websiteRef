$(document).ready(function(){
    $(".navElem").click(function(){
        $(this).animate({top: '-5px'}, 100, 'linear').animate({top: '5px'}, 100, 'linear').animate({top: '0px'}, 100, 'linear');
    });
});
