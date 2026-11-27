let j = new Player(200,300,"green");


function setup() {
    createCanvas(800, 600);

    angleMode(DEGREES)
}

function draw() {
    background(220);

    text("X:"+mouseX+" Y:"+mouseY,50,50);

    j.show();
    j.movimento();
}


/*
Referencias
CursoAim top down
https://www.google.com/search?q=cursorAim+p5.js&oq=cursorAim+p5.js
&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIKCAEQABgIGA0YHjIHCAIQABjvBdIBCDc4NDdqMGo3qAIIsAIB&sourceid=chrome&source=chrome.ob&ie=UTF-8

Referencia de codigo completo

https://www.google.com/search?q=top_down_shooter+with+p5.js&oq=top_down_shooter+with+p5.js
&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIJCAEQIRgKGKABMgkIAhAhGAoYoAHSAQg3OTQzajBqNKgCALACAQ&sourceid=chrome&source=chrome.ob&ie=UTF-8

*/