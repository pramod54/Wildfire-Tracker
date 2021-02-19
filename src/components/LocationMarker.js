import { Icon } from '@iconify/react'
import wild from '@iconify/icons-mdi/fire-alert'
import waterAlert from '@iconify-icons/mdi/water-alert';
import windGusts from '@iconify-icons/carbon/wind-gusts';
import earthquakeIcon from '@iconify-icons/openmoji/earthquake';
import seaLevelRise from '@iconify-icons/openmoji/sea-level-rise';
import floodIcon from '@iconify-icons/openmoji/flood';
import landslideIcon from '@iconify-icons/openmoji/landslide';
import humanChild from '@iconify-icons/mdi/human-child';
import stormIcon from '@iconify-icons/whh/storm';
import cloudWithSnow from '@iconify-icons/noto/cloud-with-snow';
import sunIcon from '@iconify-icons/noto/sun';
import lavaLamp from '@iconify-icons/mdi/lava-lamp';
import waterMinus from '@iconify-icons/mdi/water-minus';



const LocationMarker = ({ name,lat,lng,onClick }) => {
    return (
        <div className="location-marker" onClick={onClick}>
        {name && name==="Wildfires" && (<Icon icon={wild} className="location-icon"/>) }
        {name && name==="Volcanoes" && (<Icon icon={lavaLamp} className="location-icon" />)}
        {name && name==="Drought" && (<Icon icon={waterAlert} className="location-icon" />)}
        {name && name==="Dust and Haze" && (<Icon icon={windGusts} className="location-icon" />)}
        {name && name==="Earthquakes" && (<Icon icon={earthquakeIcon} className="location-icon" />)}
        {name && name==="Sea and Lake Ice" && (<Icon icon={seaLevelRise} className="location-icon" />)}
        {name && name==="Floods" && (<Icon icon={floodIcon} className="location-icon" />)}
        {name && name==="Landslides" && (<Icon icon={landslideIcon} className="location-icon" />)}
        {name && name ==="Manmade"&& (<Icon icon={humanChild} className="location-icon" />)}
        {name && name==="Severe Storms" && (<Icon icon={stormIcon} className="location-icon" />)}
        {name && name==="Snow" && (<Icon icon={cloudWithSnow} className="location-icon" />)}
        {name && name==="Temperature Extremes" && (<Icon icon={sunIcon} className="location-icon" />)}
        {name && name=== "Water Color" && (<Icon icon={waterMinus} className="location-icon" />)}
        {name && name==="Sea and Lake Ice" && (<Icon icon={seaLevelRise} className="location-icon" />)}
        </div>
    )
}

export default LocationMarker;