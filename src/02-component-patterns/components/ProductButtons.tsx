import { useCallback, useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from '../styles/styles.module.css';

export interface Props {
    className?: string;
    style?: React.CSSProperties
}

export const ProductButtons = ( { className, style }: Props) => {
    
    // TODO: maxCount (puede que venga puede que no)
    const { increaseBy, counter, maxCount } = useContext( ProductContext );
    
    console.log('counter: ', counter, ' maxCount ', maxCount);
    
    
    const isMaxReached = useCallback( () => !!maxCount && counter === maxCount ? true : false, [counter, maxCount] );
    
    // TODO: isMaxReached (es una funcion) = useCallback, dependencias [ count, maxCount ] 
        // TRUE si el count === maxCount
        // FALSE si no lo es

    return (
        <div 
            className={ `${ styles.buttonsContainer } ${ className }` }
            style={ style }
        >
            <button
                className={ styles.buttonMinus }
                onClick={ () => increaseBy( -1 ) }
            >
                 - 
            </button>

            <div className={ styles.countLabel }>{ counter }</div>
            <button 
                className={ `${ styles.buttonAdd } ${ isMaxReached() && styles.disabled }` }
                onClick={ () => increaseBy( 1 ) }
            > + </button>
        </div>
    )
}