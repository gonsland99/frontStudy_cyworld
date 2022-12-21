function navHome(){
  document.getElementById("contentFrame").setAttribute("src","home.html");
  document.getElementById("navHome").style = "color:white; background-color: #58beee;";
  document.getElementById("navGame").style = "color:#22afef; background-color: white;";
  document.getElementById("navMusic").style = "color:#22afef; background-color: white;";
}
function navGame(){
  document.getElementById("contentFrame").setAttribute("src","game.html");
  document.getElementById("navHome").style = "color:#22afef; background-color: white;";
  document.getElementById("navGame").style = "color:white; background-color: #58beee;";
  document.getElementById("navMusic").style = "color:#22afef; background-color: white;";
}
function navMusic(){
  document.getElementById("contentFrame").setAttribute("src","music.html");
  document.getElementById("navHome").style = "color:#22afef; background-color: white;";
  document.getElementById("navGame").style = "color:#22afef; background-color: white;";
  document.getElementById("navMusic").style = "color:white; background-color: #58beee;";
}