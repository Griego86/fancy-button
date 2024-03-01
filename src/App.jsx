import './App.css';
import { useState } from 'react';
import AngryButton from './components/AngryButton';
import CounterButton from './components/CounterButton';
import LightSwitchButton from './components/LightSwitchButton';
import TextRepeaterButton from './components/TextRepeaterButton';

function App() {

  const [angryApp, setAngryApp] = useState(0);
  const increaseAnger = (amount) => angryApp < 1 ? setAngryApp(angryApp + amount) : setAngryApp(0);

  const [light, setLight] = useState('off');
  const dark = light === 'off' ? 'dark' : '';
  const switchLight = () => {
    setLight(light === 'on' ? 'off' : 'on')
    increaseAnger(0.1)
  };

  return (
    <div className={`App ${dark}`} >
      <h1>{angryApp < 1 ? "Fancy Buttons!" : "YOU'RE CLICKING TOO MANY BUTTONS!"}</h1>
      <section>
        <AngryButton increaseAnger={increaseAnger} />
        <CounterButton increaseAnger={increaseAnger} />
        <LightSwitchButton increaseAnger={increaseAnger} light={light} setLight={setLight} switchLight={switchLight}/>
        <TextRepeaterButton increaseAnger={increaseAnger} />
      </section>
    </div>
  );
}

export default App;