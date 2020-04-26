import React, {Fragment} from 'react';

const Weather = ({city,
    country,
    celsius,
    temp_min, 
    temp_max,
    icon,
    description
    }) => {
    return (
        <Fragment>
                <div className="container">
                    <div className="cards">
                        <h1> {city} </h1>
                        <h5 className="py-4">
                            <i className= {`wi ${icon} display-1`} ></i>
                        </h5>
                        {celsius ? (
                                <h1 className="py-2">{celsius}&deg;C</h1>
                                ) : null
                        }
                        <div className="py-3">
                            {
                                minmaxTemperature(temp_min, temp_max)
                            }
                        </div>
                        <h4 className="py-3">{description}</h4>
                    </div>npm
                </div>
        </Fragment>
    );
}

 const minmaxTemperature = (min,max) => {
     if(min && max) {
         return(
                    <h3> 
                        <h4> Min and Max Temperature </h4>
                         <span className="px-4">{min}&deg;C</span>
                         <span className="px-4">{max}&deg;C</span>  
                    </h3>  
                 );
     }
}

export default Weather ;