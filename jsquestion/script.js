// 1 Write a JavaScript function to print the “Hello World” message

// function helo(){
//     console.log("hekllo world")
//     return "Hello World"
// }

// a=helo()
// console.log(a)


// --------------------------------------------------------------------------------------------------
// 2 Write a function that returns the square of a number
// ---------------------------------------------------------------------------------------------------------

// function squre(num){
//     console.log(num*num)
// }

// squre(2)
// squre(10)



// --------------------------------------------------------------------------------------------------
// 3 . Write a function to convert Celsius to Fahrenheit
// ---------------------------------------------------------------------------------------------------------

// function calfurnite(Cel){
//     console.log((Cel*9/5)+32)
// }
// calfurnite(100)



// --------------------------------------------------------------------------------------------------
// 4 Write a function to find the area of a given Rectangle

// ---------------------------------------------------------------------------------------------------------

// function rectangleArea(a,b) {
//     return `The area of rectangle is ${a*b}`;
//   }
  
//   console.log(rectangleArea(10,20)) //The area of rectangle is 200
//   console.log(rectangleArea(30,30)) //The area of rectangle is 900

// --------------------------------------------------------------------------------------------------
//5. Write a function to find the area and perimeter of a Circle
// ---------------------------------------------------------------------------------------------------------
// function circleValues(rad) {
//     return `Perimeter: ${2*Math.PI*rad}, Area: ${Math.PI*rad*rad}`;
//   }
  
//   console.log(circleValues(10)) //"Perimeter: 62.83, Area: 314.15"
//   console.log(circleValues(15)) //"Perimeter: 94.24, Area: 706.85"
//   console.log(circleValues(25)) //"Perimeter: 157.07, Area: 1963.49"


// --------------------------------------------------------------------------------------------------
//5.Write a function to reverse a number
// ---------------------------------------------------------------------------------------------------------

function reverseNum(num) {
    var reverse = 0;
    while(num != 0)
    {
      reverse = reverse * 10;
      reverse = reverse + num%10;
      num = Math.trunc(num/10); // Remove decimal places
    }
    return reverse;
  }
  
  console.log(reverseNum(123)) //321
  console.log(reverseNum(5872)) //2785

// --------------------------------------------------------------------------------------------------
//5. Write a function to find the area and perimeter of a Circle
// ---------------------------------------------------------------------------------------------------------