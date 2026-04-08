//import React from 'react'

//componente que contiene la informacion principal 
const Navbar = () => {
    return (
        <>
        {/* creo el encabezado de la pagina */}
        <header>
            {/* titulo principal del encabezado */}
            <h1>Navbar</h1>
            <nav>
                {/* lista para la navegacion */}
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">About Us</a></li>
                </ul>
            </nav>
        </header>
        </>
    )
}
//se exporta el contenido para poder usarlo en otros archivos
export default Navbar

