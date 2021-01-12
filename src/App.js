import React, { useEffect } from 'react'
import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom"

import { connect } from "react-redux"
import { filteredItems } from "./actions/itemActions"
import PropTypes from 'prop-types'


// Data
import listingsData from './js/data/listingsData'

// Components
import Header from './js/layout/Header'
import Footer from './js/layout/Footer'
import Home from './js/pages/Home'
import Item from './js/pages/Item'
import NoMatch404 from './js/pages/NoMatch404'
import StartAtTop from "./js/components/StartAtTop"
import MapPage from './js/pages/MapPage'

const App = ({
  item: { price, rooms, sort, filteredData, search, postsShowing, current,
    settings: { villa, apartment, radhus, fritidshus } },
  item: { settings }, filteredItems
}) => {

  const filterTheData = () => {

    let newData = listingsData.map(item => item)

    if (villa || apartment || radhus || fritidshus) {
      newData = newData.filter(item => {
        if (item.homeType === 'villa' && villa) return item

        if (item.homeType === 'apartment' && apartment) return item

        if (item.homeType === 'radhus' && radhus) return item

        if (item.homeType === 'fritidshus' && fritidshus) return item

        return null
      });
    }

    if (sort === 'lowest') {
      newData = newData.sort((a, b) => a.price - b.price);
    }
    if (sort === 'highest') {
      newData = newData.sort((a, b) => b.price - a.price);
    }

    if (rooms !== 'all') {
      newData = newData.filter(item => {
        let roomsNumber = parseInt(rooms);
        return item.rooms >= roomsNumber ? item : null;
      });
    }

    if (price !== 'none') {
      newData = newData.filter(item => {
        let highestPrice = parseInt(price);
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

    filteredItems(newData)
  }

  useEffect(filterTheData, [settings, sort, search, rooms, price])

  // Change page
  // const changePage = (pageNumber, totalPages) => {
  //   if (pageNumber > 0 && pageNumber < totalPages) {
  //     setCurrentPage(pageNumber);
  //   }
  // };

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
                  <Home />
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
                  <MapPage
                    {...props}
                  />
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

App.propTypes = {
  item: PropTypes.object.isRequired,
  filteredItems: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  item: state.item
})

export default connect(mapStateToProps, { filteredItems })(App)
