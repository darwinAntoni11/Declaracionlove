const yesBtn = document.querySelector('#yesBtn');

yesBtn.addEventListener('click',function () {
    alert('Mi niña hermosa, mi pandita, mi vida, mi todo, sabia que ibas a decir que si uwu, nunca dude de eso. Muchas gracias por todo, gracias por hacerme feliz. Sabes? No importa que hora sea, te pienso todo el tiempo, y me encanta hacerlo. TE AMO')
});

const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener('mouseover', function () {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    noBtn.style.setProperty('top',randomY+'%');
    noBtn.style.setProperty('left',randomX+'%');
    noBtn.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
})