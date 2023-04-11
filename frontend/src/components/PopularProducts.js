import React, {Component} from 'react';
import logo from "../logo.svg";
import {Carousel} from "react-bootstrap";

class PopularProducts extends Component {
    state = {
        products: []
    };

    async componentDidMount() {
        const response = await fetch('/api/products/popular');
        const body = await response.json();
        this.setState({products: body});
    }

    render() {
        const {products} = this.state;
        return (
            // <div className="App">
            //         <div className="App-intro">
            //             <h2> ACME inc </h2>
            //             {products.map(product =>
            //                 <div key={product.id}>
            //                     {product.name} ({product.description})
            //                 </div>
            //             )}
            //         </div>
            // </div>

            // <section className="pt-5 pb-5">
            //     <div className="container">
            //         <div className="row">
            //             <div className="col-6">
            //                 <h3 className="mb-3">Carousel cards title </h3>
            //             </div>
            //             <div className="col-6 text-right">
            //                 <a className="btn btn-primary mb-3 mr-1" href="#carouselExampleIndicators2"
            //                    role="button"
            //                    data-slide="prev">
            //                     <i className="fa fa-arrow-left"></i>
            //                 </a>
            //                 <a className="btn btn-primary mb-3 " href="#carouselExampleIndicators2" role="button"
            //                    data-slide="next">
            //                     <i className="fa fa-arrow-right"></i>
            //                 </a>
            //             </div>
            //             <div className="col-12">
            //                 <div id="carouselExampleIndicators2" className="carousel slide" data-ride="carousel">
            //
            //                     <div className="carousel-inner">
            //                         <div className="carousel-item active">
            //                             <div className="row">
            //
            //                                 <div className="col-md-4 mb-3">
            //                                     <div className="card">
            //                                         {/*<img className="img-fluid" alt="100%x280"*/}
            //                                         //
            //                                         src="https://images.unsplash.com/photo-1532781914607-2031eca2f00d?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=7c625ea379640da3ef2e24f20df7ce8d">
            //                                         <div className="card-body">
            //                                             <h4 className="card-title">Special title treatment</h4>
            //                                             <p className="card-text">With supporting text below as a
            //                                                 natural lead-in to additional content.</p>
            //
            //                                         </div>
            //
            //                                     </div>
            //                                 </div>
            //                                 <div className="col-md-4 mb-3">
            //                                     <div className="card">
            //                                         {/*<img className="img-fluid" alt="100%x280"*/}
            //                                         //
            //                                         src="https://images.unsplash.com/photo-1517760444937-f6397edcbbcd?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=42b2d9ae6feb9c4ff98b9133addfb698">
            //                                         <div className="card-body">
            //                                             <h4 className="card-title">Special title treatment</h4>
            //                                             <p className="card-text">With supporting text below as a
            //                                                 natural lead-in to additional content.</p>
            //
            //                                         </div>
            //                                     </div>
            //                                 </div>
            //                                 <div className="col-md-4 mb-3">
            //                                     <div className="card">
            //                                         {/*<img className="img-fluid" alt="100%x280"*/}
            //                                         {/*     src="https://images.unsplash.com/photo-1532712938310-34cb3982ef74?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=3d2e8a2039c06dd26db977fe6ac6186a">*/}
            //                                         <div className="card-body">
            //                                             <h4 className="card-title">Special title treatment</h4>
            //                                             <p className="card-text">With supporting text below as a
            //                                                 natural lead-in to additional content.</p>
            //
            //                                         </div>
            //                                     </div>
            //                                 </div>
            //
            //                             </div>
            //                         </div>
            //                         <div className="carousel-item">
            //                             <div className="row">
            //
            //                                 <div className="col-md-4 mb-3">
            //                                     <div className="card">
            //                                         {/*<img className="img-fluid" alt="100%x280"*/}
            //                                         {/*     src="https://images.unsplash.com/photo-1532771098148-525cefe10c23?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=3f317c1f7a16116dec454fbc267dd8e4">*/}
            //                                         <div className="card-body">
            //                                             <h4 className="card-title">Special title treatment</h4>
            //                                             <p className="card-text">With supporting text below as a
            //                                                 natural lead-in to additional content.</p>
            //
            //                                         </div>
            //
            //                                     </div>
            //                                 </div>
            //                                 <div className="col-md-4 mb-3">
            //                                     <div className="card">
            //                                         {/*<img className="img-fluid" alt="100%x280"*/}
            //                                         {/*     src="https://images.unsplash.com/photo-1532715088550-62f09305f765?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=ebadb044b374504ef8e81bdec4d0e840">*/}
            //                                         <div className="card-body">
            //                                             <h4 className="card-title">Special title treatment</h4>
            //                                             <p className="card-text">With supporting text below as a
            //                                                 natural lead-in to additional content.</p>
            //
            //                                         </div>
            //                                     </div>
            //                                 </div>
            //                                 <div className="col-md-4 mb-3">
            //                                     <div className="card">
            //                                         {/*<img className="img-fluid" alt="100%x280"*/}
            //                                         //
            //                                         src="https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=0754ab085804ae8a3b562548e6b4aa2e">
            //                                         <div className="card-body">
            //                                             <h4 className="card-title">Special title treatment</h4>
            //                                             <p className="card-text">With supporting text below as a
            //                                                 natural lead-in to additional content.</p>
            //
            //                                         </div>
            //                                     </div>
            //                                 </div>
            //
            //                             </div>
            //                         </div>
            //                         <div className="carousel-item">
            //                             <div className="row">
            //
            //                                 <div className="col-md-4 mb-3">
            //                                     <div className="card">
            //                                         {/*<img className="img-fluid" alt="100%x280"*/}
            //                                         //
            //                                         src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=ee8417f0ea2a50d53a12665820b54e23">
            //                                         <div className="card-body">
            //                                             <h4 className="card-title">Special title treatment</h4>
            //                                             <p className="card-text">With supporting text below as a
            //                                                 natural lead-in to additional content.</p>
            //
            //                                         </div>
            //
            //                                     </div>
            //                                 </div>
            //                                 <div className="col-md-4 mb-3">
            //                                     <div className="card">
            //                                         {/*<img className="img-fluid" alt="100%x280"*/}
            //                                         //
            //                                         src="https://images.unsplash.com/photo-1532777946373-b6783242f211?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=8ac55cf3a68785643998730839663129">
            //                                         <div className="card-body">
            //                                             <h4 className="card-title">Special title treatment</h4>
            //                                             <p className="card-text">With supporting text below as a
            //                                                 natural lead-in to additional content.</p>
            //
            //                                         </div>
            //                                     </div>
            //                                 </div>
            //                                 <div className="col-md-4 mb-3">
            //                                     <div className="card">
            //                                         {/*<img className="img-fluid" alt="100%x280"*/}
            //                                         //
            //                                         src="https://images.unsplash.com/photo-1532763303805-529d595877c5?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=5ee4fd5d19b40f93eadb21871757eda6">
            //                                         <div className="card-body">
            //                                             <h4 className="card-title">Special title treatment</h4>
            //                                             <p className="card-text">With supporting text below as a
            //                                                 natural lead-in to additional content.</p>
            //                                         </div>
            //                                     </div>
            //                                 </div>
            //                             </div>
            //                         </div>
            //                     </div>
            //                 </div>
            //             </div>
            //         </div>
            //     </div>
            // </section>
            <div>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="holder.js/800x400?text=First slide&bg=373940"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        {/*<img*/}
                        {/*    className="d-block w-100"*/}
                        {/*    src="holder.js/800x400?text=Second slide&bg=282c34"*/}
                        {/*    alt="Second slide"*/}
                        {/*/>*/}

                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="holder.js/800x400?text=Third slide&bg=20232a"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        )
            ;
    }
}

export default PopularProducts;