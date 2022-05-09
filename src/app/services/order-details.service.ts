import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {
// update
  constructor() { }

  foodDetails = [
    {
      id:1,
      foodName:"Grilled Cheese Sandwich",
      foodDetails:"Pan-fried masala cheese.",
      foodPrice:200,
      foodImg:"https://media.istockphoto.com/photos/sandwiches-salmon-sanduiche-italiano-de-atum-picture-id1152937667?b=1&k=20&m=1152937667&s=170667a&w=0&h=CNVKi7r0o58gDVPFCROcVYD4Faa2w4hqTlpSTrk0hcU="
    },
    {
      id:2,
      foodName:"Ultra Meet Pizza",
      foodDetails:"Onion| Green Capsicum|Mushroom |black olives , sweet corn , Red Paprika topped with Cheese",
      foodPrice:369,
      foodImg:"https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395__480.jpg"
    },
    {
      id:3,
      foodName:"Cheese Burger",
      foodDetails:"Best cheese burger",
      foodPrice:149,
      foodImg:"https://img.freepik.com/free-photo/big-hamburger-with-double-beef-french-fries_252907-8.jpg?w=2000"
    },
    {
      id:4,
      foodName:"Veg Masala Roll In Shawarma",
      foodDetails:"A homely mix of mashed potato and veggies, seasoned with Indian spices. A filling sure to take you back to mom's kitchen.",
      foodPrice:140,
      foodImg:"https://media.istockphoto.com/photos/burrito-and-shawarma-wraps-with-beef-and-pork-vegetables-on-wooden-picture-id1079279000?k=20&m=1079279000&s=612x612&w=0&h=3r70as8Ksz_8hiJZ55XMgxYrhaq2F0PeJM_yIPjvlnI="
    },
    {
      id:5,
      foodName:"Indulgence Brownie",
      foodDetails:"(Eggless) Indulge in richly decadent chocolate brownie crafted with love & topped with bitter-sweet chocolate that provides ultra-rich chocolate experience.",
      foodPrice:105,
      foodImg:"https://insanelygoodrecipes.com/wp-content/uploads/2020/10/Homemade-Slutty-Brownies-1024x536.png"
    },
    {
      id:6,
      foodName:"Oreo Cheesecake Ice Cream",
      foodDetails:"Oreo ice cream",
      foodPrice:219,
      foodImg:"https://loveinmyoven.com/wp-content/uploads/2021/05/no-churn-chocolate-oreo-ice-cream-2.jpg"
    },
    {
      id:7,
      foodName:"Chui Jhall Mutton",
      foodDetails:"A great bangali traditional food from Khulna.",
      foodPrice:500,
      foodImg:"https://petukcouple.com/wp-content/uploads/2021/11/Beef-Chui-Jhal-Recipe.jpeg"
    },
    {
      id:8,
      foodName:"Kacchi Biryani Family Platter",
      foodDetails:"Kaachi Biryani with egg and potato and your choice of meat (serves 4)Additional Chicken Roast",
      foodPrice:369,
      foodImg:"https://www.chawkscatering.com/uploads/1/2/5/2/125230917/s173764616108572188_p183_i3_w1400.png"
    },
    {
      id:9,
      foodName:"Chicken Fry",
      foodDetails:"Best KFC Test in Chicken Fry",
      foodPrice:"120",
      foodImg:"https://res.cloudinary.com/hsxfx8igq/image/upload/t_16x9_recipe_image,f_auto/v1624462106/vfjhjd6tfu0trzzbvcab.jpg",
    },
    {
      id:10,
      foodName:"Kacchi Biryani Family Platter",
      foodDetails:"Kaachi Biryani with egg and potato and your choice of meat (serves 4)Additional Chicken Roast",
      foodPrice:369,
      foodImg:"https://www.chawkscatering.com/uploads/1/2/5/2/125230917/s173764616108572188_p183_i3_w1400.png"
    },
    {
      id:11,
      foodName:"Onions Mashroom",
      foodDetails:"Combine sautéed mushrooms and onions with the slight acidity of lemon juice and white wine for a cupple",
      foodPrice:"200",
      foodImg:"https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_4:3/k%2FPhoto%2FRecipe%20Ramp%20Up%2F2022-01-Sauteed-Mushrooms-and-Onions%2FKitchn_JanKitchn_Jan4555-1",
    },
    {
      id:12,
      foodName:"",
      foodDetails:"",
      foodPrice:"",
      foodImg:"",
    },
    {
      id:13,
      foodName:"",
      foodDetails:"",
      foodPrice:"",
      foodImg:"",
    },
    {
      id:14,
      foodName:"",
      foodDetails:"",
      foodPrice:"",
      foodImg:"",
    },
    {
      id:15,
      foodName:"",
      foodDetails:"",
      foodPrice:"",
      foodImg:"",
    },
    {
      id:16,
      foodName:"",
      foodDetails:"",
      foodPrice:"",
      foodImg:"",
    },
  ]
}
