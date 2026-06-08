var isPalindrome = function(x) {
    if (x < 0) return false;

    const str = x.toString();
    const reversed = str.split("").reverse().join("");
    return str === reversed;
    
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/bcilpkkbokcopmabingnndookdogmbna