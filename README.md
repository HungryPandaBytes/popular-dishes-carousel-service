# Popular Dishes Microservice

This carousel microservice for YumNoms mimics the interface used for Yelp Restaurants Popular Dishes.

![Popular Dishes Carousel Microservice](https://i.imgur.com/UqnK6UF.png=100x100)

![Popular Dishes Carousel Microservice2](https://i.imgur.com/77vkAcO.png)

## Related Projects

- https://github.com/yumnoms/reviews-service
- https://github.com/yumnoms/photo-carousel-service
- https://github.com/yumnoms/reservations-service
- https://github.com/yumnoms/lilly-tang-proxy

## Table of Contents

1. [Usage](#Usage)
2. [Requirements](#requirements)
3. [Development](#development)

## Usage

> Some usage instructions

### Setting up mySQL database & seeding the database

For mySQL, if the user 'Student' doesn't exist, access mySQL and run:

```javascript
CREATE USER 'student'@'localhost' IDENTIFIED BY 'student';
```

You may need to grand privileges to the 'student' user on all databases. Run this script in MySQL.

```sql
GRANT ALL PRIVILEGES ON *.* TO 'student'@'localhost';
```

Then in the terminal:

```
npm run schema //password: student
npm run seed-db

```



### Start the server

```
npm run server

```

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- "@babel/plugin-proposal-class-properties": "^7.7.4",
- "axios": "^0.19.0",
- "babel-jest": "^24.9.0",
- "body-parser": "^1.19.0",
- "express": "^4.17.1",
- "faker": "^4.1.0",
- "mysql": "^2.17.1",
- "nodemon": "^2.0.1",
- "react": "^16.12.0",
- "react-dom": "^16.12.0",
- "sequelize": "^5.21.2",
- "styled-components": "^4.4.1"

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install
```
