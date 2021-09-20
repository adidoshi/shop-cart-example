import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';
import CardSec from './components/CardSec';

function App() {
  const [details, setDetails] = useState(
    [
      {
          image: "https://images.unsplash.com/photo-1618215650201-8d552591218d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8d2F0Y2h8fHx8fHwxNjMxNjk1NDg0&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=450",
          product: "Fancy Product",
          discountedPrice: "$40.00 - $80.00",
          sale: false,
          cart: false
      },
      {
          image: "https://images.unsplash.com/photo-1543508282-5c1f427f023f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8c2hvZXN8fHx8fHwxNjMxNjk1NjAw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=450",
          product: "Special Item",
          originalPrice: "$18.00",
          discountedPrice: "$20.00",
          sale: true,
          cart: false
      },
      {
          image: "https://images.unsplash.com/photo-1621609764049-5ee1db3d7c35?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8YmFnfHx8fHx8MTYzMTY5NTg5Nw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=450",
          product: "Sale Item",
          originalPrice: "$50.00",
          discountedPrice: "$25.00",
          rating: 5,
          sale: true,
          cart: false
      },
      {
          image: "https://images.unsplash.com/photo-1555960840-f536ae1e4e95?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8bGFwdG9wfHx8fHx8MTYzMTY5NjUyMg&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=450",
          product: "Popular Item",
          discountedPrice: "$40.00",
          rating: 5,
          sale: false,
          cart: false
      },
      {
          image: "https://images.unsplash.com/photo-1607081692422-ab21164da295?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8amFja2V0fHx8fHx8MTYzMTY5NjU4NQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=450",
          product: "Sale Item",
          originalPrice: "$50.00",
          discountedPrice: "$25.00",
          sale: true,
          cart: false
      },
      {
          image: "https://images.unsplash.com/photo-1564584217132-2271feaeb3c5?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8c2hpcnR8fHx8fHwxNjMxNjk2MDkz&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=450",
          product: "Fancy Product",
          discountedPrice: "$120.00 - $280.00",
          rating: 5,
          sale: false,
          cart: false
      },
      {
          image: "https://images.unsplash.com/photo-1600024914363-d9bf85e438f0?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8c3VuZ2xhc3Nlc3x8fHx8fDE2MzE2OTY2NTA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=450",
          product: "Special Item",
          originalPrice: "$20.00",
          discountedPrice: "$18.00",
          sale: true,
          cart: false
      },
      {
          image: "https://images.unsplash.com/photo-1549921296-3b0f9a35af35?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8bW9iaWxlfHx8fHx8MTYzMTY5NjE1MA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=450",
          product: "Popular Item",
          discountedPrice: "$40.00",
          rating: 5,
          sale: false,
          cart: false
      }
  ]
  )
  const [count, setCount] = useState(0);

  const addToCart = (key) => {
    details[key].cart = true;
    setDetails(details);
    setCount(count + 1);
  }

  const removeFromCart = (key) => {
    details[key].cart = false;
    setDetails(details);
    setCount(count - 1);
  }

  return (
    <>
    <Navbar count={count}/>
    <Header />
    <CardSec details = {details} addToCart = {addToCart} removeFromCart = {removeFromCart}/>
    <Footer/>
    </>
  );
}

export default App;
