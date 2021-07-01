var Mouse_Event = "empty";
var Last_Postion_Of_X,Last_Postion_Of_Y;
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
color = "Black";
Width_Of_The_Line = 1;

canvas.addEventListener("mouseDown", my_mousedown);
function my_mousedown(e){
    color = document.getElementById("color").value;
    Width_Of_The_Line = document.getElementById("width").value;
    Mouse_Event = "mouseDown"
    
}
canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e){
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft; 
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;
    if (Mouse_Event == "mouseDown") {
        ctx.beginPath(); 
        ctx.strokeStyle = color; 
        ctx.lineWidth = Width_Of_The_Line;
        ctx.moveTo(Last_Position_Of_X, Last_Position_Of_Y);
        ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y); 
        ctx.stroke();
    } 
    Last_Position_Of_X = current_position_of_mouse_x; 
    Last_Position_Of_Y = current_position_of_mouse_y;
}