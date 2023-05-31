# Global_Fun_City_Project

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=fssa-batch3_vigneshwar.vijayakumar__web_project&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=fssa-batch3_vigneshwar.vijayakumar__web_project)

Global Fun City is the biggest entertainment industry in USA. It’s a place where you can treat your family to an out of world experience.

* Userflow: https://drive.google.com/drive/folders/1A8QuRF-pblAv8Uh_1rB3A5IKGqWMOm4y
* Wireframe: https://drive.google.com/drive/folders/1A8QuRF-pblAv8Uh_1rB3A5IKGqWMOm4y
* Problem Statement: https://docs.google.com/document/d/1fBwRgEQKGzXSXvccLUUL5ruBpaI0ZlGK/edit?usp=sharing&ouid=105997594239253407599&rtpof=true&sd=true
* User Survey: https://docs.google.com/presentation/d/1XbeUI2W2k8097J8nrg7LNEuHBnLGe9tFS15lbzTR98Q/edit?usp=sharing
* Deploy Website: https://deploy-preview-1--global-fun-city.netlify.app
* Live Website: https://fssa-batch3.github.io/vigneshwar.vijayakumar__web_project/

### List of features:
- User CRUD: [Completed]
   - User sign up.
   - User login.
   - User profile.
   - User edit in profile page.
   - User Delete account.

- Product CRUD: [Completed]
   - Create product.
   - Read product.
   - Update product.
   - Delete product.

- Offer CRUD: [Completed]
   - Create offer.
   - Read offer.
   - Update offer.
   - Delete offer.

- Events CRUD: [Completed]
   - Create event.
   - Read event.
   - Update event.
   - Delete event.

<!-- - Attraction CRUD: [Yet to start]
   - Create attraction.
   - Read attraction.
   - Update attraction.
   - Delete attraction. -->

- Add to cart CRUD: [Completed]
   - Create cart.
   - Read cart.
   - Update cart.
   - Delete cart.

<!-- - Add to Wishlist CRUD: [Yet to Start]
   - Create wishlist.
   - Read wishlist.
   - Update wishlist.
   - Delete wishlist.

- Book tickets CRUD: [Yet to start]
   - Create tickets.
   - Read tickets.
   - Delete tickets.

- Book rooms: [Yet to start]

- Hotels (or) resorts: [Yet to start]
   - Create Hotels (or) resorts.
   - Read Hotels (or) resorts.
   - Update Hotels (or) resorts.
   - Delete Hotels (or) resorts. -->

## User

### Create an account [Completed :white_check_mark:]
- Scenario 1: Successfully create an account.
    - Steps:
        1. Navigate to the create account page.
        2. Enter the required information such as First name, last name, email, password.
        3. Click the "Create Account" button.
    - Expected Result:
        - The user is redirected to the signin page.

### Sign in [Completed :white_check_mark:]
 - Scenario 1: Successfully sign in to account
    - Steps:
        1. Navigate to the sign in page.
        2. Use your registered email and password.
        3. Click the "Sign in" button.
    - Expected Result:
        - The user is redirected to the main page of the website.

<!-- 
### Book Tickets (no.of.persons) [In progress]
- Scenario 1: Successfully finished check - in.
    - Steps: 
        1. Log in as a user.
        2. Navigate to the "Book now" button.
        3. Enter the required information such as check - in, check - out, no.of.adults, no.of.children.
        4. If User want rooms, Click "Yes".
    - Expected Result: 
        - The user is redirected to the hotels page. -->

<!-- ### Book Hotels [Yet to start :x:]
 - Scenario 1: Successfully Booked hotels (or) resorts.
    - Steps: 
        1. Log in as a user.
        2. Navigate to the "Book now" button.
        3. Enter the required information such as check - in, check - out, no.of.adults, no.of.children.
        4. If User want rooms, Click "Yes".
        5. Click the "Check availablity" button.
        6. Navigate to the hotels page.
        7. Choose hotels (or) resorts.
        8. Click the "Book now" button.
    - Expected Result:
        - The user is redirected to the guest information. -->

<!-- ### Book Tickets and hotels or resorts [Yet to start :x:]
 - Scenario 1: Successfully Booked hotels (or) resorts.
    - Steps: 
        1. Log in as a user.
        2. Navigate to the "Book now" button.
        3. Enter the required information such as check - in, check - out, no.of.adults, no.of.children.
        4. If User want rooms, Click "Yes".
        5. Click the "Check availablity" button.
        6. Navigate to the hotels page.
        7. Choose hotels (or) resorts.
        8. Click the "Book now" button.
        9. Enter the required information such as name, email, phone.
        10. Click the "Book Now" bitton.
    - Expected Result:
        1. The user is redirected to the payment page.
        2. The user can able to see check - in, check - out, etc..,
        3. After payment, the ticket has been sent to the respective email address. -->

### View products [Completed :white_check_mark:]
- Scenario 1: Successfully view products.
    - Steps:
        1. Log in as a buyer.
        2. Navigate to the Shop page.
        3. Choose any one of the category.
        4. View the list of available products.
    - Expected Result:
        - The user can view the list of available products.

### View product details [Completed :white_check_mark:]
- Scenario 1: Successfully view product details
    - Steps:
        1. Log in as a buyer.
        2. Navigate to the Shop page.
        3. Choose any one of the category.
        4. View the list of available products.
        5. Select a product to view its details.
    - Expected Result:
        - The user can view the details of the selected product.


### Add product to my bag [Completed :white_check_mark:]
- Scenario 1: Successfully add product to my bag.
    - Steps:
        1. Log in as a buyer.
        2. Navigate to the Shop page.
        3. Choose any one of the category.
        4. View the list of available products.
        5. Select a product to view its details.
        6. Click the "Buy Now" button.
        7. Product will get it into "My bag".
    - Expected Result:
        - The product is added to the user's bag.

### View product in user's bag [Completed :white_check_mark:]
- Scenario 1: Successfully view products in user's bag.
    - Steps:
        1. Log in as a buyer.
        2. Navigate to the Shop page.
        3. Click the 'My bag' page.
        4. View the list of products in the user's bag.
    - Expected Result:
        - The user can view the list of products in the bag.

### Remove product from bag [Completed :white_check_mark:]
- Scenario 1: Successfully remove item from user's bag.
    - Steps:
        1. Log in as a buyer.
        2. Navigate to the Shop page.
        3. Click the 'My bag' page.
        4. Remove the selected product from user's bag.
    - Expected Result:
        - The product is removed from the user's bag.

<!-- ### Buy a product [Yet to start :x:]
- Scenario 1: Successfully purchase a product
    - Steps:
        1. Log in as a buyer.
        2. Navigate to the product listing page.
        3. Select a product to view its details.
        4. Click the "Buy Now" button.
        5. Product will get it into "My bag".
        6. User's can see the total amount of the product.
        7. Click the "Proceed Checkout" button.
        8. Enter the required information such as Name, phone, email, door-no, address, country, zip code, etc.., 
        9. Select the payment method.
        10. Click the "Proceed" button. 
    - Expected Result:
        - The user is redirected to the order confirmation page.
        - An order confirmation email is sent to the user's email address.
        - The product stock is reduced by the purchased quantity.

### Add products to wishlist [Yet to start :x:]
- Scenario 1: Successfully add product to wishlist.
    - Steps:
        1. Log in as a buyer.
        2. Navigate to the product listing page.
        3. Select a product to wishlist.
        4. Click the "heart" icon.
    - Expected Result:
        - The products is added to the user's wishlist.

### View products in wishlist [Yet to start :x:]
- Scenario 1: Successfully view products in wishlist.
    - Steps:
        1. Log in as a buyer.
        2. Navigate to the shop page.
        3. Click the wishlist page.
        4. View the list of product in the wishlist.
    - Expected Result:
        - The user can view the list of products in the wishlist.

### Remove products from wishlist [Yet to start :x:]
- Scenario 1: Successfully remove item from wishlist
    - Steps:
        1. Log in as a buyer.
        2. Navigate to the shop page.
        3. Click the wishlist page.
        4. Remove the selected product from the wishlist.
    - Expected Result:
        - The product is removed from the user's wishlist. -->

## Admin 
- Scenario 1: Successfully entered into admin
    - Steps:
        1. Log in as a Admin.
        2. Enter the details.
    - Expected Result:
        - The Admin entered into the Admin Portal.

### Sell a Product [Completed]
- Scenario 1: Successfully create a product.
    - Steps: 
        1. Log in as a Admin.
        2. Enter the details.
        3. Click the sidebar and click the 'Product Upload'.
        4. Enter the details to create a product.
        5. Click 'Save' Button.
    - Expected Result:
        - Successfully, Admin created a product.

### Read a product [Completed]
- Scenario 1: Successfully read a product.
    - Steps:
        1. Log in as a buyer.
        2. Navigate to the Shop page.
        3. Choose any one of the category.
        4. View the list of available products.
    - Expected Result:
        - Successfully, Admin read a product.

### Edit a product [Completed]
- Scenerio 1: Successfully edit a product.
    - Steps: 
        1. Log in as a Admin.
        2. Enter the details.
        3. Click the sidebar and click the 'Product Update'.
        4. Enter the Unique ID from Inspect.
        5. Click the 'Find Details' Button.
        6. The product details will show.
        7. Edit the details you want.
        8. Click 'Update Product' Button.
    - Expected Result:
        - Successfully, Admin edited a product. 

### Delete a product [Completed]
- Scenerio 1: Successfully delete a product.
    - Steps: 
        1. Log in as a Admin.
        2. Enter the details.
        3. Click the sidebar and click the 'Product Update'.
        4. Enter the Unique ID from Inspect.
        5. Click the 'Find Details' Button.
        6. The product details will show.
        7. Click 'Delete Product' Button.
    - Expected Result:
        - Successfully, Admin deleted a product.

### Create a Offer [Completed]
- Scenario 1: Successfully create a offer.
    - Steps: 
        1. Log in as a Admin.
        2. Enter the details.
        3. Click the sidebar and click the 'Offer Upload'.
        4. Enter the details to create a offer.
        5. Click 'Save' Button.
    - Expected Result:
        - Successfully, Admin created a offer.  

### Read a product [Completed]
- Scenario 1: Successfully read a offer.
    - Steps:
        1. Log in as a buyer.
        2. Navigate to the Offer page.
        3. View the list of available offers.
    - Expected Result:
        - Successfully, Admin read a offer.

### Edit a offer [Completed]
- Scenerio 1: Successfully edit a offer.
    - Steps: 
        1. Log in as a Admin.
        2. Enter the details.
        3. Click the sidebar and click the 'Offer Update'.
        4. Enter the Unique ID from Inspect.
        5. Click the 'Find Details' Button.
        6. The offer details will show.
        7. Edit the details you want.
        8. Click 'Update offer' Button.
    - Expected Result:
        - Successfully, Admin edited a offer.

### Delete a offer [Completed]
- Scenerio 1: Successfully delete a offer.
    - Steps: 
        1. Log in as a Admin.
        2. Enter the details.
        3. Click the sidebar and click the 'Offer Update'.
        4. Enter the Unique ID from Inspect.
        5. Click the 'Find Details' Button.
        6. The offer details will show.
        7. Click 'Delete Offer' Button.
    - Expected Result:
        - Successfully, Admin deleted a offer. 

### Create a Event [Completed]
- Scenario 1: Successfully create a event.
    - Steps: 
        1. Log in as a Admin.
        2. Enter the details.
        3. Click the sidebar and click the 'Event Upload'.
        4. Enter the details to create a Event or Upcoming event.
        5. Click 'Save' Button.
    - Expected Result:
        - Successfully, Admin created a Event or Upcoming event.         

### Read a Event [Completed]
- Scenario 1: Successfully read a event.
    - Steps:
        1. Log in as a buyer.
        2. Navigate to the event page.
        3. View the list of available event or upcoming events.
    - Expected Result:
        - Successfully, Admin read a event or upcoming events.

### Edit a event [Completed]
- Scenerio 1: Successfully edit a event.
    - Steps: 
        1. Log in as a Admin.
        2. Enter the details.
        3. Click the sidebar and click the 'Event Update'.
        4. Enter the Unique ID from Inspect.
        5. Click the 'Find Details' Button.
        6. The event (or) upcoming events details will show.
        7. Edit the details you want.
        8. Click 'Update event' Button.
    - Expected Result:
        - Successfully, Admin edited a event (or) upcoming event.

### Delete a event [Completed]
- Scenerio 1: Successfully delete a event.
    - Steps: 
        1. Log in as a Admin.
        2. Enter the details.
        3. Click the sidebar and click the 'Event Update'.
        4. Enter the Unique ID from Inspect.
        5. Click the 'Find Details' Button.
        6. The event (or) upcoming event details will show.
        7. Click 'Delete Event' Button.
    - Expected Result:
        - Successfully, Admin deleted a event.

### Create a Attraction [Completed]
- Scenario 1: Successfully create a attraction.
    - Steps: 
        1. Log in as a Admin.
        2. Enter the details.
        3. Click the sidebar and click the 'Attraction Upload'.
        4. Enter the details to create a attraction.
        5. Click 'Save' Button.
    - Expected Result:
        - Successfully, Admin created a attraction.             