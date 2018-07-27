var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');

btn = document.querySelector('button');
var overlay = document.querySelector('.overlay');
/* Looping through images */
for(let i=0; i<5; i++) {
  let newImage = document.createElement('img');
  let imgUrl = `./images/pic${i + 1}.jpg`
  newImage.setAttribute('src', imgUrl);
  thumbBar.appendChild(newImage);
  newImage.onclick = function(){
    displayedImage.setAttribute('src', imgUrl);
  }
}

/* Wiring up the Darken/Lighten button */
btn.onclick = function(){
  let btnClass = btn.getAttribute('class');
  if(btnClass === 'dark') {
    btn.setAttribute('class', 'light');
    overlay.style.backgroundColor = "rgb(0,0,0,0.5)"
    btn.textContent = 'Lighten'
  }
  else{
    btn.setAttribute('class', 'dark');
    overlay.style.backgroundColor = "rgb(0,0,0,0)"
    btn.textContent = 'Darken'
  }
}
