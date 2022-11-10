const splitBtn = document.querySelector("#splitBtn");
splitBtn.addEventListener("click", splitCalculate);

const addTip = document.querySelector("#addTipBtn");
addTip.addEventListener("click", showTips);

function showTips(e) {
   e.preventDefault();
   if (radioBtn.style.display !== "block") {
      radioBtn.style.display = "block";
   } else {
      radioBtn.style.display = "none";
   }
}

function splitCalculate(e) {
   e.preventDefault();
   const bill = document.querySelector("#billAmount").value;
   const people = document.querySelector("#people").value;
   const tip = document.querySelector('input[name="tip"]:checked').value;

   if (bill === "" || people === "" || people < 1) {
      Swal.fire({
         icon: "error",
         title: "Oops, something went wrong!",
         text: "Please enter a valid information",
      });
   }

   let billPerPerson = bill / people;
   let tipPerPerson = (bill * tip) / people;
   let totalPerPerson = billPerPerson + tipPerPerson;

   billPerPerson = billPerPerson.toFixed(2);
   tipPerPerson = tipPerPerson.toFixed(2);
   totalPerPerson = totalPerPerson.toFixed(2);

   document.querySelector("#billPerPerson").textContent = billPerPerson;
   document.querySelector("#tipPerPerson").textContent = tipPerPerson;
   document.querySelector("#totalPerPerson").textContent = totalPerPerson;
}
