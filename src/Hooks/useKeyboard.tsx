import { useCallback, useEffect, useState } from "react"

interface IMoves {
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

const InitialState : IMoves = {
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

function actionByKey(key: string) {   
    
    const keyActionMap:  {[key: string] : string} = {
        KeyW: "moveForward" ,
        KeyS: "moveBackward"  ,
        KeyA: "moveLeft"  ,
        KeyD: "moveRight"  ,
        Space: "jump"  ,
        Digit1: "dirt"  ,
        Digit2: "grass"  ,
        Digit3: "glass"  ,
        Digit4: "wood"  ,
        Digit5: "log"  ,
    }
    return keyActionMap[key]
}

export const useKeyboard = () => {

    const [actions, setActions] = useState<IMoves>(InitialState);

    const handleKeyDown = useCallback((e: KeyboardEvent) => {
        
        const action = actionByKey(e.code) ;

        if(action){
            setActions((prev) => {
                return ({
                    ...prev,
                    [action]: true
                })
            })
        }
    }, []);

    const handleKeyUp = useCallback((e: KeyboardEvent) => {
        const action = actionByKey(e.code) ;

        if(action){
            setActions((prev) => {
                return ({
                    ...prev,
                    [action]: false
                })
            })
        }
    }, []);

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        document.addEventListener('keyup', handleKeyUp);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.removeEventListener('keyup', handleKeyUp);
        }
    }, [handleKeyDown, handleKeyUp]);

    return actions;
    
}
