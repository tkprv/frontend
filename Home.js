import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import '../index.css';
import ReactDOM from 'react-dom';
import React, { useState, useEffect } from 'react';
import { Carousel } from 'primereact/carousel';
import { ProductService } from '../service/ProductService';
import './Home.css';
import { Button } from 'primereact/button';
import Logo from '../assets/logo2.png'

const CarouselDemo = () => {
    const [products, setProducts] = useState([]);
    const responsiveOptions = [
        {
            breakpoint: '10px',
            numVisible: 2,
            numScroll: 2
        },
    ];

    const productService = new ProductService();

    useEffect(() => {
        productService.getProductsSmall().then(data => setProducts(data.slice(0,9)));
    }, []); 

    const productTemplate = (product) => {
        return (
            <div className="product-item">
                <div className="product-item-content">
                    <div className="mb-2">
                        <img src={`images/product/${product.image}`} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={product.name} className="product-image" />
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="carousel-demo">
            <div className="flex justify-content-between align-items-center mt-2 mb-2 ml-2 mr-2">
            <img src={Logo} alt={"Logo"} width="700px"/>
            <Button label="เข้าสู่ระบบ" className="p-button-success">
                <script src="login.js"></script>
            </Button>
            </div>
            <div className="card">
                <Carousel value={products} numVisible={1} numScroll={2} responsiveOptions={responsiveOptions} className="custom-carousel" circular
                    autoplayInterval={3000} itemTemplate={productTemplate} /> 
            </div>     
        </div>
    );
}
               
const rootElement = document.getElementById("root");
ReactDOM.render(<CarouselDemo />, rootElement);
export default CarouselDemo;