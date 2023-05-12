import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonModal,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { bowlingBall, camera, codeWorkingSharp, headset, logIn, male, man, person } from 'ionicons/icons';
import Tab1 from './pages/Tab1';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import SignIn from './pages/Personal';
import { sign, Signer } from 'crypto';
import { userInfo } from 'os';
import Personal from './pages/Personal';
import './App.css'

// backend
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

firebase.initializeApp({
  apiKey: "AIzaSyCDgmASdmgqhSHE-7IXg7ffarE-nFN-CTM",
  authDomain: "skills-demonstration-backend.firebaseapp.com",
  projectId: "skills-demonstration-backend",
  storageBucket: "skills-demonstration-backend.appspot.com",
  messagingSenderId: "321888810243",
  appId: "1:321888810243:web:59184fa468b680d5e3a536",
  measurementId: "G-PNDF2XYSBB"
})


setupIonicReact();


const App = () => {
  const auth = firebase.auth();
  const firestore = firebase.firestore();


  return (
    <IonApp>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route exact path="/tab1">
              <Tab1 />
            </Route>
            <Route exact path='/tab2'>
              <Tab2 />
            </Route>
            <Route exact path='/tab3'>
              <Tab3 />
            </Route>
            <Route exact path='/personal'>
              <Personal />
            </Route>
            <Route exact path="/">
              <Redirect to="/tab1" />
            </Route>
          </IonRouterOutlet>


          <IonTabBar slot="bottom" className='bar-background'>
            <IonTabButton tab="tab1" href="/tab1" className='bar-icon'>
              <IonIcon icon={bowlingBall} />
              <IonLabel>Main Page</IonLabel>
            </IonTabButton>
            <IonTabButton tab="tab2" href="/tab2" className='bar-icon'>
              <IonIcon icon={camera} />
              <IonLabel>PageName1</IonLabel>
            </IonTabButton>
            <IonTabButton tab="tab3" href="/tab3" className='bar-icon'>
              <IonIcon icon={codeWorkingSharp}></IonIcon>
              <IonLabel>PageName2</IonLabel>
            </IonTabButton>
            <IonTabButton tab='personal' href='/personal' className='bar-icon'>
              <IonIcon icon={person}></IonIcon>
              <IonLabel>User</IonLabel>
            </IonTabButton>
          </IonTabBar >
        </IonTabs>
      </IonReactRouter>

    </IonApp>
  )
}


// const App: React.FC = () => (
//   <IonApp>
//     <IonReactRouter>
//       <IonTabs>
//         <IonRouterOutlet>
//           <Route exact path="/tab1">
//             <Tab1 />
//           </Route>
//           <Route exact path='/tab2'>
//             <Tab2 />
//           </Route>
//           <Route exact path='/tab3'>
//             <Tab3 />
//           </Route>
//           <Route exact path='/personal'>
//             <Personal />
//           </Route>
//           <Route exact path="/">
//             <Redirect to="/tab1" />
//           </Route>
//         </IonRouterOutlet>


//         <IonTabBar slot="bottom" className='bar-background'>
//           {/* <IonTabButton tab="tab1" href="/tab1" className='bar-icon'>
//             <IonIcon icon={bowlingBall} />
//             <IonLabel>Main Page</IonLabel>
//           </IonTabButton> */}
//           <IonTabButton tab="tab2" href="/tab2" className='bar-icon'>
//             <IonIcon icon={camera} />
//             <IonLabel>PageName1</IonLabel>
//           </IonTabButton>
//           <IonTabButton tab="tab3" href="/tab3" className='bar-icon'>
//             <IonIcon icon={codeWorkingSharp}></IonIcon>
//             <IonLabel>PageName2</IonLabel>
//           </IonTabButton>
//           <IonTabButton tab='personal' href='/personal' className='bar-icon'>
//             <IonIcon icon={person}></IonIcon>
//             <IonLabel>User</IonLabel>
//           </IonTabButton>
//         </IonTabBar >
//       </IonTabs>
//     </IonReactRouter>

//   </IonApp>

// );

export default App;
