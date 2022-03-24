import React from "react";
import classes from "./Frame.module.css"



let BottomText = (props) => {

    return (
        <div>
            <div className={classes.bottomSelected}>{props.products.description}</div>
                <div className={classes.bottomText}>
                Чего сидишь? Порадуй котэ, <a href="#">купи.</a>
                </div>
            <div className={classes.bottomDisabled}>Печалька, {props.products.taste} закончился</div>
            </div>
    )
}

export default BottomText
