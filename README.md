## Cryptosquare *(Loop, conditions, arrays practice)*
#### *Epicodus Practice lesson #32 (Week 3) on 1/23/2021*
***By Daniel Adeyemi***
___
### *This project is not in a complete or portfolio ready state, and should not be considered as representation of professional work.*
---
## *Description:*
This web page will output the encoded version of a given block of text. This program will use method called *square code*.   
To use square code the spaces and punctuation are removed from the English text and the characters are written into a square (or rectangle) and the entire message is downcased. The size of the square (number of columns) is decided by the length of the message. If the message is a length that creates a perfect square (e.g. 4, 9, 16, 25, 36, etc), that number of columns used. If the message doesn't fit neatly into a square, the number of columns is corresponded to the smallest square that is larger than the number of characters in the message. 

## *Tests*
 
**Describe: `cypher()`**   
#### Test 1:
**Test:** *takes input and display output without non-alphabetical characters*   
**Expect:** *cypher(Hi tHeR,e5!).toEqual(hithere)* 
#### Test 2:   
**Test:** *calculate the round of the closest square root of the length of string*   
**Expect:** *cypher(Hi there!).toEqual(3)* 
#### Test 3:   
**Test:** *shift characters for a number we found*   
**Expect:** *cypher(Hi there!, i).toEqual(e)*   
#### Test 4:   
**Test:** *return string to the user separated after every 5th character*   
**Expect:** *cypher(Hi there, r).toEqual(hheie tr)* 

## *Setup instructions:*
Clone repository by using this [URL](https://github.com/DanielAdeyemi/Epicodus_practice_1_23_cypher.git) and run the ***index.html*** file in your terminal.

## *Tecnologies used:*
* HTML
* Java Script
* JQuery
* Bootstrap *v5.0.0 beta*

## *Known bugs:*
This project has almost no style and was used only for practice purporse.

## *License and copyright:*

> ***© Daniel Adeyemi, 2021***   
> *Licensed under MIT license*