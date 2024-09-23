const images = document.querySelectorAll('img')
const btn = document.querySelector('button');

const imageSrc = [
    "./Images/1.png",
    "./Images/2.png",
    "./Images/3.png",
    "./Images/4.png",
    "./Images/5.png",
    "./Images/6.png"
];

const updateImages = () => {
    return Math.floor(Math.random() * imageSrc.length);
}
btn.addEventListener('click', () => {
    const interval= setInterval(() => {
        images.forEach(img => {
        img.src = imageSrc[updateImages()];
    })
    }, 50);

    setTimeout(() => {
        clearInterval(interval);
    }, 1100);
    
})