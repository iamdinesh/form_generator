import MFC from '../library/index.jsx';
import $ from 'jquery';
import React from 'react';
import ReactDOM from "react-dom";

const metaData = {
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

 const created_form = new MFC(metaData);
 console.log(created_form.generateHTML())
  ReactDOM.render(
   created_form.generateHTML(),
   document.getElementById('form-container')
 );

 // $('#form-container').html(created_form.generateHTML())
