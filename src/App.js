import React, { useState, useEffect } from 'react';
import Cardsdisplay from './components/characters/cardsdisplay';
import Pagination from './components/Pagination';
import Navbar from './components/navbar';

const url = 'https://restcountries.com/v3/region/asia'

const App = () => {
  const [items, setItems] = useState([]);
  const [isloading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsperpage] = useState(10);

useEffect(() => {
  const fetchitems = async () => {
    const res = await fetch(url)
    const items = await res.json()
    setIsLoading(false)
    setItems(items)
  }
  fetchitems();

},[]) 

const lastIndex = currentPage * itemsperpage;
const firstIndex = lastIndex - itemsperpage;
const currentItems = items.slice(firstIndex, lastIndex);

const paginate = pagenumber => setCurrentPage(pagenumber);


return (
  <div>
    <Navbar />
    <Pagination itemsperpage={itemsperpage} totalitems={items.length} paginate={paginate} />
    <Cardsdisplay items={currentItems} isLoading={isloading} />
  </div>
)

  

}
export default App;