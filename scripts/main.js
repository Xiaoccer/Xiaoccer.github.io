let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/hacker.png'){
        myImage.setAttribute('src', 'images/gamer.png');
    } else {
        myImage.setAttribute('src', 'images/hacker.png');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('请输入你的名字。');
    if (!myName || myName == null) {
        setUserName();
    } else {            
        localStorage.setItem('name', myName);
        myHeading.textContent = 'talk is cheap, show me the code: ' + myName; 
    }
}

if (!localStorage.getItem('name')){
    setUserName();
} else {
    let storeName = localStorage.getItem('name');
    myHeading.textContent = 'talk is cheap, show me the code: ' + storeName;
}

myButton.onclick = function() {
    setUserName();
}