# ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ 1. LEETCODE #9. Palindrome Number ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

# Given an integer x, return true if x is a palindrome, and false otherwise.

# Input: x = 1234
# Output: true
# Explanation: 121 reads as 121 from left to right and from right to left.
# Input: x = -121
# Output: false
# Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

# nums = 12321

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

# isPalindrome(nums)

# ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ 2. LEETCODE #13. Roman to Integer ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
# Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

# Symbol       Value
# I             1
# V             5
# X             10
# L             50
# C             100
# D             500
# M             1000
# For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.
# Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

# I can be placed before V (5) and X (10) to make 4 and 9. 
# X can be placed before L (50) and C (100) to make 40 and 90. 
# C can be placed before D (500) and M (1000) to make 400 and 900.
# Given a roman numeral, convert it to an integer.

# Example 1:

# Input: s = "III"
# Output: 3
# Explanation: III = 3.
# Example 2:

# Input: s = "LVIII"
# Output: 58
# Explanation: L = 50, V= 5, III = 3.
# Example 3:

# Input: s = "MCMXCIV"
# Output: 1994
# Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.



# if you notice there are two distant elements with roman numerals.

# 1. Numbers are put from largest to smallest. 
# 2. When the smaller number is first, it indicates that it must be substracted to the next number.   
    #  IV = 4, IX = 9, XL = 40, XC = 90
tim = "IVIV"
def roman_to_int(s:str) -> int:
  roman_map = {
  'I' : 1,
  'V' : 5,
  'X' : 10,
  'L' : 50,
  'C' : 100,
  'D' : 500,
  'M' : 1000,
}
  # Hold the total value
  total = 0
  i = 0 
  while i < len(s):
    if i + 1 < len(s) and roman_map[s[i]] < roman_map[s[i + 1]]:
      total += roman_map[s[i + 1]] - roman_map[s[i]]
      # skips the next character since two characters are used for the number
      i += 2 
    else:
      total += roman_map[s[i]]
      i += 1
  return total

# roman_to_int(tim)

# ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ 3. LEETCODE #14. Longest Common Prefix ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
# Write a function to find the longest common prefix string amongst an array of strings.
# If there is no common prefix, return an empty string "".

# Example 1:
# Input: strs = ["flower","flow","flight"]
# Output: "fl"
# Example 2:
# Input: strs = ["dog","racecar","car"]
# Output: ""
# Explanation: There is no common prefix among the input strings.

# strs = ["floper","flow","flight"]
strs = ["ab", "a"]
# strs = []
def common_prefix():
  # If strs is empty
  if len(strs) == 0:
    return ""
  
  # If only one element in strs
  if len(strs) == 1:
    return strs[0]

  # # Sort array from shortest string to longest. 
  sort_strs = sorted(strs, key=len)

  # Store the first element. Longest commonality is determined by the shortest word.
  prefix = sort_strs[0]

  # Prefix we are currently using.
  p = len(prefix)
  # Word we are at.
  i = 0


  # # Loop through the words.
  while p > 0:
    # Check if word starts with the prefix 
    if i < len(sort_strs) and sort_strs[i].startswith(prefix[0:p]):
      # Iterate to the next word
      i += 1
    else:
      # Decrement if word doesn't contain prefix
      p -= 1
      # Reset and look through all words again
      i = 1
    
    # If i is the length of word_list means we didn't decrement. Which means we went through the list with all matching
    if i == len(sort_strs):
      return(prefix[0:p])
    
  return ""

print(common_prefix())

# 1. Loop through the all the words 
  # 1a. Loop through for the letters
# 2. If first letter is in all words. Add to common
# 3. As soon as a letter doesn't match, break and return the commons. 
# 4. If the none of th first letters don't match print ""