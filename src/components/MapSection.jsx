import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useRef, useEffect,useState } from 'react';
import { Icon } from 'leaflet';
import Placeholder from "../assets/placeholder.png";
import Path from "../assets/Path_10.png";
import 'leaflet/dist/leaflet.css';


const MapSection = () => {
    const position = [36.56784411935336, 53.06189457219842,];
    const [loaded, setloaded] = useState(false)
    const popupRef = useRef()

    const icon = new Icon({
        iconUrl: Placeholder,
    })

    useEffect(() => {
      setloaded(!loaded)
    }, [])
    

    useEffect(() => {
        const marker = popupRef.current
        if (marker) {
            marker.openPopup()
        }
    }, [loaded])

    return (
        <div className="w-full h-[700px] relative isolate overflow-hidden top-[20rem]">
            <img src={Path} className='absolute top-[-8%] left-0 right-0 z-10 w-full scale-x-125' />
            <div className="w-full h-full absolute inset-0 z-1">
                <MapContainer
                    center={position}
                    zoom={20}
                    scrollWheelZoom={false}
                    fadeAnimation={true}>

                    <TileLayer

                        url={'http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'}
                        subdomains={['mt0', 'mt1', 'mt2', 'mt3']}
                    />

                    <Marker position={position} ref={popupRef} icon={icon} opacity={1}>
                        <Popup >
                            <p className='text-custom-font-size-16 text-text-color-8 font-yekan'>ساری , خیابان 18 دی روبروی خیام , ساختمان مازیار واحد 15</p>
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>
        </div>
    )
}

export default MapSection