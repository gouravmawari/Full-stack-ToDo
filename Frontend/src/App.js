import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Todoarea from './components/todoarea';
// import Inputarea from './components/inputarea';
import { useEffect,useState} from 'react';
import { alltodo,addtext,updatetext ,deletetext} from './connections/routecoc';
function App() {
  const [alldata,setalldata] = useState([])
  const [todoid,settodoid] = useState("")
  const [text,settext] = useState("")
    const [isupdating,setisupdating] = useState(false)
    const updatemode = (_id,text) =>{
      setisupdating(true);
      settext(text);
      settodoid(_id)
    }
  useEffect(()=>{
    alltodo(setalldata)
  },[])
  return (
    <>
    <nav><Navbar title = "ToDo"/></nav>
    <div className='inputarea'>
        <input type='text' placeholder='Add your Text' value={text} onChange={(e)=>{settext(e.target.value)}}/>
        <button className='buttonadd' onClick={isupdating ? () =>updatetext(text,setalldata,settext,todoid,setisupdating) : ()=>addtext(text,settext,setalldata)}>{isupdating ? "update" : "Add"}</button>
    </div>
    <div id='todoArea'>
      {alldata.map((item)=><Todoarea key={item._id} Text={item.Text}
      updatemode={() => updatemode(item._id , item.Text)}
      deletetext={() => deletetext(item._id , setalldata)}
      />)}
    </div>
    </>
  );
}

export default App;
