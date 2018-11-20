const img_str = {
	lightbulb 	: "assets/images/lightbulb-middle.png",
	battery		: "assets/images/battery.png",
	resistor1	: "assets/images/resistor1.png",
	resistor2	: "assets/images/resistor2.png",
	wire1		: "assets/images/wire-icon1.png",
	wire2		: "assets/images/wire-icon2.png"
}
var lightbulb, battery, resistor1, resistor2, wire1, wire2;
var lb_color = { r: 255, g: 255, b: 0, a: 1 };
var r1=2, r2=2, i, v=12;

function image_tag_create(){
	lightbulb 	= new Image();
	lightbulb.src = img_str.lightbulb;
	lightbulb.style.backgroundColor = "rgba("+lb_color.r+","+lb_color.g+","+lb_color.b+","+lb_color.a+")";
	console.log(lightbulb.style.backgroundColor);
	battery 	= new Image();
	battery.src = img_str.battery;	
	resistor1 	= new Image();
	resistor1.src = img_str.resistor1;
	resistor2 	= new Image();
	resistor2.src = img_str.resistor2;	
	wire1 	= new Image();
	wire1.src = img_str.wire1;
	wire2	= new Image();
	wire2.src = img_str.wire2;
}

function circuit_drawing(){
	var width = window.innerWidth;
	var height = window.innerHeight;
	
	var canvas = document.getElementById("circuit-canvas");
	canvas.width = width*5/7;
    canvas.height = height*5/7;
    canvas.style.backgroundColor = "rgba("+lb_color.r+","+lb_color.g+","+lb_color.b+","+lb_color.a+")";;
    var ctx = canvas.getContext("2d");
    wire1.onload = function(){
    	ctx.drawImage(wire1, width/18, height/14, width/4, height/35);
    	ctx.drawImage(wire1, width/18, height/14+height*10/(7*9)-2+width/12+height*10/(7*9)-height/70, width/4, height/35);
    	ctx.drawImage(wire1, width/18+width/4+width/12-2, height/14, width/4, height/35);
    	ctx.drawImage(wire1, width/18+width/4+width/12-2, height/14+height*10/(7*9)-2+width/12+height*10/(7*9)-height/70, width/4, height/35);
    }
    wire2.onload = function(){
    	ctx.drawImage(wire2, width/18, height/14, height/35, height*10/(7*9));
    	ctx.drawImage(wire2, width/18, height/14+height*10/(7*9)-2+width/12, height/35, height*10/(7*9));
    	ctx.drawImage(wire2, width/18+width/4+width/12-2+width/4-height/35, height/14, height/35, height*10/(7*9)+width/12+height/6);
    }
    resistor1.onload = function(){
    	ctx.drawImage(resistor1,width/18+width/4-2, height/16, width/12, height/20);
    }
    resistor2.onload = function(){
    	ctx.drawImage(resistor2, width/18-10, height/14+height*10/(7*9)-2, height/20, width/12);
    }
    battery.onload = function(){
    	ctx.drawImage(battery, width/18+width/4, height/14+height*10/(7*9)-2+width/12+height*10/(7*9)-height/40, width/12, height/20);
    	ctx.font = '48px serif';
    	ctx.fillText("12V",width/18+width/4, height/14+height*10/(7*9)-4+width/12+height*10/(7*9)-height/40);
    }
    lightbulb.onload = function(){
    	ctx.drawImage(lightbulb, width/18+width/4+width/12-2+width/4, height/14+(height*10/(7*9)+width/12+height/6)/2, width/24, height/20);
    }
}
$(document).ready(function(){
	image_tag_create();
	circuit_drawing();
	window.addEventListener('resize', function(){
		image_tag_create();
		circuit_drawing();
	});
});

var data1 = [
		{ key: "2"+'\u2126'},
		{ key: "3"+'\u2126'},
		{ key: "4"+'\u2126'},
		{ key: "5"+'\u2126'}
	];
    
function onChange1(arg) {
	r1 = parseInt(arg.key);
	i = v/(r1+r2);
	var canvas = document.getElementById("circuit-canvas");
    canvas.style.backgroundColor = "rgba("+lb_color.r+","+lb_color.g+","+lb_color.b+","+i/3+")";;
}
function onChange2(arg) {
	r2 = parseInt(arg.key);
	i = v/(r1+r2);
	var canvas = document.getElementById("circuit-canvas");
    canvas.style.backgroundColor = "rgba("+lb_color.r+","+lb_color.g+","+lb_color.b+","+i/3+")";;
}


var slider1 = rangeslide("#slider1", {
	data: data1,
	thumbWidth: 32,
	thumbHeight: 32,
	labelsPosition: "alternate",
	showLabels: true,
	startAlternateLabelsFromTop: true,
	trackHeight: 20,
    dataSource: "value",
    labelsContent: "key",
    valueIndicatorContent: "key",
	showTicks: true,
	tickHeight: 30,
	handlers: {
		"valueChanged": [onChange1]
	}
});

var slider2 = rangeslide("#slider2", {
	data: data1,
	thumbWidth: 32,
	thumbHeight: 32,
	labelsPosition: "alternate",
	showLabels: true,
	startAlternateLabelsFromTop: true,
	trackHeight: 20,
    dataSource: "value",
    labelsContent: "key",
    valueIndicatorContent: "key",
	showTicks: true,
	tickHeight: 30,
	handlers: {
		"valueChanged": [onChange2]
	}
});