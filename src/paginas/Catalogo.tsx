import React from 'react';

export default function Catalogo() {
    return (
        <main className="container my-5">
            <div className="row mb-4">
                <div className="col-12">
                    <h1 className="fw-bold">Catálogo de Productos</h1>
                    <p className="text-muted">Explora nuestra selección de instrumentos y equipos de audio profesional.</p>
                </div>
            </div>

            <div className="row" id="contenedor-productos">
                <div className="col-12 col-sm-6 col-md-4 mb-4">
                    <div className="card h-100 shadow-sm border-0">
                        <img src="https://via.placeholder.com/200" className="card-img-top p-3" alt="Guitarra Eléctrica Fender" />
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title fw-bold">Guitarra Eléctrica Fender</h5>
                            <p className="text-muted small">Guitarras</p>
                            <p className="fs-5 fw-bold text-success">$450.000</p>
                            <button className="btn btn-primary mt-auto">Añadir al Carrito</button>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-sm-6 col-md-4 mb-4">
                    <div className="card h-100 shadow-sm border-0">
                        <img src="https://via.placeholder.com/200" className="card-img-top p-3" alt="Teclado Yamaha" />
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title fw-bold">Teclado Yamaha 61 Teclas</h5>
                            <p className="text-muted small">Teclados</p>
                            <p className="fs-5 fw-bold text-success">$280.000</p>
                            <button className="btn btn-primary mt-auto">Añadir al Carrito</button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
