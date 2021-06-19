$(function () {
  const gstarImage = document.querySelectorAll('.gstarImage');
  const graphicText = document.querySelectorAll('.graphic_text');
  let currentItem = graphicText[0];

  for (let i = 0; i < gstarImage.length; i++) {
    gstarImage[i].dataset.index = i;
    graphicText[i].dataset.index = i;
  }

  function activate() {
    currentItem.classList.add('visible');
  }

  function inactivate() {
    currentItem.classList.remove('invisible');
  }

  window.addEventListener('scroll', () => {
    let step;
    let boundingRect;

    for (let i = 0; i < gstarImage.length; i++) {
      step = gstarImage[i];
      boundingRect = step.getBoundingClientRect();
      // console.log(boundingRect);

      //   utcItem = gstarImage[step.dataset.index]
      if (boundingRect.top > window.innerHeight * 0 &&
        boundingRect.top < window.innerHeight * 0.9) {
        inactivate();
        currentItem = graphicText[step.dataset.index];
        activate();
      }
      activate();
    }

  });
});