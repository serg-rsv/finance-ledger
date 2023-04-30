export function showModal(title, message) {
  document.body.style.overflowY = 'hidden';

  const modalWrapper = document.createElement('div');
  modalWrapper.classList.add('modal-wrapper');
  const modalContent = document.createElement('div');
  modalContent.classList.add('modal-content');
  const modalHeader = document.createElement('div');
  modalHeader.classList.add('modal-header');
  const modalTitle = document.createElement('h2');
  modalTitle.innerText = title;
  const modalBody = document.createElement('div');
  modalBody.classList.add('modal-body');
  const modalMessage = document.createElement('p');
  modalMessage.innerText = message;
  const modalCloseButton = document.createElement('button');
  modalCloseButton.classList.add(
    'modal-close-button',
    'button',
    'button--filled'
  );
  modalCloseButton.innerText = 'Back to our site';

  modalHeader.appendChild(modalTitle);
  modalBody.appendChild(modalMessage);
  modalContent.appendChild(modalHeader);
  modalContent.appendChild(modalBody);
  modalContent.appendChild(modalCloseButton);
  modalWrapper.appendChild(modalContent);

  document.body.appendChild(modalWrapper);

  function closeModal() {
    modalWrapper.remove();

    document.body.style.overflowY = 'auto';
    document.removeEventListener('keydown', keydownHandler);
  }

  function keydownHandler(e) {
    if (e.key === 'Escape') {
      closeModal();
    }
  }

  modalCloseButton.addEventListener('click', closeModal);
  modalWrapper.addEventListener('click', e => {
    if (e.target === modalWrapper) {
      closeModal();
    }
  });
  document.addEventListener('keydown', keydownHandler);
}
