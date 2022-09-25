import { useEffect, useState } from "react"
import { useStore } from "../Hooks/useStore";
import { useKeyboard } from '../Hooks/useKeyboard';
import { dirtImg, grassImg, glassImg, woodImg, logImg } from '../images/images';

const images = {
  dirt: dirtImg,
  grass: grassImg,
  glass: glassImg,
  wood: woodImg,
  log: logImg
}

export const TextureSelector = () => {

    const [visible, setVisible] = useState<boolean>(false);
    const [activeTexture, setTexture] = useStore((state: any) => [state.texture, state.setTexture]);
    const { dirt, grass, glass, wood, log } = useKeyboard();

  
    useEffect(() => {

      const textures = { dirt, grass, glass, wood, log };

      const pressedTexture = Object.entries(textures).find(([k, v]) => v)

      if(pressedTexture) setTexture(pressedTexture[0]);

    }, [dirt, grass, glass, wood, log, setTexture])

    useEffect(() => {

      const visibilityTimeout = setTimeout(() => {
        setVisible(false)
      }, 2000);

        setVisible(true)

        return () => {
          clearTimeout(visibilityTimeout);
        }

    }, [activeTexture]);

    return  (
      <>
        { visible &&
        <div className="absolute centered texture-selector">
          {
            Object.entries(images).map(([k, src]) =>  {
                return <img 
                          src={src} 
                          key={k}
                          alt={k}
                          className={`${k === activeTexture ? 'active' : '' }`}
                        />
            })
          }
        </div>
        }
      </>
    )
}

