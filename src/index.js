import './style.css';
import landscape1 from './landscape1.jpg';
import landscape2 from './landscape2.jpeg';
import landscape3 from './landscape3.jpg';
import landscape4 from './landscape4.jpg';
import dot from './dot.png';


let photoArr = [];
let photoIndex = 0;
let photoMod;
let intervalTimer;

class Photo {
    constructor(name, imageLink, description) {
        this.name = name;
        this.image = imageLink;
        this.description = description;
    }
}

function photoSlider(arrPhotos) {
    const sliderContainer = document.createElement('div');
    const titleBar = document.createElement('div');
    const btnLeft = document.createElement('div');
    const btnRight = document.createElement('div');
    const photoAlbumContainer = document.createElement('div');
    const photoDescriptionConatianer = document.createElement('div');
    const bubbleContainer = document.createElement('div');
    const photosContainer = document.createElement('div');
    const mainPhoto = document.createElement('img');
    const bubbles = document.createElement('div');
    bubbles.id = 'bubble';
    sliderContainer.id = 'sliderContainer';
    titleBar.id = 'titleBar';
    btnLeft.id = 'btnLeft';
    btnRight.id = 'btnRight';
    photoAlbumContainer.id = 'photo';
    photoDescriptionConatianer.id = 'photoDescription';
    bubbleContainer.id = 'bubbleContainer';
    photosContainer.id = 'photoContainer';
    mainPhoto.id = 'mainPhoto';
    for (let i = 0; i < photoMod; i++) {
        let bubble = document.createElement('img');
        bubble.src = dot;
        bubble.addEventListener('click', () => {
            photoIndex = i;
            resetInterval();
            showIMG(photoArr, mainPhoto, titleBar, photoDescriptionConatianer);
        })
        bubbles.appendChild(bubble)
    };
    btnLeft.addEventListener('click', () => {
        if (photoIndex == 0) {
            photoIndex = photoMod - 1;
        } else {
            photoIndex--;
        }
        resetInterval();
        showIMG(photoArr, mainPhoto, titleBar, photoDescriptionConatianer);
    });
    btnRight.addEventListener('click', () => {
        photoIndex++;
        resetInterval();
        showIMG(photoArr, mainPhoto, titleBar, photoDescriptionConatianer);
    });
    photosContainer.appendChild(mainPhoto);
    photoAlbumContainer.append(photosContainer, photoDescriptionConatianer);
    bubbleContainer.appendChild(bubbles);
    sliderContainer.append(titleBar, btnLeft, photoAlbumContainer, btnRight, bubbleContainer);
    showIMG(photoArr, mainPhoto, titleBar, photoDescriptionConatianer)

    return sliderContainer;
}

function showIMG(arrPhoto, mainIMGElement, titleELement, descriptionEL) {
    let number = photoIndex % photoMod;
    const currentIMGSrc = arrPhoto[number].image;
    const currentTitle = arrPhoto[number].name;
    const currentDescription = arrPhoto[number].description;
    arrPhoto[1].current = true;
    mainIMGElement.src = currentIMGSrc;
    titleELement.textContent = currentTitle
    descriptionEL.textContent = currentDescription;
}

function resetInterval() {
    const rightButton = document.getElementById('btnRight');
    clearInterval(intervalTimer);
    intervalTimer = setInterval(() => { rightButton.click() }, 5000);
}

(() => {
    const bodyContainer = document.getElementById('content');

    photoArr[0] = new Photo('Landscape 1', landscape1, 'First Landscape Photo');
    photoArr[1] = new Photo('Landscape 2', landscape2, 'Second Landscape Photo');
    photoArr[2] = new Photo('Landscape 3', landscape3, 'Third Landscape Photo');
    photoArr[3] = new Photo('Landscape 4', landscape4, 'Fourth Landscape Photo');
    photoMod = photoArr.length;
    bodyContainer.appendChild(photoSlider(photoArr));
    resetInterval();
})();