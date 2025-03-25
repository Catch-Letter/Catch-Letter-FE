import { colors } from '#/styles/color'
import { css, keyframes } from '@emotion/react'

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

export const ToastContainer = css`
  position: fixed;
  bottom: 200px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  gap: 10px;
  z-index: 9999;
`

export const ToastStyle = css`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 16px;
  border-radius: 6px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.16);
  background-color: ${colors.grey[12]};
  color: ${colors.white};
  font-size: 14px;
  animation: ${fadeIn} 0.4s ease-out;
  min-width: 180px;
`
