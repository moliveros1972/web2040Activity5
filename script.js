var div1 = document.createElement("div");
div1.setAttribute("id", "background");
document.body.appendChild(div1);

var img1 = document.createElement("img");
img1.setAttribute("class", "bgimage");
img1.src = "forest-clipart-cute-forest-background-6.jpg";
div1.appendChild(img1);


var div2 = document.createElement("div");
div2.setAttribute("id", "monkeyDiv");
document.body.appendChild(div2);

var img2 = document.createElement("img");
img2.src = "monkey.gif";
img2.setAttribute("id", "monkeyPic");
div2.appendChild(img2);


var div3 = document.createElement("div");
div3.setAttribute("id", "buttonsHere");
document.body.appendChild(div3);

var button1 = document.createElement("button");
button1.setAttribute("type", "button");
button1.setAttribute("onClick", "jump()");
var button1Text = document.createTextNode("Jump");
button1.appendChild(button1Text);
div3.appendChild(button1);


var button2 = document.createElement("button");
button2.setAttribute("type", "button");
button2.setAttribute("onClick", "stop()");
var button2Text = document.createTextNode("Stop");
button2.appendChild(button2Text);
div3.appendChild(button2);


var div4 = document.createElement("div");
div4.setAttribute("id", "lilBox");
var div4Text = document.createTextNode("0");
div4.appendChild(div4Text);
document.body.appendChild(div4);

function jump() {
var myMonkey = document.getElementById("monkeyPic");
    myMonkey.src="Up_and_down.gif";
var score = document.getElementById("lilBox");
    score.innerHTML = parseInt(score.innerHTML) + 1;
}
function stop() {
    var myMonkey = document.getElementById("monkeyPic");
    myMonkey.src="monkey.gif";
}