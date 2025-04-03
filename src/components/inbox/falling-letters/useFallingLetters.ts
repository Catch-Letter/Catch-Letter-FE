import * as Letters from '#/assets/letters'
import { ContainerSizeType } from '#/hooks/useResizeContainer'
import Matter from 'matter-js'
import { RefObject, useEffect, useRef } from 'react'

export interface FallingLettersHookArgs {
  ref: RefObject<HTMLDivElement | null>
  size: ContainerSizeType
}

const useFallingLetters = ({ ref, size }: FallingLettersHookArgs) => {
  const letters =
    size.width < 768
      ? Object.values(Letters)
          .sort(() => Math.random() - 0.5)
          .slice(0, 8)
      : Object.values(Letters).concat(Object.values(Letters))

  const engineRef = useRef<Matter.Engine | null>(null)
  const renderRef = useRef<Matter.Render | null>(null)

  useEffect(() => {
    if (!ref.current || !size) return

    const { Engine, Render, Runner, Bodies, World } = Matter

    const { width, height } = size

    if (!engineRef.current) {
      engineRef.current = Engine.create()
    }
    const engine = engineRef.current

    // 첫 실행 시 렌더링 초기화
    if (!renderRef.current) {
      renderRef.current = Render.create({
        element: ref.current,
        engine,
        options: {
          width,
          height,
          wireframes: false,
          background: '',
        },
      })
      Render.run(renderRef.current)
      Runner.run(Runner.create(), engine)
    } else {
      // 기존 렌더링 크기만 업데이트
      renderRef.current.options.width = width
      renderRef.current.options.height = height
      Render.lookAt(renderRef.current, {
        min: { x: 0, y: 0 },
        max: { x: width, y: height },
      })
    }

    // 기존 바디 정리 후 새로 추가
    World.clear(engine.world, false)
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

    return () => {
      if (renderRef.current) {
        Render.stop(renderRef.current)
        renderRef.current.canvas.remove()
        renderRef.current.textures = {}
        renderRef.current = null
      }
      if (engineRef.current) {
        Engine.clear(engineRef.current)
        engineRef.current = null
      }
    }
  }, [size.width, size.height])
}
export default useFallingLetters
