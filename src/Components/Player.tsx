import { useSphere } from "@react-three/cannon";
import { useFrame, useThree } from "@react-three/fiber"
import { useEffect, useRef } from "react";
import { Vector3 } from "three";
import { useKeyboard } from '../Hooks/useKeyboard';

export const Player = () => {

    const actions = useKeyboard();

    // 01 - We take the camera
    const { camera } = useThree();
    const [ref, api] = useSphere<any>(() => ({
        mass: 1,
        type: 'Dynamic',
        position: [0, 1, 0]
    }));

    // 03 position reference
    // And this ref tracks the sphere
    const pos = useRef([0, 0, 0]);
    useEffect(() => {
        api.position.subscribe((p) => pos.current = p)
    }, [api.position])

    // 04 - same thing as position for the velocity
    const vel = useRef([0, 0, 0]);
    useEffect(() => {
        api.velocity.subscribe((v) => vel.current = v)
    }, [api.velocity])


    // 02 - We glued the camera on the position refference on the 03
    useFrame(() => {
         camera.position.copy(new Vector3(pos.current[0], pos.current[1], pos.current[2]));

        //  api.velocity.set(0, 1, 0)
    });

    return (
        <mesh ref={ref}></mesh>
    )
}