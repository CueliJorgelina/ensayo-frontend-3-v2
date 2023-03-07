import { useState } from "react";

export const Form = ({titulo, onSubmit}) => {

    // Definimos la variales de estado y los metodos que van a modificar dichos valores
    const [ nombre, setNombre ] = useState('');
    const [ edad, setEdad ] = useState(0);
    const [ pokemonFavorito, setPokemonFavorito ] = useState('');

    // Definimos los manejadores de eventos
    const onChangeNombre = (e) => setNombre(e.target.value);
    const onChangeEdad = (e) => setEdad(e.target.value);
    const onChangePokemonFavorito = (e) => setPokemonFavorito(e.target.value);
    const onSubmitForm = (e) => {
    
        e.preventDefault();

        const resultValidateNombre = validateNombre( nombre );
        const resultValidateEdad = validateEdad( edad );
        const resultValidateNombrePokemon = validateNombre( pokemonFavorito );

        if( !resultValidateNombre ){
            alert('Nombre incorrecto!')
            reiniciarEstados();
        }

        if( !resultValidateEdad ){
            alert('Edad incorrecta!')
            reiniciarEstados();
        }

        if( !resultValidateNombrePokemon ){
            alert('Pokemon incorrecto!')
            reiniciarEstados();
        }

        if( resultValidateNombre && resultValidateEdad && resultValidateNombrePokemon ){
                
        const data = {
            nombre,
            edad, 
            pokemonFavorito
        };

        onSubmit( data );

        alert('El formulario ha sido enviado correctamente!');

        }
    
    }

  // Validaciones
  const validateNombre = ( nombre ) => {
    const withoutSpace = nombre.trim();
    return withoutSpace.length > 2;
  }

  const validateEdad = ( edad ) => {
    return edad > 17 && edad < 100;  
  }

  // Reiniciar valores
  const reiniciarEstados = () => {
    setNombre('');
    setEdad(0);
    setPokemonFavorito('');
  }

    return (
        <>
            <h1>{titulo}</h1>
            <form onSubmit={onSubmitForm}>
                <input 
                    onChange={onChangeNombre} 
                    type="text" 
                    placeholder='Nombre'
                    id='nombre'
                    name='nombre'
                    value={nombre}
                />
                <input 
                    onChange={onChangeEdad} 
                    type="number" 
                    placeholder='Edad'
                    id='edad'
                    name='edad' 
                    value={edad}
                />
                <input 
                    onChange={onChangePokemonFavorito} 
                    type="text" 
                    placeholder='Pokemon Favorito'
                    id='pokemonFavorito'
                    name='pokemonFavorito'
                    value={pokemonFavorito}
                />
                <button type='submit'>Enviar</button>
            </form>
        </>
    )
}