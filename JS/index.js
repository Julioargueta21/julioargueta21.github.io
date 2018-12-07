$(document).ready(function() {
    $(".fancyTitle").lettering();
    $(".fancyButton").lettering();
  });
  
  
  
  
  
  $(document).ready(function() {
    animation();
  }, 1000);
  
  $('.fancyButton').click(function() {
    animation();
  });
  
  
  function animation() {
    var title1 = new TimelineMax();
    title1.to(".fancyButton", 0, {visibility: 'hidden', opacity: 0})
    title1.staggerFromTo(".fancyTitle span", 0.5, 
    {ease: Back.easeOut.config(1.7), opacity: 0, bottom: -80},
    {ease: Back.easeOut.config(1.7), opacity: 1, bottom: 0}, 0.05);
    title1.to(".fancyButton", 0.2, {visibility: 'visible' ,opacity: 1})
  }