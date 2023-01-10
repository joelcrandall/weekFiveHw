

function calculate(amount, percentage) {
  let list = document.getElementById("billWithTip");
  

  let listItem = document.createElement("li");
  let bold = document.createElement("b");
  let span = document.createElement("span");
  span.id = percentage;
  bold.innerText = `${percentage*100}% would be: `;
  bold.append(span);
  listItem.append(bold);


  span.textContent = "$" + (amount*percentage);
  list.append(listItem);

}

function handleButton(event) {
  let input = Number(document.getElementById("data").value);
  let list = document.getElementById("billWithTip");
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }
  calculate(input, .25);
  calculate(input, .20);
  calculate(input, .15);
  calculate(input, .10);

}

let button = document.getElementById("button");
button.addEventListener("click", handleButton);







//function calculateTwentyFive(event) {
  //let input = document.getElementById("data").value;
  //let ul = document.getElementById("billWithTip3");

  //let twentyFiveP = document.createElement("li");
  //twentyFiveP.textContent = "$" + input * .25
//ask about text content command

    //document.getElementById("test").innerText = `${input * .25}`;
//};

//function calculateTwenty(event) {
  //  let input = document.getElementById("data").value;
    //let ul = document.getElementById("billWithTip");

    //let twentyP = document.createElement("li");
    //twentyP.textContent = "$" + input * .2
  

   // document.getElementById("test").innerText = `${input * .2}`;
//};

//function calculateFifteen(event) {
 // let input = document.getElementById("data").value;
 // let ul = document.getElementById("billWithTip2");

  //let fifteenP = document.createElement("li");
  //fifteenP.textContent = "$" + input * .15


  //ul.append(fifteenP);
//};




//let button = document.getElementById("button")
//button.addEventListener("click", calculateTwenty);
//button.addEventListener("click", calculateFifteen);
//button.addEventListener("click", calculateTwentyFive);

//how do i add a clear form or have the Appends dissapear with each click of the button





