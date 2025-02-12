const Card = ({children, className, onClick}) => {
  return <div onClick={onClick} className={`border rounded-md border-solid cursor-pointer ${className}`}>{children}</div>
}

Card.img = ({children}) => {
  return <div>{children}</div>
}

Card.title = ({children}) => {
  return <div>{children}</div>
}

export default Card;