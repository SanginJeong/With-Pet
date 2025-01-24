import React, {useState} from 'react'

const Dropdown = ({children}) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleMouseOver = () => {
    setIsOpen(true)
  };
  const handleMouseLeave = () => setIsOpen(false);
  return (
    <div>
      {React.Children.map(children, (child)=>
        React.cloneElement(child, {isOpen, handleMouseLeave, handleMouseOver})
      )}
    </div>
  )
}

Dropdown.header = ({children, isOpen, handleMouseLeave, handleMouseOver}) => {
  return (
    <ul 
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
      className='relative'>
        {React.Children.map(children, (child)=>
          React.cloneElement(child, {isOpen})
        )}
    </ul>
  )
}

Dropdown.item = ({children, isOpen}) => {
  
  return (
    <ul 
      className={
        ` transition absolute left-[0.8rem] z-10 
          ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
      {children}
    </ul>
  )
}


export default Dropdown