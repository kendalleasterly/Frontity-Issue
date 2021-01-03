import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"

import {useAuthState } from "react-firebase-hooks/auth"
import {useCollectionData } from "react-firebase-hooks/firestore"

firebase.initializeApp({
    apiKey: "[MY KEY]",
    authDomain: "[MY DOMAIN]",
    projectId: "[MY ID]",
    storageBucket: "[MY BUCKET]",
    messagingSenderId: "[MY ID]",
    appId: "[MY ID]",
    measurementId: "[MY ID]"
})


const auth = firebase.auth()
const firestore = firebase.firestore()

import React from 'react'

function Book() {

    // const [user]  = useAuthState(auth)

    return (
        <div>
            {user ? <p>Logged in</p> : <p>Logged out</p> }
            {user ? <p>{user.displayName}</p> : <p></p> }
        </div>
    )
}

export default Book
