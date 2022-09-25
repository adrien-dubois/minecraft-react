import { nanoid } from 'nanoid';
import create from 'zustand';

const getLocalStorage = (key: string) => JSON.parse(window.localStorage.getItem(key) || "false");

const setLocalStorage = (key: string, value: any) => window.localStorage.setItem(key, JSON.stringify(value));

export const useStore =  create((set) =>  ({
    texture: 'dirt',

    cubes : getLocalStorage('cubes') || [],

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

    saveWorld: () => {
        set((prev: any) => {

            setLocalStorage('cubes', prev.cubes)

        })
    },

    resetWorld: () => {
        set(() => ({
            cubes: []
        }))
    },
}))  
