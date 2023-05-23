import React , { useState } from 'react';
import { firebase } from '../../firebase';

import { CircularProgress, Container } from '@material-ui/core';
// import { Redirect } from 'react-router-dom';


import { useFormik } from 'formik';
import * as Yup from 'yup';
import { showToastSuccess, showToastError } from '../../Utils/tools';
import { Navigate, useNavigate } from 'react-router-dom';
// import { PinDropSharp } from '@material-ui/icons';

const SignIn = (props) => {
    const [loading, setLoading] = useState(false)
    const history = useNavigate();
    console.log(props)

    const formik = useFormik({
        initialValues:{
            email:'',
            password:''
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email('Invalid email address')
                .required('The email is required'),
            password:Yup.string()
                .required('The email is required')
        }),
        onSubmit: (values) =>{
            setLoading(true)
            submitForm(values)
        }
    })

    const submitForm = (values) => {
        firebase.auth()
        .signInWithEmailAndPassword(
            values.email,
            values.password
        ).then(()=>{
            // show success toast
            showToastSuccess(`Welcome to the page`);
            
            history('/dashboard'); // Redirect way to authenticate Users
        }).catch(error=>{
            setLoading(false);
            console.log(error)
            showToastError(error.message);
            /// show toasts
        })
    }


    return(
       <>
       {!props.user ? 
        <Container maxWidth='md'>
        <div className="signin_wrapper" style={{margin:'1px'}}>

            <form onSubmit={formik.handleSubmit}>
                <h2>Please login</h2>
                <input
                    name="email"
                    placeholder="Email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email ?
                    <div className="error_label">
                        {formik.errors.email}
                    </div>
                :null}


                <input
                    name="password"
                    type="password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                />
                {formik.touched.password && formik.errors.password ?
                    <div className="error_label">
                        {formik.errors.password}
                    </div>
                :null}

                
                    {loading ?
                        <CircularProgress color="secondary" className="progress"/>
                    :
                        <button type="submit">Log in</button>
                    }

             
            </form>

        </div>
    </Container>
       :
       <Navigate to="/" />
       }
       </>
    )

}

export default SignIn