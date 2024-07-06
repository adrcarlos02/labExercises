//Multiplication ---------
  function product (a, b){
      return Math.abs(a*b)
  }
  console.log(product(9,1))


  //or
  function product (a, b){
      return a * b
  }
  console.log(product(5, 4))


//Division ----------------
  function qoutient(a, b){
      return Math.abs(a/b)
  }
 console.log(qoutient(6,2))

  //or
  function qoutient (a, b){
    return a / b
  }
  console.log(qoutient(7,2))



//Addition ----------------
  function sum(a, b){
      return Math.abs(a+b)
  } 
  console.log(sum(6,8))

  //or
  function sum(a, b){
    return a + b
  }
  console.log(sum(3,2))


//Subtraction --------------
  function difference(a, b) {
      return Math.abs(a - b);
  }
  console.log(difference(5, 3))

  //or
  function difference(a, b){
    return a - b
  }
  console.log(difference(9, 4))



//concatenation --------------
let str1 = "Hello";
let str2 = " John!"
let concatenatedString = str1 + str2;
console.log(concatenatedString);
