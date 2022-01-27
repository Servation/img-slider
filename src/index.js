import './style.css';

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
    const leftPhoto = document.createElement('img');
    const rightPhoto = document.createElement('img');
    sliderContainer.id = 'sliderContainer';
    titleBar.id = 'titleBar';
    btnLeft.id = 'btnLeft';
    btnRight.id = 'btnRight';
    photoAlbumContainer.id = 'photo';
    photoDescriptionConatianer.id = 'photoDescription';
    bubbleContainer.id = 'bubbleContainer';
    photosContainer.id = 'photoContainer';
    mainPhoto.id = 'mainPhoto';
    leftPhoto.id = 'leftPhoto';
    rightPhoto.id = 'rightPhot';
    btnLeft.addEventListener('click', () => {
        let lastObj = photoArr.pop();
        photoArr.unshift(lastObj);
        showIMG(photoArr, mainPhoto, leftPhoto, rightPhoto, titleBar, photoDescriptionConatianer);
    });
    btnRight.addEventListener('click', () => {
        let firstObj = photoArr.shift();
        photoArr.push(firstObj);
        showIMG(photoArr, mainPhoto, leftPhoto, rightPhoto, titleBar, photoDescriptionConatianer);
    });
    photosContainer.append(leftPhoto, rightPhoto, mainPhoto);
    photoAlbumContainer.appendChild(photosContainer, photoDescriptionConatianer);
    sliderContainer.append(titleBar, btnLeft, photoContainer, btnRight, bubbleContainer);
    return sliderContainer;
}

function showIMG(arrPhoto, mainIMGElement, leftIMGElement, rightIMGElement, titleELement, descriptionEL) {
    const currentIMGSrc = arrPhoto[1].image;
    const currentTitle = arrPhoto[1].name;
    const currentDescription = arrPhoto[1].description;
    const leftIMGSrc = arrPhoto[0].image;
    const rightIMGSrc = arrPhoto[2].image;
    mainIMGElement.src = currentIMGSrc;
    titleELement.textContext = currentTitle
    descriptionEL.textContext = currentDescription;
    leftIMGElement.src = leftIMGSrc;
    rightIMGElement.src = rightIMGSrc;
}

