DROP DATABASE dishes;

CREATE DATABASE dishes;

USE dishes;

CREATE TABLE popularDishes (
    dish_id INT PRIMARY KEY AUTO_INCREMENT, 
    dish_name VARCHAR(200), 
    top_dish_photo VARCHAR(200),
    restaurant_id VARCHAR(200),  
    photo_id INT);

    CREATE TABLE reviews (
    review_id INT PRIMARY KEY AUTO_INCREMENT,  
    restaurant_name VARCHAR(200), 
    review_date datetime,
    review_count INT, 
    review_text TEXT,
    reviewer_name VARCHAR(200), 
    photo_id INT, 
    dish_id INT,
    CONSTRAINT dish_id
    FOREIGN KEY (dish_id)
        REFERENCES popularDishes(dish_id)
    );


    CREATE TABLE restaurants (
    restaurant_id INT,  
    restaurant_name TEXT);

    CREATE TABLE photos (
    photo_id INT PRIMARY KEY AUTO_INCREMENT,  
    photo_text TEXT,
    photo_url VARCHAR(200));