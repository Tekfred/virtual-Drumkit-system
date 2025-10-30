
const clickDrumButton = document.querySelectorAll('.drum-btn').length;

for(let i = 0; i <clickDrumButton; i++){
    document.querySelectorAll('.drum-btn')[i].addEventListener("click", function() {
    
       var buttonInnerHTML = this.innerHTML;
       makeSound(buttonInnerHTML);  
});
}

 
document.addEventListener("keypress", function(event){

 makeSound(event.key);

}) 

function makeSound(key){

   switch (key){
        case "w":
            var snare = new Audio('/media/sounds/snare.mp3');
            snare.play();
        break;

            case "a":
            var crash = new Audio('/media/sounds/crash.mp3');
           crash.play();
            break;

            case "s":
            var tom1 = new Audio('/media/sounds/tom-1.mp3');
            tom1.play();
            break;

            case "d":
                var tom2 = new Audio('/media/sounds/tom-2.mp3');
               tom2.play();
            break;

             case "j":
                var tom3 = new Audio('/media/sounds/tom-3.mp3');
               tom3.play();
            break;

            case "k":
                var kickb = new Audio('/media/sounds/kick-bass.mp3');
               kickb.play();
            break;

            case "l":
                var tom4 = new Audio('/media/sounds/tom-4.mp3');
               tom4.play();
            break;


        default: console.log(buttonInnerHTML); 
       }
}

