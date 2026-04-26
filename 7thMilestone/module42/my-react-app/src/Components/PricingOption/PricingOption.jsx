import React, { use } from 'react';
import PricingCard from '../PricingCard/PricingCard';
import DaisyPricingCard from '../DaisyPricing/DaisyPricingCard';

const pricingData = [
  {
    "id": "plan-001",
    "name": "Basic Core",
    "monthlyPrice": 29.99,
    "billingCycle": "Monthly",
    "features": [
      "Access to cardio and strength equipment",
      "One home-location access",
      "Basic locker room access",
      "Mobile app workout tracking"
    ],
    "isPopular": false,
    "limitations": "No group classes, no guest passes"
  },
  {
    "id": "plan-002",
    "name": "Premium Active",
    "monthlyPrice": 54.99,
    "billingCycle": "Monthly",
    "features": [
      "All Basic features",
      "Unlimited group fitness classes (Yoga, HIIT, Spin)",
      "Access to all 50+ locations nationwide",
      "Sauna and steam room access",
      "2 guest passes per month"
    ],
    "isPopular": true,
    "limitations": "Excludes personal training sessions"
  },
  {
    "id": "plan-003",
    "name": "Elite Performance",
    "monthlyPrice": 129.99,
    "billingCycle": "Monthly",
    "features": [
      "All Premium features",
      "2 personal training sessions per month",
      "Monthly body composition analysis",
      "Unlimited guest passes",
      "Complimentary towel service",
      "15% discount on juice bar and supplements"
    ],
    "isPopular": false,
    "limitations": "Premium PT sessions require 24h booking"
  }
]

const PricingOption = ({pricingPromise}) => {

  const pricingData = use(pricingPromise);
  // console.log(pricingData);
    return (
        <div>
            <h2>Get Our Membership</h2>
            
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4'>
              {/*   {
                  pricingData.map(pricing=> <PricingCard 
                    key={pricing.id}
                    pricing={pricing}></PricingCard>)
              } */}
            { 
                pricingData.map(pricing=> <DaisyPricingCard 
                  key={pricing.id} 
                  pricing={pricing}>
                  </DaisyPricingCard>)
            }
            
            </div>
        </div>
    );
};

export default PricingOption;