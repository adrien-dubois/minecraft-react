import { useCallback, useEffect, useState } from "react"

interface Moves {
    moveForward: boolean;
    moveBackward :boolean;
    moveLeft :boolean;
    moveRight :boolean;
    jump: boolean;
    texture1: boolean;
    texture2: boolean;
    texture3: boolean;
    texture4: boolean;
    texture5: boolean;
}

const InitialState : Moves = {
    moveForward: false,
    moveBackward :false,
    moveLeft :false,
    moveRight :false,
    jump: false,
    texture1: false,
    texture2: false,
    texture3: false,
    texture4: false,
    texture5: false
}

function actionByKey(key: keyof object) {
    const keyActionMap = {
        keyZ: "moveForward",
        keyS: "moveBackward",
        keyQ: "moveLeft",
        keyD: "moveRight",
        Space: "jump",
        Digit1: "dirt",
        Digit2: "grass",
        Digit3: "glass",
        Digit4: "wood",
        Digit5: "log",
    }

    return keyActionMap[key]
}

export const useKeyboard = () => {

    const [actions, setActions] = useState<Moves>(InitialState);

    const handleKeyDown = useCallback((e: KeyboardEvent) => {

    }, []);

    const handleKeyUp = useCallback((e: KeyboardEvent) => {

    }, []);

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        document.addEventListener('keyup', handleKeyUp);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.removeEventListener('keyup', handleKeyUp);
        }
    }, []);
    
  return (
    <div>useKeyboard</div>
  )
}
