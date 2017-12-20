# Schema based Form Generator

This library generates HTML form based on the JSON definition passed.



### Prerequisites:

- Node.js
- yarn

### Installation 

To install dependencies 
```
yarn

```
Once it is completed start the webpack dev server (runs on port 8080)
```
yarn start
```

#### API server

Navigate to `server` directory and run the below command

```
yarn 
```
To start the server (runs on port 3000)
```
yarn start
```

Navigate to http://localhost:8080/ in browser.

### Schema Definition

```
{
   name: 'registration_form',
   method: 'POST',
   url: 'submit_URL',
   caption: 'User registration form',
   fields: [
     {
       caption: 'User name',
       name: 'user_name',
       type: 'text',
       placeholder: 'Enter your username',
     },
     {
       caption: 'Mobile Number',
       name: 'mobile_number',
       type: 'text',
       placeholder: 'Enter your Mobile number',
     },
     {
       caption: 'Rate your skills out of 10?',
       name: 'married',
       type: 'slider',
       min: 0,
       max: 10,
     },
     {
       caption: 'What is your favourite game?',
       type: 'select',
       name: 'favourite_game',
       options: [
         { value: 'foot_ball', text:'Foot Ball' },
         { value: 'basket_ball', text:'Basket Ball' },
         { value: 'table_tennis', text:'Table Tennis' },
       ],
     },
   ]
 };

```

The above definition will render this form 

![sample image](https://github.com/vimal1083/form_generator/blob/master/sample.png)














