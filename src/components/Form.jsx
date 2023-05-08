import React from 'react'
import { useForm } from "react-hook-form";
import 'leaflet/dist/leaflet.css';
import { MapContainer, Marker, TileLayer, Popup, Tooltip, CircleMarker, Polygon } from 'react-leaflet';
import axios from 'axios';

const colorOptions={color: 'green'}
const centerPolygon=[
  [
    [54.994894, 73.348933],
    [54.997805, 73.362653],
    [54.981452, 73.387972],
    [54.978897, 73.374234]
  ]
]

const center=[54.989347, 73.368221]

const Form = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    axios.post('https://637f91ca2f8f56e28e904e7d.mockapi.io/form', data)
    alert('Заявка отправлена')
    console.log(data)
  };

  console.log(watch("example")); 
  return (
    <div>
      <form id='form' onSubmit={handleSubmit(onSubmit)}>  
        <h1>Заполните заявку на обратную связь</h1>    
        <div className='input-group mb-3'>
          <input 
            {...register('lastName', {
              required: true,
              maxLength: 50,
              pattern: /^[А-Яа-я]+$/i
            })}
            type='text'
            className='form-control'
            placeholder='Фамилия'/>
        </div>
        {errors?.lastName?.type === 'required'&&(
          <p>Поле обязательно для заполнения</p>
        )} 
        {errors?.lastName?.type === 'maxLength'&&(
          <p>Поле не может содержать более 50 символов</p>
        )}
        {errors?.lastName?.type === 'pattern'&&(
          <p>Поле заполнено некорректно</p>
        )} 

        <div className='input-group mb-3'>
          <input 
            {...register('firstName', {
              required: true,
              maxLength: 30,
              pattern: /^[А-Яа-я]+$/i
            })}
            type='text'
            className='form-control'
            placeholder='Имя'/>
        </div>
        {errors?.firstName?.type === 'required'&&(
          <p>Поле обязательно для заполнения</p>
        )} 
        {errors?.firstName?.type === 'maxLength'&&(
          <p>Поле не может содержать более 30 символов</p>
        )}
        {errors?.firstName?.type === 'pattern'&&(
          <p>Поле заполнено некорректно</p>
        )} 

        <div className='input-group mb-3'>
          <input 
            {...register('patronymic', {              
              maxLength: 50,
              pattern: /^[А-Яа-я]+$/i
            })}
            type='text'
            className='form-control'
            placeholder='Отчество'/>
        </div>         
        {errors?.patronymic?.type === 'maxLength'&&(
          <p>Поле не может содержать более 50 символов</p>
        )}
        {errors?.patronymic?.type === 'pattern'&&(
          <p>Поле заполнено некорректно</p>
        )} 

        <div className='input-group mb-3'>
          <input 
            {...register('email', {
              required: true,
              maxLength: 30,
              pattern: /[A-Za-z0-9]+@[A-Za-z0-9]+\.[a-z]{2,3}/i
            })}
            type='text'
            className='form-control'
            placeholder='Email'/>
        </div>
        {errors?.email?.type === 'required'&&(
          <p>Поле обязательно для заполнения</p>
        )} 
        {errors?.email?.type === 'maxLength'&&(
          <p>Поле не может содержать более 30 символов</p>
        )}
        {errors?.email?.type === 'pattern'&&(
          <p>Email введен некорректно</p>
        )} 

       <input className='btn btn-outline-primary' type="submit" />
      </form>
     <br></br>
     <MapContainer
      center={center}
      zoom={10}
      style={{
        width:'100vw',
        height:"500px"
      }}>
          <TileLayer
          url='https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=g9gC2Vk5LJot3e6kObEA'
          attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'/>
          <CircleMarker center={center} pathOptions={{color:'black'}} radius={10}/>
          <Marker position={center}>
            <Popup>
              Мы находимся тут
            </Popup>
            <Tooltip>При наведении</Tooltip>
          </Marker>
          <Polygon positions={centerPolygon} pathOptions={colorOptions}/>
     </MapContainer>
    </div>
  )
}

export default Form