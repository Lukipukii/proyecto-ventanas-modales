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

//TODO: Configurar listeners
//
