import React, { useState } from 'react';

import { supabase } from '../supabaseClient';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonItem, IonButton, useIonToast,useIonLoading, IonList, IonLabel } from '@ionic/react';

export function SignupScreen() {
  const [Username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setconfirmPassword] = useState('');
  
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
          <IonTitle>Sign up</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
      <div className="ion-padding">
              <h1>Create an account </h1>
              <p>Let's get started your 30 day free trial!</p>
              
            </div>
            
      <IonItem>
          <IonLabel position="floating">Username</IonLabel>
          <IonInput placeholder="Name" value={Username} onIonChange={e => setUsername(e.detail.value!)}></IonInput>
        </IonItem>
        <IonItem>
          <IonLabel position="floating">Email</IonLabel>
          <IonInput placeholder="Email" value={email} onIonChange={e => setEmail(e.detail.value!)}></IonInput>
        </IonItem>
        <IonItem>
          <IonLabel position="floating">Password</IonLabel>
          <IonInput placeholder="Password" type="password" value={password} onIonChange={e => setPassword(e.detail.value!)}></IonInput>
        </IonItem>
        <IonItem> 
        <IonLabel position="floating">Confirm Password</IonLabel>
          <IonInput placeholder="confirmpassword" type="password" value={confirmpassword} onIonChange={e => setconfirmPassword(e.detail.value!)}></IonInput>
        </IonItem>
        <IonButton expand="block">Create Account</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default SignupScreen;
