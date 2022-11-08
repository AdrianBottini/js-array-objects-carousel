const arrImages = [
	{
		image: 'img/01.webp',
		title: "Marvel's Spiderman Miles Morale",
		text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
	},
	{
		image: 'img/02.webp',
		title: 'Ratchet & Clank: Rift Apart',
		text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
	},
	{
		image: 'img/03.webp',
		title: 'Fortnite',
		text: 'Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.',
	},
	{
		image: 'img/04.webp',
		title: 'Stray',
		text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
	},
	{
		image: 'img/05.webp',
		title: "Marvel's Avengers",
		text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
	},
];

console.table(arrImages);

const album = document.getElementById("album");

// for(let i=0; i<arrImages.length; i++){
//     album.innerHTML += `<img src="img/01.webp">`
// }

const eleSliderViewer = document.querySelector('.slider-viewer');
const eleSliderThumbs = document.querySelector('.thumbs');
const eleBtnLeft = document.querySelector('.btn-left');
const eleBtnRight = document.querySelector('.btn-right');

for (let i = 0; i < arrImages.length; i++) {
	const eleImg = document.createElement('img');
	eleImg.src = arrImages[i].image;
	eleImg.classList.add('slider-img');
	if (i === 0) {
		eleImg.classList.add('active');
	}
	eleSliderViewer.append(eleImg);

	const eleThumb = document.createElement('img');
	eleThumb.src = arrImages[i].image;
	eleThumb.classList.add('thumb-img');
	if (i === 0) {
		eleThumb.classList.add('active');
	}
	eleSliderThumbs.append(eleThumb);
}

const listEleImg = document.querySelectorAll('.slider-img'); 
const listThumbs = document.querySelectorAll('.thumb-img');

let activeIndex = 0;

eleBtnRight.addEventListener('click', function () {
	listEleImg[activeIndex].classList.remove('active');
	listThumbs[activeIndex].classList.remove('active');

	activeIndex++;
	if (activeIndex === listEleImg.length) {
		activeIndex = 0;
	}

	listEleImg[activeIndex].classList.add('active');
	listThumbs[activeIndex].classList.add('active');
});

eleBtnLeft.addEventListener('click', function () {
	listEleImg[activeIndex].classList.remove('active');
	listThumbs[activeIndex].classList.remove('active');

	if (activeIndex === 0) {
		activeIndex = listEleImg.length;
	}
	activeIndex--;

	listEleImg[activeIndex].classList.add('active');
	listThumbs[activeIndex].classList.add('active');
});