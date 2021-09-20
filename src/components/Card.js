import React from "react";

export default function Card(props) {
  return (
    <div className="col mb-5">
      <div className="card h-100">
        {props.element.sale ? (
          <div
            className="badge bg-dark text-white position-absolute"
            style={{ top: "0.5rem", right: "0.5rem" }}
          >
            Sale
          </div>
        ) : (
          ""
        )}

        <img className="card-img-top" src={props.element.image} alt="..." />
        <div className="card-body p-4">
          <div className="text-center">
            <h5 className="fw-bolder">{props.element.product}</h5>
            {props.element.rating ? 
            <div className="d-flex justify-content-center small text-warning mb-2">
              <div className="bi-star-fill"></div>
              <div className="bi-star-fill"></div>
              <div className="bi-star-fill"></div>
              <div className="bi-star-fill"></div>
              <div className="bi-star-fill"></div>
            </div> : ''
            }
            {props.element.originalPrice ? (
              <span className="text-muted text-decoration-line-through">
                {props.element.originalPrice}
              </span>
            ) : (
              ""
            )}
            {props.element.discountedPrice}
          </div>
        </div>
        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center">
            {props.element.cart ? (
              <a
                className="btn btn-danger mt-auto"
                href="#"
                onClick={() => {
                  props.removeCart(props.val);
                }}
              >
                Remove
              </a>
            ) : (
              <a
                className="btn btn-outline-dark mt-auto"
                href="#"
                onClick={() => {
                  props.addItem(props.val);
                }}
              >
                Add to cart
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
