import { FaArrowLeft, FaArrowRight, FaEraser } from 'react-icons/fa'
import { FaTrashCan } from 'react-icons/fa6'
import { ToolWrapper, IconWrapper } from './CanvasTools.styles'

interface CanvasToolsProps {
  onUndo: () => void
  onRedo: () => void
  onEraser: () => void
  onClear: () => void
  isEraser: boolean
  undoDisabled: boolean
  redoDisabled: boolean
}

const CanvasTools = ({
  onUndo,
  onRedo,
  onEraser,
  onClear,
  isEraser,
  undoDisabled,
  redoDisabled,
}: CanvasToolsProps) => {
  return (
    <div css={ToolWrapper}>
      <div css={IconWrapper}>
        <button className='icon' onClick={onUndo} aria-label='Undo' disabled={undoDisabled}>
          <FaArrowLeft size={20} />
        </button>
        <button className='icon' onClick={onRedo} aria-label='Redo' disabled={redoDisabled}>
          <FaArrowRight size={20} />
        </button>
      </div>
      <div css={IconWrapper}>
        <button
          className={`icon ${isEraser ? 'active' : ''}`}
          onClick={onEraser}
          aria-label='Eraser'
        >
          <FaEraser size={20} />
        </button>
        <button className='icon' onClick={onClear} aria-label='Clear Canvas'>
          <FaTrashCan size={18} />
        </button>
      </div>
    </div>
  )
}

export default CanvasTools
