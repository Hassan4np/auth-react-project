
// import './App.css'
// import { getAuth, signInWithPopup } from "firebase/auth";
// import { app } from './firebase.config';
// import { GoogleAuthProvider } from "firebase/auth";
// import { useState } from 'react';
// const auth = getAuth(app);
// const provider = new GoogleAuthProvider();


// function App() {

//   const [user,setuseradd] = useState(null);
//  const henglesignupbutton=()=>{
//   signInWithPopup(auth, provider)
//   .then(result=>{
//      const loginuser = result.user ;
//      console.log(loginuser)
//      setuseradd(loginuser)
//   })
//   .catch(error=>{
//     console.log(error)
//   })
//  }
//   return (
//     <>
     
//       <h1>firebase + React</h1>
//       <div className="card">
//         <button onClick={henglesignupbutton}>Googlesignin
//         </button>
//         { user && <div>
//           <h4>user name: {user.displayName}</h4>
//           <h4>email:{user.email} </h4>
//           <h4><img src={user.photoURL} alt="" /></h4>
//         </div>}
        
//       </div>

//     </>
//   )
// }

// export default App
