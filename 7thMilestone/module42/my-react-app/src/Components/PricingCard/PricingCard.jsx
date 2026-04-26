import React from 'react';
import PricingFeature from './PricingFeature';

const PricingCard = ({pricing}) => {
    // console.log(pricing);
    const {name, monthlyPrice, billingCycle, features} = pricing;
    return (
        <div className='flex flex-col border bg-amber-600 rounded-2xl p-4'>
            
               { /*Card header */}
                <div>
                    <h3>{name}</h3>
                    <p>{monthlyPrice} / {billingCycle}</p>
                </div>
                { /*Card body*/ }
                <div className='border bg-amber-400 p-4 rounded-2xl mt-10 flex-1'>
                    {/* <p>{features}</p> */}
                    {
                        features.map((feature, index) => <PricingFeature key={index} feature={feature}></PricingFeature>)
                    }
                </div>
                <button className='btn w-full mt-2 rounded-full'>Subscribe</button>

        </div>
    );
};

export default PricingCard;