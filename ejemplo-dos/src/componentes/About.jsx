import React from 'react'

//componente que contiene la informacion principal 
const About = () => {
    return (
        <>
        {/* uso la etiqueta article y section para ordenar mejor */}
        <article>
            <section>
                {/* titulo principal  */}
        <h1>About Us</h1>

        {/* parrafos de texto */}
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo provident nemo, quisquam asperiores, quidem vel nulla, sit placeat eum culpa officia fugit numquam laboriosam eius deserunt harum! Velit, omnis placeat.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quibusdam exercitationem ipsum adipisci minus, itaque, neque atque veritatis quia officiis ipsa temporibus impedit nulla dignissimos reprehenderit omnis porro, natus inventore!</p>
            </section>
        </article>
        </>
    )
}
//se exporta el contenido para poder usarlo en otros archivos
export default About
