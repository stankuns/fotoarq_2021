// 2021 March 22nd | script by Fernando Stankuns

// change the ARCHITECTURAL photo when hovering | troca a foto de ARQUITETURA quando passa o mouse
let miniArch = document.getElementById('photo-architecture');
miniArch.onmouseover = changeImageArch;
miniArch.onmouseout = reChangeImageArch;

function changeImageArch() {
  miniArch.src = "./images/architecture280on.jpg"
}

function reChangeImageArch() {
  miniArch.src = "./images/architecture280a.jpg"
}

// change the THEATER photo when hovering | troca a foto de TEATRO quando passa o mouse
let miniTheater = document.getElementById('photo-theater');
miniTheater.onmouseover = changeImageTh;
miniTheater.onmouseout = reChangeImageTh;

function changeImageTh() {
  miniTheater.src = "./images/theater280on.jpg"
}

function reChangeImageTh() {
  miniTheater.src = "./images/theater280a.jpg"
} 

// change the AERIAL photo when hovering | troca a foto AÉREA quando passa o mouse
let miniAerial = document.getElementById('photo-aerial');
miniAerial.onmouseover = changeImageAerial;
miniAerial.onmouseout = reChangeImageAerial;

function changeImageAerial() {
  miniAerial.src = "./images/aerial280on.jpg"
}

function reChangeImageAerial() {
  miniAerial.src = "./images/aerial280a.jpg"
} 

// change the PORTRAIT photo when hovering | troca a foto de RETRATO quando passa o mouse
let miniPortrait = document.getElementById('photo-portrait');
miniPortrait.onmouseover = changeImagePortrait;
miniPortrait.onmouseout = reChangeImagePortrait;

function changeImagePortrait() {
  miniPortrait.src = "./images/portrait280on.jpg"
}

function reChangeImagePortrait() {
  miniPortrait.src = "./images/portrait280a.jpg"
} 

// change the URBANISM photo when hovering | troca a foto de URBANISMO quando passa o mouse
let miniUrbanism = document.getElementById('photo-urbanism');
miniUrbanism.onmouseover = changeImageUrbanism;
miniUrbanism.onmouseout = reChangeImageUrbanism;

function changeImageUrbanism() {
  miniUrbanism.src = "./images/urbanism280on.jpg"
}

function reChangeImageUrbanism() {
  miniUrbanism.src = "./images/urbanism280a.jpg"
} 

// change the STILL photo when hovering | troca a foto de STILL quando passa o mouse
let miniStill = document.getElementById('photo-still');
miniStill.onmouseover = changeImageStill;
miniStill.onmouseout = reChangeImageStill;

function changeImageStill() {
  miniStill.src = "./images/still280on.jpg"
}

function reChangeImageStill() {
  miniStill.src = "./images/still280a.jpg"
} 

// change the LANDSCAPE photo when hovering | troca a foto de PAISAGEM quando passa o mouse
let miniLandscape = document.getElementById('photo-landscape');
miniLandscape.onmouseover = changeImageLandscape;
miniLandscape.onmouseout = reChangeImageLandscape;

function changeImageLandscape() {
  miniLandscape.src = "./images/landscape280on.jpg"
}

function reChangeImageLandscape() {
  miniLandscape.src = "./images/landscape280a.jpg"
} 

// change the EVENT photo when hovering | troca a foto de EVENTO quando passa o mouse
let miniEvent = document.getElementById('photo-event');
miniEvent.onmouseover = changeImageEvent;
miniEvent.onmouseout = reChangeImageEvent;

function changeImageEvent() {
  miniEvent.src = "./images/event280on.jpg"
}

function reChangeImageEvent() {
  miniEvent.src = "./images/event280a.jpg"
} 

// change the LANDSCAPE ARCHITECTURE photo when hovering | troca a foto de PAISAGISMO quando passa o mouse
let miniLandsarch = document.getElementById('photo-landsarch');
miniLandsarch.onmouseover = changeImageLandsarch;
miniLandsarch.onmouseout = reChangeImageLandsarch;

function changeImageLandsarch() {
  miniLandsarch.src = "./images/landscape_architecture280on.jpg"
}

function reChangeImageLandsarch() {
  miniLandsarch.src = "./images/landscape_architecture280a.jpg"
} 

// change the MALL photo when hovering | troca a foto de SHOPPING CENTER quando passa o mouse
let miniMall = document.getElementById('photo-mall');
miniMall.onmouseover = changeImageMall;
miniMall.onmouseout = reChangeImageMall;

function changeImageMall() {
  miniMall.src = "./images/mall280on.jpg"
}

function reChangeImageMall() {
  miniMall.src = "./images/mall280a.jpg"
} 

// change the SCENOGRAPHY photo when hovering | troca a foto de CENÁRIO quando passa o mouse
let miniScenography = document.getElementById('photo-scenography');
miniScenography.onmouseover = changeImageScenography;
miniScenography.onmouseout = reChangeImageScenography;

function changeImageScenography() {
  miniScenography.src = "./images/scenography280on.jpg"
}

function reChangeImageScenography() {
  miniScenography.src = "./images/scenography280a.jpg"
} 

// change the CONSTRUCTION photo when hovering | troca a foto de CONSTRUÇÃO CIVIL quando passa o mouse
let miniConstruction = document.getElementById('photo-construction');
miniConstruction.onmouseover = changeImageConstruction;
miniConstruction.onmouseout = reChangeImageConstruction;

function changeImageConstruction() {
  miniConstruction.src = "./images/construction280on.jpg"
}

function reChangeImageConstruction() {
  miniConstruction.src = "./images/construction280a.jpg"
}


// change the banner image randomly | troca a imagem do banner randomicamente
window.onload = choosePic;

var myPix = new Array('./images/banner1.jpg', './images/banner2.jpg', './images/banner3.jpg', './images/banner4.jpg', './images/banner5.jpg', './images/banner6.jpg',
 './images/banner7.jpg', './images/banner8.jpg', './images/banner10.jpg', './images/banner11.jpg', './images/banner12.jpg');

function choosePic() {
     var randomNum = Math.floor(Math.random() * myPix.length);
     document.getElementById("banner-inicial").src = myPix[randomNum];
} 
