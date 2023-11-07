import React, { useState, useEffect } from 'react';

function Alerts({ mode, alertMsg, sendNull }) {
  let closer = () => {
    return sendNull(null);
  };

  let alertElement = null;

  if (mode && alertMsg) {
    alertElement = (
      <div>
        <div className={`alert alert-${alertMsg.type} alert-dismissible fade show`}>
          <strong>{alertMsg.msg}</strong>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            onClick={closer}
          ></button>
        </div>
      </div>
    );

    useEffect(() => {
      const timer = setTimeout(() => {
        sendNull(null);
      }, 2000);
    
      return () => {
        clearTimeout(timer);
      };
    }, [sendNull, mode]);    
  }

  return <div className="position-absolute top-7 start-0 w-100">{alertElement}</div>;
}

export default Alerts;
