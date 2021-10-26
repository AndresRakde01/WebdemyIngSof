import React, { Component } from 'react'

class PruebaCurso extends Component{
    render() {
        return(
            <div>
                <h1>Nombre</h1>
                <p> {this.state.nombre} </p>
                <h1>Descripcion</h1>
                <p> {this.state.descripcion} </p>
                <h1>Estudiantes</h1>
                <p> {this.state.cantidadEst} </p>
                <h1>Duracion</h1>
                <p> {this.state.duracion} </p>
            </div>
        )
    }

    constructor(props){
        super(props);
        course = props.course; //Numero curso
        this.state = {
          nombre: '',
          descripcion: '',
          cantidadEst: '',
          duracion: ''
        }
    }
}

export default PruebaCurso;