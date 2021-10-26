import React, {Component} from 'react';
import { Link, Route } from 'react-router-dom';
import PruebaCurso  from './cursoPrueba';

const navStyle = {
    color: 'white'
}

class Inicio extends Component{
    constructor() {
        super();
        this.state = {
            idCurso: '',
            cursos: []
        }
        this.accessCourse = this.accessCourse.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    accessCourse(e) {
        console.log(this.state);
        e.preventDefault();
    }

    componentDidMount() {
        this.fetchCourse();
    }

    fetchCourse(){
        fetch('/api/cursos')
            .then(res => res.json())
            .then(data => {
                this.setState({cursos: data})
            });
    }

    handleChange(e) {
        const {name, value} = e.target;
        this.setState({
            [name]: value
        });
    }
    render() {
        return(
            <div>
                <nav className="light-blue darken-4">
                    <div className="container">
                        <a className="brand-logo" href="/"> Prueba MERN </a>
                    </div>
                    <ul>    
                        <Link to="/vista1" style={navStyle}>
                            <li> Vista1 </li>
                        </Link>
                        <Link to="/vista2" style={navStyle}>
                            <li> Vista2 </li>
                        </Link>
                        <Link to="/vawdasd" style={navStyle}>
                            <li> Prueba </li>
                        </Link>
                    </ul>
                </nav>
                <div className="container">
                    <form onSubmit= {this.accessCourse}>
                        <input type="text" name="idCurso" onChange={this.handleChange} placeholder="Id curso" className="form-control" >    
                        </input>
                        <button type="submit" className="btn light-blue darken-4"> Acceder </button>
                    </form>
                    <button type="button" className="btn light-blue darken-4">
                            <p>Ir curso</p>
                            <Route exact path='/infoCurso'>
                                <PruebaCurso course={this.state.idCurso}/>
                            </Route>
                    </button>
                </div>
                <div>
                    <ul>
                        { this.state.cursos.map((curso)=> {
                            return(
                                <div>
                                    <h1> {curso.id_curso} </h1>
                                    <h1> {curso.nombre} </h1>
                                    <h1> {curso.descripcion} </h1>
                                </div>
                            )
                        }) }
                    </ul>
                </div>
            </div>
        )
    }

}

export default Inicio