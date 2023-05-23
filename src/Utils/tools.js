import React from 'react'
import { Link } from 'react-router-dom'

// export const ImagLogo = 'https://i.pinimg.com/originals/d9/fe/3c/d9fe3c83da74651b153a58e707b08436.jpg'
import ImagLogo from '../Resources/images/logos/manchester_city_logo.png'
import { toast } from 'react-toastify';

const CityLogo = (props) => {
    const template = <div 
        className='img_cover'
        style={{
            width: props.width,
            height: props.height,
            background: `url(${ImagLogo}) no-repeat`
        }}
    >

    </div>

    if (props.link) {
        return (
            <Link className='link_logo' to={props.linkTo}>
                {template}
            </Link>
        )
    } else {
        return template
    }
}

export default CityLogo

export const showToastError = (msg) => {
    toast.error(msg, {
        position: toast.POSITION.TOP_LEFT
    })
}

export const showToastSuccess = (msg) => {
    toast.success(msg, {
        position: toast.POSITION.TOP_LEFT
    })
}