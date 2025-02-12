import React from 'react'
import { contentType } from '../contentType'
import Card from '../../../common/card/Card'
import { useNavigate } from 'react-router'
import { useSearchStore } from '../../../store/uesSearchStore'
const CategorySearchCard = () => {
  const {setSelectedContentType, setIsSearching} = useSearchStore();
  const navigate = useNavigate();
  const goSearchPage = () => {
    navigate('search');
  }

  const selectAndGoSearch = (content) => {
    setSelectedContentType({id:content.id, name: content.type});
    setIsSearching(true);
    navigate('search');
  }

  return (
    <div className='grid grid-cols-4 gap-4 border-2 p-4 rounded-md'>
      {contentType.map((content)=>(
        <Card 
          onClick={()=>selectAndGoSearch(content)}
          className={"hover:font-bold bg-blue-400 flex flex-col items-center justify-between p-2 text-white hover:bg-blue-600 transition"}>
          <Card.img>
            <img src={content.img}/>
          </Card.img>
          <Card.title>{content.type}</Card.title>
        </Card>
      ))}
      <Card 
        onClick={goSearchPage}
        className={"hover:font-bold bg-blue-400 flex flex-col items-center justify-center p-2 text-white hover:bg-blue-600 transition"}>
        <Card.title>상세검색<br/>바로가기</Card.title>
      </Card>
    </div>
  )
}

export default CategorySearchCard