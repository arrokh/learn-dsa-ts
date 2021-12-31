# Linked List

Linked List is a liniear data structure where the elements are not store in contiguous memory locations. The elements in a linked list are linked using pointers.

```ts
    pointer     pointer
8 ---------> 3 ---------> 50
^                         ^ 
head                      tail
```

The differences between in Linked List and arrays is, Linked Lists use pointers and arrays use indicaes

```ts
memory allocation blocks:
|...|...|...|...|

array:

|...|...|8|3|50|...|...|

linked list:

|...| 8 | pointer to 3 |...|...| 3 | pointer to 50 |...| 50 |...|
```

We call the elements in a linked list as a nodes. Because we can't index into the list, we must traverse the list when we need access to a spesific element.

We can use linked list along with implementation of basic data structure  like Stack and Queue. Linked list have a O(1) for insertion at a front-back or head-tail that we will deep dive into it later, and therefor it is very efecition and preferable compare to the array when implementing Stack or Queu data structure. 

## Doubly Linked List

A doubly linked list is extense of Linked list when the node also have a pointers to its previous node. Therefore, we can traverse backwards on a doubly linked list.

```ts
    pointer        pointer       pointer
8 <=========> 22 <=========> 3 <=========> 50
^                                          ^ 
head                                       tail
```

## Singly Linked List Insertion

Here is an example how is the inserting element work in singly linked list. Let's say we have linked list with this data:

```ts
8 ---------> 22 ---------> 3 ---------> 50
head                                    tail
cur
```

Because we cannot do indexing in linked list nor to access spesify the element between tow nodes, we have to traverse all the node from head to the spesific index we want or until the tail of node. In the example data above, if we wanto to insert data at the index 3 (which is value of 50), we will traverse from 8, to the index before the target index, which have value of 3, and do pointer manipulation to change the next of value of 3 to the new node, and then change the next value of new node to the next node of value of 3 before (which is value of 50). 

```ts
Insert value of 16 at index of 3

(Iteration-0)
8 ---------> 22 ---------> 3 ---------> 50
head                                    tail
cur

(Iteration-1)
8 ---------> 22 ---------> 3 ---------> 50
head                                    tail
            cur

(Iteration-2)
8 ---------> 22 ---------> 3 ---------> 50
head                                    tail
                          cur

(Iteration-3)
8 ---------> 22 ---------> 3             50 (still the tail)
head                       |             ^
                           v             |
                           16 ------------  
                           (new value)
                           cur

Final data:
8 ---------> 22 ---------> 3 ---------> 16 ---------> 50
head                                                  tail
```

## Doubly Linked List Insertion

Something is similiar between singly and doubly linked list. The difference is we need to not just pointing the next value of pointer, but also the prev value of pointer.

## Singly and Doubly Linked List Deletion

Basicly the singly and doubly linked list have similiar approach, except in the doubly linked list, we have to set the prev node pointer too. In the example data below, if we want to remove the value of 3 or the index of 2, we will traverse from head node, and if we reaching the target index-1, we will set the next node 22 to the next node of target node 3, which is 50. In the doubly linked list, we will set the prev node of 50 to the 22. After that we can delete/de-allocate the memory of the node (In C or C++) or just simply leave it behind to the garbage collector.  

```ts

Delete the data index of 2

(Iteration-0)
8 <=========> 22 <=========> 3 <=========> 50
^                                          ^ 
head                                       tail
cur

(Iteration-1)
8 <=========> 22 <=========> 3 <=========> 50
^                                          ^ 
head                                       tail
              cur

8 <=========> 22             3             50
              ^                            ^ 
              ||                           ||  
               =============================
head                                        tail


8 <=========> 22 <=========> 50
^                            ^ 
head                         tail

```

## Time Complexity: Singly vs Doubly Linked List

### Insertion

| Operation        | Singly Linked List | Doubly Linked List |
| :--------------- | :----------------- | :----------------- |
| Insertion head   | O(1)               | O(1)               |
| Insertion middle | O(n)               | O(n)               |
| Insertion tail   | O(1)               | O(1)               |

### Deletion

| Operation       | Singly Linked List | Doubly Linked List |
| :-------------- | :----------------- | :----------------- |
| Deletion head   | O(1)               | O(1)               |
| Deletion middle | O(n)               | O(n)               |
| Deletion tail   | O(n)*              | O(1)               |

* Singly Linked List has O(n) for deletion tail because we have to traverse all the node, start from head.