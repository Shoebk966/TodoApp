import logo from './logo.svg';
import './App.css';
import Input from './Components/Input';
import Alert from './Components/Alert';
import { useGlobalContext } from './Components/Context'
import List from './Components/List';


function App() {
  const {alert , list, Clearall , showAlert , Removeitem , Edititem} = useGlobalContext()
    
  return (
    <div className='wrapper area'>

<ul className="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
    <div className="card-container">
  <h3 className='heading'>Grocery Bud</h3>
  { alert.show && <Alert {...alert}  Removealert={showAlert} listitem={list}/>}
  <Input />
{ list.length >  0 && (
  <>   <List items={list} Deleteite={Removeitem}  Edititem={Edititem}/>
<button className='clr-btn' type='button' onClick={Clearall}>Clear All</button>
  </>)
  }
    </div>
    </div>
  );
}

export default App;
