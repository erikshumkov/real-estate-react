import React, { useState, useEffect } from 'react';

// Data
import listingsData from './js/data/listingsData';

// Components
import Header from './js/layout/Header';
import FilterSection from './js/layout/FilterSection';
import SearchResult from './js/layout/SearchResult';
import Footer from './js/layout/Footer';

function App() {
  const [filteredData, setFilteredData] = useState([]);
  const [setting, setSetting] = useState({
    villa: false,
    apartment: false,
    radhus: false,
    fritidshus: false
  });
  const [select, setSelect] = useState('newest');
  const [search, setSearch] = useState('');

  const handleSelect = event => {
    setSelect(`${event}`);
  };

  const changeIt = event => {
    const name = event.target.name;
    const value = event.target.checked;

    setSetting({
      ...setting,
      [name]: value
    });
  };

  const searchString = string => {
    setSearch(string);
  };

  const filterTheData = () => {
    const { villa, apartment, radhus, fritidshus } = setting;

    let newData = listingsData.map(item => {
      return item;
    });

    if (villa || apartment || radhus || fritidshus) {
      newData = newData.filter(item => {
        if (item.homeType === 'villa' && villa) {
          return item;
        }
        if (item.homeType === 'apartment' && apartment) {
          return item;
        }
        if (item.homeType === 'radhus' && radhus) {
          return item;
        }
        if (item.homeType === 'fritidshus' && fritidshus) {
          return item;
        }
        return null;
      });
    }

    if (select === 'lowest') {
      newData = newData.sort((a, b) => a.price - b.price);
    }
    if (select === 'highest') {
      newData = newData.sort((a, b) => b.price - a.price);
    }

    if (search !== '' && newData !== undefined) {
      newData = newData.filter(item => {
        let city = item.city.toLowerCase();
        let searchText = search.toLowerCase();
        let n = city.match(searchText);

        if (n !== null) {
          return true;
        }
      });
    }

    setFilteredData(newData);
  };

  useEffect(() => {
    filterTheData();
  }, [setting, select, search]);

  return (
    <div className='App'>
      <Header />

      <FilterSection
        changeIt={changeIt}
        filter={setting}
        searchString={searchString}
        setSearch={setSearch}
        search={search}
      />

      <SearchResult filteredData={filteredData} handleSelect={handleSelect} />

      <Footer />
    </div>
  );
}

export default App;
