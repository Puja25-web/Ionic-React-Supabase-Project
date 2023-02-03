import React from 'react';
import { useState } from 'react';
import { IonButton, IonContent, IonHeader, IonInput, IonItem, IonPage, IonTitle, IonToolbar, useIonToast,useIonLoading,IonList,IonLabel } from '@ionic/react';
import { supabase } from '../supabaseClient';


export function LoginScreen() {
    const [email, setEmail] = useState('');
  
    const [showLoading, hideLoading] = useIonLoading();
    const [showToast ] = useIonToast();
    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
      console.log()
      e.preventDefault();
      await showLoading();
      try {
        await supabase.auth.signInWithPassword({ email: 'example@email.com', password: 'example-password',})
    
        await showToast({ message: 'Check your email for the login link!' });
      } catch (e: any) {
        await showToast({ message: e.error_description || e.message , duration: 5000});
      } finally {
        await hideLoading();
      }
      }
      return (
        <IonPage>
          <IonHeader>
            <IonToolbar>
              <IonTitle>Log In</IonTitle>
            </IonToolbar>
          </IonHeader>
    
          <IonContent>
            <div className="ion-padding">
              <h1>Welcome back!</h1>
              <p>Sign in via magic link with your email below</p>
            </div>
            <IonList inset={true}>
              <form onSubmit={handleLogin}>
                <IonItem>
                  <IonLabel position="stacked">Email</IonLabel>
                  <IonInput
                    value={email}
                    name="email"
                    onIonChange={(e) => setEmail(e.detail.value ?? '')}
                    type="email"
                  ></IonInput>
                </IonItem>
                <div className="ion-text-center">
                  <IonButton type="submit" fill="clear">
                    Login
                  </IonButton>
                </div>
              </form>
            </IonList>
          </IonContent>
        </IonPage>
      );
    }

export default LoginScreen;