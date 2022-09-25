import { NearestFilter, TextureLoader, RepeatWrapping } from 'three'

import {
	dirtImg,
	logImg,
	grassImg,
	glassImg,
	woodImg
} from './images'

const dirt = new TextureLoader().load(dirtImg)
const log = new TextureLoader().load(logImg)
const grass = new TextureLoader().load(grassImg)
const glass = new TextureLoader().load(glassImg)
const wood = new TextureLoader().load(woodImg)
const ground = new TextureLoader().load(grassImg)

dirt.magFilter = NearestFilter;
log.magFilter = NearestFilter;
grass.magFilter = NearestFilter;
glass.magFilter = NearestFilter;
wood.magFilter = NearestFilter;
ground.magFilter = NearestFilter;
ground.wrapS = RepeatWrapping
ground.wrapT = RepeatWrapping

export {
	dirt,
	log,
	grass,
	glass,
	wood,
	ground
}