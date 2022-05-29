import React from 'react'

const Button = ({ bgColor, color, size, text, borderRadius}) => {
     return (
          <Button
           type="button"
           style={{backgroundColor: bgColor, color, borderRadius }}
           className={`text-${size} p-3 hover:drop-shadow-xl`}
                >
               {text}
          </Button>
     )
}

export default Button
