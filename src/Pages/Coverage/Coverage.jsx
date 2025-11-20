import React, { useRef } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'
import { useLoaderData } from 'react-router';

const Coverage = () => {
    const serviceCenters = useLoaderData()
const position=[23.6850, 90.3563]
const mapRef = useRef()

const handleSearch = e => {
    e.preventDefault();
    const location = e.target.location.value;
const district = serviceCenters.find(c=> c.district.toLowerCase().includes(location.toLowerCase()))
if(district){
    const coord = [district.latitude, district.longitude]
    mapRef.current.flyTo(coord, 14)

}

}


    return (
        <div>
            <h3 className='text-4xl font-bold text-secondary'>We are available in 64 districts</h3>
            <div>
<form onSubmit={handleSearch}>
    <label className="input">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.3-4.3"></path>
    </g>
  </svg>
  <input type="search" className="grow" name='location' placeholder="Search" />
</label>
</form>
            </div>
            {/*  */}
            <div>
                <MapContainer className=' w-full h-[800px]' center={position} zoom={8} scrollWheelZoom={false}
                ref={mapRef}>
                    <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
{
    serviceCenters.map((serviceCenter,index) =>   <Marker key={index} position={[serviceCenter.latitude, serviceCenter.longitude]}>
    <Popup>
        <strong>{serviceCenter.district}</strong> <br /> Easily customizable. <br />
        Service Area: {serviceCenter.covered_area.join(',')}
    </Popup>
  </Marker>)
}
                </MapContainer>
            </div>
        </div>
    );
};

export default Coverage;