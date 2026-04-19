import React, { useState } from 'react';

const PlayerCard = ({ player, availableBalance, setAvailableBalance, purchasedPlayers, setPurchasedPlayers }) => {
    const[isSelected, setIsSelected] = useState(false);
    const handleSelectPlayer = (playerData) => {
        const playerPrice =  parseInt(playerData.currentPrice.split("$").join("").split(",").join(""))
        if(availableBalance < playerPrice){
            alert("You don't have enough balance to select this player.");
            return;
        }
        setIsSelected(true);
        setAvailableBalance(availableBalance - playerPrice);
        setPurchasedPlayers([...purchasedPlayers, playerData]);
    }

    return (
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
                        <button disabled={isSelected} onClick={()=>{handleSelectPlayer(player);}
                            
                        
                        } className='btn btn-primary mt-4'>{isSelected===true?"Selected":"Add to list" }</button>
                    </div>

                </div>
            </div>

    );
};

export default PlayerCard;