function oddOrEven (num) {
        sumOfDigits = num.toString()
        sumOfDigits = sumOfDigits.split('')
        sumOfDigits = sumOfDigits.map(Number)
        sumOfDigits = sumOfDigits.reduce( function (a ,b) {
          return a + b;
        }, 0 );
        console.log(sumOfDigits)
     
    if (sumOfDigits % 2 == 0) {
      document.getElementById("result").innerHTML = "Even";
    } else {
      document.getElementById("result").innerHTML = "Odd";
    }
    
}




