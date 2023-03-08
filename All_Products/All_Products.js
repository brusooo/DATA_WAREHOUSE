import { Beauty_Makeup_Details  } from "./Beauty_Makeup_Details "
import { Clothing  } from "./Clothing"
import { Footwear } from "./Footwear"
import { Mobiles } from "./Mobiles"
export var allProducts = []


Beauty_Makeup_Details.map(element => {
    allProducts.push(element)
});

Clothing.map(element => {
    allProducts.push(element)
});

Footwear.map(element => {
    allProducts.push(element)
});

Mobiles.map(element => {
    allProducts.push(element)
});


