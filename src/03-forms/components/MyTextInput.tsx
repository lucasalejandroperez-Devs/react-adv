import { useField, ErrorMessage } from 'formik';

interface Props {
    label: string;
    name: string;
    type?: 'text' | 'email' | 'password';
    placeholder?: string;
    [x: string]: any; // esto es un comodin que nos permite agregar cualquier cantidad de parametros o propiedades adicionales
}

export const MyTextInput = ( { label, ...props }:Props ) => {

    const [ field ] = useField( props );

  return (
    <>
        <label htmlFor={ props.id || props.name }>{ label }</label>
        <input className="text-input" { ...field } { ...props } />
        <ErrorMessage name={ props.name } component="span" />
    </>
  )
}
