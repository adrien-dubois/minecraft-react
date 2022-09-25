import { Triplet } from "@react-three/cannon";
import * as textures from './images/textures';

export interface IPos {
    x: number,
    y: number,
    z: number
}

export interface ICube {
    key?: string;
    pos?: Triplet;
    texture?: string;
}

interface texture {
    dirt : string,
	log : string,
	grass : string,
	glass : string,
	wood : string,
	ground : string,
}

export type ICubes = {
    position: Triplet;
    texture: keyof typeof textures
}