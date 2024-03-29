import {db} from '../../config/firebase'
const firebase = require("firebase");

// creating products
const createProducts = (productRef) =>{
    let Products = []
    productRef.forEach((doc)=>{
        if (doc.data().stock>0) {
            if (!Products.find(element =>{
                return element.name === doc.data().name
            }))
            {
                let color = []
                color[doc.data().color] = [{size:doc.data().size,
                    id: doc.id
                }];
                let newProduct = {
                    id: doc.id,
                    ...doc.data(),
                    color: color,
                }
                Products.push(newProduct)
            
            }else {
                let product =Products.find((element)=>{
                return element.name === doc.data().name
                })
                if(Object.keys(product.color).find(element=>{
                    return element == doc.data().color
                    
                })) {
                
                        product.color[doc.data().color].push({size:doc.data().size, id: doc.id})
                    
                    
                    
                }else{
                    product.color[doc.data().color] = [{size:doc.data().size, id:doc.id}];
                    
                    
                } 
                Products.map(element=>{
                    return element.id === product.id ?  product : element
                    
                })
            }
        }
    });
   
    return Products
}

// Getting every products by gender
export const getProductsByGender = async (gender)=>{
   
    let productRef = await db.collection('products').where('gender', '==', gender).get();
    let product = createProducts(productRef);
    
    return product
}

// Getting every products by gender and category
export const getProductsByCategory = async (category,gender)=>{
   
    let productRef = await db.collection('products').where('category', '==', category).where('gender', '==', gender).get();
    let product = createProducts(productRef);

    return product
}


// Getting every products by gender and collection
export const getProductsByCollection = async (collection,gender)=>{
   
    let productRef = await db.collection('products').where('collection', '==', collection).where('gender', '==', gender).get();
    let product = createProducts(productRef);

    return product
}


// Decrement product stock by 1 if stock > 0
export const buyProducts = async (id) =>{
   const decrement = firebase.firestore.FieldValue.increment(-1)
   let actualStock = await db.collection('products').doc(id).get()
   
   if (actualStock.data().stock >0) {

    await db.collection('products').doc(id).update({stock: decrement});  

   }
   
    return actualStock
}




