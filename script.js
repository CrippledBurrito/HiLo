var answer = prompt("Im a number 1-10") 

$(document).ready(function () {
 if (answer > 6 && answer < 8){
     $("img").attr("src", "https://media.giphy.com/media/lk9MPPlFZfETm/giphy.gif")
 } else {
  $("img").attr("src", "https://pbs.twimg.com/profile_images/834814974287544326/fkefG_VY.jpg")
 }
});