var drumButton = document.querySelectorAll(".drum");

// function handleButton(){
//     this.style.color = "white";
// }

for(var i=0; i<document.querySelectorAll(".drum").length; i++) {

    drumButton[i].addEventListener("click", function(){
        var buttonInnerHTML = this.innerHTML;
        

    switch(buttonInnerHTML){
        case "w":
            var audio = new Audio('../Drum Kit Starting Files/sounds/tom-1.mp3');
            audio.play();
            break;
        case "a":
            var audio = new Audio('../Drum Kit Starting Files/sounds/tom-2.mp3');
            audio.play();
            break;  
        case "s":
            var audio = new Audio('../Drum Kit Starting Files/sounds/tom-3.mp3');
            audio.play();
            break;
        case "d":
            var audio = new Audio('../Drum Kit Starting Files/sounds/tom-4.mp3');
            audio.play();
            break;
        case "j":
            var audio = new Audio('../Drum Kit Starting Files/sounds/snare.mp3');
            audio.play();
            break;
        case "k":
            var audio = new Audio('../Drum Kit Starting Files/sounds/crash.mp3');
            audio.play();
            break;
        case "l":
            var audio = new Audio('../Drum Kit Starting Files/sounds/kick-bass.mp3');
            audio.play();
            break;
            }
    });

}

function func1(event) {
    var buttonHit = event.key;
    buttonAnimation(buttonHit);
    switch(buttonHit) {
        case "w":
            var audio = new Audio('../Drum Kit Starting Files/sounds/tom-1.mp3');
            audio.play();
            
        break;
        case "a":
            var audio = new Audio('../Drum Kit Starting Files/sounds/tom-2.mp3');
            audio.play();
            
        break
        case "s":
            var audio = new Audio('../Drum Kit Starting Files/sounds/tom-3.mp3');
            audio.play();
            
        break;
        case "d":
            var audio = new Audio('../Drum Kit Starting Files/sounds/tom-4.mp3');
            audio.play();
            
        break;
        case "j":
            var audio = new Audio('../Drum Kit Starting Files/sounds/snare.mp3');
            audio.play();
            
        break;
        case "k":
            var audio = new Audio('../Drum Kit Starting Files/sounds/crash.mp3');
            audio.play();
            
            break;
        case "l":
            var audio = new Audio('../Drum Kit Starting Files/sounds/kick-bass.mp3');
            audio.play();
            
            break;
            
    }
}
document.addEventListener("keypress", func1);

function buttonAnimation(currentKey) {
    var button = document.querySelector("." + currentKey);
    button.classList.add("pressed");
    setTimeout(()=>{button.classList.remove("pressed");},100);
}