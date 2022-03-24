import React from "react";
import classes from "./Frame.module.css"

let WeightCircle = (props) => {

    
    return (
                <div>
                    <div className={classes.weightCircle}>
                    <div className={classes.weight}>{props.products.packsAmount * props.products.packWeight}</div>
                    <span>кг</span>
                </div>
            </div>
    )
}

export default WeightCircle