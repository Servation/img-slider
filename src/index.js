import './style.css';
import landscape1 from './landscape1.jpg';
import landscape2 from './landscape2.jpeg';
import landscape3 from './landscape3.jpg';
import landscape4 from './landscape4.jpg';


let photoArr = [];

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
    sliderContainer.id = 'sliderContainer';
    titleBar.id = 'titleBar';
    btnLeft.id = 'btnLeft';
    btnRight.id = 'btnRight';
    photoAlbumContainer.id = 'photo';
    photoDescriptionConatianer.id = 'photoDescription';
    bubbleContainer.id = 'bubbleContainer';
    photosContainer.id = 'photoContainer';
    mainPhoto.id = 'mainPhoto';
    btnLeft.addEventListener('click', () => {
        let lastObj = photoArr.pop();
        photoArr.unshift(lastObj);
        showIMG(photoArr, mainPhoto, titleBar, photoDescriptionConatianer);
    });
    btnRight.addEventListener('click', () => {
        let firstObj = photoArr.shift();
        photoArr.push(firstObj);
        showIMG(photoArr, mainPhoto, titleBar, photoDescriptionConatianer);
    });
    photosContainer.appendChild(mainPhoto);
    photoAlbumContainer.append(photosContainer, photoDescriptionConatianer);
    sliderContainer.append(titleBar, btnLeft, photoAlbumContainer, btnRight, bubbleContainer);
    showIMG(photoArr, mainPhoto, titleBar, photoDescriptionConatianer)
    return sliderContainer;
}

function showIMG(arrPhoto, mainIMGElement, titleELement, descriptionEL) {
    const currentIMGSrc = arrPhoto[1].image;
    const currentTitle = arrPhoto[1].name;
    const currentDescription = arrPhoto[1].description;
    mainIMGElement.src = currentIMGSrc;
    titleELement.textContent = currentTitle
    descriptionEL.textContent = currentDescription;
}

(() => {
    const bodyContainer = document.getElementById('content');

    photoArr[0] = new Photo('Landscape 1', landscape1, 'First Landscape Photo');
    photoArr[1] = new Photo('Landscape 2', landscape2, 'Second Landscape Photo');
    photoArr[2] = new Photo('Landscape 3', landscape3, 'Third Landscape Photo');
    photoArr[3] = new Photo('Landscape 4', landscape4, 'Fourth Landscape Photo');
    bodyContainer.appendChild(photoSlider(photoArr));
})();