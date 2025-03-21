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

# NEED TO USE LISTNODE!
# Definition for singly-linked list.
class ListNode(object):
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next
def mergeTwoLists(self, list1, list2):
# Create a dummy node to simplify the merging process
    dummy = ListNode()
    current = dummy  # Pointer to build the merged list
    # Traverse both lists and merge them
    while list1 and list2:
        if list1.val < list2.val:
            current.next = list1
            list1 = list1.next
        else:
            current.next = list2
            list2 = list2.next
        current = current.next
    # If one of the lists is not empty, append it to the merged list
    if list1:
        current.next = list1
    else:
        current.next = list2
# Return the head of the merged list (skip the dummy node)
    return dummy.next

# CODE WORKS BUT NOT USING A LISTNODE AS QUESTION ASKED
# x = []
# y = [2, 4, 6]

# def mergeTwoList(list1, list2):
#   sortedList = []
#   p1, p2 = 0, 0
#   # Loop through the (longest) list
#   while p1 < len(list1) and p2 < len(list2):
#     if list1[p1] < list2[p2]:
#       sortedList.append(list1[p1])
#       p1 += 1
#     else:
#       sortedList.append(list2[p2])
#       p2 += 1
#   # Append remaining elements in list1
#   while p1 < len(list1):
#     sortedList.append(list1[p1])
#     p1 += 1
#   # Append remaining elements in list2
#   while p2 < len(list2):
#     sortedList.append(list2[p2])
#     p2 += 1
#   return sortedList
# print("Answer >> ", mergeTwoList(x, y))

# PsuedoCode
# Create a new list
# Create two pointers. 
# One pointer checks the first list and other checks second list
# If current element in list 1 is less than current element at list 2, append list1. Increment list 1
# If current element at list 1 is greater than list 2 , append list 2. Increment list 2
# If currents elements are equal. Append and increment both

# ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ 2. NEETCODE > DSA < Contains Duplicate ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
# ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ 3. NEETCODE > DSA < Is Anagram ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
# Given two strings s and t, return true if the two strings are anagrams of each other, otherwise return false.

# An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.


# Input: s = "racecar", t = "carrace"

# Output: true

s = "racecar"
t = "carrace"
def isAnagram():
    i = 0
    if len(s) != len(t):
        return False 
    
    while i <= len(t) - 1:
        sort_T = sorted(t)
        sort_S = sorted(s)
        print("T", sort_T)
        print("S", sort_S)
        if sort_S[i] == sort_T[i]:
            i += 1
        else:
            return False
    return True

print(isAnagram())