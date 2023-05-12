import { IonContent, IonHeader, IonLabel, IonPage, IonSegment, IonSegmentButton, IonTitle, IonToolbar } from '@ionic/react';
import BlueToothScan from '../components/BluetoothScan/BlueToothScan';
const Tab1 = () => {
  return (
    <IonPage>

      <IonHeader>
        <IonToolbar>
          <IonTitle>Main Page</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <BlueToothScan />
      </IonContent>

      {/* <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonContent>
              <p>aa</p>
            </IonContent>
          </IonToolbar>
        </IonHeader>
      </IonContent> */}
    </IonPage>
  );
};

export default Tab1;
