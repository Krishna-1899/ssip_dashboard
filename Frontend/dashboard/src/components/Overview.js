import React from 'react';
// import bg from "../assest/bg.png";
function Overview(){
    return(
        <div className='bg-schemes'>
            <div className='flex-wrap h-full w-full flex justify-center mx-auto'>
                <div className='flex p-2 '>
                    <div className='tile1 p-2 box h-50 w-100 border-2 border-l-[#fff] bg-sky-500  hover:bg-sky-700'>
                        <h4 className='text-xl'>614</h4>
                        <h4 className='text-xl'>Villages</h4>
                    </div>
                </div>
                <div className='flex p-2 '>
                    
                    <div  className='tile2 p-2 box-border h-50 w-100 border-2  bg-sky-500 hover:bg-sky-700'>
                        <h4 className='text-xl'>10</h4>
                        <h4 className='text-xl'>Taluka</h4>
                    </div >
                </div>
                <div className='flex p-2'>

                    <div className='tile3 p-2 box-border h-50 w-100 border-2 bg-sky-500 hover:bg-sky-700'> 
                        <h4 className='text-xl'>20 lakh</h4>
                        <h4 className='text-xl'>Population</h4>
                    </div >
                </div>
                <div className='flex p-2'>
                    <div className='tile4 p-2 box-border h-50 w-100 border-2 bg-sky-500 hover:bg-sky-700'>
                        <h4 className='text-xl'>4484.10 sq</h4>
                        <h4 className='text-xl'>Area</h4>
                    </div>
                </div>
                <div className='flex p-2'>
                    <div className='tile6 p-2 box-border h-50 w-100 border-2 bg-sky-500 hover:bg-sky-700'>
                        <h4 className='text-xl'>925</h4>
                        <h4 className='text-xl'>Sex Ratio</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Overview;