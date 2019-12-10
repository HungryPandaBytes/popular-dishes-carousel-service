DROP DATABASE dishes;

CREATE DATABASE dishes;

USE dishes;

CREATE TABLE popularDishes (
    dish_id INT PRIMARY KEY AUTO_INCREMENT, 
    dish_name VARCHAR(200), 
    dish_photo_url VARCHAR(200),
    restaurant_id INT);

    CREATE TABLE reviews (
    review_id INT PRIMARY KEY AUTO_INCREMENT,  
    restaurant_name VARCHAR(200), 
    review_date datetime,
    review_count INT, 
    review_text TEXT,
    reviewer_name VARCHAR(200)
    );

    CREATE TABLE restaurants (
    restaurant_id INT PRIMARY KEY AUTO_INCREMENT,  
    restaurant_name TEXT);

    CREATE TABLE photos (
    photo_id INT PRIMARY KEY AUTO_INCREMENT, 
    dish_id INT, 
    photo_text TEXT,
    photo_url VARCHAR(200), 
    restaurant_id INT
    );