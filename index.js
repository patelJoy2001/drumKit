// --------------- BUTTON PRESS ----------------


var numOfButtons = document.querySelectorAll(".drum").length;

for(var i = 0; i<numOfButtons ; i++)
{
   document.querySelectorAll(".drum")[i].addEventListener("click",function (){
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    animation(buttonInnerHTML);

   })
}


document.addEventListener("keypress",function(event){
    makeSound(event.key);
    animation(event.key);
})


function makeSound(key)
{
    switch (key)
    {
        case "w" :
        var audio = new Audio ("/projects/Drum Kit Starting Files/sounds/crash.mp3");
        audio.play();
        break;

        case "a" :
        var audio = new Audio ("/projects/Drum Kit Starting Files/sounds/kick-bass.mp3");
        audio.play();
        break;

        case "s" :
            var audio = new Audio ("/projects/Drum Kit Starting Files/sounds/snare.mp3");
            audio.play();

        break;

        case "d" :
            var audio = new Audio ("/projects/Drum Kit Starting Files/sounds/tom-1.mp3");
            audio.play();
        break;

        case "j" :
            var audio = new Audio ("/projects/Drum Kit Starting Files/sounds/tom-2.mp3");
            audio.play();
        break;

        case "k" :
            var audio = new Audio ("/projects/Drum Kit Starting Files/sounds/tom-3.mp3");
            audio.play();
        break;

        case "l" :
            var audio = new Audio ("/projects/Drum Kit Starting Files/sounds/tom-4.mp3");
            audio.play();
        break;

        default :
        console.log("press the relevent key");
        break;
    }
}

function animation (key)
{
   var animebtn =  document.querySelector("."+key);
   animebtn.classList.add("pressed");

   setTimeout (function() {
    animebtn.classList.remove("pressed");
   },100)
}















// // ----------- Button-press

// var numberOfDrum = document.querySelectorAll(".drum").length ; 

// for(var i=0 ; i<numberOfDrum ; i++)
// {
//     document.querySelectorAll(".drum")[i].addEventListener("click",function()
//     {
//            var buttonInnerHTML = this.innerHTML ;
//            makeSound(buttonInnerHTML);  
//            animation(buttonInnerHTML); 
        
// })
// }



// // -------------------key-press
    
// document.addEventListener("keypress",function(event){
    
//     makeSound(event.key);
//     animation(event.key);
// })

// function makeSound(key){
// {
//     switch (key)
//     {
//         case "w":
//             var audio1 = new Audio("/projects/Drum Kit Starting Files/sounds/tom-1.mp3");
//             audio1.play();
//             break;
        
//         case "a":
//             var audio1 = new Audio("/projects/Drum Kit Starting Files/sounds/tom-2.mp3");
//             audio1.play();
//             break;
        
//         case "s":
//             var audio1 = new Audio("/projects/Drum Kit Starting Files/sounds/tom-3.mp3");
//             audio1.play();
//             break;
        
//         case "d":
//             var audio1 = new Audio("/projects/Drum Kit Starting Files/sounds/tom-4.mp3");
//             audio1.play();
//             break;
        
//         case "j":
//             var audio1 = new Audio("/projects/Drum Kit Starting Files/sounds/crash.mp3");
//             audio1.play();
//             break;
        
//         case "k":
//             var audio1 = new Audio("/projects/Drum Kit Starting Files/sounds/kick-bass.mp3");
//             audio1.play();
//             break;
        
//         case "l":
//             var audio1 = new Audio("/projects/Drum Kit Starting Files/sounds/snare.mp3");
//             audio1.play();
//             break;

//             default:
//                 console.log(buttoninnerHTML);
        

//     }
// }
// }


// function animation (key)
// {
//     var activeButton = document.querySelector("."+key);
//     activeButton.classList.add("pressed");

//     setTimeout(function(){
//         activeButton.classList.remove("pressed")
//     },100);

// }