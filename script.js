//Selección de las clases del documento HTML
const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')
const btnCloseModal = document.querySelector('.close-modal')
const btnsOpenModal = document.querySelectorAll('.show-modal')

//funciones para para cambiar clase hidden
const openModal = () => {
  modal.classList.remove('hidden')
  overlay.classList.remove('hidden')
}
const closeModal = () => {
  modal.classList.add('hidden')
  overlay.classList.add('hidden')
}

//listeners

//configurar a cada boton que al clicar sobre el se abra la ventana
for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal)

//al pulsar fuera de la venta o en la "X" se cierra la misma
btnCloseModal.addEventListener('click', closeModal)
overlay.addEventListener('click', closeModal)

//Añadimos un evento global, que en para poder cerrar las ventanas si se presiona la tecla ESC
document.addEventListener('keydown', function (e) {
  //Solo se ejecutará la funcion closeModal si presionamos la tecla ESC
  //Y tambien si el div que tiene la clase modal no tiene la clase hidden
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal()
  }
})
