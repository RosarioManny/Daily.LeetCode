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

nums = [0,1,0,3,12]
# nums = [0,1,0]

def move_zeroes(nums):
  length = len(nums)
  non_zero = 0

  for i in range(length):
    if(nums[i] != 0 ):
      nums[non_zero] = nums[i]
      non_zero += 1

  for i in range(non_zero, length):
    nums[i] = 0

  print(nums)

move_zeroes(nums)