# ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ 1. LEETCODE #21. Merge Two Sorted Lists ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
# You are given the heads of two sorted linked lists list1 and list2.
# Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.
# Return the head of the merged linked list.
# Example 1:
# Input: list1 = [1,2,4], list2 = [1,3,4]
# Output: [1,1,2,3,4,4]
# Example 2:

# Input: list1 = [], list2 = []
# Output: []
# Example 3:

# Input: list1 = [], list2 = [0]
# Output: [0]

x = []
y = [2, 4, 6]

def mergeTwoList(list1, list2):
  sortedList = []
  p1, p2 = 0, 0
  # Loop through the (longest) list
  while p1 < len(list1) and p2 < len(list2):
    if list1[p1] < list2[p2]:
      sortedList.append(list1[p1])
      p1 += 1
    else:
      sortedList.append(list2[p2])
      p2 += 1
  
  # Append remaining elements in list1
  while p1 < len(list1):
    sortedList.append(list1[p1])
    p1 += 1
  
  # Append remaining elements in list2
  while p2 < len(list2):
    sortedList.append(list2[p2])
    p2 += 1
    
  
  return sortedList

print("Answer >> ", mergeTwoList(x, y))

# PsuedoCode
# Create a new list
# Create two pointers. 
  # One pointer checks the first list and other checks second list
# If current element in list 1 is less than current element at list 2, append list1. Increment list 1
# If current element at list 1 is greater than list 2 , append list 2. Increment list 2
# If currents elements are equal. Append and increment both