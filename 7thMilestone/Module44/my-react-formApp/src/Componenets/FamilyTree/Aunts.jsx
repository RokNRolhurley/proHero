import React, { use } from 'react';
import Cousins from './Cousins';
import { MoneyContext } from './FamilyTree';




const Aunts = ({asset}) => {

    const [money, setMoney] = use(MoneyContext);

    const handleMoney = () =>{
        setMoney(money + 1000)
    }

    return (
        <div>
            <h3>Aunts</h3>
            <section className='flex'>
                <Cousins asset={asset} name='Aunt Male'></Cousins>
                <Cousins name='Aunt Female'></Cousins>
                <button onClick={handleMoney}> Add $1000</button>
            </section>
            
        </div>
    );
};

export default Aunts;