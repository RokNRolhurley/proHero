import React, { Suspense } from 'react';
import Teams from './Teams';
import './WorldCup.css'

const teamDataPromise = async() =>{
    const res = await fetch('https://github.com/openfootball/worldcup.json/blob/master/2026/worldcup.teams.json');
    return res.json();
}



const WorldCup = () => {
    return (
        <div className='worldcup-tree'>
            <h3>FIFA World Cup</h3>
            <Suspense fallback='Loading...'>
                <Teams teamDataPromise={teamDataPromise}></Teams>

            </Suspense>
            <Teams ></Teams>
        </div>
    );
};

export default WorldCup;