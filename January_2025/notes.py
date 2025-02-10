import math

# ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ 1. LEETCODE Replace Elements with Greatest Element on Right Side^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
# Given an array arr, replace every element in that array with the greatest element among the elements to its right, and replace the last element with -1.
# After doing so, return the array.
  # Input: arr = [17,18,5,4,6,1]
  # Output: [18,6,6,6,1,-1]
    # Explanation: 
    # - index 0 --> the greatest element to the right of index 0 is index 1 (18).
    # - index 1 --> the greatest element to the right of index 1 is index 4 (6).
    # - index 2 --> the greatest element to the right of index 2 is index 4 (6).
    # - index 3 --> the greatest element to the right of index 3 is index 4 (6).
    # - index 4 --> the greatest element to the right of index 4 is index 5 (1).
    # - index 5 --> there are no elements to the right of index 5, so we put -1.

arr = [17,18,5,4,6,1]
# arr = [20]
# arr = []

def greatest_right_element(arr):
  length = len(arr)
  greatest = -1
  for i in range(length -1, -1, -1):
    current = arr[i]
    arr[i] = greatest
    greatest=max(greatest, current)
  return arr


# print(greatest_right_element())

# PsuedoCode
# Iterate over the array
# Start from the end of array. 
# Assign current idx to variable
# Compare current idx to greatest value.
# If greatest is greater than current, current becomes greatest
# Else greatest becomes the current
# ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ 2. LEETCODE Remove Duplicates from Sorted Array ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
# Given an integer array nums sorted in non-decreasing order (increasing), remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.
# Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:
# Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. The remaining elements of nums are not important as well as the size of nums.
# Return k.

# Input: nums = [1,1,2]
# Output: 2, nums = [1,2,_]
# Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
# It does not matter what you leave beyond the returned k (hence they are underscores).

def remove_duplicates(nums):
    k = len(nums)
    u = 0  # Variable we are currently checking for
    i = 1
    while i < len(nums):
        print("Before", nums)
        if nums[u] == nums[i]:
            nums.pop(i)
            i -= 1  # Decrease i to adjust for changed length
        else:
            u += 1
        i += 1  # Move to the next element
        print("Unique:", u)
    
    return k, nums
# ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ 3. LEETCODE Move Zeroes ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
# Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
# Note that you must do this in-place without making a copy of the array.

# Input: nums = [0,1,0,3,12]
# Output: [1,3,12,0,0]

# nums = [0,1,0,3,12]
# nums = [0,1,0]

def move_zeroes(nums):
  length = len(nums) 
  non_zero = 0 # Pointer at the beginning of the array to place non-zero numbers.

  for i in range(length):
    if(nums[i] != 0 ): # if it's any number besides zero
      nums[non_zero] = nums[i] # Place that non-zero number at beginning
      non_zero += 1 # increment pointer for next spot for potential non-zero

  for i in range(non_zero, length): # begin at last non-zero spot; add zeros until the end of array length.
    nums[i] = 0 

  print(nums)

# move_zeroes(nums)

# ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ 4. LEETCODE Sort Array By Parity ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
# Given an integer array nums, move all the even integers at the beginning of the array followed by all the odd integers.
# Return any array that satisfies this condition.

# Input: nums = [3,1,2,4]
# Output: [2,4,3,1]
# Explanation: The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.

nums = [3,1,2,4]

def sort_by_parity():
  l = 0

  for r in range(len(nums)):
    if nums[r] % 2 == 0:
      nums[l], nums[r] = nums[r], nums[l]
      l += 1
  return nums

# print(sort_by_parity())

# Note: Swapping Elements
# vv INCORRECT vv
# nums[left] = nums[right]
# nums[right] = nums[left]

# vv CORRECT vv
# nums[left], nums[right] = nums[right], nums[left]

# WHY:
# The first snippet does not perform a swap; it overwrites both elements with the value of nums[right].
# In the first line (nums[left] = nums[right]), the value of nums[right] is assigned to nums[left].
#  After this step, both nums[left] and nums[right] hold the same value (the original value of nums[right]).
  # In the second line (nums[right] = nums[left]), you're assigning nums[right] the value of nums[left] again, which has already been overwritten in the first step. 
  # So, this line essentially has no effect, and both nums[left] and nums[right] will now hold the same value.

# The second snippet uses tuple unpacking, which correctly swaps the values of nums[left] and nums[right] in a single step.
  # Python's tuple unpacking allows you to swap values in a single line. In this expression, nums[right] is evaluated and temporarily stored before nums[left] is assigned to it, and vice versa.
  # This means the values of nums[left] and nums[right] are swapped without any loss of information or overwriting.
# ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ 5. LEETCODE Height Checker ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
#   A school is trying to take an annual photo of all the students. The students are asked to stand in a single file line in non-decreasing order by height. Let this ordering be represented by the integer array expected where expected[i] is the expected height of the ith student in line.
# You are given an integer array heights representing the current order that the students are standing in. Each heights[i] is the height of the ith student in line (0-indexed).
# Return the number of indices where heights[i] != expected[i]. Match the order of expected (effectively)
# You are not given the expected array but have to create it yourself. 

# E1
# Input: heights = [1,1,4,2,1,3]
# Output: 3
# Explanation: 
# heights:  [1,1,4,2,1,3]
# expected: [1,1,1,2,3,4]
# Indices 2, 4, and 5 do not match.
# E2 
# Input: heights = [5,1,2,3,4]
# Output: 5
# Explanation:
# heights:  [5,1,2,3,4]
# expected: [1,2,3,4,5]
# All indices do not match.
# E3
# Input: heights = [1,2,3,4,5]
# Output: 0
# Explanation:
# heights:  [1,2,3,4,5]
# expected: [1,2,3,4,5]
# All indices match.
# heights = [1,1,4,2,1,3]
# expected =[1,1,1,2,3,4]
heights = [1,2,3,4,5]
# expected = []

def heighChecker():
  expected = sorted(heights)
  counter = 0
  for i in range(len(expected)):
    if (heights[i] is not expected[i]):
      counter += 1
  return counter

# print(heighChecker())

# ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ 6. LEETCODE #20. Valid Parentheses ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
# Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
# An input string is valid if:

# Open brackets must be closed by the same type of brackets.
# Open brackets must be closed in the correct order.
# Every close bracket has a corresponding open bracket of the same type.

# s = "()[]{}" # true
# s = "(]" # false
s = "}[" # false

stack = []
map = {
    '(': ')',
    '{': '}',
    '[': ']'
}
def checkBrackets(brace):
  if len(brace) % 2 != 0:
    return False
  # print('S :: ', s)
  for i in range(len(brace)):
    if brace[i] in map:
      stack.append(brace[i])
    else:
      if len(stack) == 0:
        return False
      if (map.get(stack.pop()) != brace[i]):
        return False
    # print('Stack :: ' , stack)
  # print("out of loop Stack :: ", stack)
  if len(stack) == 0:
    return True
  else:
    return False
  
# print(checkBrackets(s))

# ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ 7. LEETCODE #9. Palindrome Number ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

# Given an integer x, return true if x is a palindrome, and false otherwise.

# Input: x = 1234
# Output: true
# Explanation: 121 reads as 121 from left to right and from right to left.
# Input: x = -121
# Output: false
# Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

nums = 12321

def isPalindrome(x):
  # turn into an array/list
  check = list(str(x))

  # check the last element
  pointer = -1

  # Singe character is always a palindrome
  if len(check) == 1:
    return True
  
  # Stop at the middle
  middle = round(len(check) / 2)

  for i in range(0, middle):
    # print("I ::",check[i])
    # print("Pointer ::", check[pointer])
    if check[i] != check[pointer]:
      print("Not Palidrome")
      return False
    else:
      pointer -= 1
  
  print("Palindrome")
  return True

isPalindrome(nums)

# ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ 8. LEETCODE #9. Palindrome Number ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
