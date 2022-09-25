import { useSphere } from "@react-three/cannon";
import { useFrame, useThree } from "@react-three/fiber"
import { useEffect, useRef, useState } from "react";
import { Vector3 } from "three";
import { useKeyboard } from '../Hooks/useKeyboard';

const JUMP_FORCE = 4


export const Player = () => {

    const { moveBackward, moveForward, moveLeft, moveRight, jump, run } = useKeyboard();

    /*----- Manage speed if run with Shiftkey -----*/
    const [ SPEED, SETSPEED ] = useState<number>(4);

    useEffect(() => {
        run ? SETSPEED(8) : SETSPEED(4)
    }, [run])

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

         const direction = new Vector3();

         const frontVector = new Vector3(
            0,
            0,
            (moveBackward ? 1 : 0) - (moveForward ? 1 : 0)

         );

         const sideVector = new Vector3(
            (moveLeft ? 1 : 0) - (moveRight ? 1 : 0),
            0,
            0
         );



         direction
            .subVectors(frontVector, sideVector)
            .normalize()
            .multiplyScalar(SPEED)
            .applyEuler(camera.rotation);

        api.velocity.set(direction.x, vel.current[1], direction.z)

            if(jump && Math.abs(vel.current[1] ) < 0.05){
                 api.velocity.set(vel.current[0], JUMP_FORCE, vel.current[2])
            
            }

    });

    return (
        <mesh ref={ref}></mesh>
    )
}