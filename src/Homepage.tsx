import React from 'react';
import { IonContent, IonHeader, IonPage, IonTabBar, IonTabButton, IonTabs, IonTitle, IonToolbar } from '@ionic/react';

const HomeScreen: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {/* Add the tab navigation */}
        <IonTabs>
          <IonTabBar slot="bottom">
            <IonTabButton tab="profile">
              Profile
            </IonTabButton>
            <IonTabButton tab="voluntary">
              Voluntary
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonContent>
    </IonPage>
  );
};

export default HomeScreen;

