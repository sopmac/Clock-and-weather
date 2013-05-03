jQuery(document).ready(function(){

  //London weather the class names are different
  jQuery('#londonWeather').weatherfeed(['UKXX0085']);
    jQuery(".londonHover").mouseover(function(){
      jQuery("#londonWeather").show();
    }).mouseleave(function(){
      jQuery("#londonWeather").hide();
    })
    
});


