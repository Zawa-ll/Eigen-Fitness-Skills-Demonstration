import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { BLE } from '@ionic-native/ble';
import { useState } from 'react';
// import { Diagnostic } from '@ionic-native/diagnostic';
import { Diagnostic } from '@ionic-native/diagnostic';


// const cordova = require('cordova');
// const diagnostic = cordova.plugins.diagnostic;
// const bluetoothState = diagnostic.bluetoothState;


// Use the bluetoothState constants here...


const Tab1: React.FC = () => {

  const [text, setText] = useState('');
  const [enabled, setEnabled] = useState('');

  const handleEnable = async () => {
    try {
      const isEnabled = await Diagnostic.getBluetoothState();
      if (isEnabled === Diagnostic.bluetoothState.POWERED_ON) {
        console.log('Bluetooth is already enabled!');
        return;
      }
      await Diagnostic.setBluetoothState(true);
      console.log('Bluetooth enabled successfully!');
    } catch (error) {
      console.error('Error enabling Bluetooth:', error);
    }
  }


  const handleClick = () => {
    let suc = false;

    Diagnostic.isBluetoothEnabled()
      .then((isEnabled) => {
        if (isEnabled) {
          const result = BLE.scan([], 5)
            .subscribe((device: any) => {
              console.log(device);
              console.log('success!');
              suc = true;
            }, (device) => {
              console.log(device);
              console.log('failed...');
              suc = false;
            })
          if (suc) {
            setText('success!!')
          } else {
            setText('failed!!')
          }

          console.log(result);
        } else {
          setText('Bluetooth is not enabled!')
        }
      })
      .catch((error) => {
        console.log('Error checking Bluetooth status:', error);
      });
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonButton onClick={handleEnable}>Enable</IonButton>
        <IonButton onClick={handleClick}>Scan barcode</IonButton>
        <p>{text}</p>
        <p>results above!</p>
        <p>{enabled}</p>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
