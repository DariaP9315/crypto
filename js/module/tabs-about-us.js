const advantageButtons = document.querySelectorAll('.advantage__button');
const advantageItemsContent = document.querySelectorAll('.advantage__item-content');

// advantageBtn.addEventListener('click', () => {
//   advantageBtn.classList.add('advantage__button_active');
// });

advantageButtons.forEach((advantageButton, i) => {
  advantageButton.addEventListener('click', () => {
    advantageItemsContent.forEach((advantageItemContent, j) => {
      // console.log(advantageItemContent, j);
      // console.log(advantageButton, i);
      if (i === j) {
        advantageItemsContent[j].classList.add('advantage__item-content_active');
        advantageButtons[j].classList.add('advantage__button_active');
      } else {
        advantageItemsContent[j].classList.remove('advantage__item-content_active');
        advantageButtons[j].classList.remove('advantage__button_active');
      }
    });
  });
});
