import React from "react";

const backgroundStyle = {
    width: '100%',
    height: '20vh',
    backgroundImage: 'url(/background.png)',
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundColor: '#006C4F',
  };
function Headers(){
    return(
        <div style={backgroundStyle}/>
    )
}

export default Headers;