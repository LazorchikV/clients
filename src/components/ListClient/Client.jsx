import React from 'react';


const Client = ({date, firstName, lastName}) => {
        return (
            <div>
              {firstName}{lastName}{date}                         
            </div>              
        )
    }
export default Client;