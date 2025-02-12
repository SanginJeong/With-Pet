import React from 'react'

const Table = ({children}) => {
  return (
    <table className='table-fixed w-full border-collapse border border-gray-300 shadow-lg rounded-lg'>{children}</table>
  )
}

Table.th = ({children, width}) => {
  return <th className={`${width || ""} p-3 border border-black-300 text-center bg-gray-300`}>{children}</th>
}

Table.td = ({children, colSpan, width}) => {
  return <td className={`${width || ""} p-3 border border-gray-300 text-center`} colSpan={colSpan}>{children}</td>
}

export default Table