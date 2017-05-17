module.exports = {
  // Code for our function begins here.
      fizzBuzz: (a) => {
       let result;
        switch(true){
            case (a%3 === 0) && (a%5===0):  
                result = "FizzBuzz";
                break; 
            case a%3 === 0 :
                result = "Fizz";
                break;
            case a%5 === 0:
                result = "Buzz";
                break;
            default:
                result = a;
                break;
               }
      return result;
    }

};

