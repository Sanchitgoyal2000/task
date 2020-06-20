import React from 'react';

const withPower = (Wcomponent) => {       //   pure component will repaint the screen only once 
    const newComponent = () => {
        return(
            <div>
                  <Wcomponent></Wcomponent>
            </div>
        )
    }
    return newComponent;
}
export default withPower;