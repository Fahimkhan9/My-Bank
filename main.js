const loginbtn = document.getElementById("login");
loginbtn.addEventListener("click", () => {
  const loginArea = document.getElementById("login-area");
  loginArea.style.display = "none";

  const transactionArea = document.getElementById("transaction-area");

  transactionArea.style.display = "block";
});

const depositbtn = document.getElementById("deposit");
depositbtn.addEventListener("click", () => {
  const depositnumber =
    getinputnumber("depositamount") 
    updatespantext("currentDeposit", depositnumber);

  updatespantext("currentbalance", depositnumber);

  document.getElementById("depositamount").value = "";
});

const withdrawbtn = document.getElementById("withdraw");

withdrawbtn.addEventListener("click", () => {
  const withdrawnumber = getinputnumber("withdrawamount");

  updatespantext("currentwithdraw", withdrawnumber);
  updatespantext("currentbalance", -1 * withdrawnumber);

  document.getElementById("withdrawamount").value = "";
  console.log(withdrawnumber);

  console.log("clicked");
});

function getinputnumber(id) {
  const amount = document.getElementById(id).value;
  const amountnumber = parseFloat(amount);
  return amountnumber;
}

function updatespantext(id, depositnumber) {
  const current = document.getElementById(id).innerText;

  const currentnumber = parseFloat(current);

  const total = depositnumber + currentnumber;

  document.getElementById(id).innerText = total;
}
