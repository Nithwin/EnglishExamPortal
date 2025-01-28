
const Button = ({children, className}) => {
  return (
    <button className={`text-primary bg-secondary py-2 px-[2rem] text-2xl font-semibold ${className || ''}`}>
      {
        children
      }
    </button>
  )
}

export default Button
