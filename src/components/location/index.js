import React from 'react';


const Location = () => {
    return (
        <div className='location_wrapper'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d396371.6812947753!2d-94.85590486736366!3d39.09158371993969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87c0f75eafe99997%3A0x558525e66aaa51a2!2sKansas+City%2C+MO%2C+USA!5e0!3m2!1sen!2sin!4v1546512738286"
         width="100%" height="500px" frameBorder="0"  allowFullScreen></iframe>
         <div className='location_tag'>
             <div>Location</div>
         </div>
    </div>
    )
    
}


export default Location;
