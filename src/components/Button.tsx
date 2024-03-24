import { cva } from "class-variance-authority"

const buttonStyles = cva(["hover:bg-secondary-hover", "transition-colors"],{
    variants: {
        size: {
            default: [],
            icon: []
        }
    }}
)
function Button() {
  return (
    <>

    </>
  )
}

export default Button