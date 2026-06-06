function twoSum(nums, target) {
  const map = {};

  for (let i = 0; i < nums.length; i++) {
    const complemento = target - nums[i];

    if (complemento in map) {
      return [map[complemento], i];
    }

    map[nums[i]] = i;
  }
}

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/leethub-v4/bcilpkkbokcopmabingnndookdogmbna