// function calculateTwentyFive(event) {
//   let input = document.getElementById("data").value;
//   let ul = document.getElementById("billWithTip3");

//   let twentyFiveP = document.createElement("li");
//   twentyFiveP.textContent = "$" + input * .25
// //ask about text content command

//   ul.append(twentyFiveP);
// };

// function calculateTwenty(event) {
//     let input = document.getElementById("data").value;
//     let ul = document.getElementById("billWithTip");

//     let twentyP = document.createElement("li");
//     twentyP.textContent = "$" + input * .2
  

//     ul.append(twentyP);
// };

// function calculateFifteen(event) {
//   let input = document.getElementById("data").value;
//   let ul = document.getElementById("billWithTip2");

//   let fifteenP = document.createElement("li");
//   fifteenP.textContent = "$" + input * .15


//   ul.append(fifteenP);
// };



function calculate(amount, percent) {
  let list = document.getElementById('billWithTip');
  let listItem = document.createElement('li');
  listItem.textContent = (percent * 100) + '%' + ' would be: ' + '$' + (amount * percent);

  list.append(listItem);
}

function handleEvent(event) {
  let input = Number(document.getElementById('data').value);
  calculate(input, .25);
  calculate(input, .20);
  calculate(input, .15);
}

function clearForm(event) {
  let list = document.getElementById('billWithTip');
  
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }
  
};

let button = document.getElementById("button")
button.addEventListener("click", handleEvent);

let clrButton = document.getElementById("clearform")
clrButton.addEventListener("click", clearForm);




// let button = document.getElementById("button")
// button.addEventListener("click", calculateTwenty);
// button.addEventListener("click", calculateFifteen);
// button.addEventListener("click", calculateTwentyFive);

// let button2 = document.getElementById('clearform')
// button2.addEventListener('click', reset);

//how do i add a clear form or have the Appends dissapear with each click of the button





