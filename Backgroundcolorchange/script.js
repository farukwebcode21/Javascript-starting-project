let colors =['Blue', 'Yellow', 'Coral', 'Purple', 'Brown', 'GreenYellow', 'Orange', 'Black', 'Green', 'Tomato'];

// get button

const button = document.getElementById('button');

// add event listener
button.addEventListener('click', function(){
    const randomcolor = colors[Math.floor(Math.random() * colors.length)];
    const container = document.getElementById('container');
    container.style.background = randomcolor;
    const colorname = document.getElementById('color-name');
    colorname.innerText =randomcolor;
    console.log(randomcolor);
    
})