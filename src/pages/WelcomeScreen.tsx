import React from 'react';
import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonImg } from '@ionic/react';
import { RouteComponentProps } from 'react-router-dom';
import img from './images/bg.png';

const WelcomeScreen: React.FC<RouteComponentProps> = ({ history }) => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Welcome</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="flex items-center justify-center h-screen">
          <IonImg src={img} class="fixed w-full h-auto" />
          <div className="fixed w-full bg-white bottom-0 p-5">
            <h1>Welcome to ClosetChit</h1>
            <p className="pb-4">Onestop shop for your closet</p>
            <IonButton onClick={() => history.push('/login')}>Login</IonButton>
            <IonButton onClick={() => history.push('/signup')}>Sign Up</IonButton>
          </div>
      </IonContent>
    </IonPage>
  );
};

export default WelcomeScreen;
