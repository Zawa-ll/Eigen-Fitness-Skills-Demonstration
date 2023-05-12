import { IonButton, IonContent, IonIcon, IonItem, IonTab, IonTitle, IonToolbar } from '@ionic/react';
import { bluetoothOutline } from 'ionicons/icons';
import { useState } from 'react';
import './BlueToothScan.css'
import '../../App.css'
import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner';
import { BLE } from '@ionic-native/ble';


const BlueToothScan = () => {
    const [isScanning, setIsScanning] = useState<Boolean>(false);
    const iconColor = isScanning ? '#707484' : '#D9DCE5';

    const openScanner = async () => {
        const data = await BarcodeScanner.scan();
        console.log(`Barcode data: ${data.text}`);
    };


    const handleTestScan = () => {
        const a = BLE.scan([], 5).subscribe(
            device => console.log(JSON.stringify(device)),
            error => console.error(error)
        );

        console.log(a);
    }

    const handleClick = (event: any) => {
        event.preventDefault();
        setIsScanning(prevIsScanning => !prevIsScanning);
        setTimeout(() => {
            setIsScanning(prevIsScanning => !prevIsScanning);
        }, 5000);
    }



    return (
        <IonContent style={{ '--background': '#000000' }}>
            <h1 className='heading-title'>BlueTooth Scan</h1>
            <IonButton
                onClick={handleClick}
                // onClick={handleClick}

                style={{ '--background': '#5B62FF', 'color': iconColor }} className='btn-color'>
                <IonIcon icon={bluetoothOutline} />
            </IonButton>

            <IonButton onClick={handleTestScan}>Scan barcode</IonButton>

        </IonContent >
    )
}

export default BlueToothScan;
