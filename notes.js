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

maximumWealth(accounts)