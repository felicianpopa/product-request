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

## Real example

I am a genius eMag user and I prefer buying products from eMag instead of other e-Shops because you offer the possibility to pick up certain products from easyBox and I have a certain level of trust in eMag.
<br>
You have a partnership with vidaxl but they don't sell all of their products through eMag.
<br>
I want to buy the "SolarMax 1000" water fountain but I don't need the battery. Doing a google search the first result for the pump without a battery is on vidaxl.
<br>
Supposing that I have never bought anything through vidaxl directly and I prefer doing it thwough eMag I would like the possibility to request this product from emag.
<br>
Because I also enter the url where I found the product you have the possibility to check your database and see that you already have a partnership with this seller. You can then show the seller that this product is requested on eMag.
<br>
If this requested products list is veiwable by anyone you can also attract new partners which have the possibility to sell this item or have other existing partners add this product.

## Installation:

1. Clone the project
2. run `npm install` from the terminal
3. run `npm run start-with-server`
4. you have the urls for the homepage and resources in the teminal
