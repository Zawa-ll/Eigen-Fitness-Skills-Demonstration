import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react'
import React from 'react'
import BlueToothScan from '../components/BluetoothScan/BlueToothScan'


const Tab2 = () => {
  return (
    <IonPage >
      <BlueToothScan />
    </IonPage>
  )
}

export default Tab2