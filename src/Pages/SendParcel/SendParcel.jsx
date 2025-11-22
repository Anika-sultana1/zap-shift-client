import React from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { useLoaderData } from 'react-router';

const SendParcel = () => {
    const { register, handleSubmit, formState: { errors } , control} = useForm();

    const serviceCenters = useLoaderData();
const regionsDuplicate = serviceCenters.map(c => c.region)
const regions = [...new Set(regionsDuplicate)]
// const senderRegion = watch('senderRegion')
const senderRegion = useWatch({control,name:'senderRegion'})


const recieverRegion = useWatch({control, name:"recieverRegion"})



const districtByRegion = region =>{

    const regionDistricts = serviceCenters.filter(c=> c.region === region)
    console.log(regionDistricts)
    const districts = regionDistricts.map(d => d.district)
    return districts;
}


    const handleSendParcel = (data) => {
        console.log(data)
        const sameDistrict = data.senderDistrict === data.recieverDistrict;
        console.log(sameDistrict)
    }

    return (
        <div>
            <h3 className='text-5xl font-bold'>Send A Parcel</h3>
            <form onSubmit={handleSubmit(handleSendParcel)} className='mt-12 p-4 text-black'>

                {/* parcel type */}
                <div>
                    <label className='label mr-14'>
                        <input type="radio" {...register('parcelType')} value="document" className="radio" defaultChecked />
                        Document</label>
                    <label className='label'>
                        <input type="radio" {...register('parcelType')} value="non-document" className="radio" defaultChecked />
                        Non-Document</label>
                </div>
                {/* parcel info: name, weight  */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-12 my-8'>
                    <fieldset className="fieldset">
                        <label className="label">Parcel Name</label>
                        <input type="text" className="input w-full" {...register('parcelName')} placeholder="Parcel Name" />

                    </fieldset>
                    <fieldset className="fieldset">
                        <label className="label">Parcel Weight(kg)</label>
                        <input type="number" className="input w-full" {...register('parcelWeight')} placeholder="Parcel weight" />

                    </fieldset>
                </div>
                {/* two column  */}



                <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
                    {/* sender info  */}

                    <fieldset className="fieldset">
                        <h4 className='text-2xl font-semibold'>Sender Details</h4>
                        {/* sender name  */}
                        <label className="label">Sender Name</label>
                        <input type="text" className="input w-full" {...register('senderName')} placeholder="Sender Name" />
                        <label className="label">Sender Email</label>
                        <input type="email" className="input w-full" {...register('senderEmail')} placeholder="Sender Email" />

{/* sender region  */}
<fieldset className="fieldset">
  <legend className="fieldset-legend">Sender Regions</legend>
  <select {...register('senderRegion')} defaultValue="Pick a Region" className="select">
    <option disabled={true}>Pick a Region</option>
   {
    regions.map((r, index)=>  <option key={index}>{r}</option>)
   }
    
  </select>
</fieldset>

{/* sender districts  */}
<fieldset className="fieldset">
  <legend className="fieldset-legend">Sender Districts</legend>
  <select {...register('senderDistrict')} defaultValue="Pick a Districts" className="select">
    <option disabled={true}>Pick a Districts</option>
   {
    districtByRegion(senderRegion).map((r, index)=>  <option key={index}>{r}</option>)
   }
    
  </select>
</fieldset>

                        {/* sender address  */}
                        <label className="label mt-4">Sender Address</label>
                        <input type="text" className="input w-full" {...register('senderAddress')} placeholder="Sender Address" />
                        {/* sender phone number  */}
                        <label className="label mt-4">Sender Phone Number</label>
                        <input type="number" className="input w-full" {...register('senderPhoneNumbr')} placeholder="Sender Phone Number" />

                        {/* sender pickup instraction*/}
                        <label className="label mt-4">Sender Pickup Instraction</label>
                        <textarea type="text" className="input w-full" {...register('senderPickupInstraction')} placeholder="Pickup Instraction"></textarea>


                    </fieldset>

                    {/* reciever info  */}

                    <div>
                        <fieldset className="fieldset">
                            <h4 className='text-2xl font-semibold'>Reciever Details</h4>
                            {/*reciever name  */}
                            <label className="label">Reciever Name</label>
                            <input type="text" className="input w-full" {...register('RecieverName')} placeholder="Reciever Name" />
                            {/* reciever email  */}
                            <label className="label">Reciever Email</label>
                            <input type="email" className="input w-full" {...register('RecieverEmail')} placeholder="Reciever Email" />
                            {/* reciever address  */}
                            <label className="label mt-4">Reciever Address</label>
                            <input type="text" className="input w-full" {...register('RecieverAddress')} placeholder="Reciever Address" />
                            {/* reciever phone number  */}
                            <label className="label mt-4">Reciever Phone Number</label>
                            <input type="number" className="input w-full" {...register('RecieverPhoneNumbr')} placeholder="Reciever Phone Number" />
                           

{/* Reciever region  */}
<fieldset className="fieldset">
  <legend className="fieldset-legend">Receiver Regions</legend>
  <select {...register('recieverRegion')} defaultValue="Pick a Region" className="select">
    <option disabled={true}>Pick a Region</option>
   {
    regions.map((r, index)=>  <option key={index}>{r}</option>)
   }
    
  </select>
</fieldset>

{/* Reciever District  */}
<fieldset className="fieldset">
  <legend className="fieldset-legend">Receiver Districts</legend>
  <select {...register('recieverDistrict')} defaultValue="Pick a District" className="select">
    <option disabled={true}>Pick a Region</option>
   {
  districtByRegion(recieverRegion).map((d, index)=> <option key={index} value={d}>{d}</option>)
   }
    
  </select>
</fieldset>


                            {/* reciever pickup instraction*/}
                            <label className="label mt-4">Reciever Pickup Instraction</label>
                            <textarea type="text" className="input w-full" {...register('RecieverPickupInstraction')} placeholder="Pickup Instraction"></textarea>


                        </fieldset>
                    </div>
                </div>
                <input type="submit" className='btn btn-primary text-black mt-5' value="Send Parcel" />
            </form>

        </div>
    );
};

export default SendParcel;