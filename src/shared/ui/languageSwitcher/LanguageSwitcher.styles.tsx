// import { colors } from '#/styles/color'
import { css } from '@emotion/react'

export const buttonStyle = (isKorean: boolean) => css`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(60, 62, 65, 0.5);
  color: white;
  border: 1px solid #98999b;
  padding: 4px 8px;
  font-size: 14px;
  border-radius: 100px;
  cursor: pointer;
  transition: background-color 0.2s ease;

  span {
    padding: 0 5px;
    font-weight: bold;
    color: ${isKorean ? 'white' : '#d3d3d3'};
  }

  span + span {
    color: ${isKorean ? '#d3d3d3' : 'white'};
  }

  &:hover {
    background-color: gray;
  }
`
