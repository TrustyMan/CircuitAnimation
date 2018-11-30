const img_str = {
	lightbulb 	: "assets/images/lightbulb-middle.png",
	battery		: "assets/images/battery.png",
	resistor1	: "assets/images/resistor1.png",
	resistor2	: "assets/images/resistor2.png",
	wire1		: "assets/images/wire-icon1.png",
	wire2		: "assets/images/wire-icon2.png"
}
var lightbulb, battery, resistor1, resistor2, wire1, wire2;
var lb_color = { r: 255, g: 255, b: 0};
var r1=2, r2=2, r3=2, i, v=12;

CanvasRenderingContext2D.prototype.fillEllipse = function() {
  this.beginPath();
  this.ellipse.apply(this, arguments);
  this.fill();
}

function image_tag_create(){
	lightbulb 	= new Image();
	lightbulb.src = img_str.lightbulb;
	// lightbulb.style.backgroundColor = "rgba("+lb_color.r+","+lb_color.g+","+lb_color.b+","+lb_color.a+")";
	// console.log(lightbulb.style.backgroundColor);
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
	canvas.width = width*9/14;
    canvas.height = height*4/10;
    var lb_color1 = "rgba("+lb_color.r+","+lb_color.g+","+lb_color.b+")";;
    var ctx = canvas.getContext("2d");
    var start_x = canvas.width / 24, end_x = canvas.width*23/24;
    var start_y = canvas.height / 13, end_y = canvas.height*12/13;
    var circuit_width = canvas.width * 22 / 24;
    var circuit_height = canvas.height * 11 / 13;
    var r_width = (width > height) ? (height*2/13) : (width*2/24);
    var r_height = (width > height) ? (height/(13*3)) : (width*2/(24*3));
    var wire_width = (width > height) ? (height/(13*10)) : (width/(24*3));
    var lb_width = canvas.width/24;
    var lb_height = lb_width*2/3;
    
    wire1.onload = function(){
    	ctx.drawImage(wire1, start_x, end_y-wire_width/2, circuit_width/2, wire_width);		//fourth
    	ctx.drawImage(wire1, start_x+circuit_width/2, end_y-wire_width/2, circuit_width/2, wire_width);		//fifth
    	ctx.drawImage(wire1, end_x, start_y-wire_width/2, -(circuit_width/2-r_width)/2, wire_width);		//eight th
    	ctx.drawImage(wire1, canvas.width/2, start_y-wire_width/2, (circuit_width/2-r_width)/2, wire_width); //ten th
    	ctx.drawImage(wire1, canvas.width/2, start_y-wire_width/2, -(circuit_width/2-r_width)/2, wire_width); //eleven th
    	ctx.drawImage(wire1, start_x, start_y-wire_width/2, (circuit_width/2-r_width)/2, wire_width); //thirteen th
    }
    wire2.onload = function(){
    	ctx.drawImage(wire2, start_x-wire_width/2, start_y, wire_width, (circuit_height-r_width)/2); //first
    	ctx.drawImage(wire2, start_x-wire_width/2, start_y+(circuit_height-r_width)/2+r_width, wire_width, (circuit_height-r_width)/2); //third
    	ctx.drawImage(wire2, end_x-wire_width/2, end_y, wire_width, -circuit_height/2);				//sixth
    	ctx.drawImage(wire2, end_x-wire_width/2, end_y-circuit_height/2, wire_width, -circuit_height/2);				//seventh
    	ctx.drawImage(wire2, canvas.width/2-wire_width/2, start_y, wire_width , (circuit_height-r_width)/2);			//fourteen th
    	ctx.drawImage(wire2, canvas.width/2-wire_width/2, end_y, wire_width, -(circuit_height-r_width)/2);				//sixteenth
    }
    resistor1.onload = function(){
    	ctx.drawImage(resistor1, end_x-(circuit_width/2-r_width)/2, start_y-r_height/2, -r_width, r_height);		//nine th
    	ctx.drawImage(resistor1, start_x+(circuit_width/2-r_width)/2, start_y-r_height/2, r_width, r_height);		//twelve th
    	ctx.font = '48px serif';
    	ctx.fillStyle = "black";
    	ctx.fillText("R3", end_x-(circuit_width/2-r_width)/2-r_width*2/3, start_y+2*r_height);
    	ctx.fillText("R1", start_x+(circuit_width/2-r_width)/2+r_width/3, start_y+2*r_height);
    }
    resistor2.onload = function(){
    	ctx.drawImage(resistor2, canvas.width/2-r_height/2, canvas.height/2-r_width/2, r_height, r_width);
    	ctx.font = '48px serif';
    	ctx.fillStyle = "black";
    	ctx.fillText("R2", canvas.width/2-r_height/2+r_height, canvas.height/2-r_width/2+r_width*2/3);
    }
    battery.onload = function(){
    	ctx.drawImage(battery, start_x-r_height/2, start_y+(circuit_height-r_width)/2, r_height, r_width);	//second
    	ctx.font = '48px serif';
    	ctx.fillStyle = "black";
    	ctx.fillText("12V", start_x-r_height/2+r_height+5, start_y+(circuit_height-r_width)/2+r_width/2);
    }
    lightbulb.onload = function(){
    	ctx.fillStyle = lb_color1;
		ctx.fillEllipse(end_x+lb_width*2/3, canvas.height/2-lb_height/2+lb_height/2, lb_width/3, lb_height/2, 0, 0, 2 * Math.PI);
		ctx.drawImage(lightbulb, end_x, canvas.height/2-lb_height/2, lb_width, lb_height);
    }
}
$(document).ready(function(){
	image_tag_create();
	circuit_drawing();
	console.log("xxx");
	sliders();
	window.addEventListener('resize', function(){
		image_tag_create();
		circuit_drawing();
		console.log("xxx");
		sliders();
	});
});


    
function onChange1(arg) {
	var r;
	r1 = parseInt(arg.key);
	r = r2*r3/(r2+r3)+r1;
	i = v/r;
	i = i*255/4.0;
	lb_color.r = i;
	lb_color.g = i;
	console.log("aaa:", i);
	ESresize();
}
function onChange2(arg) {
	var r;
	r2 = parseInt(arg.key);
	r = r2*r3/(r2+r3)+r1;
	i = v/r;
	i = i*255/4.0;
	lb_color.r = i;
	lb_color.g = i;
	console.log("aaa:", i);
	ESresize();
}
function onChange3(arg) {
	var r;
	r2 = parseInt(arg.key);
	r = r2*r3/(r2+r3)+r1;
	i = v/r;
	i = i*255/4.0;
	lb_color.r = i;
	lb_color.g = i;
	console.log("aaa:", i);
	ESresize();
}
var data1 = [
		{ key: "2"+'\u2126'},
		{ key: "3"+'\u2126'},
		{ key: "4"+'\u2126'},
		{ key: "5"+'\u2126'}
	];
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
var slider3 = rangeslide("#slider3", {
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
		"valueChanged": [onChange3]
	}
});
function sliders(){
	var width = window.innerWidth;
	var height = window.innerHeight;
	var slider_div = document.getElementById("sliders");
	slider_div.style.width = width*5/21 + "px";
	slider_div.style.height = height+ "px";
	slider_div.style.padding = "1%";
	console.log(slider_div.style.width);
}
function ESresize(){
/*
 * Trigger window resize function in javascript
 * source path : http://codrate.com/questions/how-can-trigger-the-window-resize-event-manually-in-javascript
 */
    if (typeof (Event) === 'function') {
        // modern browsers
        window.dispatchEvent(new Event('resize'));
    } else {
        //This will be executed on old browsers and especially IE
        var resizeEvent = window.document.createEvent('UIEvents');
        resizeEvent.initUIEvent('resize', true, false, window, 0);
        window.dispatchEvent(resizeEvent);
    }
}