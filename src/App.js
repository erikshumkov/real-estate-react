import React, { useState, useEffect } from 'react';
import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";

// Data
import listingsData from './js/data/listingsData';

// Components
import Header from './js/layout/Header';
import Footer from './js/layout/Footer';
import Home from './js/pages/Home';
import Item from './js/pages/Item';
import NoMatch404 from './js/pages/NoMatch404';
import StartAtTop from "./js/components/StartAtTop";
import MapPage from './js/pages/MapPage';

function App() {
  const [filteredData, setFilteredData] = useState([]);
  const [setting, setSetting] = useState({
    villa: false,
    apartment: false,
    radhus: false,
    fritidshus: false
  });
  const [select, setSelect] = useState('newest');
  const [selectRooms, setSelectRooms] = useState('all');
  const [selectPrice, setSelectPrice] = useState('none');
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(9);

  // In what order the results should be shown. Newest, Lowest price, etc.
  const handleSelect = event => {
    setSelect(`${event}`);
  };

  // Listens for how many rooms select filter
  const handleRooms = event => {
    setSelectRooms(`${event}`);
  };

  // Listens for highest price select filter
  const handlePrice = event => {
    setSelectPrice(`${event}`);
  };

  // Listens for the buttons on the filter component
  const handleCheckboxToggle = event => {
    const name = event.target.name;
    const value = event.target.checked;

    setSetting({
      ...setting,
      [name]: value
    });
  };

  // Search input
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

    if (selectRooms !== 'all') {
      newData = newData.filter(item => {
        let roomsNumber = parseInt(selectRooms);
        return item.rooms >= roomsNumber ? item : null;
      });
    }

    if (selectPrice !== 'none') {
      newData = newData.filter(item => {
        let highestPrice = parseInt(selectPrice);
        return item.price <= highestPrice ? item : null;
      });
    }

    if (search !== '' && newData !== undefined) {
      if (search.length > 3) {
        newData = newData.filter(item => {
          let city = item.city.toLowerCase();
          let searchText = search.toLowerCase();
          let matchStrings = city.match(searchText);

          if (matchStrings !== null) {
            return true;
          }
          return null;
        });
      }
    }

    setFilteredData(newData);
  };

  useEffect(filterTheData, [setting, select, search, selectRooms, selectPrice]);

  // Get current posts
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = filteredData.slice(firstPostIndex, lastPostIndex);

  // Change page
  const changePage = (pageNumber, totalPages) => {
    if (pageNumber > 0 && pageNumber < totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <Router>
      <StartAtTop>
        <div className='App'>
          <Header />

          <Switch>

            <Route
              exact
              path='/'
              render={() => (
                <div>
                  <Home handleCheckboxToggle={handleCheckboxToggle}
                    filter={setting}
                    searchString={searchString}
                    setSearch={setSearch}
                    search={search}
                    handleRooms={handleRooms}
                    handlePrice={handlePrice}
                    filteredData={filteredData}
                    handleSelect={handleSelect}
                    posts={currentPosts}
                    postsPerPage={postsPerPage}
                    changePage={changePage}
                    currentPage={currentPage} />
                </div>
              )}
            />

            <Route
              exact
              path='/item/:city/:address'
              render={(props) => (
                <div>
                  <Item {...props} listingsData={listingsData} />
                </div>
              )}
            />

            <Route
              exact
              path="/karta/bostad"
              render={(props) => (
                <div>
                  <MapPage {...props} filteredData={filteredData} />
                </div>
              )}
            />

            <Route path="*">
              <NoMatch404 />
            </Route>
          </Switch>

          <Footer />
        </div>
      </StartAtTop>
    </Router>
  );
}

export default App;
