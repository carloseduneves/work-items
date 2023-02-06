

import {useState} from "react";
import {style} from "./Data.css";
import List from "./List";
const tools = {

   eletrics: [ 
        {id: 1, name: 'parafusadeiras', description: '', checked: false},
        {id: 2, name: 'plaina elétrica', description: '', checked: false},
        {id: 3, name: 'furadeira normal', description: '', checked: false},
        {id: 4, name: 'serra tico-tico', description: '', checked: false},
        {id: 5, name: 'furadeira de parede', description: '', checked: false},
        {id: 6, name: 'tupia', description: '', checked: false},
        {id: 7, name: 'aspirador de pó', description: '', checked: false},],
    manuals: [
        {id: 8, name: 'plaina manual', description: '', checked: false},
        {id: 9, name: 'martelo', description: '', checked: false},
        {id: 10, name: 'lima', description: '', checked: false},
        {id: 11, name: 'formões', description: '', checked: false},
        {id: 12, name: 'alicate', description: ''},
        {id: 13, name: 'estilete', description: '', checked: false},
        {id: 14, name: 'tacos de lixa', description: '', checked: false},
        {id: 15, name: 'lápis', description: '', checked: false},
        {id: 16, name: 'metro', description: '', checked: false},
        {id: 17, name: 'prumo', description: '', checked: false},
        {id: 18, name: 'serrote', description: '', checked: false},
        {id: 19, name: 'arco de serra', description: '', checked: false},
        {id: 20, name: 'chaves phillips e fenda', description: '', checked: false},
        {id: 21, name: 'chave de teste', description: '', checked: false},
        {id: 22, name: 'espátula de ferro', description: '', checked: false},
        {id: 23, name: 'espátula de cola', description: '', checked: false},
        {id: 24, name: 'alicate de bico', description: '', checked: false},
        {id: 25, name: 'martelo de borracha', description: '', checked: false},
        {id: 26, name: 'esquadro', description: '', checked: false},
    ],
    usefulMaterials: [
        {id: 8, name: 'cola instantânea', description: '', checked: false},
        {id: 9, name: 'caixa de parafusos', description: '', checked: false},
        {id: 10, name: 'caixa de brocas', description: '', checked: false},
        {id: 11, name: 'cola fórmica', description: '', checked: false},
        {id: 12, name: 'cola branca', description: ''},
        {id: 13, name: 'pacote de estopa', description: '', checked: false},
        {id: 14, name: 'extensões', description: '', checked: false},
        {id: 15, name: 'litro de tinner', description: '', checked: false},
        {id: 16, name: 'massa corrida', description: '', checked: false},
        {id: 17, name: 'panos de limpeza', description: '', checked: false},
        {id: 18, name: 'buchas de parede de 6 e 8mm', description: '', checked: false},
        {id: 19, name: 'cantoneiras', description: '', checked: false},
        {id: 20, name: 'tintas e pincéis', description: '', checked: false},
        {id: 21, name: 'massa plástica e catalisador', description: '', checked: false},
        {id: 22, name: 'fita crepe', description: '', checked: false},
        {id: 23, name: 'fita isolante', description: '', checked: false},
        {id: 24, name: 'vassoura', description: '', checked: false},
        {id: 25, name: 'pistões', description: '', checked: false},
        {id: 26, name: 'dobradiças retas e curvas', description: '', checked: false},
        {id: 27, name: 'calço de dobradiça', description: '', checked: false},
        {id: 28, name: 'fios de energia', description: '', checked: false},
        {id: 29, name: 'serra copo', description: '', checked: false},
        {id: 30, name: 'pinos de prateleira', description: '', checked: false},
        {id: 31, name: 'suporte de cabideiro', description: '', checked: false},
        {id: 32, name: 'fitas pvc', description: '', checked: false},
    ],

};
export default function Data() {
   
  const [status, setStatus] = useState('');

  const statusChange = (item) => {

    console.log(item);
    console.log(tools.eletrics)
  }
  return (
    <div>
        <h1>Ferramentas elétricas</h1>
        {tools.eletrics.map((Data) => 
                <h2 key={Data.id} className={status} onClick={() => setStatus('checked')}>{Data.name} <input type="button" value='ok' />
                <input type="button" value="excluir" onClick={() => statusChange(Data.checked)} />
                </h2>
        )}
        <h1>Ferramentas manuais</h1>
        {tools.manuals.map((Data) => 
                <h2 key={Data.id}>{Data.name} 
                <input type="button" value='ok' />
                 <input type="button" value="excluir" />
                </h2>
        )}
        <h1>Materiais úteis</h1>
        {tools.usefulMaterials.map((Data) => 
                <h2 key={Data.id}>{Data.name} 
                <input type="button" value='ok' />
                 <input type="button" value="excluir" />
                </h2>
        )}
        <h1>testando</h1>
        {/*tools.usefulMaterials.map((Data) => 
            (<List key={Data.id} nome={Data.name}/>
        ))*/}
        {tools.map((Data) => (
          <List nome={Data.name} />
        ))}
    </div>
  )
}
