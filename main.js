var last_position_of_x, last_position_of_y;
color = "black";
width_of_line = 2;

canvas = document.getElementById('my_canvas');
ctx = canvas.getContext("2d");

var width = screen.width;//to know the screen size of the user(pc/mobile)

new_width = screen.width - 200 ;//size of the canvas which is adjusted according to screen width to make it fit 
new_height = screen.height - 400;////size of the canvas which is adjusted according to screen height to make it fit 
  //for tablets or mobiles  
if(width < 992)
  {
  document.getElementById("my_canvas").width = new_width;
    document.getElementById("my_canvas").height=new_height;
    document.body.style.overflow = "hidden";//to disable the scrolling of the page
    }
    //touchstart is same as mousedown 
  canvas.addEventListener("touchstart", my_touchstart);

function my_touchstart(e) 
{
  
  color = document.getElementById("color").value;
  width_of_line = document.getElementById("width_of_line").value;
 
    // This will give the  coordinates where we touch on the canvas with one finger.     
    last_position_of_x = e.touches[0].clientX - canvas.offsetLeft;
    last_position_of_y = e.touches[0].clientY - canvas.offsetTop;
}

//touchmove is same as mousemove
canvas.addEventListener("touchmove", my_touchmove);

function my_touchmove(e) 
{

  
    current_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
    current_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;

    //  same old as the paint web app
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width_of_line;
    ctx.moveTo(last_position_of_x, last_position_of_y);
    ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y);
   ctx.stroke();

    last_position_of_x = current_position_of_touch_x; 
    last_position_of_y = current_position_of_touch_y;
    
}
canvas.addEventListener("mousemove",my_mousemove)
function my_mousemove(){
  current_position_of_mouse_x=e.clientX - canvas.offsetLeft;
  current_position_of_touch_y=e.clientY - canvas.offsetTop;
  if(mouseEvent== "mymousedown"){
    ctx.beginPath();
    ctx.stroke = color;
    ctx.lineWidth = width_of_line;
    ctx.moveTo(last_position_of_x, last_position_of_y);
    ctx.lineTo(current_position_of_x, current_position_of_y);
    ctx.stroke();
  }
  last_position_of_x = current_position_of_x
  last_position_of_y = current_position_of_y
}
function clear_canvas() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}
    