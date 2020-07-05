let background = document.getElementById('emailPopUpExampleBackground');

background.style.display = 'block';

background.onclick = function() {
	background.style.display = 'none';
}

document.getElementById('emailPopUpExampleClose').onclick = function() {
	background.style.display = 'none';
}