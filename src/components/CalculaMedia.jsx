import React, { useState } from 'react'
import './CalculaMedia.css';

function CalculaMedia() {
    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');
    const [imc, setImc] = useState('');
    const [mostrarResultado, setMostrarResultado] = useState(false);

    function calcularIMC() {
        if (peso === '' || altura === '') {
            alert('Por favor, preencha todos os campos.');
            return;
        } else {
            setImc((parseFloat(peso) / (parseFloat(altura) ** 2)).toFixed(2));
            setMostrarResultado(true);
        }
    }

    function resultadoIMC(imc) {
        if (imc < 18.5) {
            return 'Você está abaixo do peso normal.';
        } else if (imc >= 18.5 && imc < 24.9) {
            return 'Parabéns! Seu peso é normal.';
        } else if (imc >= 25 && imc < 29.9) {
            return 'Você está com excesso de peso.';
        } else if (imc >= 30 && imc < 34.9) {
            return 'Você tem obesidade grau I.';
        } else if (imc >= 35 && imc < 39.9) {
            return 'Você tem obesidade grau II.';
        } else if (imc > 40) {
            return 'Você tem obesidade grau III';
        } else {
            return 'Erro no cálculo.';
        }

    }

    return (
        <div className='calculadora'>
            <h1>CALCULADORA DE IMC</h1>
            <div className='input-group' >
                <label >
                    Digite seu peso (em KG):
                    <input type="number" autoFocus onChange={(e) => setPeso(e.target.value)} />
                </label>
                <label>
                    Digite sua altura (em METROS):
                    <input type="number" onChange={(e) => setAltura(e.target.value)} />
                </label>
                <button className='buttonCalculate' onClick={calcularIMC} >Calcular</button>
                <h2>Seu IMC é: <span className='imcResult' >{imc}</span></h2>
                <h3>{mostrarResultado && resultadoIMC(imc) }</h3>
            </div>

        </div>
    )

}

export default CalculaMedia