var startX = ($('#index').width() / 2) - ($('#image1').width() / 2);              
$('#image1').css('z-index') ;
$('#image1').css({ 'left': startX + 'px'});
$('#image2').css({ 'left': (startX+($('#index').width()*0.075))  + 'px'});
$('#image3').css({ 'left': (startX+($('#index').width()*0.075)) + 'px'});
$('#image4').css({ 'left': (startX-($('#index').width()*0.075)) + 'px'});
$('#imageBG').css({ 'left': startX + 'px'});
//$('#imageInvi').css({ 'top': '0px'});

//$('#index').css({ 'min-height': 1053 + 'px'});

$(document).ready(function($){
            $("#index").mousemove(function(e){
                var mouseX = e.pageX - $('#index').offset().left;
//                var mouseY = e.pageY - $('#index').offset().top;
                var totalX = $('#index').width();
//                var totalY = $('#index').height();
                var centerX = totalX / 2;
//                var centerY = totalY / 2;
                var shiftX = centerX - mouseX;
//                var shiftY = centerY - mouseY;

                var startX = ($('#index').width() / 2) - ($('#image1').width() / 2);
//                var startY = ($('#index').height() / 2) - ($('#image1').height() / 2);
//
//                $('#image1').css('z-index') ;
//                $('#image1').css({ 'left': startX + (shiftX/10) + 'px', 'top': startY + (shiftY/10) + 'px' });
//                $('#image2').css({ 'left': startX + (shiftX/8) + 'px', 'top': startY + (shiftY/8) + 'px' });
//                $('#image3').css({ 'left': startX + (shiftX/6) + 'px', 'top': startY + (shiftY/6) + 'px' });
//                $('#image4').css({ 'left': startX + (shiftX/8) + 'px', 'top': startY + (shiftY/8) + 'px' });
                
                
                $('#image1').css('z-index') ;
                $('#image1').css({ 'left': startX + (shiftX/10) + 'px'});
                $('#image2').css({ 'left': (startX+($('#index').width()*0.075)) + (shiftX/12) + 'px'});
                $('#image3').css({ 'left': (startX+($('#index').width()*0.075)) + (shiftX/15) + 'px'});
                $('#image4').css({ 'left': (startX-($('#index').width()*0.075)) + (shiftX/20) + 'px'});
            });
        });


      
             
        var limit = document.body.scrollHeight;
        var winHeight=window.innerHeight;
                    
        // Helper function to get an element's exact position
function getPosition(el) {
  var xPos = 0;
  var yPos = 0;
 
  while (el) {
    if (el.tagName == "BODY") {
      // deal with browser quirks with body/window/document and page scroll
      var xScroll = el.scrollLeft || document.documentElement.scrollLeft;
      var yScroll = el.scrollTop || document.documentElement.scrollTop;
 
      xPos += (el.offsetLeft - xScroll + el.clientLeft);
      yPos += (el.offsetTop - yScroll + el.clientTop);
    } else {
      // for all other non-BODY elements
      xPos += (el.offsetLeft - el.scrollLeft + el.clientLeft);
      yPos += (el.offsetTop - el.scrollTop + el.clientTop);
    }
 
    el = el.offsetParent;
  }
  return {
    x: xPos,
    y: yPos
  };
}
 
var bar = new ProgressBar.Circle(circle1, {
  color: '#ff7e00',
//    color: '#12c4c4',
  trailColor: '#eee',
  trailWidth: 1,
  duration: 1400,
  easing: 'bounce',
  strokeWidth: 6,
  from: {color: '#ffffff', a:0},
  to: {color: '#ff7e00', a:1},
//    to: {color: '#12c4c4', a:1},
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
      circle.setText("Expert");
  }
});
                    
                    
var bar2 = new ProgressBar.Circle(circle2, {
  color: '#ff9600',
//    color: '#13d1d1',
  trailColor: '#eee',
  trailWidth: 1,
  duration: 1400,
  easing: 'bounce',
  strokeWidth: 6,
  from: {color: '#ffffff', a:0},
  to: {color: '#ff9600', a:1},
//    to: {color: '#13d1d1', a:1},
  // Set default step function for all animate calls
  step: function(state2, circle2) {
    circle2.path.setAttribute('stroke', state2.color);
      circle2.setText("Great");
  }
});
              
                    
var bar3 = new ProgressBar.Circle(circle3, {
  color: '#ffa200',
//    color: '#14dede',
  trailColor: '#eee',
  trailWidth: 1,
  duration: 1400,
  easing: 'bounce',
  strokeWidth: 6,
  from: {color: '#ffffff', a:0},
  to: {color: '#ffa200', a:1},
//    to: {color: '#14dede', a:1},
  // Set default step function for all animate calls
  step: function(state3, circle3) {
    circle3.path.setAttribute('stroke', state3.color);
      circle3.setText("Good");
  }
});
                    
var bar4 = new ProgressBar.Circle(circle4, {
  color: '#ffb400',
//    color: '#15ebeb',
  trailColor: '#eee',
  trailWidth: 1,
  duration: 1400,
  easing: 'bounce',
  strokeWidth: 6,
  from: {color: '#ffffff', a:0},
  to: {color: '#ffb400', a:1},
//    to: {color: '#15ebeb', a:1},
  // Set default step function for all animate calls
  step: function(state4, circle4) {
    circle4.path.setAttribute('stroke', state4.color);
      circle4.setText("Learning");
  }
});
//                    
//barAnimate = function(){
//    
//            bar2.animate(0.8);
//            bar3.animate(0.6);
//            bar4.animate(0.4);
//}
flagAnimate1 = false;
flagAnimate2 = false;
flagAnimate3 = false;
flagAnimate4 = false;
flagAnimateCards = false;

 window.addEventListener("scroll", function(event) {    
  
        
        
    var top = this.scrollY,
        left = this.scrollX;
   
    var horizontalScroll = document.querySelector(".horizontalScroll"),
        verticalScroll = document.querySelector(".verticalScroll");
        circle1=document.getElementById("circle1");
        var position1 = getPosition(circle1);
        var position2 = getPosition(circle2);
        var position3 = getPosition(circle3);
        var position4 = getPosition(circle4);
        var positionCards = getPosition(document.getElementById("togglerSection"));

        if((parseInt(position1.y)+200)<parseInt(winHeight)){
//            bar.animate(0.95);
//            bar2.animate(0.8);
//            bar3.animate(0.6);
//            bar4.animate(0.4);
            if(!flagAnimate1)
            {
                bar.animate(0.95);
            }
            flagAnimate1 = true;
        }
     
     if((parseInt(position2.y)+200)<parseInt(winHeight)){
         if(!flagAnimate2)
            {
                bar2.animate(0.8);
            }
            flagAnimate2 = true;
        }
     if((parseInt(position3.y)+200)<parseInt(winHeight)){
         if(!flagAnimate3)
            {
                bar3.animate(0.6);
            }
            flagAnimate3 = true;
        }
      
     if((parseInt(position4.y)+200)<parseInt(winHeight)){
         if(!flagAnimate4)
            {
                bar4.animate(0.4);
            }
            flagAnimate4 = true;
        }
     
     if((parseInt(positionCards.y)+400)<parseInt(winHeight)){
         if(!flagAnimateCards)
            {
                initCards();
            }
            flagAnimateCards = true;
        }
        
}, false);
    

$().ready(function(){
        $('[rel="tooltip"]').tooltip();

    });

    function rotateCard(btn){
        var $card = $(btn).closest('.card-container');
        console.log($card);
        if($card.hasClass('hover')){
            $card.removeClass('hover');
        } else {
            $card.addClass('hover');
        }
    }


$(document).ready(function () {
    $(document).click(function (event) {
        var clickover = $(event.target);
        var _opened = $(".navbar-responsive-collapse").hasClass("navbar-responsive-collapse in");
        if (_opened === true && !clickover.hasClass("navbar-toggle")) {
            $("button.navbar-toggle").click();
        }
    });
});

$(document).ready(function() {

  var active1 = false;
  var active2 = false;
  var active3 = false;
  var active4 = false;

    $('.filter').on('mousedown touchstart', function() {
        
    
    if (!active1) $(this).find('.test1').css({'background-color': 'rgba(22,28,29,0.7)', 'transform': 'translate(160px,-15px)'});
    else $(this).find('.test1').css({'background-color': 'rgba(22,28,29,0.9)', 'transform': 'none'}); 
     if (!active2) $(this).find('.test2').css({'background-color': 'rgba(22,28,29,0.7)', 'transform': 'translate(137px,75px)'});
    else $(this).find('.test2').css({'background-color': 'rgba(22,28,29,0.9)', 'transform': 'none'});
      if (!active3) $(this).find('.test3').css({'background-color': 'rgba(22,28,29,0.7)', 'transform': 'translate(71px, 139px)'});
    else $(this).find('.test3').css({'background-color': 'rgba(22,28,29,0.9)', 'transform': 'none'});
      if (!active4) $(this).find('.test4').css({'background-color': 'rgba(22,28,29,0.7)', 'transform': 'translate(-20px,160px)'});
    else $(this).find('.test4').css({'background-color': 'rgba(22,28,29,0.9)', 'transform': 'none'});
    active1 = !active1;
    active2 = !active2;
    active3 = !active3;
    active4 = !active4;
      
    });
});

for(i=1;i<=4;i++){
$(".test"+i).hover(function(){
 $(this).css("background-color", "rgba(42,121,134,0.7)");
//    $(this).css("transition-delay","0s");
//    $(this).css('testHover');
    }, function(){
    $(this).css("background-color", "rgba(22,28,29,0.7)");
});
}

//$(".test1").hover(function(){
//    $(this).css("background-color", "rgba(97,105,108,0.9)");
//    }, function(){
//    $(this).css("background-color", "rgba(22,28,29,0.9)");
//});

$(".mask2").hover(function(){
    $(this).css("background-color", "#268b9b");
    }, function(){
    $(this).css("background-color", "#289caf");
});


$.fn.extend({
    animateCss: function (animationName) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);
        });
        return this;
    }
});


function showExperience(){
     $('html,body').animate({
        scrollTop: $("#slide-10").offset().top},
        'slow');
    $(".mask2").html("<img class=\"circleImagesMaskUp\" src=\"images/filterExp.png\"><br>Work Experience");
    $(".mask2").css("line-height","15px");
    $(".mask2").css("font-size","15px");
    
    
         $("#expCards").show();
        $("#expCards").animateCss('bounceIn');
    
    if($("#designCards1").is(":visible")){
        $( "#designCards1" ).hide();
    }
    if($("#designCards2").is(":visible")){
        $( "#designCards2" ).hide();
    }
    if($("#devCards").is(":visible")){
       $( "#devCards" ).hide();
    }
   
}


function showDesign(){
    $('html,body').animate({
        scrollTop: $("#slide-10").offset().top},
        'slow');
    $(".mask2").html("<img class=\"circleImagesMaskUp\" src=\"images/filterResearch.png\"><br>Research & Design");
    $(".mask2").css("line-height","18px");
    $(".mask2").css("font-size","14px");
    if($("#expCards").is(":visible")){
        $( "#expCards" ).hide();
    }
    $( "#designCards1" ).show();
        $("#designCards1").animateCss('bounceIn');
    $( "#designCards2" ).show();
        $("#designCards2").animateCss('bounceIn');
    if($("#devCards").is(":visible")){
       $( "#devCards" ).hide();
    }
}

function showDev(){
    $('html,body').animate({
        scrollTop: $("#slide-10").offset().top},
        'slow');
    
    $(".mask2").html("<img class=\"circleImagesMask\" src=\"images/filterDev.png\">Development");
    $(".mask2").css("line-height","50px");
    $(".mask2").css("font-size","16px");
    
    if($("#expCards").is(":visible")){
        $( "#expCards" ).hide();
    }
    if($("#designCards1").is(":visible")){
        $( "#designCards1" ).hide();
    }
    if($("#designCards2").is(":visible")){
        $( "#designCards2" ).hide();
    }
       $( "#devCards" ).show();
        $("#devCards").animateCss('bounceIn');
}





function showAllCards(){
        $( "#expCards" ).show();
        $("#expCards").animateCss('bounceIn');
        $( "#designCards1" ).show();
        $("#designCards1").animateCss('bounceIn');
        $( "#designCards2" ).show();
        $("#designCards2").animateCss('bounceIn');
        $( "#devCards" ).show();
        $("#devCards").animateCss('bounceIn');
}

function showAll(){
    $('html,body').animate({
        scrollTop: $("#slide-10").offset().top},
        'slow');
    $(".mask2").html("<img class=\"circleImagesMask\" src=\"images/filterAll.png\">All");
    $(".mask2").css("line-height","70px");
    $(".mask2").css("font-size","20px");
    showAllCards();
        
}

function initCards(){
    $("#slide-10").css("height","auto");
    $(".filter").show();
    $(".filter").animateCss('rotateIn');
    showAllCards();
}

//$("#loaderGif").animateCss('zoomIn');
//$("#loaderText").animateCss('zoomIn');
$("#loaderGif").css('visibility','visible');
$("#loaderGif").addClass('animated ' + 'zoomIn').one("animationEnd", function() {
            
        });
$("#loaderText").css('visibility','visible');
$("#loaderText").addClass('animated ' + 'zoomIn').one("animationEnd", function() {
            
        });

$(window).load(function() {      //Do the code in the {}s when the window has loaded 
//  $("#loader").fadeOut("fast");  //Fade out the #loader div
    $("#loader").fadeOut("slow");   
});

//console.log($("#slide-10").height() +"px "+ $("#slide-10").width() +"px");
$("#slide-10").css("background-size", $("#slide-10").width() +"px "+($("#slide-10").height()+300) +"px");
$("#slide-10").css("background-position", "left top");
$(".filter").hide();
$("#expCards").hide();
$("#designCards1").hide();
$("#designCards2").hide();
$("#devCards").hide();

$("#slide-10").css("height",700+'px');

$( ".test1" ).on( "click", showAll);
$( ".test2" ).on( "click", showExperience);
$( ".test3" ).on( "click", showDesign);
$( ".test4" ).on( "click", showDev);
