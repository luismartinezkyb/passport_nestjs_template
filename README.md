## NESTJS template for a passport authentication using jwt and nestjs


### Step by step

You'll need to install the next commands:
```
$ npm install --save @nestjs/passport passport passport-local
$ npm install --save-dev @types/passport-local
$ npm i bcrypt
```

## Using with prisma

To use with prisma you'll need to go to the `prisma` branch in the proyect or install the next packages:
```
$ npm install prisma --save-dev
$ npx prisma
$ npx prisma init
#after this you'll need to create your database and go to your 
#.env to configure your access to the database you want, make sure to select 
# the correct ORDMBS, then after that you'll ned to create your models and enter the command
$ npx prisma migrate dev  # this command is for the database initialization

#after that you'll need to install prisma client and configure your module
$ npm install @prisma/client
```