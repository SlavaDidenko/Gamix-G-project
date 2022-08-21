document.addEventListener("mousemove", parallax);
  function parallax(event) {
  this.querySelectorAll(".paralax__item").forEach((shift) => {
    const position = shift.getAttribute("data-value");
    const x = (window.innerWidth - event.pageX * position) / 90;
    const y = (window.innerHeight - event.pageY * position) / 90;

    shift.style.transform = `translateX(${x}px) translateY(${y}px)`;
    shift.style.transition = `transform 0.2s`
  });
}