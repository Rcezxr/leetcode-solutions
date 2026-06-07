const containsDuplicate = function(nums){
    const seen = new Map();

    for(let i= 0; i < nums.length; i++ ){
        if (seen.has(nums[i])){
            return true
        }
        seen.set(nums[i],true);
    }
    return false;
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/bcilpkkbokcopmabingnndookdogmbna