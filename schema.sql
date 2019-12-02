DROP DATABASE dishes;

CREATE DATABASE dishes;

USE dishes;

CREATE TABLE popularDishes (
    dish_id INT PRIMARY KEY AUTO_INCREMENT, 
    dish_name VARCHAR(40), 
    top_dish_photo VARCHAR(60),
    restaurant_name VARCHAR(40), 
    photo_id INT);

    CREATE TABLE reviews (
    review_id INT PRIMARY KEY AUTO_INCREMENT,  
    restaurant_name VARCHAR(40), 
    review_date TEXT,
    review_count INT, 
    review_text TEXT,
    reviewer_name VARCHAR(40), 
    photo_id INT, 
    dish_id INT,
    CONSTRAINT dish_id
    FOREIGN KEY (dish_id)
        REFERENCES popularDishes(dish_id)
    );

    CREATE TABLE photos (
    photo_id INT PRIMARY KEY AUTO_INCREMENT,  
    photo_text TEXT,
    photo_url VARCHAR(50));