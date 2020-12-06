 function removeTransition(e) {
     console.log(e.propertyName);
     let keys = document.querySelector(`div[data-key="${e.keyCode}"]`);
     if(keys.classList.contains("playing")){
         keys.classList.remove("playing")
     }
 }

playSound = (e) => {
    let key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
   
    if (!audio) return;

        key.classList.add('playing');
        audio.currentTime = 0
        audio.play();
        
} 


document.addEventListener("keydown", playSound)
document.addEventListener("keydown", removeTransition)
