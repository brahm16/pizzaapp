import React from 'react'
import Base from "../assets/PizzaBase.png";
import Olive from "../assets/Olive.png";
import Pineapple from "../assets/Pineapple.png";
import Mushroom from "../assets/Mushroom.png";
import Basil from "../assets/Basil.png";
import Tomato from "../assets/Tomato.png";
export default function Customize({ingradients}) {
    return (
        <div style={{ display: 'flex' }}>
            <div style={{ border: '2px solid dark' ,flex:1 }}
            
            >
                <div style={{ maxHeight:500,maxWidth:500 ,position: "relative" }} className="ingradients" >
                <img src={Olive} alt="With Olive" height="100%" width="100%" className="ingradients" />
                <img src={Pineapple} alt="With Pineapple" height="100%" width="100%" className="ingradients" />
                <img src={Mushroom} alt="With Mushroom" height="100%" width="100%" className="ingradients" />
                <img src={Basil} alt="With Basil" height="100%" width="100%" className="ingradients" />
                <img src={Tomato} alt="With tomato" height="100%" width="100%" className="ingradients" />
                <img src={Base} alt="Pizza Basic" height="100%" width="100%"  />

                </div>
            </div>
            <div style={{ border: '2px solid dark', flex:1  }}>
            <div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
  <label class="form-check-label" for="flexCheckDefault">
    Olive
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
  <label class="form-check-label" for="flexCheckDefault">
    Tomato
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
  <label class="form-check-label" for="flexCheckDefault">
    Basil
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
  <label class="form-check-label" for="flexCheckDefault">
    Pineaapple
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
  <label class="form-check-label" for="flexCheckDefault">
    Mushroom
  </label>
</div>
            </div> 
        </div>
    )
}
