import React from 'react'
import { useGetDetailPetTourQuery } from '../../../hooks/tour/useGetDetailPetTourQuery'
import Table from '../../../common/table/Table';

const PetInfo = ({contentId}) => {
  const {data: petInfo} = useGetDetailPetTourQuery(contentId);

  return (
    <Table>
      <tr>
        <Table.th width={"w-1/4"}>동반가능유무</Table.th>
        <Table.td width={"w-3/4"}>{petInfo?.acmpyTypeCd}</Table.td>
      </tr>
      <tr>
        <Table.th>동반가능동물</Table.th>
        <Table.td>{petInfo?.acmpyPsblCpam}</Table.td>
      </tr>
      <tr>
        <Table.th>동반시 필요사항</Table.th>
        <Table.td>{petInfo?.acmpyNeedMtr}</Table.td>
      </tr>
      <tr>
        <Table.th>기타 동반정보</Table.th>
        <Table.td>{petInfo?.etcAcmpyInfo}</Table.td>
      </tr>
    </Table>
  )
}

export default PetInfo