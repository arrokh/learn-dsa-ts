/**
 * Linked List
 * 
 * Linked List is a liniear data structure where the elements are not store in
 * contiguous memory locations. The elements in a linked list are linked using pointers.
 * 
 * EXAMPLE:
 *      pointer      pointer
 *  8 ---------> 3 ---------> 50
 *  ^                         ^ 
 *  head                     tail
 * 
 * The differences between in Linked List and arrays is, Linked Lists use pointers and
 * arrays use indicaes
 * 
 * EXAMPLE
 * 
 * memory allocation blocks:
 * |...|...|...|...|
 * 
 * array:
 *  |...|...|8|3|50|...|...|
 * 
 * linked list:
 *  |...|8|pointer to 3|...|...|3|pointer to 50|...|50|...|
 * 
 * We call the elements in a linked list as a nodes. Because we can't index into the list, 
 * we must traverse the list when we need access to a spesific element.
 * 
 * We can use linked list along with implementation of basic data structure 
 * like Stack and Queue. Linked list have a O(1) for insertion at a front-back or head-tail
 * that we will deep dive into it later, and therefor it is very efecition and preferable
 * compare to the array when implementing Stack or Queu data structure.
 * 
 * Doubly Linked List
 * 
 * A doubly linked list is extense of Linked list when the node also have a pointers to 
 * its previous node. Therefore, we can traverse backwards on a doubly linked list.
 * 
 * EXAMPLE:
 *      pointer       pointer
 *  8 <=========> 22 <=========> 3 <=========> 50
 *  ^                                          ^ 
 *  head                                       tail
 * 
 */