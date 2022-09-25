import { usePlane } from "@react-three/cannon"
import { ground } from "../images/textures"

export const Ground = () => {

    const [ref] = usePlane<any>(() => ({
        rotation: [-Math.PI / 2, 0, 0], 
        position: [0, 0, 0]
    }))

    ground.repeat.set(100, 100);

    return(
            <mesh ref={ref} >
                <planeGeometry attach='geometry' args={[100, 100]} />
                <meshStandardMaterial attach='material' map={ground} />
            </mesh>
       
    )
}