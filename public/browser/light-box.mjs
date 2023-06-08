/* globals document */
const triggers = document.querySelectorAll('light-box a');

triggers.forEach(trigger => {
  trigger.addEventListener('click', event => {
    // Prevent link firing so we can open the lightbox's modal instead
    event.preventDefault();
    const instanceID = trigger.dataset.instance;
    document.querySelector(`dialog[data-instance='${instanceID}']`).showModal();
  });
});

const dialogs = document.querySelectorAll('dialog');

dialogs.forEach(dialog => {
  dialog.addEventListener('click', event => {
    // Close the dialog if a click event fires from the dialog (but not its children)
    if (event.target.tagName === 'DIALOG') dialog.close();
  });
});
