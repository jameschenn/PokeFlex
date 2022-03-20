# PokéFlex
Welcome to the PokéFlex wiki page! PokéFlex, a [Goodreads](https://www.goodreads.com/) clone, is a social cataloging application website utilizing a list-like system to help trainers from different regions of the world organize and review Pokémon to help them catch ‘em all!  

## Live Site Link

[PokéFlex](https://poke-flex.herokuapp.com/)

## Link to Wiki Docs

[Home](https://github.com/jameschenn/PokeFlex/wiki)

[API Documentation](https://github.com/jameschenn/PokeFlex/wiki/API-Documentation)

[Database Schema](https://github.com/jameschenn/PokeFlex/wiki/Database-Schema)

[Feature List](https://github.com/jameschenn/PokeFlex/wiki/Feature-List)

[Frontend Routes](https://github.com/jameschenn/PokeFlex/wiki/Frontend-Routes)

[User Stories](https://github.com/jameschenn/PokeFlex/wiki/User-Stories)

## Project Team
This project is designed by [Grant Walton](https://github.com/Gwantt), [James Chen](https://github.com/jameschenn), [Khoi Duong](https://github.com/kdngaa), and [Dayton Chen](https://github.com/spursforever)

## Techonology Used
<img src="https://img.icons8.com/color/48/000000/javascript--v1.png"/>
<img src="https://img.icons8.com/fluency/48/000000/pug.png"/>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg" height=40 />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg" height=40/>
<img src="https://img.icons8.com/color/48/000000/visual-studio-code-2019.png" height=35/>
<img src="https://img.icons8.com/color/48/000000/css3.png"/>
<img src="https://img.icons8.com/color/48/000000/nodejs.png"/>
<img src="https://img.icons8.com/nolan/64/git.png" height=50/>

## Getting Started
1. Clone this repistory

    ```https://github.com/jameschenn/PokeFlex.git```

2. Install the project's dependencies

    ```npm install```

3. Add an .env file containing the variables from the .env.example file

4. Create user and database based on what you setup in .env file

5. Use the Sequelize CLI to apply the provided database migrations and seeder.

    ```npx dotenv sequelize db:migrate```

    ```npx dotenv sequelize db:seed:all```

6. You can now test the application

    ```npm start```

7. You can sign in via Demo User or create an account yourself

## Features
1. Trainer Authentication 
* Trainers can sign up, log in, and log out.
* Trainers can use a demo log in to try the site.
* Trainers can't rate, write reviews, nor add/remove pokemons from catchlists without logging in. 
* Logged in trainers are directed to their profile page.
* Logged out trainers are directed to the homepage.

2. Pokemon
* All trainers can view a list of pokemons.
* If a trainer clicks on a pokemon link, the trainer is redirected to the pokemon's page, and the trainer can see information and reviews/ratings about that pokemon.

3. Catchlists
* Logged in trainers has a personal list of pokemons
* There are 3 separate lists in the catchlist (need to catch, caught, plan to catch)
* Logged in trainers can add or remove pokemon to one of the three catchlists 
* Logged in trainers can change the catch status of the pokemon

