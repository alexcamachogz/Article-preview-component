const shareButton = document.getElementById('share-button');
const shareMedia = document.getElementById('social-media');
const returnButton = document.getElementById('return-button')

shareButton.addEventListener('click', () => {
	shareMedia.classList.toggle('active')
});

returnButton.addEventListener('click', () => {
	if (shareMedia.classList.contains('active')) {
		shareMedia.classList.remove('active')
	}
});