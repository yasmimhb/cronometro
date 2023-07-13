import React, {Component} from 'react';
import './Assets/estilo.css';
import  cronometro from './Assets/cronometro.png';


class App extends Component{
  constructor(props){
    super(props);
    this.timer = null;
    this.state = {
      numero: 0,
      botao: 'STARTAR'
    };
    this.ligar = this.ligar.bind(this);
    this.limpar = this.limpar.bind(this);
  }

  ligar(){
    let state = this.state;

    if(this.timer !==null){

      clearInterval(this.timer);
      this.timer = null;
      state.botao = 'STARTAR';

    }else {

      this.timer = setInterval(()=>{
        let state = this.state;
        state.numero += 0.4;
        this.setState(state);
      }, 100);
      state.botao = 'PAUSAR';
      
    }

    this.setState(state);
  }

  limpar(){
    if(this.timer !== null){
      clearInterval(this.timer);
      this.timer = null;
    }

    let state = this.state;
    state.numero = 0;
    state.botao = 'STARTAR';
    this.setState(state);
    }

    render(){
      return(
        <div className='container'>

          <img  src={cronometro} className="img"/>
          <a className='timer'>{this.state.numero.toFixed(1)}</a>
          <div className='areaBtn'>
            <a className='botao' onClick={this.ligar}>{this.state.botao}</a>
            <a className='botao' onClick={this.limpar}>LIMPAR</a>
          </div>
        </div>
      );
    }
}

export default App;
