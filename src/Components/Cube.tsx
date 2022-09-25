import { useBox } from "@react-three/cannon";
import * as textures from '../images/textures';
import { ICubes } from '../Interfaces';


export const Cube = ({position, texture} : ICubes) => {

    const [ref] = useBox<any>(() => ({
            type: 'Static',
            position
    }))


    const activeTexture = textures[texture];

    console.log('activeTexture', activeTexture);

    return (
        <mesh ref={ref}>
                <boxGeometry attach="geometry" />
                <meshStandardMaterial map={activeTexture} attach="material" />
        </mesh>
    )
}

