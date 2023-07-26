const data = 782301; //sxzrwy

//   encrypt function
let key = [
  "z090",
  "a&8",
  "9kd$",
  "0j#f",
  "jh%8",
  "@j9z",
  "Jg&5",
  "oI*5",
  "z&H4",
  "8D6$",
];
function encrypt(code) {
  let even = [];
  let odd = [];
  let encryptCode = code
    .toString()
    .split("")
    .reverse()
    .map((num) => key[num])
    .filter((ele, index) => {
      if (index % 2 === 0) {
        even.push(ele);
      } else {
        odd.push(ele);
      }
    });

  let final = even.concat(odd).join("-");
  console.log("final", final);

  return final;
}
encrypt(data);
// ---------------------------------------decrypt function--------------------------------------------
function decrypt(code) {
  let codeArr = code.split("-");
  let even = codeArr.slice(0, 3);
  let odd = codeArr.slice(3, 6);

  const maxLength = Math.max(even.length, odd.length);

  const concatenatedArray = Array.from({ length: maxLength }, (_, index) => [
    even[index],
    odd[index],
  ]).flatMap((pair) => pair.filter((element) => element !== undefined));

  let res = [];
  for (let i = 0; i < concatenatedArray.length; i++) {
    if (key.includes(concatenatedArray[i]))
      res.push(key.indexOf(concatenatedArray[i]));
  }
  let final = res.reverse().join("");
  console.log("decrypted-", final);
}

decrypt("a&8-0j#f-z&H4-z090-9kd$-oI*5");

export default encrypt;
