import React from 'react'
import './form.css'

const errorMessage = () => {
    return (
      <div className="alert alert-danger mx-5" role="alert">
          Erreur de champs ! Informations invalides :(
      </div>
    );
  };

const Form = ({
    loadWeatherInfo,
     error
    }) => {
        return (
            <div className="container h-100">
              <form onSubmit={loadWeatherInfo}>
                <div>{error ? errorMessage() : ""}</div>
                <div className="row">
                  <div className="col-md-3 offset-md-2">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Ville"
                      name="city"
                      autoComplete="off"
                    />
                  </div>
                  <div className="col-md-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Pays"
                      name="country"
                      autoComplete="off"
                    />
                  </div>
                  <div className="col-md-3 mt-md-0 mt-2 text-md-left ">
                    <button className="btn btn-warning"> Info Meteo</button>
                  </div>
                </div>
              </form>
            </div>
          );
}



export default Form ;