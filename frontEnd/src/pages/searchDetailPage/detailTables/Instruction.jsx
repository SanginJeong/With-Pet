import React from 'react'
import Table from '../../../common/table/Table'
import { useGetDetailIntroQuery } from '../../../hooks/tour/useGetDetailIntroQuery'
import { contentType } from '../../homePage/contentType'
const Instruction = ({contentTypeId, contentId}) => {
  const {data} = useGetDetailIntroQuery({contentTypeId, contentId});
  const type = contentType.filter((content)=>content.id === contentTypeId);
  console.log(data);
  
  return (
    // 관광타입을 받는이유가 타입별로 안내할게 다름
    <>
      <p className='font-bold text-blue-400 py-1'>{type[0].type}</p>
      <Table>
        {type[0].infoList.map((info)=>(
          <tr>
            <Table.th width={"w-1/4"}>{info.th}</Table.th>
            <Table.td width={"w-3/4"}>{data?.[info.td] || "없음"}</Table.td>
          </tr>
        ))}
      </Table>
    </>
  )
}

export default Instruction