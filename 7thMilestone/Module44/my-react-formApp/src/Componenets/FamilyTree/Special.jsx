import React, { useContext } from 'react';
import { AssetContext } from './FamilyTree';

const Special = ({name, asset}) => {

    const newAsset = useContext(AssetContext);

    console.log('nwe asset', newAsset)

    return (
        <div>
            <h3>Special: {name}</h3>
            <p>Assets: {asset} </p>
            <p>New asset: {newAsset} </p>
        </div>
    );
};

export default Special;