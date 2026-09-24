import React, { use } from 'react';
import { Link } from 'react-router';

const App = ({singleApp}) => {

    
    // const datas= use(data)
    //  console.log(singleApp);

    const {id, title, companyName, image, description, rating, review } = singleApp;

    return (
        <div>
            
            <Link to={`/appDetails/${id}`}>
                <div className="card bg-base-100 w-96 shadow-sm">
                    <figure>
                        <img src={"https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"}
                             alt="Shoes" />
                    </figure>
                <div className="card-body ml-2 mt-3 mb-2 p-auto">
                     <h2 className="card-title">{title}</h2> 
                     <h2 className="card-rating">{rating}</h2>  
                     <p>{description}</p>
                     <div className="card-actions justify-end">
                     
                    </div>
                </div>
            </div>
            </Link>

        </div>
    );
};

export default App;