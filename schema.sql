DROP DATABASE dishes;

CREATE DATABASE dishes;

USE dishes;

CREATE TABLE popularDishes (
    dish_id INT PRIMARY KEY AUTO_INCREMENT, 
    dish_name VARCHAR(40), 
    top_dish_photo VARCHAR(60),
    restaurant_name VARCHAR(40), 
    photo_count INT, 
    review_count INT, 
    review_id INT, 
    reviewer_name VARCHAR(40), 
    photo_id INT);

    CREATE TABLE reviews (
    review_id INT PRIMARY KEY AUTO_INCREMENT,  
    restaurant_name VARCHAR(40), 
    review_date VARCHAR(20),
    review_count INT, 
    review_text TEXT,
    reviewer_name VARCHAR(40), 
    photo_id INT);

    CREATE TABLE photos (
    photo_id INT PRIMARY KEY AUTO_INCREMENT,  
    photo_text TEXT,
    photo_url VARCHAR(50));