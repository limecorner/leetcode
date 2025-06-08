/**
 * Merge Sort Implementation
 * Time Complexity: O(n log n)
 * Space Complexity: O(n)
 */

function mergeSort(arr) {
    // Base case: arrays of length 0 or 1 are already sorted
    if (arr.length <= 1) {
        return arr;
    }

    // Find the middle point to divide array into two halves
    const mid = Math.floor(arr.length / 2);
    
    // Recursively sort the two halves
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));

    // Merge the sorted halves
    return merge(left, right);
}

function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    // Compare elements from both arrays and merge them in sorted order
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] <= right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    // Add remaining elements from left array, if any
    while (leftIndex < left.length) {
        result.push(left[leftIndex]);
        leftIndex++;
    }

    // Add remaining elements from right array, if any
    while (rightIndex < right.length) {
        result.push(right[rightIndex]);
        rightIndex++;
    }

    return result;
}

// Example usage
const arr = [64, 34, 25, 12, 22, 11, 90];
console.log("Original array:", arr);
const sortedArr = mergeSort(arr);
console.log("Sorted array:", sortedArr);

/*
Time Complexity Analysis: O(n log n)
------------------------
1. The array is divided into two halves at each step: O(log n) levels of division
2. At each level, we need to merge n elements: O(n) work
3. Total time complexity = O(n) * O(log n) = O(n log n)

Space Complexity Analysis: O(n)
------------------------
1. The merge function creates a new array to store the merged result
2. At each level of recursion, we need additional space for the left and right subarrays
3. The maximum space needed at any point is O(n) for storing the merged arrays
*/ 