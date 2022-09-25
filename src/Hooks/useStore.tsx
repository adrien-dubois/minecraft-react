import { nanoid } from 'nanoid';
import create from 'zustand';



export const useStore =  create((set) =>  ({
    texture: 'dirt',

    cubes : [],

    addCube: ( x: any, y: any, z: any) => {
        set((prev: any) => ({
            cubes: [
                ...prev.cubes,
                {
                    key: nanoid(),
                    pos: [x,y,z],
                    texture: prev.texture
                }
            ]
        }))
    },
    removeCube: () => {},
    setTexture: () => {},
    saveWorld: () => {},
    resetWorld: () => {},
}))  
