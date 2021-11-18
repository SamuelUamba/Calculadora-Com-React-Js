
import './App.css';
import React, { useState } from 'react'

function App() {
  const [valorTela, setValorTela] = useState('')
  const [resultado, setResultado] = useState(0)
  const [acumulador, setAcumulador] = useState(0)
  const [operado, setOperado] = useState(false)

  //COMPONENTES DA CALCULADORA
  const tela = (valor, res) => {
    return (
      <div style={cssTela}>
        <span style={cssTelaOperacao}>{valor}</span>
        <span style={cssTelaResultado}>{res}</span>
      </div>
    )
  }
  const Btn = (label, onClick) => {
    return <button style={cssBtn} onClick={onClick}>{label}</button>
  }

  //FUNCOES DA CALCULADORA
  const addDigitoTela = (digito) => {
    if((digito=='+'|| digito=='-'|| digito=='/'|| digito=='*') && operado){
      console.log("+-*/")

      setOperado(false)
      setValorTela(resultado+digito)
      return
    }
    if(operado){
      setValorTela(digito)
      setOperado(false)
      return
    }
    const valorDigitadoTela=valorTela+digito
    setValorTela(valorDigitadoTela)
  }
  const limparMemoria=()=>{
    setOperado(false)
    setValorTela('')
    setResultado(0)
    setAcumulador(0)
    return
  }
 const Operacao=(oper)=>{
    if(oper=='bs'){
      let vtela=valorTela
      vtela=vtela.substring(0,(vtela.length-1))
      setValorTela(vtela)
      setOperado(false)
      return
    }
    try{
      //o eval leva o que esta na tela, avalia e calcula. UMA FERRAMETA DO JS
      const r=eval(valorTela) 
      setAcumulador(r)
      setResultado(r)
      setOperado(true)
    }catch{
      setResultado('ERRO')
    }
 }
  //ESTILOS

  const cssConteiner={
    display:'flex',
    justifyContent:'flex-start',
    alignItems:'center',
    flexDirection:'column',
    width:300,
    border:'1px solid #000',
    paddingLeft: 120 ,
    paddingRight: 120,
  }
const cssBotoes={
  flexDirection:'row',
  flexWrap:'wrap',
}
  const cssTela = {
    display: 'flex',
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent:'center',
    alignItems: 'flex-start',
    backgroundColor: '#444',
    flexDirection: 'column',
    width: 260,
    height: 100
  }
  const cssTelaOperacao={
    fontSize: 25,
    color: '#fff',
    height: 20
  }
  const cssTelaResultado={
    fontSize: 40,
    color: '#fff',
    height: 20
  }

  const cssBtn = {
    fontSize: 30,
    width: 75,
    height: 75,
    padding: 20,
    backgroundColor: '#000',
    color: '#fff',
    borderColor: '#000',
    textAlign: 'center',
    outline: 'none'
  }

  return (
    
    <>
  
    {<h1>Calculadora </h1>}
    
      <div style={cssConteiner}>
      <h3>
          Calculadora Básica
          {tela(valorTela,resultado)}
        </h3>
        <div style={cssBotoes}>
          {Btn('AC',limparMemoria)}
          {Btn('(',()=>addDigitoTela('('))}
          {Btn(')',()=>addDigitoTela(')'))} 

          {Btn('/',()=>addDigitoTela('/'))}

          {Btn('7',()=>addDigitoTela('7'))}
          {Btn('8',()=>addDigitoTela('8'))}
          {Btn('9',()=>addDigitoTela('9'))}

          {Btn('*',()=>addDigitoTela('*'))}

          {Btn('4',()=>addDigitoTela('4'))}
          {Btn('5',()=>addDigitoTela('5'))}
          {Btn('6',()=>addDigitoTela('6'))}

          {Btn('-',()=>addDigitoTela('-'))}

          {Btn('1',()=>addDigitoTela('1'))}
          {Btn('2',()=>addDigitoTela('2'))}
          {Btn('3',()=>addDigitoTela('3'))}

          {Btn('+',()=>addDigitoTela('+'))}
          {Btn('0',()=>addDigitoTela('0'))}
          {Btn('.',()=>addDigitoTela('.'))}
          {Btn('<-',()=>Operacao('bs'))}
          {Btn('=',()=>Operacao('='))}
        </div>
      </div>
    

    </>

  );
}

export default App;
