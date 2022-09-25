import { usePlane } from "@react-three/cannon";
import { ThreeEvent } from "@react-three/fiber";
import { useStore } from "../Hooks/useStore";
import { ground } from "../images/textures";

export const Ground = () => {

    const [ref] = usePlane<any>(() => ({
        rotation: [-Math.PI / 2, 0, 0], 
        position: [0, -0.5, 0]
    }))

    const [addCube] = useStore((state: any) => [state.addCube])

    ground.repeat.set(100, 100);

    return(
            <mesh
                onClick={
                    (e: ThreeEvent<MouseEvent>) => {
                        e.stopPropagation();
                        const [x, y, z] : any  = Object.values(e.point).map(val => Math.ceil(val));
                        addCube( x, y, z)    
                    }
                } 
                ref={ref} 
            >
                <planeGeometry attach='geometry' args={[100, 100]} />
                <meshStandardMaterial attach='material' map={ground} />
            </mesh>
       
    )
}