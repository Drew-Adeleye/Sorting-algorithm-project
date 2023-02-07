const input = document.getElementById("numbers-input");
const sortBtn = document.getElementById("sort-button");

sortBtn.addEventListener("click", () => {
  const values = input.value;
  const valueArray = values.split(" ");
  const numberValueArray = [];

  valueArray.forEach((value) => {
    numberValueArray.push(Number(value));
  });
  console.log(numberValueArray);

  sortNumbers(numberValueArray)
});

const sortNumbers = (array) => {

}