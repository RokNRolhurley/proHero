import React from 'react';

const SelectedCard = ({ player, removePlayer  }) => {
    const handleRemove = () =>{
        removePlayer(player);
    }
    return (
        <div className='border-2 border-gray-300 flex justify-between items-center rounded-xl'>
                <div className='flex items-center'>
                    <img src={player.image} className='h-[50px] w-[50px] rounded-xl'/>
                    <div className='ml-2'>
                        <span className='text-lg font-bold'>{player.name}</span>
                        <p className='text-xs'>{player.role}</p>
                    </div>
                </div>
                <div onClick={handleRemove}>
                    <img src='../../assets/react.svg' className='h-[50px] w-[50px] rounded-xl'/>
                </div>
            </div>   
    );
};

export default SelectedCard;