import {auth} from '../../config/firebase'
import {db} from '../../config/firebase'

// SIGN UP
export const signUp = async (email, password,otherDatas) =>{
    await auth.createUserWithEmailAndPassword(email,password)
    .then(cred =>{
        return db.collection('users').doc(cred.user.uid).set({
            email: cred.user.email,
           ...otherDatas

        })
    })
    .catch(err =>{
        console.log(err.message)
        return err.message
    })
}


//  CONNECTION
export const logIn = async (email,password) =>{
    await auth.signInWithEmailAndPassword(email,password)  
}



// Tell me the firstname of the current user
export  const findFirstnameUser = async (id) =>{

    let userRef = await db.collection('users').doc(id).get()
    let firstNameUser = userRef.data().firstname
    
    return firstNameUser
}
