canvas = document.getElementById('mycanvas');
ctx = canvas.getContext("2d");
anchoexplorador = 100;
altoexplorador = 100;
exploradorX = 10;
exploradorY = 10;
backgroundimage = "fondo chido.png";
exploradorimage = "auto chido.png";
function add (){
    background_imagetag = new Image();
    background_imagetag.onload = uploadBackground;
    background_imagetag.src = backgroundimage;
    explorador_imagetag = new Image();
    explorador_imagetag.onload = uploadExplorador;
    explorador_imagetag.src = exploradorimage;

};
function uploadBackground (){
    ctx.drawImage(background_imagetag,0,0,0,canvas.width,canvas.height);
};
function uploadExplorador(){
    ctx.drawImage(explorador_imagetag,exploradorX,exploradorY,anchoexplorador,altoexplorador);
};
window.addEventListener("keydown", my_keydown);
function my_keydown(e) {
keyPressed = e.keyCode;
if(keyPressed == '38') {
    up();
}
if(keyPressed == '40')
{ down(); }
if(keyPressed == '65') { left(); }
if(keyPressed == '68') { right(); } 
function up() {
     if(exploradorY >=0) 
     { exploradorY = exploradorY - 10; 
        console.log("Cuando se presione la flecha hacia arriba, x = " + exploradorX + " | y = " +exploradorY); 
        uploadBackground(); 
        uploadExplorador(); } }
     }
     function down() { if(exploradorY <=500) { exploradorY =exploradorY+ 10; console.log("Cuando se presione la flecha hacia abajo, x = " + exploradorX + " | y = " +exploradorY); uploadBackground(); uploadrover(); } }