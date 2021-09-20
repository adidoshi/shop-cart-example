import React from 'react';
import Card from './Card';

export default function CardSec(props) {
    return (
        <section className="py-5">
      <div className="container px-4 px-lg-5 mt-5">
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
        {props.details.map((element, index) => {
            return (
                <Card element = {element} key = {index} addItem = {props.addToCart} val = {index} removeCart = {props.removeFromCart}/>
            );
        })}
        </div>
      </div>
    </section>
    )
}
