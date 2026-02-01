import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Product } from "@/dummy/dummies";


export interface CartItem extends Product {
  quantity:number;
}

interface CartState{
  cart: CartItem[],
  addItem: (product:Product , qty:number)=>void,
  removeItem: (id: string|number)=>void
  clearCart: ()=>void
}


export const useCartStore = create<CartState>()(

  persist(
      (set , get) => ({
        // state
        cart: [],

        // actions

        // ADD ITEM START
        // adds a new item , or, increases or decreases the quantity
        addItem:(product, qty)=>{
          const currentCart = get().cart;
          const isItemInCart = currentCart.find((item)=>item.id === product.id)

          if(isItemInCart){

            set({
              cart: currentCart.map((item)=>
                item.id === product.id ? {...item , quantity: Math.max(0 ,item.quantity+qty ) } : item
              ).filter(item => item.quantity>0),
            });
          }else{

            set({cart:[...currentCart , {...product , quantity : qty}]})
          }

        },
        // ADD ITEM END

        // REMOVE ITEM START
        // completely removes item from cart
        removeItem: (id)=>{
          set({cart : get().cart.filter((item)=>item.id!=id)})
        },
        // REMOVE ITEM END

        clearCart:()=> set({cart:[]}),





      }),
      {
        name:'florea-archive'
      }




  )


);