# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

Sklep internetowy BestHM.PL




Vertabelo baza danych:


-- Created by Vertabelo (http://vertabelo.com)

-- Last modification date: 2025-01-10 13:20:38.649


-- tables

-- Table: Cart

CREATE TABLE Cart (

id int NOT NULL AUTO_INCREMENT,

total_price int NOT NULL,

created_at date NOT NULL,

Users_id int NOT NULL,

CONSTRAINT Cart_pk PRIMARY KEY (id)

);


-- Table: Order_product

CREATE TABLE Order_product (

id int NOT NULL AUTO_INCREMENT,

Order_id int NOT NULL,

Product_id int NOT NULL,

quantity int NOT NULL,

CONSTRAINT Order_product_pk PRIMARY KEY (id)

);


-- Table: Orders

CREATE TABLE Orders (

id int NOT NULL AUTO_INCREMENT,

User_id int NOT NULL,

date date NOT NULL,

totalPrice int NOT NULL,

CONSTRAINT Orders_pk PRIMARY KEY (id)

);


-- Table: Product_cart

CREATE TABLE Product_cart (

id int NOT NULL AUTO_INCREMENT,

Cart_id int NOT NULL,

Products_id int NOT NULL,

quantity int NOT NULL,

CONSTRAINT Product_cart_pk PRIMARY KEY (id)

);


-- Table: Products

CREATE TABLE Products (

id int NOT NULL AUTO_INCREMENT,

name varchar(255) NOT NULL,

brand varchar(255) NOT NULL,

price int NOT NULL,

description varchar(255) NOT NULL,

CONSTRAINT Products_pk PRIMARY KEY (id)

);


-- Table: Users

CREATE TABLE Users (

id int NOT NULL AUTO_INCREMENT,

username varchar(255) NOT NULL UNIQUE,

name varchar(255) NOT NULL,

surname varchar(255) NOT NULL,

email varchar(255) NOT NULL UNIQUE,

password varchar(255) NOT NULL,

CONSTRAINT Users_pk PRIMARY KEY (id)

);


-- foreign keys

-- Reference: Cart_Users (table: Cart)

ALTER TABLE Cart ADD CONSTRAINT Cart_Users FOREIGN KEY Cart_Users (Users_id)

REFERENCES Users (id);


-- Reference: Order_product_Order (table: Order_product)

ALTER TABLE Order_product ADD CONSTRAINT Order_product_Order FOREIGN KEY Order_product_Order (Order_id)

REFERENCES Orders (id);


-- Reference: Order_product_Product (table: Order_product)

ALTER TABLE Order_product ADD CONSTRAINT Order_product_Product FOREIGN KEY Order_product_Product (Product_id)

REFERENCES Products (id);


-- Reference: Orders_User (table: Orders)

ALTER TABLE Orders ADD CONSTRAINT Orders_User FOREIGN KEY Orders_User (User_id)

REFERENCES Users (id);


-- Reference: Product_cart_Cart (table: Product_cart)

ALTER TABLE Product_cart ADD CONSTRAINT Product_cart_Cart FOREIGN KEY Product_cart_Cart (Cart_id)

REFERENCES Cart (id);


-- Reference: Product_cart_Products (table: Product_cart)

ALTER TABLE Product_cart ADD CONSTRAINT Product_cart_Products FOREIGN KEY Product_cart_Products (Products_id)

REFERENCES Products (id);


-- End of file.


Uruchomienie aplikacji:

Aplikacja korzysta z 2 projektow oraz bazy danych na xammpie

1- TINSQL – backedn aplikacj w expressie

2- Reactwithdb – frontend aplikacji w reacie



Opis aplikacji:


Użytkownik może się logować,rejestrować


Tylko zalogowany użytkownik może dodawać produkty do koszyka, dodawać produkty do listy i składać zamówienia z produktów, które już znajdują się w koszyku.(może również przegladac swoje zamówienia)
