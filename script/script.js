const images = [
    "img/img1.jpg",
    "img/img2.jpg",
    "img/img3.jpg",
    "img/img4.jpg",
    "img/img5.jpg",
    "img/img6.jpg",
    "img/img7.jpg",
    "img/img8.jpg",
    "img/img9.jpg",
    "img/img10.jpg"
];

function cambiarfondo() {

    document.body.classList.add("fade-out");
    document.body.classList.remove("fade-in");

    setTimeout(() => {
  
        const randomImage = images[Math.floor(Math.random() * images.length)];
        document.body.style.backgroundImage = `url('${randomImage}')`;
        document.body.style.backgroundSize = 'cover';
        document.body.style.backgroundPosition = 'center';
        document.body.style.backgroundRepeat = 'no-repeat';

        
        document.body.classList.add("fade-in");
        
    }, 800);
}

cambiarfondo();

setInterval(cambiarfondo, 10000);

