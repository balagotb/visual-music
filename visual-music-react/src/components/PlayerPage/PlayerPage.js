import React, { useState } from 'react' ;
import P5Wrapper from 'react-p5-wrapper';
import sketch from './Sketch';
import ButtonsBar from './ButtonsBar';
import './PlayerPage.css';

export default function PlayerPage({ setRoute }) {
  const [isSongStop, setIsSongStop] = useState(true);
  const [isSongPause, setIsSongPause] = useState(false);
  const [isFullSize, setIsFullSize] = useState(false);
	return ( <div className="App">
           <div className="container">
        	 <div id="functionalities">
              <h1>Visual Music</h1>
        			<div className="row" id="row1">
                <img src={require("../../images/audio.png")} alt="music visualizer" height={200} width={600} />
              </div>
              <div className="row" id="row2">
                  <button onClick={()=>setRoute('landingPage')} id="upload">Back to home</button>
             </div>
               <button onClick={()=>setIsFullSize(!isFullSize)}> full-size </button>
            </div>
             <div className="p5center">
            <P5Wrapper sketch={sketch} isFullSize={isFullSize} isSongStop={isSongStop} isSongPause={isSongPause}/></div>
          </div>
          <ButtonsBar setIsSongStop={setIsSongStop} setIsSongPause={setIsSongPause} isFullSize={isFullSize} />
          </div>
		)
}