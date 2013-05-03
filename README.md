Time Zone Clocks and mose over Weather 
================

[![](https://raw.github.com/sopmac/Clock-and-weather/develop/screenshot.png)](https://raw.github.com/sopmac/Clock-and-weather/develop/screenshot.png)

Object Orientated time zone clocks using highcharts.


Include the required JavaScript and CSS from your HTML page:

```html

<!--@head@
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>

	<script type="text/javascript" rc="/interface_surface/js/highcharts.js"></script>
	<script type="text/javascript" src="/interface_surface/js/highcharts-more.js"></script>
	<script type="text/javascript" src="/interface_surface/js/clocks.js" type="text/javascript"></script>
	<script type="text/javascript" src="js/functions.js"></script>
	<script type="text/javascript" src="js/zweatherfeed.js"></script>

	<link type="text/css" href="css/style.css" media="screen" rel="stylesheet" />


-->

```
Your markup should look something like this:

```html
	
	<div class="singleClock">
		<h3>London</h3>

		<div class="londonHover">
			<small class="digi-time"></small>
			<div id="london"></div>
			<div id="londonWeather"></div>
			<small class="date"></small>
		</div>
	</div>

```

Then just instantiate as follows:

```html

	<script type="text/javascript">
		var londonClock = new Clock("london","1");
		londonClock.drawClock();
	</script>

```

Enjoy!