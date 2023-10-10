import { initializeApp } from  'firebase/app';
import { getAuth} from 'firebase/auth'



const firebaseConfig = {
    apiKey: "AIzaSyDA2PLMg2sp9JrpnUs4gHD9TtD_EcgaPzY",
    authDomain: "tesla-clone-1460c.firebaseapp.com",
    projectId: "tesla-clone-1460c",
     storageBucket: "tesla-clone-1460c.appspot.com",
     messagingSenderId: "472932973888",
     appId: "1:472932973888:web:0c13c227d2c4e312654ea5"
  };
  
  const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);