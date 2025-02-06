import React from 'react';
import SearchTable from './searchTable/SearchTable';
import { useModalStore } from '../../store/useModalStore';
import ContentTypeModal from './searchModal/ContentTypeModal';
import ServiceDivideModal from './searchModal/ServiceDivideModal';
import RegionModal from './searchModal/RegionModal';
const SearchPage = () => {
  const {modals} = useModalStore();
  
  return (
    <>
      <SearchTable/>
      {modals.contentType && <ContentTypeModal/>}
      {modals.service && <ServiceDivideModal/>}
      {modals.region && <RegionModal/>}
    </>
  );
};

export default SearchPage;
