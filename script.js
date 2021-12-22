
window.addEventListener('load', function () {
    const elem = document.querySelector('.container');
    const imageElem = document.querySelector('.container__image');
    const imageElem2 = document.querySelector('.container__skillImage');
    
    elem.classList.add('container--isActive');

    imageElem.addEventListener('mousemove', function(event) {
        const xPosition = event.layerX;
        const yPosition = event.layerY;

        imageElem.style.transform = `rotateY(${xPosition/50}deg) rotateX(${-yPosition/50}deg)`;
    });
    
    imageElem2.addEventListener('mousemove', function(event) {
        const xPosition = event.layerX;
        const yPosition = event.layerY;

        imageElem2.style.transform = `rotateY(${xPosition/50}deg) rotateX(${-yPosition/50}deg)`;
    });
});

$(".animated-progress span").each(function () {
        $(this).animate({width: $(this).attr("data-progress") + "%"}, 1000);
        $(this).text($(this).attr("value"));
});