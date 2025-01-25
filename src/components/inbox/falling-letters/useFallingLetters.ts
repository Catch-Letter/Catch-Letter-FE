import Matter from 'matter-js'
import { RefObject, useEffect } from 'react'

export interface FallingLettersHookArgs {
  ref: RefObject<HTMLDivElement | null>
  letters: string[]
}

const useFallingLetters = ({ ref, letters }: FallingLettersHookArgs) => {
  useEffect(() => {
    if (!ref.current) return

    const { Engine, Render, Runner, Bodies, World } = Matter

    const width = 375
    const height = 768

    const engine = Engine.create()

    const render = Render.create({
      element: ref.current,
      engine,
      options: {
        width,
        height,
        wireframes: false,
        background: '',
      },
    })

    // 경계
    const boundaries = [
      Bodies.rectangle(width / 2, height + 18, width, 2, { isStatic: true }), // bottom
      Bodies.rectangle(-18, height / 2, 2, height, { isStatic: true }), // left
      Bodies.rectangle(width + 18, height / 2, 2, height, { isStatic: true }), // right
    ]

    // Create letter bodies with random initial positions and angles
    const letterBodies = letters.map((letter) =>
      Bodies.rectangle(
        Math.random() * (width - 105 - 20) + 20,
        Math.random() * 100 + 10,
        105,
        160,
        {
          angle: (Math.random() * Math.PI) / 4 - Math.PI / 8, // Random angle (-π/8 to π/8)
          render: {
            sprite: {
              texture: letter,
              xScale: 1,
              yScale: 1,
            },
          },
          chamfer: {
            radius: [5, 5, 5, 5],
          },
          friction: 0.4,
        }
      )
    )

    World.add(engine.world, [...boundaries, ...letterBodies])
    Render.run(render)
    const runner = Runner.create()
    Runner.run(runner, engine)

    return () => {
      Render.stop(render)
      Runner.stop(runner)
      Engine.clear(engine)
      render.canvas.remove()
      render.textures = {}
    }
  }, [])
}
export default useFallingLetters
