import React, { createContext, useState } from 'react';
import Grandpa from './Grandpa';
import Uncles from './Uncles';
import Dad from './Dad';
import Aunts from './Aunts';
import './FamilyTres.css'

export const AssetContext = createContext('');
export const MoneyContext = createContext('');

const FamilyTree = () => {
    const [money, setMoney] = useState(0);

    const asset = 'Diamond';
    const newAsset = 'Gold'

    return (
        <div className='family-tree'>
            <h2>Family Tree</h2>
            <h4>Total Family money: {money}</h4>

            <MoneyContext value={[money, setMoney]}>
                <AssetContext.Provider value={newAsset}>
                <Grandpa asset={asset}></Grandpa>
            </AssetContext.Provider>
            </MoneyContext>
            

        </div>
    );
};

export default FamilyTree;

