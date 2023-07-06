const canvas = document.getElementById('dotcanvas');
const ratioEl = document.getElementById('ratio');
const context = canvas.getContext('2d');
const sliderEl = document.getElementById('dotslider');
const slidervalueEl = document.getElementById('slidervalue');

canvas.width = 400;
canvas.height = 400;


sliderEl.addEventListener('input', function() {
    let innerCount = 0;
    context.clearRect(0, 0, canvas.width, canvas.height);
    let numOfDots = sliderEl.value;
    slidervalueEl.textContent = sliderEl.value;
    for (let i = 1; i <= numOfDots; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
  
        context.beginPath();
        context.arc(x, y, 2, 0, 2 * Math.PI);
        let distance = Math.sqrt(Math.pow(x - 200, 2) + Math.pow(y - 200, 2));
        if (distance < 200) {
            context.fillStyle = 'blue';
            innerCount++;
        } else {
            context.fillStyle = 'red';
        }
  
        context.fill();
    }
    ratioEl.innerText = 4 * (innerCount / numOfDots);
});








