const Card = ({children, className}) => {
  return <div className={`border rounded-md border-solid cursor-pointer ${className}`}>{children}</div>
}

Card.img = ({children}) => {
  return <div>{children}</div>
}

Card.title = ({children}) => {
  return <div>{children}</div>
}

export default Card;