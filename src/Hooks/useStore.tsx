import { nanoid } from 'nanoid';
import create from 'zustand';



export const useStore =  create((set) =>  ({
    texture: 'dirt',

    cubes : [],

    addCube: ( x: number, y: number, z: number) => {
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
    removeCube: (x: number, y: number, z: number) => {
        set((prev: any) => ({
            cubes: prev.cubes.filter((cube: any) => {
                const [X,Y,Z] = cube.pos;
                return X !== x || Z !== z || Y !== y
            })
        }))
    },
    setTexture: (texture: string) => {
        set(() => ({
            texture
        }))
    },
    saveWorld: () => {},
    resetWorld: () => {},
}))  
