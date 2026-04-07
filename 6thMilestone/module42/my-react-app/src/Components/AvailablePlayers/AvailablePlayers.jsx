import React, { use } from 'react';



const AvailablePlayers = ({ playerPromise }) => {

    const playerData = use(playerPromise)
            console.log(playerData);

    return (
        <div className='max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 '>
       
        {
            playerData.map(player =>
                 <div className="card bg-base-100 shadow-sm p-4 ">
                <figure>
                    <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="Shoes" />
                </figure>
                <div className="mt-4">
                    <div>
                        <h2 className="flex">{player.name}</h2>
                    </div>
                    <div className="flex justify-between items-center mt-4 border-b-1 pb-2">
                        <span className='font-semibold'>{player.country}</span>
                        <span className='font-semibold'>{player.role}</span>
                    </div>
                    <div className="flex-col justify-between ">
                        <span className='font-semibold'>{player.battingType}</span>
                        <span className='font-semibold'>{player.bowlingType}</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className='font-semibold'>Price: {player.currentPrice}</span>
                        <button className='btn btn-primary mt-4'>Add to Team</button>
                    </div>

                </div>
            </div>)
        }

            <div className="card bg-base-100 w-96 shadow-sm p-4">
                <figure>
                    <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="Shoes" />
                </figure>
                <div className="mt-4">
                    <div>
                        <h2 className="flex">Name: {playerData.name}</h2>
                    </div>
                    <div className="flex justify-between items-center mt-4 border-b-1 pb-2">
                        <span className='font-semibold'>Country: {playerData.country}</span>
                        <span className='font-semibold'>Role: {playerData.role}</span>
                    </div>
                    <div className="justify-between pt-2">
                        <p className='font-semibold'>Batting Style: {playerData.battingType}</p>
                        <p className='font-semibold'>Bowling Style: {playerData.bowlingType}</p>
                    </div>
                    <div className="flex justify-between items-center">
                        <p className='font-semibold'>Price: {playerData.currentPrice}</p>
                        <button className='btn btn-primary mt-4'>Add to Team</button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AvailablePlayers;