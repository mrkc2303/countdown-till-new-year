import React from 'react';

const TimeBox = ({ mode, time }) => {
    return(
        <div className='flex flex-col'>
            <div className='text-6xl text-white my-4 mx-10 font-bold'>
                { time }
            </div>
            <div className='text-1xl text-white capitalize'>
                { mode }
            </div>
        </div>
    );
}

export default TimeBox;