# Oak and Fort assignment


Project Website: [Oak + Fort](https://frozen-harbor-01686.herokuapp.com/)


**Dependencies:**
- [@material-ui/core](https://www.npmjs.com/package/@material-ui/core)
- [react](https://www.npmjs.com/package/react)
- [papaparse](https://www.npmjs.com/package/papaparse)
- [react-scripts](https://www.npmjs.com/package/react-scripts)


**Build**
- [Webpack](https://www.npmjs.com/package/webpack)



# Infrastructure

- Hosted on Heroku at  https://frozen-harbor-01686.herokuapp.com/


# Build locally

- CD into root directory where the project is intalled.
- Type npm start and press enter
- Open up the browser and navigate to localhost:3000 (If port 3000 is in use another port will be confirmed)



# Objective

Coding Exercise

Part One:
The ‘items.csv’ file contains a typical file you may come across while on the job which needs
to be parsed. Each line in the file represents an item, and its respective merchandise
hierarchy (or class).
The file contains both parent and child item SKUs. The child item is the item that comes
after the semi-colon (:) delimiter.
Parent Item - BA-1981-118-W
Child Item - BA-1981-118-W : BA-1981-118-W-BLACK-OS
Write a program that takes the file ‘items.csv’ and counts the number of items in each
merchandise hierarchy (class). The program should write the results to a new file which can
be utilized in part two.
Example, if the items merchandise hierarchy is “OF China Accessories : Bags : Backpack”
then the quantity of Backpack should increase by 1. The result should be an output file that
looks something like:
Backpack: 64
Bag: 54
Shoulder Bag: 12
etc.…

*The program only needs the total quantities regardless of the sub-class being unique. In
an example, if 2 items were to have the merchandise hierarchies:
OF China Women : Top : Dress
OF Korea Women : Top : Dress
Then the result would be the combined total:
Dress: 2

*The program should also count how many items do not have a merchandise hierarchy
assigned (empty)


Part Two
Create a simple front-end webpage which loads the output file generated in part one. Each
subclass (Backpack, Bag, Shoulder Bag, etc...) should be represented as a button on the
page. When a user clicks the button, the webpage should display the total quantity of items
in that class. The webpage should also display the number of items that are missing a
merchandise hierarchy.
There should also be a button that says, “Sum Items” and when clicked, the webpage will
report the sum of all items in each merchandise hierarchy combined.
Additional Information
Your submission will be assessed based on efficiency, simplicity, reusability and best
practice.
Part two should be user-friendly and aesthetically pleasing.
Use any programming language you would like.
Be prepared to explain and defend your code.

 
 For more information on Oak + Fort refer [Here](https://ca.oakandfort.com/)
 
