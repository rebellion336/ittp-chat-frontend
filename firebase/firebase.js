import * as firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyB9Pi3DKZIH3QzQjeRdA_BFomxGcIQpO70',
  authDomain: 'noburo-216104.firebaseapp.com',
  databaseURL: 'https://noburo-216104.firebaseio.com',
  projectId: 'noburo-216104',
  storageBucket: 'noburo-216104.appspot.com',
  messagingSenderId: '299165439192',
}

export const provider = new firebase.auth.GoogleAuthProvider()

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

// firebase
//   .auth()
//   .signInAnonymously()
//   .catch(function(error) {
//     // Handle Errors here.
//     var errorCode = error.code
//     var errorMessage = error.message
//     console.log(
//       'errorCode>>>>',
//       errorCode,
//       '      errorMessage>>>>',
//       errorMessage
//     )
//   })

// firebase
//   .auth()
//   .signInWithRedirect(provider)
//   .then(function(result) {
//     // This gives you a Google Access Token. You can use it to access the Google API.
//     const token = result.credential.accessToken
//     // The signed-in user info.
//     const user = result.user
//     console.log('token>>', token)
//     console.log('user>>>', user)
//   })
//   .catch(function(error) {
//     // Handle Errors here.
//     const errorCode = error.code
//     const errorMessage = error.message
//     // The email of the user's account used.
//     const email = error.email
//     // The firebase.auth.AuthCredential type that was used.
//     const credential = error.credential

//     console.log('errorCode>>', errorCode)
//     console.log('errorMessage>>>', errorMessage)
//     console.log('email error>>>', email)
//     console.log('credential error', credential)
//   })

// firebase
//   .auth()
//   .signInWithPopup(provider)
//   .then(function(result) {
//     // This gives you a Google Access Token. You can use it to access the Google API.
//     const token = result.credential.accessToken
//     // The signed-in user info.
//     const user = result.user
//     console.log('token>>', token)
//     console.log('user>>>', user)
//   })
//   .catch(function(error) {
//     // Handle Errors here.
//     const errorCode = error.code
//     const errorMessage = error.message
//     // The email of the user's account used.
//     const email = error.email
//     // The firebase.auth.AuthCredential type that was used.
//     const credential = error.credential

//     console.log('errorCode>>', errorCode)
//     console.log('errorMessage>>>', errorMessage)
//     console.log('email error>>>', email)
//     console.log('credential error', credential)
//   })

// firebase.auth().onAuthStateChanged(function(user) {
//   if (user) {
//     // User is signed in.
//     const isAnonymous = user.isAnonymous //ตรวจสอบว่า ผู้ใช้เข้าระบบแบบ Anonymous หรือเปล่า
//     const uid = user.uid // id ของผู้ใช้
//     console.log('UserLogin ID>>>', uid)
//     console.log('userisAnonymous>>>', isAnonymous)
//     console.log('user OBJ', user)
//     console.log('firebase.auth()>>>', firebase.auth())
//   } else {
//     // User is signed out.
//     console.log('userlogout')
//   }
// })

// firebase
//   .auth()
//   .signOut()
//   .then(function() {
//     console.log('User Sign out')
//   })
//   .catch(function(error) {
//     // An error happened.
//     console.log('User Sign out error')
//   })

const database = firebase.database()

export { firebase, database as default }
