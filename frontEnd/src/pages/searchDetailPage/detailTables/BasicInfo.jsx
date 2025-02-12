import React from 'react'
import Table from '../../../common/table/Table'

const BasicInfo = ({data}) => {
  return (
    <Table>
      <tr>
        <Table.th width={"w-1/4"}>우편번호</Table.th>
        <Table.td width={"w-3/4"}>{data?.zipcode}</Table.td>
      </tr>

      <tr>
        <Table.th>주소</Table.th>
        <Table.td>{data?.addr1}</Table.td>
      </tr>
    </Table>
  )
}

export default BasicInfo