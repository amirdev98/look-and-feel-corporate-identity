/*checklist die haalt alle checkboxes op van de richtlijnen*/

let checklist = document.querySelectorAll(".richtlijnen input[type=checkbox]");
//progressie balk 

let progression = document.querySelector("#waarneembaar-meter");
console.log(checklist.length);
//zodra een checkbox wordt aangeklikt, wordt de progressie geupdated

checklist.forEach(function (checkbox) {
  checkbox.addEventListener("click", function () {
    progression.value = document.querySelectorAll(
      ".richtlijnen input[type=checkbox]:checked"
    ).length;
  });
});



//formulier
let contactForm = document.querySelector(".vragen-formulier")
let buttonForm = document.querySelector(".display-vragen-formulier")
console.log(buttonForm)

buttonForm.addEventListener('click', displayForm)

function displayForm() {
    contactForm.classList.add('vragen-formulier-display')
    buttonForm.classList.add('undisplay-vragen-formulier')
}