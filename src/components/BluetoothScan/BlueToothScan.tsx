import { IonButton, IonButtons, IonContent, IonIcon, IonItem, IonLabel, IonTab, IonTitle, IonToggle, IonToolbar } from '@ionic/react';
import { bluetoothOutline } from 'ionicons/icons';
import { useState } from 'react';
import './BlueToothScan.css'
import '../../App.css'
// import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner';
import { BLE } from '@ionic-native/ble';

const BlueToothScan = () => {
    const [isScanning, setIsScanning] = useState<Boolean>(false);
    const iconColor = isScanning ? '#707484' : '#D9DCE5';


    const handleClick = (event: any) => {
        event.preventDefault();
        setIsScanning(prevIsScanning => !prevIsScanning);
        setTimeout(() => {
            setIsScanning(prevIsScanning => !prevIsScanning);
        }, 5000);
    }

    // const init = () => {
    //     return new Promise((resolve, reject) => {
    //         BLE.isEnabled()
    //             .then(res => {
    //                 resolve(true);
    //             })
    //             .catch(err => {
    //                 enable()
    //                     .then(res => {
    //                         resolve(true)
    //                     })
    //             })
    //     })
    // }

    // const enable = () => {
    //     return new Promise((resolve, reject) => {
    //         BLE.enable()
    //             .then(res => { resolve(true) })
    //             .catch(err => {
    //                 resolve(false);
    //             })
    //     })

    // }



    return (
        <IonContent style={{ '--background': '#000000' }}>
            <h1 className='heading-title'>BlueTooth Scan</h1>
            <IonButton
                onClick={handleClick}
                // onClick={handleClick}

                style={{ '--background': '#5B62FF', 'color': iconColor }} className='btn-color'>
                <IonIcon icon={bluetoothOutline} />
            </IonButton>

            {/* <IonButton onClick={testBLEScan}>testBLEScan</IonButton> */}
            {/* <IonButton onClick={openScanner}>openScanner</IonButton> */}





        </IonContent >
    )
}

export default BlueToothScan;
