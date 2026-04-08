/* import React from 'react' */

//componente que contiene la informacion principal 
const Home = () => {
    //creo lo que va a retornar 
    return (
        
        <>
        {/* uso la etiqueta article y section para ordenar mejor */}
        <article>
            <section>
                {/* titulo principal */}
                <h1>Home</h1>
                {/* parrafos de texto */}
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora provident expedita reiciendis libero accusamus quis, culpa nihil delectus nostrum reprehenderit consectetur quam doloremque, mollitia harum qui? Fuga mollitia sint ex?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis voluptates ipsa pariatur quaerat molestias repellendus id totam obcaecati quae mollitia reprehenderit illum, provident officia dolor repellat voluptate numquam quisquam magnam?</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque officia consequuntur nihil ipsum blanditiis possimus aut assumenda quos! Labore nihil facere, at omnis ducimus laboriosam pariatur explicabo ullam temporibus quos.</p>
            </section>
        </article>
        </>
        
    )
}
//se exporta el contenido para poder usarlo en otros archivos
export default Home
