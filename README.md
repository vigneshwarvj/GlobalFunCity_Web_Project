# Global_Fun_City_Project

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=fssa-batch3_vigneshwar.vijayakumar__web_project&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=fssa-batch3_vigneshwar.vijayakumar__web_project)

Global Fun City is the biggest entertainment industry in USA. It’s a place where you can treat your family to an out of world experience.

* Userflow: https://drive.google.com/drive/folders/1A8QuRF-pblAv8Uh_1rB3A5IKGqWMOm4y
* Wireframe: https://drive.google.com/drive/folders/1A8QuRF-pblAv8Uh_1rB3A5IKGqWMOm4y
* Problem Statement: https://docs.google.com/document/d/1fBwRgEQKGzXSXvccLUUL5ruBpaI0ZlGK/edit?usp=sharing&ouid=105997594239253407599&rtpof=true&sd=true
* Live Website: https://fssa-batch3.github.io/vigneshwar.vijayakumar__web_project/

## User

### Create an account [Completed :white_check_mark:]
- Scenario 1: Successfully create an account
    - Steps:
        1. Navigate to the create account page.
        2. Enter the required information such as First name, last name, email, password, date of birth.
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


### Book Tickets (no.of.persons) [Yet to start :x:]
- Scenario 1: Successfully finished check - in.
    - Steps: 
        1. Log in as a user.
        2. Navigate to the "Book now" button.
        3. Enter the required information such as check - in, check - out, no.of.adults, no.of.children.
        4. If User want rooms, Click "Yes".
    - Expected Result: 
        - The user is redirected to the hotels page.

### Book Hotels [Yet to start :x:]
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
        - The user is redirected to the guest information.

### Book Tickets and hotels or resorts [Yet to start :x:]
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
        3. After payment, the ticket has been sent to the respective email address.

### View products [Completed :white_check_mark:]
- Scenario 1: Successfully view products.
    - Steps:
        1. Log in as a buyer.
        2. Navigate to the product listing page.
        3. View the list of available products.
    - Expected Result:
        - The user can view the list of available products.

### View product details [Completed :white_check_mark:]
- Scenario 1: Successfully view product details
    - Steps:
        1. Log in as a buyer.
        2. Navigate to the product listing page.
        3. Select a product to view its details.
    - Expected Result:
        - The user can view the details of the selected product.


### Add product to my bag [Completed :white_check_mark:]
Scenario 1: Successfully add product to my bag
    - Steps:
        1. Log in as a buyer.
        2. Navigate to the product listing page.
        3. Select a product.
        4. Click the "Buy Now" button.
        5. Product will get it into "My bag".
    - Expected Result:
        - The product is added to the user's bag.

### View product in user's bag [Completed :white_check_mark:]
- Scenario 1: Successfully view products in user's bag.
    - Steps:
        1. Log in as a buyer.
        2. Navigate to the my bag page.
        3. View the list of products in the user's bag.
    - Expected Result:
        - The user can view the list of products in the bag.

### Remove product from bag [Completed :white_check_mark:]
- Scenario 1: Successfully remove item from user's bag.
    - Steps:
        1. Log in as a buyer.
        2. Navigate to the my bag page.
        3. Remove the selected product from user's bag.
    - Expected Result:
        - The product is removed from the user's bag.

### Buy a product [Yet to start :x:]
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
        - The product is removed from the user's wishlist.