
let btns = document.querySelectorAll('.alphabets');

for (i of btns) {
  i.addEventListener("click", function() {
    var buttonInnerHTML = this.innerHTML;
   makeSound(buttonInnerHTML);
buttonAnimation(buttonInnerHTML);
  });
}

document.addEventListener("keydown", function(event){
      makeSound(event.key);
      buttonAnimation(event.key);
})

function makeSound(key){
  switch (key) {
    case "a":
      var audio = new Audio("sounds/a.mp3");
      audio.play();
      break;
   
      case "b":
        var audio = new Audio("sounds/b.mp3");
      audio.play();
      break;

      case "c":
        var audio = new Audio("sounds/c.mp3");
      audio.play();
      break;

      case "d":
      var audio = new Audio("sounds/d.mp3");
      audio.play();
      break;



    default:
      break;
   }
}
function buttonAnimation(currentKey){
  var activeButton = document.querySelector("."+ currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  }, 100)
}