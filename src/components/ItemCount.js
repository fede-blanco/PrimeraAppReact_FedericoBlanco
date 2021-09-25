import React, { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";

const ItemCount = (props) => {

    const { stock, initial } = props;
    //creacion de la variable "count" y de setCount que sera la funcion que modificara dicha variable >> se utiliza useState para indicar el valor inicial del estado
    const [count , setCount] = useState(parseInt(initial));

    const restarCount = () => {
        if (count >= 1){
            setCount(count - 1)
        }
    }

    const sumarCount = () => {
        if (count < stock){
        setCount(count + 1)
        }
    }

    const agregarAlCarrito = () => {
        if ( count > 0 && count <= stock){
            alert("SE AGREGARON TODOS LOS ITEMS ELEGIDOS AL CARRITO");
        }
        else{
            alert("NO SE AGREGARON ITEMS AL CARRITO");
        }
    }



    return (
        <div className="card mx-auto" style={{ width: '18rem' }}>

            <div className="card-header text-center">
                <h2>{count}</h2>
            </div>

            <div className="card-body text-center">
                <button className="btn btn-secondary w-25 mx-1" onClick={restarCount}>-</button>
                <button className="btn btn-secondary w-25 mx-1" onClick={sumarCount}>+</button>
            </div>

            <div className="card-footer text-center my-2">
                <button className="btn btn-warning w-50" onClick={ agregarAlCarrito}>Agregar al Carrito</button>
            </div>

        </div>

    );

}

export default ItemCount;
