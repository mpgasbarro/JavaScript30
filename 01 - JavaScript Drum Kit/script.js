

playSound = (e) => {
    let key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
   
    if (!audio) return;
    
        audio.play(); 
    

} 
document.addEventListener("keydown", playSound)
