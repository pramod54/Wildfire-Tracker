import { Icon } from '@iconify/react'
import wild from '@iconify/icons-mdi/fire-alert'//wildires

import windGusts from '@iconify-icons/carbon/wind-gusts';

import earthquakeIcon from '@iconify-icons/openmoji/earthquake';

import waterAlert from '@iconify-icons/mdi/water-alert';

import landslideIcon from '@iconify-icons/openmoji/landslide';

import floodIcon from '@iconify-icons/openmoji/flood';


import humanChild from '@iconify-icons/mdi/human-child';

import stormIcon from '@iconify-icons/whh/storm';

import sunIcon from '@iconify-icons/noto/sun';

import cloudWithSnow from '@iconify-icons/emojione-v1/cloud-with-snow';

import lavaLamp from '@iconify-icons/mdi/lava-lamp';

import seaLevelRise from '@iconify-icons/openmoji/sea-level-rise';

import waterMinus from '@iconify-icons/mdi/water-minus';
import { Fragment } from 'react';

const LocationMarker = ({ name,lat, lng, onClick }) => {
    // console.log(name);
    return (
        <div className="location-marker" onClick={onClick}>
           <Icon icon={wild} className="location-icon" />

           {/* {
    {name}==="Wildfires"?<Icon icon={wild} className="location-icon" />:<Fragment/>
}
{
    {name}==="Drought"? <Icon icon={waterAlert} className="location-icon" />:<Fragment/>
}
{
    {name}==="Dust and Haze"? <Icon icon={windGusts} className="location-icon" />:<Fragment/>
}
{
    {name}==="Earthquakes"?<Icon icon={earthquakeIcon} className="location-icon" />:<Fragment/>
}
{
    {name}==="Sea and Lake Ice"?<Icon icon={seaLevelRise} className="location-icon" />:<Fragment/>
}
{
    {name}==="Floods"?<Icon icon={floodIcon} className="location-icon" />:<Fragment/>
}
{
    {name}==="Landslides"?<Icon icon={landslideIcon} className="location-icon" />:<Fragment/>
}
{
    {name}==="Manmade"?<Icon icon={humanChild} className="location-icon" />:<Fragment/>
}
{
    {name}==="Severe Storms"?<Icon icon={stormIcon} className="location-icon" />:<Fragment/>
}
{
    {name}==="Snow"?<Icon icon={cloudWithSnow} className="location-icon" />:<Fragment/>
}
{
    {name}==="Temperature Extremes"?<Icon icon={sunIcon} className="location-icon" />:<Fragment/>
}
{
    {name}==="Volcanoes"?<Icon icon={lavaLamp} className="location-icon" />:<Fragment/>
}
{
    {name} === "Water Color"?<Icon icon={waterMinus} className="location-icon" />:<Fragment/>
} */}
        </div>
    )
}

export default LocationMarker
