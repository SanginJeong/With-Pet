import { create } from "zustand";

export const useSearchStore = create((set)=>(
  {
    searchTerm : "",
    selectedContentType : "전체",
    selectedRegion : "전국",
    cat1 : {code: "", name: ""},
    cat2 : {code: "", name: ""},
    cat3 : {code: "", name: ""},
    setSearchTerm : (newTerm) => set(()=>({searchTerm : newTerm})),
    setSearchType : (type) => set(()=>({searchType: type})),
    setSelectedContentType : (select) => set(()=>({selectedContentType : select})),
    setSelectedRegion : (select) => set(()=>({selectedRegion : select})),
    setCat1 : (select) => set(()=>({cat1 : select})),
    setCat2 : (select) => set(()=>({cat2 : select})),
    setCat3 : (select) => set(()=>({cat3 : select})),
  }
))