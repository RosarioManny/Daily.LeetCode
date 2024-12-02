// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ 1. LEETCODE #1480. Running Sum of 1d Array^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
// Return the running sum of nums.


const nums = [1,2,3,4] 
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

//  !@#$%^&*()_+-=[]{}|;:'",.<>?/~` ---- SOME FUN ----!@#$%^&*()_+-=[]{}|;:'",.<>?/~`!@#$%^&*()_+-=[]{}|;:'",.<>?/~`//  !@#$%^&*()_+-=[]{}|;:'",.<>?/~`!@#$%^&*()_+-=[]{}|;:'",.<>?/~`!@#$%^&*()_+-=[]{}|;:'",.<>?/~`

// let arraySize =  Math.ceil(Math.random() * 15) // < Getting a Random number 1-20
// const answer = new Array(arraySize) // < Setting answer array to an array of random sizd
// const filledAnswer = function(){  // < filling array with random numbers
//   for(let i = 0; i < answer.length; i++){
//     let randomNumber = Math.ceil(Math.random() * 100)
//     answer[i] = randomNumber
//   }
// }
// filledAnswer() // < Create that new Randomzied answer array

// !@#$%^&*()_+-=[]{}|;:'",.<>?/~`!@#$%^&*()_+-=[]{}|;:'",.<>?/~`!@#$%^&*()_+-=[]{}|;:'",.<>?/~`!@#$%^&*()_+-=[]{}|;:'",.<>?/~`//  !@#$%^&*()_+-=[]{}|;:'",.<>?/~`!@#$%^&*()_+-=[]{}|;:'",.<>?/~`!@#$%^&*()_+-=[]{}|;:'",.<>?/~`

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

console.log(fizzBuzz(100))

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