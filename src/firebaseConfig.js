import firebase from 'firebase'
import 'firebase/firestore'

// firebase init goes here
const config = {
  apiKey: 'AIzaSyAxDwwVg_i0-C1cYmEpDI79rOHzZuY_pqU',
  authDomain: 'vuegram-c529c.firebaseapp.com',
  databaseURL: 'https://vuegram-c529c.firebaseio.com',
  projectId: 'vuegram-c529c',
  storageBucket: 'vuegram-c529c.appspot.com',
  messagingSenderId: '814700630737'
}
firebase.initializeApp(config)

// firebase utils
const db = firebase.firestore()
const auth = firebase.auth()
const currentUser = auth.currentUser

// date issue fix according to firebase
const settings = {
  timestampsInSnapshots: true
}
db.settings(settings)

// firebase collections
const usersCollection = db.collection('users')
const postsCollection = db.collection('posts')
const commentsCollection = db.collection('comments')
const likesCollection = db.collection('likes')

export {
  db,
  auth,
  currentUser,
  usersCollection,
  postsCollection,
  commentsCollection,
  likesCollection
}
