'use strict';
function getQuotientAndRemainder(dividend, divisor) {
  const remainder = dividend % divisor;
  const quotient = parseInt(dividend / divisor);
  return [quotient, remainder];
}

function findTheNumberPlate(customerID) {
  // if (customerID > 17558423) {
  //   throw Error('Invalid or Non existing ID');
  // }
  const alphabets = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];

  let [alphCount, rem] = getQuotientAndRemainder(customerID, 999);
  rem = rem + 1;
  let digitNo;
  if (rem < 10) {
    digitNo = `00${rem}`;
  } else if (rem < 100) {
    digitNo = `0${rem}`;
  } else {
    digitNo = `${rem}`;
  }

  //   let digitNo = rem.toString();
  //   if (digitNo.length === 1) {
  //     let digitNo = `00${digitNo}`;
  //   } else if (digitNo.length === 2) {
  //     let digitNo = `0${digitNo}`;
  //   }

  const [rem2, alph1] = getQuotientAndRemainder(alphCount, 26);
  const [alph3, alph2] = getQuotientAndRemainder(rem2, 26);
  const numberPlate = `${alphabets[alph1]}${alphabets[alph2]}${alphabets[alph3]}${digitNo}`;
  return numberPlate;
}

console.log(findTheNumberPlate(17558423));
