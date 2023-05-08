const bar= document.getElementById('ba');
const close= document.getElementById('close')
const nav= document.getElementById('navbar');
if(bar){
 bar.addEventListener('click' ,()=>{
    nav.classList.add('active');
 })   
}

if(close){
    close.addEventListener('click' ,()=>{
       nav.classList.remove('active');
    })   
   }
   const express = require('express');
   const bodyParser = require('body-parser');
   const mongoose = require('mongoose');
   
   const app = express();
   
   // Connect to MongoDB
   mongoose.connect('mongodb://localhost:27017/mydb', { useNewUrlParser: true });
   
   // Create schema for cart items
   const cartItemSchema = new mongoose.Schema({
     photo: String,
     article: String,
     price: Number,
     quantity: Number,
   });
   
   