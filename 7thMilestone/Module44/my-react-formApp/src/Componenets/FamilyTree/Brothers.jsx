import React, { use } from 'react';
import { MoneyContext } from './FamilyTree';

const Brothers = () => {

    const [money, setMoney] = use(MoneyContext);

    return (
        <div>
            <h3>Brother</h3>
            <button onClick={() => setMoney(money + 1000)}> Add $1000</button>
        </div>
    );
};

export default Brothers;