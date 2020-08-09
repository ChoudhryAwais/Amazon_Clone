import React from 'react';
import "./Home.css";
import Product from './Product';


function Home() {
    return (
        <div className="home">
            <img
                className="home__image"
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                alt=""
            />

            {/* Product id,title, price ,rating,image */}
            <div className="home__row">
                <Product
                    id = "12321341"
                    title = "The Speaker: Black Bluetooth Speaker ,Louder enough to exlpore the room 😅"
                    price = {11.96}
                    rating = {3}
                    image = "http://www.pngmart.com/files/7/Black-Bluetooth-Speaker-PNG-Photos.png"
                    
                />
                <Product
                    id = "12321342"
                    title = "The Amazon Watch: Creates a better personality"
                    price = {20.96}
                    rating = {5}
                    image = "http://www.pngmart.com/files/6/Watch-PNG-Background-Image.png"
                    
                />
            </div>
            <div className="home__row">
                <Product
                    id = "12321341"
                    title = "The Amazon Wallet: Perfect place for your money"
                    price = {9.2}
                    rating = {2}
                    image = "http://www.pngmart.com/files/8/Wallet-PNG-Image-HD.png"
                    
                />
                <Product
                    id = "12321341"
                    title = "iPhone: Explore the world by the eye of iphone"
                    price = {999.90}
                    rating = {5}
                    image = "http://www.pngmart.com/files/8/Apple-iPhone-PNG-HD-Quality.png"
                    
                />
                <Product
                    id = "12321341"
                    title = "The Amazon Headphone: Hear better live better"
                    price = {7.96}
                    rating = {4}
                    image = "http://www.pngmart.com/files/6/Headphone-Transparent-Images-PNG.png"
                    
                />
            </div>
            <div className="home__row">
                <Product
                    id = "12321341"
                    title = "The Amazon Screen: LCD Television Transparent PNG"
                    price = {11.96}
                    rating = {5}
                    image = "http://www.pngmart.com/files/6/LCD-Television-Transparent-PNG.png"
                    
                />
            </div>

            {/* Product */}
        </div>
    )
}

export default Home
