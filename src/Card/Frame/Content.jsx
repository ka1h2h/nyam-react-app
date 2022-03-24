import React from "react";
import classes from "./Frame.module.css"
import Portion from "./Portion"


let Content = (props) => {


    return (
        <div className={classes.content}>
              <div className={classes.notice}>Сказочное заморское яство</div>
              <div className={classes.hover}>Котэ не одобряет?</div>
              <div className={classes.title}>Нямушка</div>
              <div className={classes.taste}>{props.products.taste}</div>
              <Portion products={props.products} promotion={props.promotion}/>
        </div>
             
              
              


   
              

    
 

            
    
    

     
        
        
                
        
    )
}

export default Content