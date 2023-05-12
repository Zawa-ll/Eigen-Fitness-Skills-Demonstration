import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { BLE } from '@ionic-native/ble';
import React, { useState } from 'react';

const Tab3: React.FC = () => {
  const [initialized, setInitialized] = useState(false);

  function testInit() {
    BLE.isEnabled().then(() => {
      console.log('Bluetooth is enabled');
      // Do something when Bluetooth is enabled
    }).catch(() => {
      console.log('Bluetooth is *not* enabled');
      // Do something when Bluetooth is not enabled
    });
  }

  function failure(error: any) {
    console.log('BLE error: ' + JSON.stringify(error));
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 3</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        {initialized ? (
          <IonButton disabled>Module Initialized</IonButton>
        ) : (
          <IonButton onClick={testInit}>Initialize Module</IonButton>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
