


import React,{  useEffect, useState} from 'react';
import { PieChart, Pie, Sector, Cell} from 'recharts';


import Example from './components/Grafico'

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';
import api from './services/api';


function App() {

    const [parts, setParts] = useState([]);
    const [dados, setDados] = useState([]);
    const [primeiroNome, setPrimeiroNome] = useState('');
    const [ultimoNome, setUltimoNome] = useState('');
    const [porcentagem, setPorcentagem] = useState('');

      useEffect(() => {
        async function loadPart(){
          const response = await api.get('/participantes');
        
          
          
          
          
          setParts(response.data);
         
          
          
         
         
        }
        loadPart();

      },[]);


     
     async function handleAddPart(e) {
       e.preventDefault();
       const response = await api.post('/participantes',{
         primeiroNome,
         ultimoNome,
         porcentagem
       })


       console.log(response.data);
       window.location.reload();
       setPrimeiroNome('');
       setUltimoNome('');
       setPorcentagem('');

     }
    
        
      const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

      const RADIAN = Math.PI / 180;
      const renderCustomizedLabel = ({
        cx, cy, midAngle, innerRadius, outerRadius, percent, index,
      }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
          <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}
          </text>
        );
      };

return(
 
     <div id="app">
      
        <aside> 
          <div id="inputs">
            <div className="container">
              <form onSubmit={handleAddPart}>
                <div className="row">
                    <input name="primeiroNome" type="text" placeholder="Primeiro nome:" value={primeiroNome} onChange={e => setPrimeiroNome(e.target.value)}></input>
                    <input name="segundoNome" type="text" placeholder="Último nome:"  value={ultimoNome} onChange={e => setUltimoNome(e.target.value)}></input>
                    <input name="porcentagem" type="number" placeholder="Porcentagem %:" value={porcentagem} onChange={e => setPorcentagem(e.target.value)}></input>

                    <button type="submit">Enviar</button> 
                </div>
                
              </form>
            </div>
            
           
           
          </div>
        

        </aside>

        <main>
            <div className="titulos">
                <h2>DATA</h2>
                <p>There are many variations of passages of Lorem Ipsum </p>
            </div>
           
           <div className="container">
             <div className="row">
               <table class="table small" border="1">
                 <thead className="thead-dark">
                  <tr>
                      <th scope="col">Primeiro Nome</th>
                      <th scope="col">Ultimo Nome</th>
                      <th scope="col">Porcentagem</th>
                  </tr>
                  </thead>
                {parts.map(part => (
                  <tr>
                      
                      <td>{part.primeiroNome}</td>
                      <td>{part.ultimoNome}</td>
                      <td>{part.porcentagem}%</td>
                  </tr>
                   
                ))}
               </table> 
               
            
              </div>
              
                  <Example></Example>
             
             
           </div>
          
            
        </main>
     </div>
  );
}

export default App;
