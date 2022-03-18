import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { MyTextInput } from '../components';

import '../styles/styles.css';

export const RegisterFormikPage = () => {

    



  return (
    <div>
         <h1>Register Page</h1>

         <Formik
            initialValues={{
                name: '',
                email: '',
                password1: '',
                password2: ''
            }}
            onSubmit={ (values) => {
                console.log(values);
                
            }}
            validationSchema={
                Yup.object({
                    name: Yup.string()
                                .min(2, 'Debe tener más de 2 caracteres')
                                .max(15, 'Debe tener menos de 15 caracteres')
                                .required('Requerido'),
                    email: Yup.string()
                                .email('Debe ser un email válido')
                                .required('Requerido'),
                    password1: Yup.string()
                                    .min(6, 'Debe tener al menos 6 caracteres'),
                    password2: Yup.string()
                                    .oneOf([Yup.ref('password1'), null], "Las contraseñas deben coincidir")
                                    .min(6, 'Debe tener al menos 6 caracteres')
                })
            }
        >
            {
                ({ handleReset }) => (
                    <Form>
                        <MyTextInput 
                            label="Nombre" 
                            name="name" 
                            placeholder="Nombre"
                        />

                        <MyTextInput 
                            label="Email Address" 
                            name="email" 
                            placeholder="john@google.com"
                            type="email"
                        />   

                        <MyTextInput 
                            label="Password" 
                            name="password1" 
                            placeholder="Contraseña"
                            type="password"
                        />   

                        <MyTextInput 
                            label="Password" 
                            name="password2" 
                            placeholder="Repetir contraseña"
                            type="password"
                        />   

                        <button type="submit">
                            Create
                        </button>
                        <button type="button" onClick={ handleReset }>Reset Form</button>

                    </Form>
                )
            }
        </Formik>
    </div>
  )
}
