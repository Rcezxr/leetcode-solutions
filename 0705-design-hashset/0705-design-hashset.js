class MyHashSet {
    constructor() {
        this.size = 1000;
        this.buckets = new Array(this.size).fill(null).map(() => []);
    }

    _hash(key) {
        return key % this.size;
    }

    add(key) {
        const index = this._hash(key);
        const bucket = this.buckets[index];

        if (!bucket.includes(key)) {
            bucket.push(key);
        }
    }

    contains(key) {
        const index = this._hash(key);
        const bucket = this.buckets[index];

        return bucket.includes(key);
    }

    remove(key) {
        const index = this._hash(key);
        const bucket = this.buckets[index];

        const pos = bucket.indexOf(key);
        if (pos !== -1) {
            bucket.splice(pos, 1);
        }
    }
}

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/leethub-v4/bcilpkkbokcopmabingnndookdogmbna