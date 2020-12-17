import './App.css';
import Meme from './Meme';
import MemeForm from './MemeForm';
import { useSelector, useDispatch } from "react-redux";


const App = () => {
  const memes = useSelector(store => store.memes);
  const dispatch = useDispatch();
  const addToMemes = (meme) => dispatch({type: "ADD", payload: meme})
  const removeFromMemes = (id) => dispatch({type: "REMOVE", payload: id})

  return (
    <div className="App">
        <h1>Create your meme!</h1>
        <MemeForm add={addToMemes}/>
        {memes.map(m => (
          <Meme
            key={m.id}
            id={m.id}
            imageUrl={m.imageUrl}
            topText={m.topText}
            bottomText={m.bottomText}
            remove={removeFromMemes}
          />
        ))}
        
    </div>
  );
}

export default App;
