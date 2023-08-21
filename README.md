## Story:

As a user I want to search for a product entering it's name or part of the name. If one ore more products are found in the products list I want to see a list of them. If the product is not found in the existing products list, check the requested-products list. If the product is found here show a table of all the matching products. If the product is not found in any of these lists I want to be able to make a request for this product.

## Acceptance criteria

**AC1:**
If the user enters a name eg. "product", which is found in the products list show a list of all the corresponding products
<br>
**AC2:**
If the user enters a name eg. "non existing", which is not found in the products list but is found in the requested-products list show a table with all the corresponding products
<br>
**AC3:**
If the user enters a name eg. "newproduct" which is not found in any of the previous lists show a form which will allow the user to make a request for a new product

## Installation:

1. Clone the project
2. run `npm install` from the terminal
3. run `npm run start-with-server`
4. you have the urls for the homepage and resources in the teminal
