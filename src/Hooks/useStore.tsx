import { nanoid } from 'nanoid';
import create from 'zustand';
import { IPos } from '../Interfaces';



export const useStore =  create((set) =>  ({
    texture: 'dirt',

    cubes : [
        {
        key: nanoid(),
        pos: [2 ,0.5 ,0 ],
        texture: 'dirt'
    },
        {
        key: nanoid(),
        pos: [1 ,0.5 ,0 ],
        texture: 'wood'
    },
],

    addCube: ({x ,y ,z }: IPos) => {
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
