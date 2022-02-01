const openPopupBtn = document.querySelector('.open-pop-up-btn');
const cancelPopupBtn = document.querySelector('.pop-up-cancel');
const deletePopupBtn = document.querySelector('.pop-up-delete');
const confirmationBtn = document.querySelector('.confirmation-ok');
const popup = document.querySelector('.pop-up');
const confirmation = document.querySelector('.confirmation');
const overlay = document.querySelector('.overlay');

openPopupBtn.addEventListener('click', () => {
  openPopup();
});

cancelPopupBtn.addEventListener('click', () => {
  closePopup();
});

deletePopupBtn.addEventListener('click', () => {
  deleteAccount();
});

confirmationBtn.addEventListener('click', () => {
  closeConfirmation();
});

function openPopup() {
  popup.classList.add('active');
  overlay.classList.add('active');
}

function closePopup() {
  popup.classList.remove('active');
  overlay.classList.remove('active');
}

function deleteAccount() {
  popup.classList.remove('active');
  confirmation.classList.add('active');
}

function closeConfirmation() {
  confirmation.classList.remove('active');
  overlay.classList.remove('active');
}
