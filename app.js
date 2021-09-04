const dart = document.querySelector(".dart");
const gun = document.querySelector(".gun img");
const sound1 = document.querySelectorAll("audio")[0];
const sound2 = document.querySelectorAll("audio")[1];

if (
  confirm("First click for shoot, next click for reload bullet!") ||
  confirm("First click for shoot, next click for reload bullet!") === false
) {
  window.addEventListener("click", fire);
}

let bullet = 1;

function fire() {
  if (bullet == 1) {
    playSound("first");
    gunOnFire();
    checkPosition();
    bullet--;
  } else {
    playSound("second");
    bullet++;
  }
}

function gunOnFire() {
  gun.parentElement.classList.add("scale-1-1");

  setTimeout(() => {
    gun.parentElement.classList.remove("scale-1-1");
  }, 150);
}

function playSound(sound) {
  if (sound === "first") {
    sound1.play();
  } else {
    sound2.play();
  }
}

function checkPosition() {
  let leftPosition =
    (parseInt(window.getComputedStyle(dart).getPropertyValue("left")) /
      window.innerWidth) *
    100;

  if (leftPosition >= 47 && leftPosition <= 53) {
    alert("You win!");
  }
}
