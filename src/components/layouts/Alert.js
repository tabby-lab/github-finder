import React from 'react'

const Alert = ({ alert }) => {
    return (
       alert !== null && (
           <div className={`alert alert-${alert.type}`}>
                 <i className='fas fa-info-circle' />{alert.msg}
           </div>
       )
    )
}

export default Alert;


//fuctional component is racf tab to create that
//&& means then and () maens show
//backticks for coloring