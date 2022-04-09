import { useEffect, useState } from "react"
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from '../firebase.init';




const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const useFireBase = () => {
    const [user, setUser] = useState({})

    useEffect(() => {

    })
    const signInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user;
                setUser(user)
                console.log(user)
            })
    }


    return { user, signInWithGoogle }
}
export default useFireBase;