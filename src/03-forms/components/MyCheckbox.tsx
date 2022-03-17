import { useField, ErrorMessage } from 'formik';

interface Props {
    label: string;
    name: string;
    [x: string]: any; // esto es un comodin que nos permite agregar cualquier cantidad de parametros o propiedades adicionales
}

export const MyCheckbox = ( { label, ...props }:Props ) => {

    const [ field ] = useField( { ...props, type: 'checkbox' } );

  return (
    <>
        <label>
            <input type="checkbox" { ...field } { ...props } />
            { label }
        </label>
        <ErrorMessage name={ props.name } component="span" />
    </>
  )
}
