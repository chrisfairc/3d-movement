document.addEventListener("mousemove", function(event) {
  const x = event.pageX;
  const y = event.pageY;

  const target = document.querySelector(".card");
  const targetCoords = target.getBoundingClientRect();

  const targetX = targetCoords.left + target.offsetWidth / 2;
  const targetY = targetCoords.top + target.offsetHeight / 2;

  const angleX = (targetY - y) / 25;
  const angleY = (targetX - x) / -25;

  target.style.transform =
    "rotateX(" + angleX + "deg) rotateY(" + angleY + "deg)";
});

// this bits for touch screens like mobile phones and tablets
// mousemove becomes touchmove. As no mouse + more than one finger could be touching the screen
// so, touches[0] is finger no.1! Thus onew finger will narrate the movement.
document.addEventListener("touchmove", function(event) {
  const x = event.touches[0].pageX;
  const y = event.touches[0].pageY;

  const target = document.querySelector(".card");
  const targetCoords = target.getBoundingClientRect();

  const targetX = targetCoords.left + target.offsetWidth / 2;
  const targetY = targetCoords.top + target.offsetHeight / 2;

  const angleX = (targetY - y) / 25;
  const angleY = (targetX - x) / -25;

  target.style.transform =
    "rotateX(" + angleX + "deg) rotateY(" + angleY + "deg)";
});
