var isAnagram = function(s, t){
    if(s.length !== t.length) return false;
    const count ={};
    for(let i = 0;i < s.length ; i++){
        count[s[i]] =  (count[s[i]] || 0) +1;
        count[t[i]] =  (count[t[i]] || 0) -1;
    }
return Object.values(count).every(val => val === 0);
};


// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/bcilpkkbokcopmabingnndookdogmbna