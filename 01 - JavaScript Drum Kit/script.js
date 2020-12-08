function removeTransition(e) {
	console.log(e.propertyName);
	if (e.propertyName !== 'transform') return;
	e.target.classList.remove('playing');
}

playSound = (e) => {
	let key = document.querySelector(`div[data-key="${e.keyCode}"]`);
	let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

	if (!audio) return;

	key.classList.add('playing');
	audio.currentTime = 0;
	audio.play();
};

const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach((key) => key.addEventListener('transitionend', removeTransition));

document.addEventListener('keydown', playSound);
document.addEventListener('keydown', removeTransition);
