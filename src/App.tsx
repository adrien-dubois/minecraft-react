import { Physics } from '@react-three/cannon';
import { Sky } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { FPV } from './Components/FPV';
import { Ground } from './Components/Ground';
import { Player } from './Components/Player';

function App() {
  return (
    <>
      <Canvas>
        <Sky sunPosition={[100, 100, 20]}/>
        <ambientLight intensity={0.5}/>
        <FPV/>
        <Physics>
          <Player/>
          <Ground/>
        </Physics>
      </Canvas>
      <div className="absolute cursor centered">+</div>
    </>
  );
}

export default App;
