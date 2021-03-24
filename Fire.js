import firebase from "firebase";

class Fire {
  constructor() {
    this.init();
    this.observeAuth();
  }
  init = () => {
    if (!firebase.apps.length) {
      firebase.initializeApp({
        apiKey: "AIzaSyA9Mk2RCGtwa7vCsDqaCgweFZ07D7tEujg",
        authDomain: "native-chat-20669.firebaseapp.com",
        databaseURL: "https://native-chat-20669.firebaseio.com",
        projectId: "native-chat-20669",
        storageBucket: "",
        messagingSenderId: "47920482935",
      });
    }
  };

  observeAuth = () =>
    firebase.auth().onAuthStateChanged(this.onAuthStateChanged);

  onAuthStateChanged = (user) => {
    if (!user) {
      try {
        firebase.auth().signInAnonymously();
      } catch ({ message }) {
        alert(message);
      }
    }
  };
  get uid() {
    return (firebase.auth().currentUser || {}).uid;
  }

  get ref() {
    return firebase.database().ref("messages");
  }

  parse = (snapshot) => {
    const { timestamp: numberStamp, text, user } = snapshot.val();
    const { key: _id } = snapshot;
    const timestamp = new Date(numberStamp);
    const message = {
      _id,
      timestamp,
      text,
      user,
    };
    return message;
  };

  on = (callback) =>
    this.ref
      .limitToLast(20)
      .on("child_added", (snapshot) => callback(this.parse(snapshot)));

  get timestamp() {
    return firebase.database.ServerValue.TIMESTAMP;
  }

  send = (messages) => {
    for (let i = 0; i < messages.length; i++) {
      const { text, user } = messages[i];
      const message = {
        text,
        user,
        timestamp: this.timestamp,
      };
      this.append(message);
    }
  };
  append = (message) => this.ref.push(message);

  off() {
    this.ref.off();
  }
}

Fire.shared = new Fire();
export default Fire;
