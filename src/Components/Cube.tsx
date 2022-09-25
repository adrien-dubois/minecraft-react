import { useBox } from "@react-three/cannon";
import { ThreeEvent } from "@react-three/fiber";
import { useStore } from "../Hooks/useStore";
import * as textures from '../images/textures';
import { ICubes } from '../Interfaces';
import { useKeyboard } from '../Hooks/useKeyboard';
import { useState } from "react";


export const Cube = ({position, texture} : ICubes) => {

    const [isHovered, setIsHovered] = useState<boolean>(false);
    const [ref] = useBox<any>(() => ({
            type: 'Static',
            position
    }));

    const [addCube, removeCube] = useStore((state: any) => [state.addCube, state.removeCube]);

    const { remove } = useKeyboard();


    const activeTexture = textures[texture];

    return (
        <mesh
            onPointerMove={
                (e: ThreeEvent<MouseEvent>) => {
                    e.stopPropagation();
                    setIsHovered(true)
                }
            }
            onPointerOut={
                (e: ThreeEvent<MouseEvent>) => {
                    e.stopPropagation();
                    setIsHovered(false)
                }
            }
            onClick={
                (e: ThreeEvent<MouseEvent>) => {
                    e.stopPropagation();
                    const clickedFace = Math.floor(e.faceIndex! / 2);

                    const { x, y, z} = ref.current.position;

                    if(remove){
                        removeCube( x, y, z );
                        return;
                    }

                    else if(clickedFace === 0){
                        addCube(x + 1, y, z);
                        return;
                    }
                    else if(clickedFace === 1){
                        addCube(x - 1, y, z);
                        return;
                    }
                    else if(clickedFace === 2){
                        addCube(x, y + 1, z);
                        return;
                    }
                    else if(clickedFace === 3){
                        addCube(x, y - 1, z);
                        return;
                    }
                    else if(clickedFace === 4){
                        addCube(x, y, z + 1);
                        return;
                    }
                    else if(clickedFace === 5){
                        addCube(x, y, z - 1);
                        return;
                    }
                }
            } 
            ref={ref}
        >
                <boxGeometry attach="geometry" />
                <meshStandardMaterial 
                    map={activeTexture} 
                    attach="material" 
                    color={ isHovered ? 'grey' : 'white' }
                    transparent={true}
                    opacity={ texture === 'glass' ? 0.8 : 1 }
                />
        </mesh>
    )
}

