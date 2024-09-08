document.addEventListener('keydown', function(event) {
  if (event.key === 'b') {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    
    const middleClickEvent = new MouseEvent('click', {
      view: window,
      bubbles: true,
      cancelable: true,
      button: 2,
      clientX: centerX,
      clientY: centerY
    });
    document.elementFromPoint(centerX, centerY).dispatchEvent(middleClickEvent);
  }
});
