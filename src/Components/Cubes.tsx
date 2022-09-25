import { useStore } from '../Hooks/useStore';
import { Cube } from "./Cube"

export const Cubes = () => {
  const [ cubes ] = useStore((state: any) => [
        state.cubes
  ])
  console.log(cubes)

  return cubes.map(({key , pos , texture }: any) => {
    return (
        <Cube key={key} position={pos} texture={texture} />
    )
  })
}