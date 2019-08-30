import React from 'react';

const Scroll = (props) =>
{
    return(
        <div style={{overflow:'scroll', border:'5px solid #40E0D0', height:'800px'}}>
            {props.children}
        </div>
    );
}

export default Scroll;