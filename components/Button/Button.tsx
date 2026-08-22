import style from "styled-components"

type ButtonProps = {
	$backgroundColor?: string
	$textColor?: string
	$width?: string
	$margin?: string
}

export const Button = style.button<ButtonProps>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.$backgroundColor}; 
  color: ${props => props.$textColor};
  width: ${props => props.$width};
  margin: ${props => props.$margin};
  border: none;
  border-radius: 16px;
  padding: 20px 27px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`

// This code defines a styled-components Button component with a default background color of #0077FF and a default text color of #FFFFFF. The component can be used like this: