import { Redirect, Route} from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';




import { IonSplitPane } from '@ionic/react';

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
import WelcomeScreen from './pages/WelcomeScreen';
import LoginScreen from './pages/LoginScreen';
import SignupScreen from './pages/SignupScreen'



/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => {
  return (
    <IonApp>
    <IonReactRouter>
        <IonRouterOutlet>
          <Route exact={true} path={'/welcome'} component={WelcomeScreen} />
          <Route exact={true} path={'/login'} component={LoginScreen} />
          <Route exact={true} path={'/signup'} component={SignupScreen} />
          <Redirect exact={true} from={'/'} to={'/welcome'} />
        </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
  );
};
    
export default App