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
![pokeflex github2](https://user-images.githubusercontent.com/73676915/176514873-b6835a91-57e2-4595-9027-afb085703b27.PNG)

* If a trainer clicks on a pokemon link, the trainer is redirected to the pokemon's page, and the trainer can see information and reviews/ratings about that pokemon.
![pokeflex github5](https://user-images.githubusercontent.com/73676915/176514925-3a249f34-b63a-4454-82c3-1ba56eff7097.PNG)

3. Catchlists
* Logged in trainers has a personal list of pokemons
* There are 3 separate lists in the catchlist (need to catch, caught, plan to catch)
* Logged in trainers can add additional, personalized catchlists for more personal needs
* Logged in trainers can add or remove pokemon to one of the three catchlists 
* Logged in trainers can change the catch status of the pokemon
![pokeflex github3](https://user-images.githubusercontent.com/73676915/176515286-6a1a3d9f-b13b-4d6c-86c4-eede68d283e8.PNG)
![pokeflex github1](https://user-images.githubusercontent.com/73676915/176515313-270ef140-dcaf-4a3e-9933-6ae0aa45d492.PNG)

4. Search
* All trainers can search Pokemon **by name** using the search bar
![pokeflex github4](https://user-images.githubusercontent.com/73676915/176515693-03a0ecd8-8c2d-4e24-8169-dad0fe7ab33c.PNG)

