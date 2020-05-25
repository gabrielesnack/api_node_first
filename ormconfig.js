const getEnvName = process.env.NODE_ENV ? process.env.NODE_ENV : 'development';
const env = require(`./src/config/${getEnvName}.env.js`);

module.exports = {
   "name": "default",
   "type": env.DB_TYPE,
   "host": env.DB_HOST,
   "port": env.DB_PORT,
   "username": env.DB_USERNAME,
   "password": env.DB_PASSWORD,
   "database": env.DB_DATABASE,
   "synchronize": false,
   "logging": false,
   "entities": [
      "src/database/models/**/*.ts"
   ],
   "migrations": [
      "src/database/migrations/**/*.ts"
   ],
   "subscribers": [
      "src/database/subscribers/**/*.ts"
   ],
   "cli": {
      "entitiesDir": "src/database/models",
      "migrationsDir": "src/database/migrations",
      "subscribersDir": "src/database/subscribers"
   }
}