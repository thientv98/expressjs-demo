# Install express
- npm init
- npm install express --save
- npx express-generator
# Install nodemon
- npm install nodemon --save-dev
- Add script "dev": "nodemon ./bin/www" to package.json
# Install express-router-group
- npm i express-router-group
# Install express-validation
- npm i express-validation
- npm install joi
# Install sequelize, mysql2
- npm install sequelize mysql2
# Install sequelize-cli
- npm install --save-dev sequelize-cli
- npx sequelize-cli init
# Install dotenv
- npm install dotenv
# Install express-jwt
- npm install express-jwt jsonwebtoken bcrypt


# Migrate
- npx sequelize-cli db:migrate
# Run seeder
- npx sequelize-cli db:seed:all
