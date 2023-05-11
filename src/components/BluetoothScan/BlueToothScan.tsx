import { IonButton, IonContent, IonIcon, IonTab, IonTitle, IonToolbar } from '@ionic/react';
import { bluetoothOutline } from 'ionicons/icons';
import { useState } from 'react';
import './BlueToothScan.css'


const BlueToothScan = () => {
    const [clicked, setClicked] = useState<Boolean>(false);
    const iconColor = clicked ? '#D9DCE5' : '#707484';

    return (
        <IonContent style={{ '--background': '#000000' }}>
            <IonButton
                onClick={() => { setClicked(!clicked) }}
                style={{ 'color': iconColor }} className='btn-color'>
                <IonIcon icon={bluetoothOutline} />
            </IonButton>
        </IonContent>
    )
}

export default BlueToothScan;
