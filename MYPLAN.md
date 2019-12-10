## ULTIMATE GOAL: Build popular dishes carousel & modal with a photo slider

1. Build the TopDishes component to pass off the data to the DishItem component

- make sure the forEach logic is working for DishItem component

2. Build the DishItem component
3. Refactor TopDishes component and make two buttons

- https://reactjsexample.com/a-react-carousel-slider-like-component-for-sequentially-displaying-slides/
- need to implement a horizontally oriented container

4. Styling with 'styled-component'

- understand how to user create.Ref to calculate the offsetWidth
- add the shadow effect on each dishItem on hover

5. Implmenting the carousel logic

- use scrollBy to move 3 dishes to the left / right after each click
- need to figure out the width of the 3 dishes and include it in the clickhandler

6. Build the modal for each top dishes

- set up modal for each top dishes
- set up the structure of

7 Build a photoslider & photoslide

- photoslider component will be similar to the carousel but it will display one photo with caption at a time
- photoslide component will be displaying the photo that get passed via props by photoslider
- the previous and next button will get hooked up in the photoslider component
- also worked on removing unnecessary wrappers
- implemented the photo caption

8. Axios - connect to the server endpoint - and use data from db

- download axios and do a componentDidMount
- setState to update the state of the parent component
- use props to pass down data to the child components

9. Upload the photos to S3 and think of a way to seed it to db

10. Create a hyper-realistic page for a sushi restaurant

11. I need to create dishId filter logic 

NEED TO FIX: put a different restaurant id, should serve you data based on the restaurant id, now it's default to restaurant id = 1

===================================================================================================

Server

1. send back an object with 10 popular dish photo urls, caption, dish name

- send back an object with data when I submit a GET request

2. create a more realistic db file for 2 restaurants
3. put the S3 image links
