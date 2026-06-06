function fizzBuzz(n){
    const answer =[];
      for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      answer.push("FizzBuzz");
    } else if (i % 3 === 0) {
        answer.push("Fizz")  
    } else if (i % 5 === 0){
         answer.push("Buzz")  
    }else{
        answer.push(String(i));
    }
    

  }

  return answer;
}



// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/leethub-v4/bcilpkkbokcopmabingnndookdogmbna