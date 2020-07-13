
var startX = ($('#index').width() / 2) - ($('#image1').width() / 2); 
var startY = ($('#index').height() / 2) - ($('#image1').height() / 2);
$('#image1').css('z-index') ;
$('#image1').css({ 'left': startX + 'px'});
$('#image2').css({ 'left': startX + 100 + 'px'});
$('#image3').css({ 'left': startX + 100 + 'px'});
$('#image4').css({ 'left': startX + 'px'});
$('#imageBG').css({ 'left': startX + 'px'});

var start1 = startX; 
var start2 = startX + 100;
var start3 = startX + 100;
var start4 = startX;

$(document).ready(function($){
     animateDiv();
            });

function makeNewPosition(){
    
    var h = $(window).height() - 50;
    var w = $(window).width() - 50;
    
    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);
    
    return [nh,nw];    
    
}

function animateDiv(){
    var newq = [startX, startY - 100];
    
    
    $('#image1').velocity({ top: startY, left: start1 - 75}, 5000, function(){
            
    });
    
    $('#image2').velocity({ top: startY, left: start2 - 100}, 5000, function(){
      
    });
    
    $('#image3').velocity({ top: startY, left: start3 - 50}, 5000, function(){
      
    });
    
    $('#image4').velocity({ top: startY, left: start4 - 125}, 5000, function(){
      animateDiv1();        
    });
    
};

function animateDiv1(){
    var newq = [startX, startY];
    $('#image1').velocity({ top: startY, left: start1}, 5000, function(){
            
    });
    $('#image2').velocity({ top: startY, left: start2}, 5000, function(){
            
    });
    $('#image3').velocity({ top: startY, left: start3}, 5000, function(){
            
    });
    $('#image4').velocity({ top: startY, left: start4}, 5000, function(){
      animateDiv();        
    });
    
};


        var limit = document.body.scrollHeight;
        var winHeight=window.innerHeight;
                    
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
  trailColor: '#eee',
  trailWidth: 1,
  duration: 1400,
  easing: 'bounce',
  strokeWidth: 6,
  from: {color: '#ffffff', a:0},
  to: {color: '#ff7e00', a:1},
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
      circle.setText("Expert");
  }
});
                    
                    
var bar2 = new ProgressBar.Circle(circle2, {
  color: '#ff9600',
  trailColor: '#eee',
  trailWidth: 1,
  duration: 1400,
  easing: 'bounce',
  strokeWidth: 6,
  from: {color: '#ffffff', a:0},
  to: {color: '#ff9600', a:1},
  step: function(state2, circle2) {
    circle2.path.setAttribute('stroke', state2.color);
      circle2.setText("Great");
  }
});
              
                    
var bar3 = new ProgressBar.Circle(circle3, {
  color: '#ffa200',
  trailColor: '#eee',
  trailWidth: 1,
  duration: 1400,
  easing: 'bounce',
  strokeWidth: 6,
  from: {color: '#ffffff', a:0},
  to: {color: '#ffa200', a:1},
  step: function(state3, circle3) {
    circle3.path.setAttribute('stroke', state3.color);
      circle3.setText("Good");
  }
});
                    
//var bar4 = new ProgressBar.Circle(circle4, {
//  color: '#ffb400',
//  trailColor: '#eee',
//  trailWidth: 1,
//  duration: 1400,
//  easing: 'bounce',
//  strokeWidth: 6,
//  from: {color: '#ffffff', a:0},
//  to: {color: '#ffb400', a:1},
//  step: function(state4, circle4) {
//    circle4.path.setAttribute('stroke', state4.color);
//      circle4.setText("Learning");
//  }
//});

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
//        var position4 = getPosition(circle4);
        var positionCards = getPosition(document.getElementById("togglerSection"));

        if((parseInt(position1.y)+200)<parseInt(winHeight)){
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
      
//     if((parseInt(position4.y)+200)<parseInt(winHeight)){
//         if(!flagAnimate4)
//            {
//                bar4.animate(0.4);
//            }
//            flagAnimate4 = true;
//        }
     
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
         ga('send', 'event', 'Filter', 'click', 'filterOpen');
        
    if (!active1) $(this).find('.test1').css({'background-color': 'rgba(68, 176, 213,0.7)', 'transform': 'translate(160px,-15px)'});
    else $(this).find('.test1').css({'background-color': 'rgba(68, 176, 213,0.9)', 'transform': 'none'}); 
     if (!active2) $(this).find('.test2').css({'background-color': 'rgba(68, 176, 213,0.7)', 'transform': 'translate(137px,75px)'});
    else $(this).find('.test2').css({'background-color': 'rgba(68, 176, 213,0.9)', 'transform': 'none'});
      if (!active3) $(this).find('.test3').css({'background-color': 'rgba(68, 176, 213,0.7)', 'transform': 'translate(71px, 139px)'});
    else $(this).find('.test3').css({'background-color': 'rgba(68, 176, 213,0.9)', 'transform': 'none'});
      if (!active4) $(this).find('.test4').css({'background-color': 'rgba(68, 176, 213,0.7)', 'transform': 'translate(-20px,160px)'});
    else $(this).find('.test4').css({'background-color': 'rgba(68, 176, 213,0.9)', 'transform': 'none'});
    active1 = !active1;
    active2 = !active2;
    active3 = !active3;
    active4 = !active4;
      
    });
});

for(i=1;i<=4;i++){
$(".test"+i).hover(function(){
 $(this).css("background-color", "rgba(68, 176, 213,1.0)");
    }, function(){
    $(this).css("background-color", "rgba(68, 176, 213,0.7)");
});
}

$(".mask2").hover(function(){
    $(this).css("background-color", "#268b9b");
    }, function(){
    $(this).css("background-color", "#218291");
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
    ga('send', 'event', 'Filter', 'filter', 'showExp');
     $('html,body').animate({
        scrollTop: $("#slide-10").offset().top},
        'slow');
    $(".mask2").html("<img class=\"circleImagesMaskUp\" src=\"../images/filterExp.png\"><br>Work Experience");
    $(".mask2").css("line-height","15px");
    $(".mask2").css("font-size","15px");
    
    
         $("#expCards").show();
        $("#expCards").animateCss('bounceIn');
    
    $("#expCards1").show();
        $("#expCards1").animateCss('bounceIn');
    
    if($("#designCards1").is(":visible")){
        $( "#designCards1" ).hide();
    }
    if($("#designCards2").is(":visible")){
        $( "#designCards2" ).hide();
    }
    if($("#devCards").is(":visible")){
       $( "#devCards" ).hide();
    }
    
    $( "#devCards2" ).show();
        $("#devCards2").animateCss('bounceIn');
   
}


function showDesign(){
    ga('send', 'event', 'Filter', 'filter', 'showDesign');
    $('html,body').animate({
        scrollTop: $("#slide-10").offset().top},
        'slow');
    $(".mask2").html("<img class=\"circleImagesMaskUp\" src=\"../images/filterResearch.png\"><br>Research & Design");
    $(".mask2").css("line-height","18px");
    $(".mask2").css("font-size","14px");
    if($("#expCards").is(":visible")){
        $( "#expCards" ).hide();
    }
    if($("#expCards2").is(":visible")){
        $( "#expCards2" ).hide();
    }
    $( "#designCards1" ).show();
        $("#designCards1").animateCss('bounceIn');
    $( "#designCards2" ).show();
        $("#designCards2").animateCss('bounceIn');
    if($("#devCards").is(":visible")){
       $( "#devCards" ).hide();
    }
    if($("#devCards1").is(":visible")){
       $( "#devCards1" ).hide();
    }
}

function showDev(){
    ga('send', 'event', 'Filter', 'filter', 'showDev');
    $('html,body').animate({
        scrollTop: $("#slide-10").offset().top},
        'slow');
    
    $(".mask2").html("<img class=\"circleImagesMask\" src=\"../images/filterDev.png\">Development");
    $(".mask2").css("line-height","50px");
    $(".mask2").css("font-size","16px");
    
    if($("#expCards").is(":visible")){
        $( "#expCards" ).hide();
    }
    if($("#expCards2").is(":visible")){
        $( "#expCards2" ).hide();
    }
    if($("#designCards1").is(":visible")){
        $( "#designCards1" ).hide();
    }
    if($("#designCards2").is(":visible")){
        $( "#designCards2" ).hide();
    }
    if($("#devCards1").is(":visible")){
        $( "#devCards1" ).hide();
    }
       $( "#devCards" ).show();
        $("#devCards").animateCss('bounceIn');
    
}

function showAllCards(){
        $( "#expCards" ).show();
        $("#expCards").animateCss('bounceIn');
    $( "#expCards2" ).show();
        $("#expCards2").animateCss('bounceIn');
        $( "#designCards1" ).show();
        $("#designCards1").animateCss('bounceIn');
        $( "#designCards2" ).show();
        $("#designCards2").animateCss('bounceIn');
        $( "#devCards" ).show();
        $("#devCards").animateCss('bounceIn');
    $( "#devCards1" ).show();
        $("#devCards1").animateCss('bounceIn');
}

function showAll(){
    ga('send', 'event', 'Filter', 'filter', 'showAll');
    $('html,body').animate({
        scrollTop: $("#slide-10").offset().top},
        'slow');
    $(".mask2").html("<img class=\"circleImagesMask\" src=\"../images/filterAll.png\">All");
    $(".mask2").css("line-height","70px");
    $(".mask2").css("font-size","20px");
    showAllCards();
        
}

function initCards(){
    $(".card").css('visibility','visible');
    $("#slide-10").css("height","auto");
    $(".filter").show();
    $(".filter").animateCss('rotateIn');
    showAllCards();
}

function initHiddenCards(){
    $(".card").css('visibility','hidden');
    $("#slide-10").css("height","auto");
    $(".filter").show();
    $(".filter").animateCss('rotateIn');
    showAllCards();
}

$("#loaderGif").css('visibility','visible');
$("#loaderGif").addClass('animated ' + 'zoomIn').one("animationEnd", function() {
            
        });
$("#loaderText").css('visibility','visible');
$("#loaderText").addClass('animated ' + 'zoomIn').one("animationEnd", function() {
            
        });

$(window).load(function() {
    $("#loader").fadeOut("slow");   
});

$("#slide-10").css("background-size", $("#slide-10").width() +"px "+($("#slide-10").height()+300) +"px");
$("#slide-10").css("background-position", "left top");
$(".filter").hide();
$("#expCards").hide();
$("#expCards2").hide();
$("#designCards1").hide();
$("#designCards2").hide();
$("#devCards").hide();
$("#devCards1").hide();

$("#slide-10").css("height",700+'px');

$( ".test1" ).on( "click", showAll);
$( ".test2" ).on( "click", showExperience);
$( ".test3" ).on( "click", showDesign);
$( ".test4" ).on( "click", showDev);


var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        initHiddenCards();
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
        document.body.appendChild(css);
    };

//refresh page on browser resize
$(window).bind('resize', function(e)
{
  console.log('window resized..');
  this.location.reload(false); /* false to get page from cache */
  /* true to fetch page from server */
});
