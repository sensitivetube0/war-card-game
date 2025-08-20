function formValidate() {
  let player1NameIn = document.getElementById("player1");
  let player2NameIn = document.getElementById("player2");
  if (
    player1NameIn.validity.valueMissing ||
    player2NameIn.validity.valueMissing
  ) {
    player1NameIn.setCustomValidity("Please Enter a name");
    player2NameIn.setCustomValidity("Please Enter a name");
    return false;
  } else {
    player1NameIn.setCustomValidity("");
    player2NameIn.setCustomValidity("");
    return true;
  }
}
export { formValidate };
