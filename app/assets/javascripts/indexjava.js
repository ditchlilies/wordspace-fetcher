$(document).ready(function(){
    
$("#scroll-about").click(function(){
      console.log($("#blog-titles"));
      $('html, body').animate({
        scrollTop: $("#blog-titles").offset().top
        }, 1000);
})
   

$("#scroll-project").click(function(){
      console.log($("#code"));
      $('html, body').animate({
        scrollTop: $("#code").offset().top
        }, 1000);
})
})
