  var Clock = function(id,diff) {
    this.id = id;
    this.diff = diff;
  };

  Clock.prototype.drawClock = function(width, fillColor, strokeColor, pinColor, hourHandColor, minuteHandColor, secondHandColor) {
    canvas = Raphael(this.id,width, width);

    var clock = canvas.circle(width*.5,width*.5, width * .475);

    clock.attr({"fill":fillColor,"stroke":strokeColor,"stroke-width":(width*.01)})

    var hour_sign;

    for(i=0;i<12;i++){
      var start_x = width*.5+Math.round((width*.4)*Math.cos(30*i*Math.PI/180));
      var start_y = width*.5+Math.round((width*.4)*Math.sin(30*i*Math.PI/180));
      var end_x = width*.5+Math.round((width*.45)*Math.cos(30*i*Math.PI/180));
      var end_y = width*.5+Math.round((width*.45)*Math.sin(30*i*Math.PI/180));
      hour_sign = canvas.path("M"+start_x+" "+start_y+"L"+end_x+" "+end_y);
    }

    this.hour_hand = canvas.path("M" + width*.5 + " " + width*.5 + "L" + width*.5 + " " + (width*.25) + "");
    this.hour_hand.attr({stroke: hourHandColor, "stroke-width": width*.03});
    this.minute_hand = canvas.path("M" + width*.5 + " " + width*.5 + "L" + width*.5 + " " + (width*.2) + "");
    this.minute_hand.attr({stroke: minuteHandColor, "stroke-width": width*.02});
    this.second_hand = canvas.path("M" + width*.5 + " " + (width*.55) + "L" + width*.5 + " " + (width*.125) + "");
    this.second_hand.attr({stroke: secondHandColor, "stroke-width": width*.01});
    var pin = canvas.circle(width*.5, width*.5, width*.025);
    pin.attr("fill", pinColor);
    this.updateClock(width)
    var self = this;
    setInterval(function() {
      self.updateClock(width);
    }, 1000);
  };

  Clock.prototype.updateClock = function(width) {

    // get system time
    var now = new Date();

    // get the timezone offset
    var offset = (now.getTimezoneOffset() / 60);

    var hours = (parseInt(now.getHours()) - parseInt(offset)) + parseInt(this.diff);

    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    this.hour_hand.transform("r" + (30*hours+(minutes/2.5)) + "," + width*.5 + "," + width*.5);
    this.minute_hand.transform("r" + 6*minutes + "," + width*.5 + "," + width*.5);
    this.second_hand.transform("r" + 6*seconds + "," + width*.5 + "," + width*.5);
  }


jQuery(document).ready(function(){

  //London weather the class names are different
  jQuery('#londonWeather').weatherfeed(['UKXX0085']);
    jQuery(".londonHover").mouseover(function(){
      jQuery("#londonWeather").show();
    }).mouseleave(function(){
      jQuery("#londonWeather").hide();
    })

  //cyprus, Nicosia weather
  jQuery('#cyprusWeather').weatherfeed(['CYXX0005']);
    jQuery(".cyprusHover").mouseover(function(){
      jQuery("#cyprusWeather").show();
    }).mouseleave(function(){
      jQuery("#cyprusWeather").hide();
    })

   //Mexico city
  jQuery('#mexicoWeather').weatherfeed(['USGA0653']);
    jQuery(".mexicoHover").mouseover(function(){
      jQuery("#mexicoWeather").show();
    }).mouseleave(function(){
      jQuery("#mexicoWeather").hide();
    })

  //moscow weather
  jQuery('#moscowWeather').weatherfeed(['RSXX0063']);
    jQuery(".moscowHover").mouseover(function(){
      jQuery("#moscowWeather").show();
    }).mouseleave(function(){
      jQuery("#moscowWeather").hide();
    })
});


