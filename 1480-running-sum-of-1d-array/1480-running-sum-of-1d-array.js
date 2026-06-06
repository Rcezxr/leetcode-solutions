function runningSum(nums){
    const result = [];

    for(let i = 0; i < nums.length; i++){
        if (i === 0) {
    result.push(nums[0]);
} else {
    result.push(nums[i] + result[i - 1]);
}
    }
    return result;
}

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/leethub-v4/bcilpkkbokcopmabingnndookdogmbna