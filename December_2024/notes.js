// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ 1. LEETCODE #1480. Running Sum of 1d Array^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
// Return the running sum of nums.


// const nums = [1,2,3,4] 
// [3,1,2,10,1]

const runningSum = function(nums) {
  let results = [] // << Create a new array to store results in.
  results.length = nums.length // << Set that new array's length to the one we are looking at
  results[0] = nums[0] // << The first number of that array will always be itself.(Nothing to add to it since it's the first number)

  for(let i = 1; i < nums.length; i++) { // << We the loop through the array. Start at [1] since we already know what position [0] is
    results[i] = nums[i] + results[i - 1]
  }
  return results
};
// Explanation for Above ^^^
// We are setting results at position [i] (let's say position [3]) to = nums[3] + results[3 - 1]. 
// We do results[3-1] because we have set all other positions before in the results array to be the previous sum. 
// So we look at the position before for the our current to know what we are adding to. 

// Remeber = given our current nums array, [0] = 1 , [1] = 3, [2] = 6, [3] = 10.
// When looking at a position, we can look at the one before and add our current value to that one. Then set it to that new sum.
// TIME COMPLEXITY = O(n) << Constant time
// SPACE COMPLEXITY = O(1) << We do not create a datastructure 

// Alternate Code 
// const runningSum = function(nums) {
//   for(let i = 1; i < nums.length; i++) { 
//     nums[i] += nums[i - 1]
//   }
//   return results
// };
// This method overwrites the array. Mutating data. 

// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ 2. LEETCODE #1672. Richest Customer Wealth ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
// You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank. Return the wealth that the richest customer has.
// A customer's wealth is the amount of money they have in all their bank accounts. The richest customer is the customer that has the maximum wealth.

// We want to look at each [ARRAY] within the [ARRAY] and add all the nmbers. We can set the new found total to a variable. We can then compare each variable to see who is the highest.
let accounts = [[2,8,7],[7,1,3],[1,9,5]]
//      | bank1 | bank2 | bank3 | < < Visualize 
// cust1|___2___|___8___|___7___| i[0] < One customer and the amount of money in each of their banks
// cust2|___7___|___1___|___3___| i[1]
// cust3|___1___|___9___|___5___| i[2]
//         j[0]    j[1]    j[2]

const maximumWealth = function(accounts) {
  let maxWealth = 0; // << Set a variable to hold maxWealth

  for (let customer of accounts) { // << Loop through customers and their accounts
      let currentCustomerWealth = 0;

      for (let bank of customer) { // << Loop through each customer's bank amount and add it up.
          currentCustomerWealth += bank; // << Then set their wealth to the total amount in each bank
      }
      maxWealth = Math.max(maxWealth, currentCustomerWealth); // << Then compare compare old maxWealth to currentCustomerWealth(It's still in the customer loop). 
      // Math.max will take which ever one is the highest(otherwise, the max). 
  }
  console.log("Hello")
  console.log(maxWealth) 
  return maxWealth;
};

// maximumWealth(accounts)
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ 3. LEETCODE #412. Fizz Buzz ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
// Given an integer n, return a string array answer (1-indexed) where:

// answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
// answer[i] == "Fizz" if i is divisible by 3.
// answer[i] == "Buzz" if i is divisible by 5.
// answer[i] == i (as a string) if none of the above conditions are true.

//  !@#$%^&*()_+-=[]{}|;:'",.<>?/~` ---- SOME FUN ----!@#$%^&*()_+-=[]{}|;:'",.<>?/~`!@#$%^&*()_+-=[]{}|;:'",.<>?/~`//  !@#$%^&*()_+-=[]{
//                                                                                                                                      |
// let arraySize =  Math.ceil(Math.random() * 15) // < Getting a Random number 1-20                                                     |
// const answer = new Array(arraySize) // < Setting answer array to an array of random sizd                                             |
// const filledAnswer = function(){  // < filling array with random numbers                                                             |
//   for(let i = 0; i < answer.length; i++){                                                                                            |
//     let randomNumber = Math.ceil(Math.random() * 100)                                                                                |                           
//   }                                                                                                                                  |
// }                                                                                                                                    |
// filledAnswer() // < Create that new Randomzied answer array                                                                          |
// !@#$%^&*()_+-=[]{}|;:'",.<>?/~`!@#$%^&*()_+-=[]{}|;:'",.<>?/~`!@#$%^&*()_+-=[]{}|;:'",.<>?/~`!@#$%^&*()_+-=[]{}|;:'",.<>?/~`//  !@#$%|

const fizzBuzz = function(n) {
  let answer = [] // < create an array 

  for(let i = 1; i <= n; i++) { // < loop through array where array size is dependant on 'n' && We start at index 1 notes on why BELOW
    if (i % 3 === 0 && i % 5 === 0) {
      answer.push("FizzBuzz") // < pushes the new value into the new array
      } else if (i % 5 === 0) {
      answer.push("Buzz")
      } else if (i % 3 === 0){
      answer.push("Fizz")
      } else {
      answer.push(i.toString()); // Otherwise, push the number as a string    
    }
  }
  return answer
}

// vvv MY PROCESS vvv
// Issue here is that while the answer and results are similar we are mutating the array directly. 
// We should be generating a new array so that we don't alter the pre-exisiting array 

// const fizzBuzz = function(n) {
//   for(let i = 0; i <= n; i++) { // < loop through array where array size is dependant on 'n'
//     if (answer[i] % 3 === 0 && answer[i] % 5 === 0) {
//       answer[i] = "FizzBuzz"
//     } else if (answer[i] % 5 === 0) {
//         answer[i] = "Buzz"
//     } else if (answer[i] % 3 === 0){
//       answer[i] = "Fizz"
//     } else {
//       answer[i] = answer[i]
//     }
//   }
//   console.log(answer)
// }


// vvvv WHY START AT INDEX 1 vvvv
// 1. FizzBuzz Problem Description:
// The FizzBuzz problem usually asks you to evaluate numbers starting from 1 up to a given number n. Here's why:

// The problem involves labeling numbers based on whether they are divisible by 3, 5, or both.
// The key point is that these numbers are positive integers, and by convention, counting in mathematics (and many real-world contexts) starts at 1, not 0.
// 2. Number Zero and Divisibility:
// If you include 0 in your loop, it leads to some unusual results:

// 0 is divisible by everything: Mathematically, 0 % 3 === 0 and 0 % 5 === 0. This is because the remainder when dividing 0 by any number is 0.
// So, according to FizzBuzz rules, 0 would always be "FizzBuzz" because it's divisible by both 3 and 5.
// However, the FizzBuzz problem is designed to work with positive integers starting from 1, where:

// 1: Is not divisible by 3 or 5, so the output is "1".
// 2: Is not divisible by 3 or 5, so the output is "2".
// 3: Is divisible by 3, so the output is "Fizz", and so on...
// Starting the loop at 1 allows you to correctly handle the numbers as required by the problem.

// console.log(fizzBuzz(100))
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ 4. LEETCODE #1342. Number of Steps to Reduce a Number to Zero ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
// Given an integer num, return the number of STEPS to reduce it to zero. 
// In one step, if the current number is even, you have to divide it by 2, otherwise, you have to subtract 1 from it.

// CONCEPTUALIZE 
// Step 1) 14 is even; divide by 2 and obtain 7. 
// Step 2) 7 is odd; subtract 1 and obtain 6.
// Step 3) 6 is even; divide by 2 and obtain 3. 
// Step 4) 3 is odd; subtract 1 and obtain 2. 
// Step 5) 2 is even; divide by 2 and obtain 1. 
// Step 6) 1 is odd; subtract 1 and obtain 0.

const numberOfSteps = (num) => {

  let steps = -1 
  while (num > 0) {
    if (num % 2 === 0) {
      num /= 2
      steps++
      // console.log(num)
    } else {
      num -= 1
      steps++
      // console.log(num)
    }
  } 
  return(steps)
  // console.log (`It took ${steps} step(s)`, num)
}

// console.log(numberOfSteps(3121))
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ 5. LEETCODE #876. Middle of the Linked List ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
// Given the head of a singly linked list, return the middle node of the linked list.
// If there are two middle nodes, return the second middle node.

class ListNode { // < Creates the instance of a Linked List
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

const middleNode = (head) => {
  let middle = head; // < Creates a middle pointer. ALWAYS Starts at the head
  let end = head; // < Same with the head ^^

  while (end !== null && end.next !== null) { // < The while loop continues as long as end is not null and end.next is also not null. This ensures that end can safely move forward by two steps.
    middle = middle.next; // < middle moves one step (middle = middle.next).
    end = end.next.next; // < end moves two steps (end = end.next.next).
  }

  return middle;
};
// NOTES:
// We have two pointers, middle and end, both initialized to the head of the linked list.
// The while loop continues as long as end is not null and end.next is also not null. This ensures that end can safely move forward by two steps.
// When end reaches the end of the list or when end.next is null (i.e., the list has an odd number of nodes and end is at the last node), the loop stops.
// At this point, middle will be at the middle of the list.
// TIME COMPLEXITY = O(n) 
// SPACE COMPLEXITY = O(1) 
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ 6. LEETCODE #383. Ransom Note ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
// Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.
// Each letter in magazine can only be used once in ransomNote.
// Example 1:
  // Input: ransomNote = "aa", magazine = "ab"
  // Output: false
// Example 2:
  // Input: ransomNote = "aa", magazine = "aab"
  // Output: true

let ransomNote = "code"
let magazine = "cdegijok"

const lettersWithin = () => {
  for (let i = 0; i < ransomNote.length; i++) { // < iterate over all letters in ransomNote
    let rN = ransomNote.charAt(i); // < set rN to the character we are currently iterating on
    
    let matchingIndex = magazine.indexOf(rN) // < indexOf looks at the index of the given character. This case whatever letter rN is. 
    if (matchingIndex === -1) {
      return false 
    }
    console.log(magazine)
    magazine = magazine.substring(0, matchingIndex) + magazine.substring(matchingIndex + 1);
  }
  return true
}

// NOTES: 
// I initially thought that I hade to save the letters to an Array or variable. Then compare that variable to our ransomNote. 

// Rather, in this code we are looping and looking each letter in ransomNote. (for loop i)
// We then assign that letter that we are currently on to a variable, (rN).
// We are then getting it's index and setting to a variable , (mathcingIndex)
// matchingIndex is then using the indexOf method, which is looking at magazine.
// It is then searching for the letter that (rN) is currently and setting matchingIndex's value to the index of the found letter in magazine. 
  // Ex: When rN is 'c' it will look in magazine for where 'c' is. 'c' in magaine has an idx of 0, so thus matchingIndex = 0;
// If the letter doesn't exist than there will be no number and matchingIndex will default to -1.
  // Ex: If it was looking for 'x', the indexOf method will default to -1 because there is no 'x'
// If in the case that there is no letter, within magazine and matchingIndex = -1, it will then hit the if statement that will stop the loop and return false. 
// We then set magazine to a new string where substring takes the range of (0, matchingIndex value) and adds the (matchingIndex value + 1). 
  // substring is inclusive + exclusive, meaning it returns the first number's value and ends at the second number given but doesn't return the value corresponding with the second number. 

// lettersWithin() 
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ 7. LEETCODE Max Consecutive Ones ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
// Given a binary array nums, return the maximum number of consecutive 1's in the array.
// Input: nums = [1,1,0,1,1,1]
// Output: 3
// Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.

// const nums = [1,1,0,1,1,1];
// const nums = [1,0,1,1,0,1];

const findMaxConsecutiveOnes = (num) => {
  let maxOnes = 0; 
  let currentOnes = 0;

  for(let i = 0; i < nums.length; i++) {              // < Loop though the array (nums)
    if (nums[i] === 1){                               // < checks if it's a 1.
      currentOnes++                                   // < If 1, counter goes up
      maxOnes = Math.max(maxOnes, currentOnes);       // < set MaxOnes to the maximum based on the maxOnes and currentOnes.
    } else if(nums[i] === 0) {                        // < checks if its not 1 or that its 0
      currentOnes = 0                                 // < reset currentOnes if it hits a 0
    }
  }

  return maxOnes              // < returns the maximum number within the array (Math.max).  
}



// This works when there is one only one 0. However it doesn't keep track of the highest when there is multiple 0s
// So we have to have another variable that has the highest amount of consecutive ones. 
// This shoud be done before we clear the array. 

// So I tried "onsecutivesOnes.push(onesArray.length)" in 0 which makes sense. However, the issue arises when we never hit zero again. 
// The array will never push the amount of the most recent series of consecutive ones, if the ones were infinite or it just ends on 1. 
// So we can put it in the check for one but it saves unneccessary information.
// Storing the length everytime a 1 is saved instead of just when it reaches its max.

// Scrapped the array idea and found out I can just use counters. 


// console.log(findMaxConsecutiveOnes())
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ 8. LEETCODE Find Numbers with Even Number of Digits ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
// Given an array nums of integers, return how many of them contain an even number of digits.
// Input: nums = [12,345,2,6,7896]
// Output: 2
// Explanation: 
// 12 contains 2 digits (even number of digits). 
// 345 contains 3 digits (odd number of digits). 
// 2 contains 1 digit (odd number of digits). 
// 6 contains 1 digit (odd number of digits). 
// 7896 contains 4 digits (even number of digits). 
// Therefore only 12 and 7896 contain an even number of digits.
// const nums = [12,345,2,6,7896]

const evenDigits = () => {
  let digits = "";
  let evenNums = 0
  for (let i = 0; i < nums.length; i++) {
    digits = `${nums[i]}` 
    if (digits.length % 2 === 0){
      evenNums++
    }
  }
  return evenNums
}

// console.log(evenDigits())
// We want to loop through the array.
// Look at a specific element.
// Then look at how many characters are there. 
// Assigned that number to a variable. 
// Check if that number is divisible by two. If so, then return a string with that number. 

// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ 9. LEETCODE Squares of a Sorted Array ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
// Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

// Input: nums = [-4,-1,0,3,10]
// Output: [0,1,9,16,100]
// Explanation: After squaring, the array becomes [16,1,0,9,100].
// After sorting, it becomes [0,1,9,16,100].

// const nums = [-4,-1,0,3,10]

function sortArray() {
  const ascendingArr = [];

  for (let i = 0; i < nums.length; i++) {
    ascendingArr.push(nums[i] * nums[i])
  }

  ascendingArr.sort((a, b) => a - b)
  // console.log(ascendingArr)
  return ascendingArr
}

// console.log(sortArray())

// Psuedo-Code 
// 1. Loop through the Array
// 2. Square the number at i by multiplying i * i
// 3. Return that array and store to a new variable
// 4. Re-order that new variable from least to greatest. Maybe a nums[i].next
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ 10. LEETCODE Duplicate Zeros ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
// Given a fixed-length integer array arr, duplicate each occurrence of zero, shifting the remaining elements to the right.

// Input: arr = [1,0,2,3,0,4,5, 0] // Length 8
// Output: [1,0,0,2,3,0,0,4] // Length 8
// Explanation: After calling your function, the input array is modified to: [1,0,0,2,3,0,0,4]
// Test Size to see if pop() works other array sizes 

const arr = [ 0, 2, 8, 9]; // Length 4
// && 
// const arr = [1,2,3,0,9,2,3,7,1,4,0,5,3,0,2,0,6]; // Lenght 17


// const arr = [1,0,2,3,0,4,5,0];

function duplicateZero() {

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      arr.splice(i, 0, 0)
        i++
        arr.pop()
      }
    }
    return arr
}

// console.log(duplicateZero())

// Psuedo-Code 
// 1. Set array length to a fixed length
// 2. Loop through the Array
// 3. Find if [i] = 0
// 4. If [i] = 0 splice in at that index and add zero
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ 11. LEETCODE Merge Sorted Array^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
// You are given two integer arrays nums1 and nums2, sorted in non-decreasing(ascending) order, and two integers m and n, 
// representing the number of elements in nums1 and nums2 respectively.
// Merge nums1 and nums2 into a single array sorted in non-decreasing(ascending) order.
// The final sorted array should not be returned by the function, but instead be stored inside the array nums1.
// To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, 
// and the last n elements are set to 0 and should be ignored. nums2 has a length of n

// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]
// Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
// The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.

var nums1 = [2, 1, 5];
const nums2 = [7, 2, 6 ];
const m = 3; // nums1
const n = 3; // nums2 

function mergeArray() {
  nums1.length = m;
  nums2.length = n;
  for(let i = 0; i < n; i++){
    nums1.push(0)
  };

  nums1.length = m + n;
  // console.log(nums1)

  let indexOfNums2 = 0;
  for(let i = 0; i < nums1.length; i++) {
    if (i >= m) {
      if(nums1[i] === 0) {
        nums1.splice(i, 1, nums2[indexOfNums2]);
        indexOfNums2++
      };
    };
  };

  nums1.sort((a, b) => a - b)
  return nums1
}

// console.log(mergeArray())
// Psuedo-Code
// 1. Set the length of nums1 to be "m" and the length of nums2 to "n"
// 2. For nums1 push 0 in "n" times. 
// 3. Set nums1 length to be fixed to "m + n"
// 4. Create a counter, to keep track of nums2 index
// 5. Loop through nums1 and begin spliced once above 'm' since we only want to check the elements that were added 'n' times.
// 6. Loop through nums1 and check if the nums1[i] = 0. If so push the nums2[counter], starting at 0. Then increase that counter. 
// 7. Sort nums1 array to non-descending(ascending) order.
// 8. Return nums1
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ 12. LEETCODE #121. Best Time to Buy and Sell Stock ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
// You are given an array prices where prices[i] is the price of a given stock on the ith day.
// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
// Example 1:

// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
//                 j i
const prices = [7,1,5,3,6,4]

const maxProfit = function(prices) {
  let profit = 0;
  let j = 0;

  for(let i = 1; i < prices.length; i++){
    let currentProfit = 0;
    if (prices[i] < prices[j]) { // < We are checking the elements and seeing if [i] is greater than element at [j]. 
      j = i // < if [i] is less than [j] increment by 1 
    } else {
      currentProfit = prices[i] - prices[j] // < else if [i] is greater than [j] than substract and get the profit$
    }
    profit = Math.max(profit, currentProfit)
  }
  return profit
};

console.log(maxProfit(prices))
//Psuedo-Code
// 1. Loop through the array
// 2. Compare position at [i] to the next position [i] + 1. 
// 3. Store that value to a variable
// 4. Repeat and use Math.max(storedVariable, currentValue)
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ 13. LEETCODE Remove Element ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
// Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. 
// The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.

// Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:
// Change the array nums such that the first k elements of nums contain the elements which are not equal to val. The remaining elements of nums are not important as well as the size of nums.
// Return k.
// Input: nums = [3,2,2,3], val = 3
// Output: 2, nums = [2,2,_,_]
// Explanation: Your function should return k = 2, with the first two elements of nums being 2.
// It does not matter what you leave beyond the returned k (hence they are underscores).

const nums = [3,2,2,3, 5, 3, 4];
const val = 3;

const removeElement = function(nums, val) {
  let k = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val ) {
      nums[k] = nums[i]
      k++
      // console.log("Nums:", nums)
    };
  }
  console.log(nums)
};

removeElement(nums, val)
// console.log(removeElement(nums, val))
// Psuedo Code
// 1. Loop throughtthe array and check for  all instances of val within nums
// 2. If a value in nums[i] = val, set to nums[i].splice(i, 1, "_"). 
// 3. Make a count of how many times this happens. 
// 4. Then check the length of the array 
// 5. return the length of the array and subtract that count from that and the new array with "_"
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ 14. LEETCODE Remove Duplicates from Sorted Array ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. 
// The relative order of the elements should be kept the same. 
// Then return the number of unique elements in nums.
// Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:
// Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially.
// The remaining elements of nums are not important as well as the size of nums.
// Return k.

// Input: nums = [1,1,2]
// Output: 2, nums = [1,2,_]
// Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).

const removeDuplicates = function(nums) {
    
};