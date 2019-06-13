window.addEvent('load', function() {
	var list = $$('ul#mainlevel-nav li a');
		list.each(function(element) {
			var fx = new Fx.Styles(element, {duration:400, wait:false});
			element.addEvent('mouseenter', function(){
			fx.start({
			'padding-top' : '5',
			'padding-bottom' : '31'
			});
		});
		element.addEvent('mouseleave', function(){
			fx.start({
			'padding-top': '18',
			'padding-bottom' : '18'
			});
		});
	});
	var list = $$('#topmenu ul.menu-nav li a');
		list.each(function(element) {
			var fx = new Fx.Styles(element, {duration:400, wait:false});
			element.addEvent('mouseenter', function(){
			fx.start({
			'padding-top' : '5',
			'padding-bottom' : '31'
			});
		});
		element.addEvent('mouseleave', function(){
			fx.start({
			'padding-top': '18',
			'padding-bottom' : '18'
			});
		});
	});
	var list = $$('ul.menu li a');
		list.each(function(element) {
			var fx = new Fx.Styles(element, {duration:400, wait:false});
			element.addEvent('mouseenter', function(){
			fx.start({
			'background-color' : '#181818',
			'color' : '#fff'
			});
		});
		element.addEvent('mouseleave', function(){
			fx.start({
			'background-color': '#ffffff',
			'color' : '#181818'
			});
		});
	});
	var list = $$('ul.menu li li a span');
		list.each(function(element) {
			var fx = new Fx.Styles(element, {duration:400, wait:false});
			element.addEvent('mouseenter', function(){
			fx.start({
			'background-color' : '#181818',
			'color' : '#fff'
			});
		});
		element.addEvent('mouseleave', function(){
			fx.start({
			'background-color': '#ffffff',
			'color' : '#181818'
			});
		});
	});
	var list = $$('ul#mainlevel li a');
		list.each(function(element) {
			var fx = new Fx.Styles(element, {duration:400, wait:false});
			element.addEvent('mouseenter', function(){
			fx.start({
			'background-color' : '#181818',
			'color' : '#fff'
			});
		});
		element.addEvent('mouseleave', function(){
			fx.start({
			'background-color': '#ffffff',
			'color' : '#181818'
			});
		});
	});
});