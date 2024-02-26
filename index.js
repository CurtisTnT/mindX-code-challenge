//Problem Solving
const input = ["BINH", "HUNG", "PHUOC", "CAO", "KHANH"];

function allLongestStrings(array) {
  const newArr = [];
  let maxLength = 0;
  array.forEach((item) => {
    if (item.length > maxLength) {
      maxLength = item.length;
      newArr.splice(0, item.length);
      newArr.push(item);
    } else if (item.length === maxLength) {
      newArr.push(item);
    } else {
      return;
    }
  });
  return newArr;
}

const result1 = allLongestStrings(input);
console.log({ result1 });

const weightArr = [60, 40, 55, 75, 64];

function alternatingSums(array) {
  const totalWeightArr = [0, 0];
  array.forEach((item, index) =>
    (index + 1) % 2 !== 0
      ? (totalWeightArr[0] += item)
      : (totalWeightArr[1] += item)
  );
  return totalWeightArr;
}

const result2 = alternatingSums(weightArr);
console.log({ result2 });

//Code Challenge
const pickColorBtnElm = document.getElementById("pickColorBtn");
const inputColorElm = document.querySelector(".inputColor");
const copyColorBtnElm = document.getElementById("copyBtn");
const bodyElm = document.getElementById("bgId");

const pickRandomColor = () => {
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  inputColorElm.value = randomColor;
  bodyElm.style.backgroundColor = randomColor;
};

const copyColor = () => {
  navigator.clipboard.writeText(inputColorElm.value);
};

pickColorBtnElm.addEventListener("click", pickRandomColor);
copyColorBtnElm.addEventListener("click", copyColor);
