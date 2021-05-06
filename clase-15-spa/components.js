// Componentes
const HomeComponent = {
    render: () => {
        $("#app" ).load("pages/page1.html");
    }
}

const Page1Component = {
    render: () => {
        return `<section>
            <h1>Pagina 1</h1>
            <p>Texto para mostrar</p>
        </section>
    `;
    }
}    

const Page2Component = {
    render: () => {
        return `<section>
            <h1>Pagina 2</h1>
            <p>Texto para mostrar</p>
        </section>
    `;
    }
}            

const ErrorComponent = {
    render: () => {
        return `<p>Error</p>`;
    }
}