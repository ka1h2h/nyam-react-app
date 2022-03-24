import React from "react";
import classes from "./Frame.module.css"


let Portion = (props) => {
    let giftValue = props.products.packsAmount / props.promotion.everyProductsAmount;
    let compliment = "";
    if (giftValue === 5) {
      compliment = props.promotion.giftMaxValueComplimentText;
    }
  
    if (giftValue < 1) {
      giftValue = "";
    }
    return (
        <div className={classes.portion}>
              <strong>{props.products.packsAmount}</strong> порций<br />
                {giftValue} мышь в подарок <br />
              <strong>{compliment}</strong>
        </div>  
    )
}

export default Portion