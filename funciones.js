//// si me pulsas suelto información
const desplegable = document.getElementById("desplegable")
const desplegado = document.getElementById("desplegado")

desplegable.addEventListener("click", function () {
    desplegable.classList.toggle("active")
    desplegado.classList.toggle("show")
})
const desplegable2 = document.getElementById("desplegable2")
const desplegado2 = document.getElementById("desplegado2")

desplegable2.addEventListener("click", function () {
    desplegable2.classList.toggle("active")
    desplegado2.classList.toggle("show")
})
const desplegable3 = document.getElementById("desplegable3")
const desplegado3 = document.getElementById("desplegado3")

desplegable3.addEventListener("click", function () {
    desplegable3.classList.toggle("active")
    desplegado3.classList.toggle("show")
})

// const bocadillo = document.getElementById('bocadillo');
// const frases = [
//     "Soy gusigom, mascota de Kandletruck.",
//     "¿Buscas la fecha de empiezo? ¡Está bajo mis pies invisibles!",
//     "¡Haz clic otra vez!",
//     "¡Chuches riquísimas!"
// ];

// gusigom.addEventListener('click', () => {
//     const textoRandom = frases[Math.floor(Math.random() * frases.length)];
//     bocadillo.textContent = textoRandom;
//     bocadillo.classList.add('visible');

//     // Ocultar después de 3 segundos
//     setTimeout(() => {
//         bocadillo.classList.remove('visible');
//     }, 3000);
// })
const gusigom=document.getElementById("gusigom")
gusigom.addEventListener('click', () => {
    const maxX = Window.clientWidth - gusigom.clientWidth;
    const maxY = Window.innerHeight - gusigom.clientHeight;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    gusigom.style.left = `${randomX}px`;
    gusigom.style.top = `${randomY}px`;

})
