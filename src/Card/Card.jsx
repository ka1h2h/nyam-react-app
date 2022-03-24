import BottomText from "./Frame/BottomText"
import Content from "./Frame/Content"
import WeightCircle from "./Frame/WeightCircle"
import React, {useState} from "react"
import classes from "./Frame/Frame.module.css"

let Card = ({products, promotion}) => {

    const [isSelected, setSelected] = useState(false)

    const handleToggle = () => {
        setSelected(!isSelected)
    }

  

    return (
       
        <div className={products.isActive ? ' ' : classes.disabled}>
        <div className={isSelected ? classes.selected : ' '}  onClick={handleToggle}>
        <div className={classes.frame} >
        <div className={classes.frameBorder}></div>
        <Content products={products} promotion={promotion}/>
        <WeightCircle products={products} />
        </div>
        <BottomText products={products}/>
        </div>
        </div>
    )
}

export default Card