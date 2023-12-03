
import { 

    initializeApp 

} from "https://www.gstatic.com/firebasejs/10.3.0/firebase-app.js";;

const firebaseConfig = {
    apiKey: "AIzaSyDU-IHw71c50OCn3CK9H4UtJDH1056rfSc",
    authDomain: "mi-proyecto-1be87.firebaseapp.com",
    databaseURL: "https://mi-proyecto-1be87-default-rtdb.firebaseio.com",
    projectId: "mi-proyecto-1be87",
    storageBucket: "mi-proyecto-1be87.appspot.com",
    messagingSenderId: "497457024517",
    appId: "1:497457024517:web:3aee97919a59b5108f566c"
  };
    // Initialize Firebase
   const app = initializeApp(firebaseConfig);

   export default app

