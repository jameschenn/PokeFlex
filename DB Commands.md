database all related setup and commands

create database databasename;
create user username with encrypted password '«password»';
grant all privileges on database databasename to username;

or

CREATE USER WITH DATABASE DATABASENAME CREATEDB;
CREATE DATABASE WITH OWNER USERNAME;

npx sequelize init
npx dotenv sequelize db:migrate
npx dotenv sequelize db:migrate:undo:all
npx dotenv sequelize db:seed:all
npx dotenv sequelize db:seed:undo:all

npx sequelize model:generate --name Trainer --attributes username:string,password:string,emailAddress:string

npx sequelize model:generate --name Pokemon --attributes name:string,image:string,description:text,type:string

npx sequelize model:generate --name Review --attributes review:text,rating:numeric,trainerId:integer,pokemonId:integer

npx sequelize model:generate --name Catchlist --attributes catchstatus:string,trainerId:integer

npx sequelize model:generate --name CatchlistJoinPokemon --attributes pokemonId:integer,catchlistId:integer

npx sequelize seed:generate --name Trainers
npx sequelize seed:generate --name Pokemons
npx sequelize seed:generate --name Reviews
npx sequelize seed:generate --name Catchlists
npx sequelize seed:generate --name CatchlistJoinPokemons

example model set up

'use strict';
module.exports = (sequelize, DataTypes) => {
  const Trainer = sequelize.define('Trainer', {
    username: {
      allowNull: false,
      type: DataTypes.STRING(100),
      unique: true
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING.BINARY
    },
    emailAddress: {
      allowNull: false,
      unique: true,
      type: DataTypes.STRING(100),
      unique: true
    },
  }, {});
  Trainer.associate = function(models) {
    Trainer.hasMany(models.Catchlist, { foreignKey: 'trainerId' });
    Trainer.hasMany(models.Review, { foreignKey: 'trainerId' });
  };

  return Trainer;
};

Association:


Trainer.hasMany(models.Catchlist, { foreignKey: 'trainerId' });
Trainer.hasMany(models.Review, { foreignKey: 'trainerId' });

Pokemon
const columnMapping = {
  foreignKey: 'pokemonId',
  through: 'CatchlistJoinPokemon',
  otherKey: 'catchlistId'
}
Pokemon.belongsToMany(models.Catchlist, columnMapping)

Pokemon.hasMany(models.Review, {foreignKey: 'pokemonId'})

Review
Review.belongsTo(models.Trainer, { foreignKey: 'trainerId'})
Review.belongsTo(models.Pokemon, { foreignKey: 'pokemonId'})

Catchlist
Catchlist.belongsTo(model.Trainer, {foreignKey: 'pokemonId'})

const columnMapping = {
  foreignKey: 'catchlistId'
  through: 'CatchlistJoinPokemon'
  otherKey: 'pokemonId'
}
Catchlist.belongsToMany(models.Pokemon, columnMapping)

CatchlistJoinPokemon
*currently no associations
