# ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^  DS: Dynamic Arrays / Resizable Arrays ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
class DynamicArray:
    
    def __init__(self, capacity: int): # Initialize an Array
        self.capacity  = capacity
        self.length = 0
        self.arr = [0] * capacity

    def get(self, i: int) -> int: # Get value at i-th index
        return self.arr[i]

    def set(self, i: int, n: int) -> None: # Set n at i-th index
        self.arr[i] = n

    def pushback(self, n: int) -> None: # Insert n in the last position of the array
        if self.length == self.capacity:
            self.resize()
        
        # insert at next empty position    
        self.arr[self.length] = n
        self.length += 1

    def popback(self) -> int: 
        if self.length > 0:
            self.length -= 1

        return self.arr[self.length]

    def resize(self) -> None:
        # Create new array of double capacity
        self.capacity = 2 * self.capacity
        new_arr = [0] * self.capacity

        # Copy elements to new_arr
        for i in range(self.length):
            new_arr[i] = self.arr[i]
        self.arr = new_arr
        
    def getSize(self) -> int:
        # Return the size of the array
        return self.length
    
    def getCapacity(self) -> int:
        return self.capacity
    
# NOTE:
# Dynamic Array implementation
# Note: Python lists are dynamic arrays by default,
# but this is an example of what's going on under the hood.]
# ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
