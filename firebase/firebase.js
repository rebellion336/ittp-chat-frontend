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
provider.setCustomParameters({
  prompt: 'select_account',
})

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}
const database = firebase.database()

export { firebase, database as default }
