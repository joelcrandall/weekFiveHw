function calculateTwentyFive(event) {
  let input = document.getElementById("data").value;
  let ul = document.getElementById("billWithTip3");

  let twentyFiveP = document.createElement("li");
  twentyFiveP.textContent = "$" + input * .25
//ask about text content command

  ul.append(twentyFiveP);
};

function calculateTwenty(event) {
    let input = document.getElementById("data").value;
    let ul = document.getElementById("billWithTip");

    let twentyP = document.createElement("li");
    twentyP.textContent = "$" + input * .2
  

    ul.append(twentyP);
};

function calculateFifteen(event) {
  let input = document.getElementById("data").value;
  let ul = document.getElementById("billWithTip2");

  let fifteenP = document.createElement("li");
  fifteenP.textContent = "$" + input * .15


  ul.append(fifteenP);
};




let button = document.getElementById("button")
button.addEventListener("click", calculateTwenty);
button.addEventListener("click", calculateFifteen);
button.addEventListener("click", calculateTwentyFive);

//how do i add a clear form or have the Appends dissapear with each click of the button





