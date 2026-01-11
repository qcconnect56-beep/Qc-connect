
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAnTX733cxhXXmYNrpxomIHko8JFLi0nf0",
  authDomain: "qc-connect-bf65c.firebaseapp.com",
  projectId: "qc-connect-bf65c",
  storageBucket: "qc-connect-bf65c.firebasestorage.app",
  messagingSenderId: "341938928498",
  appId: "1:341938928498:web:eb41afdf6ef0f8ada43beb"
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)
