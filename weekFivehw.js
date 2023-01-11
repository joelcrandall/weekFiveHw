function displayTotal(event) {
  let percentage = Number(event.currentTarget.id);
  let amount = Number(document.getElementById("data").value);
  let total = document.querySelector(".total");
  let span = document.createElement("span");
  total.textContent = `Your total will be `;
  span.textContent = `$${(amount*percentage + amount).toFixed(2)}`;
  total.append(span);
  }

  function removeTotal() {
    let total = document.querySelector(".total");
    total.textContent= "";

  }

function calculate(amount, percentage) {
  let list = document.getElementById("billWithTip");
  

  let listItem = document.createElement("li");
  let bold = document.createElement("b");
  let span = document.createElement("span");
  listItem.id = percentage;
  bold.innerText = `${percentage*100}% would be: `;
  bold.append(span);
  listItem.append(bold);
  span.textContent = "$" + (amount*percentage).toFixed(2);
  list.append(listItem);
  listItem.addEventListener("click", displayTotal);
}

function handleButton(event) {
  removeTotal();
  let input = Number(document.getElementById("data").value);

  let list = document.getElementById("billWithTip");
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }
    if (Number.isNaN(input)) {
      alert("Please Enter Your Total Bill Amount");
      return;

  }
  calculate(input, .25);
  calculate(input, .20);
  calculate(input, .15);
  calculate(input, .10);

}

let button = document.getElementById("button");
button.addEventListener("click", handleButton);

function clearForm(event) {
  let list = document.getElementById('billWithTip');
  removeTotal();
  

  clearChildren(list);
  
};

function submitForm(event) {
  let rateUs = document.querySelector('.rateUs');
  let rating = document.createElement('h2');
  let excellentBtn = document.getElementById('excellent');
  let parBtn = document.getElementById('par');
  let poorBtn = document.getElementById('poor');
  clearChildren(rateUs);
  if(excellentBtn.checked) {
    rating.innerText = `You gave us an ${excellentBtn.value} rating.`;
    rateUs.append(rating);
  } else if(parBtn.checked) {
    rating.innerText = `You gave us a ${parBtn.value} rating`;
    rateUs.append(rating);
  } else if(poorBtn.checked){
    
    rating.innerText = `You gave us a ${poorBtn.value} rating`;
    rateUs.append(rating);
  } else {
    rating.innerText = `Please Rate Us`;
    rateUs.append(rating);
  }


}

function clearChildren(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

let clrButton = document.getElementById("clearform")
clrButton.addEventListener("click", clearForm);







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





