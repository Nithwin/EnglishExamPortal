
const Card = ({children, className}) => {
  return (
    <div className={`${className || ''} p-[1.5rem] shadow-box  bg-secondary rounded-4xl `}>
      {
        children
      }
    </div>
  )
}

export default Card
