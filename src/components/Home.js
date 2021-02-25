import React from 'react';
import './Home.css';
import Banner from './Banner';
import Card from './Card';

import home1 from '../images/home1.webp';
import home2 from '../images/home2.webp';
import home3 from '../images/home3.webp';
import house1 from '../images/house1.jpg';
import house2 from '../images/house2.jpg';
import house3 from '../images/house3.jpg';

function Home() {
    return (
        <div className="home">

            <Banner />

            <div className="home__section">

                <Card 
                    src={home1} 
                    title="Expériences en ligne" 
                    description="Des activités uniques à faire ensemble, organisées par des hôtes du monde entier." 
                    price=""
                />
                
                <Card 
                    src={home2} 
                    title="Des logements uniques" 
                    description="Bien plus que de simples logements pour passer la nuit." 
                    price=""
                />
                
                <Card 
                    src={home3} 
                    title="Logements entiers" 
                    description="Des logements entiers confortables, avec de la place pour accueillir les amis ou la famille." 
                    price=""
                />
            </div>

            <div className="home__section">

                <Card 
                    src={house1} 
                    title="Appartement de 3 chambres à Bournemouth" 
                    description="Superhost avec une vue imprenable sur la plage à Sunny Bournemouth"
                    price="£130/nuit" 
                />

                <Card 
                    src={house2} 
                    title="Penthouse à Londres" 
                    description="Profitez des sites incroyables de Londres avec ce superbe penthouse"
                    price="£350/nuit" 
                />

                <Card 
                    src={house3} 
                    title="Appartement 1 chambre" 
                    description="Superhost avec de superbes équipements et un fabuleux complexe commercial à proximité"
                    price="£70/nuit" 
                />
            </div>

        </div>
    )
}

export default Home;
