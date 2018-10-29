import * as firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyB9Pi3DKZIH3QzQjeRdA_BFomxGcIQpO70',
  authDomain: 'noburo-216104.firebaseapp.com',
  databaseURL: 'https://noburo-216104.firebaseio.com',
  projectId: 'noburo-216104',
  storageBucket: 'noburo-216104.appspot.com',
  messagingSenderId: '299165439192',
}

const provider = new firebase.auth.GoogleAuthProvider()

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

firebase
  .auth()
  .signInAnonymously()
  .catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code
    var errorMessage = error.message
    console.log(
      'errorCode>>>>',
      errorCode,
      '      errorMessage>>>>',
      errorMessage
    )
  })

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    const isAnonymous = user.isAnonymous //ตรวจสอบว่า ผู้ใช้เข้าระบบแบบ Anonymous หรือเปล่า
    const uid = user.uid // id ของผู้ใช้
    console.log('UserLogin ID>>>', uid)
  } else {
    // User is signed out.
    console.log('userlogout')
  }
})

const database = firebase.database()

export { firebase, database as default }
