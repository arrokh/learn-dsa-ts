# Static Array

A static array is a list of elements with fixed length of n. It is static because the length does not change. A static array is indexable from the range 0 to n-1. This mean we can access any element of array by providing the index or the associated index.

```ts
| 42 | 8 | 73 | 76 | 500 | 2 | 17 | 159 |
```

## Why we need Arrays?

Basically, all the things that showed more than one data in our world, can be easily represented in the array. Here are some example commong things we use or see that accually represent as a data behind the system:

- Facebook is a list of posts.
- Instagram is a list of images with caption.
- Twitter is a list of tweets.

The term 'list' above is can be likened to an array in the programming world (and actually it is). It's one of the most common data structures.

## Static Array - Insertion

Let's see how the static array insertion work. The example above is a java code:

```java
int[] nums = new int[8]
```

What happen in the code above are we define a array called nums with type integer and size of 8. It mean that the maximum size of the nums will be 8 whatever happens.

If we want to add value or data to the nums, we can put the index that we want. For example:

```java

int[] nums = new int[8]
// Result:
// nums:        |  |  |  |  |  |  |  |  |  
// index of:     0  1  2  3  4  5  6  7

nums[0] = 42;
// Result:
// nums:        |42|  |  |  |  |  |  |  |  
// index of:     0  1  2  3  4  5  6  7

nums[1] = 8;
nums[2] = 73;
nums[3] = 76;
nums[4] = 500;
nums[5] = 2;
nums[6] = 17;
nums[7] = 159;
// Result:
// nums:        | 42 | 8 | 73 | 76 | 500 | 2 | 17 | 159 |  
// index of:      0    1   2    3    4     5   6    7
```

As we can see, the end of the index is n-1 or (8-1) which is 7.

As a human, we perceive an array as a serial of blocks that contain spesific data with defined type. However, in memory (RAM), the arrays is store in consecutive memory locations, like

Inserting to a static array is O(1), because we can directly add the data when we use the correct index, that actually the computer remember the address or the pointer.

## Static Array - Reading

As inserting, therefor the reading from a static array is also O(1), because the address that already remember by the computer.

```java
nums[1];
// Result:
// 8
```

## Static Array - Updating

Updating from a static array also have O(1).

```java
nums[1] = 88;
// Result:              V
// nums:        | 42 | 88 | 73 | 76 | 500 | 2 | 17 | 159 |  
// index of:      0    1    2    3    4     5   6    7
```

## Static Array - Deletion

Let's say, based on our previous nums data, we want to delete the 42 or the index of 0. 

```java
//                 X
// nums:        | 42 | 88 | 73 | 76 | 500 | 2 | 17 | 159 |  
// index of:      0    1    2    3    4     5   6    7
```

Because of that, we have to shif all the numbers after to the left. 

```java
//                 Shift 88 to the left
// nums:        | 88 | 88 | 73 | 76 | 500 | 2 | 17 | 159 |  
// index of:      0    1    2    3    4     5   6    7

//                 Shift 73 to the left
// nums:        | 88 | 73 | 73 | 76 | 500 | 2 | 17 | 159 |  
// index of:      0    1    2    3    4     5   6    7

//                 Shift 76 to the left
// nums:        | 88 | 73 | 76 | 76 | 500 | 2 | 17 | 159 |  
// index of:      0    1    2    3    4     5   6    7

// And so on... 

// *FINAL*
//                 Shift 88 to the left
// nums:        | 88 | 73 | 76 | 500| 2 | 17 | 159 | 159 |  
// index of:      0    1    2    3    4   5    6     7
```

After shifting the data, we will decrement the size from 8 to 7, and left behind the index of 7, because publicly the final index will be 6 (7-1), and the last index, 8, will just goes ignored. Therefore, the time complexity of static array deletion is O(n) because we possibliy have to loop up all the data to shift the value.

## Static Array - Time Complexity

| Operation | Cost |
| :-------- | :--- |
| Read      | O(1) |
| Write     | O(1) |
| Update    | O(1) |
| Delete    | O(n) |
| Search    | O(n) |

## The Problem of Static Array: Aren't Flexible

As we know, we have to know or define the size of the array at compile time, therefore, if we want to storing more data to the array, we can't. So the solution in the data strcture is ...

# Dynamic Arrays

With a dynamic array, we can insert as many items as we want and the array will grow according to the size that  we want. 