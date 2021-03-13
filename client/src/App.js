import React, { useEffect } from 'react'
import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom"

import { connect } from "react-redux"
import setAuthToken from "./utils/setAuthToken"
import { filteredItems, getHomeData, getCityData } from "./actions/itemActions"
import { loadUser } from "./actions/auth"
import PropTypes from 'prop-types'

// Components
import Header from './js/layout/Header'
import Footer from './js/layout/Footer'
import Home from './js/pages/Home'
import Item from './js/pages/Item'
import NoMatch404 from './js/pages/NoMatch404'
import StartAtTop from "./js/components/StartAtTop"
import MapPage from './js/pages/MapPage'
import Login from './js/components/auth/Login'
import Register from './js/components/auth/Register'
import SavedHomes from './js/pages/SavedHomes'

if (localStorage.token) {
  setAuthToken(localStorage.token)
}

const App = ({
  item: { price, loading, rooms, data, cityData, sort, filteredData, search, postsShowing, current,
    settings: { villa, apartment, radhus, fritidshus } },
  item: { settings }, filteredItems, getHomeData, getCityData, loadUser
}) => {

  const filterTheData = () => {
    let newData = data.map(item => item)

    if (villa || apartment || radhus || fritidshus) {
      newData = newData.filter(item => {
        const { homeType } = item

        if (homeType === 'villa' && villa) return item

        if (homeType === 'apartment' && apartment) return item

        if (homeType === 'radhus' && radhus) return item

        if (homeType === 'fritidshus' && fritidshus) return item

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
      if (search.length > 2) {
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

  useEffect(() => {
    // If the data array in the state is empty get data from DB
    data.length === 0 && getHomeData()

    // If the cityData array in the state is empty get cities from DB
    cityData.length === 0 && getCityData()

    // When the data array is not empty run the filter function
    data.length !== 0 && cityData.length !== 0 && filterTheData()

    // eslint-disable-next-line
  }, [settings, sort, search, rooms, price, data, cityData])

  useEffect(() => {
    loadUser()
  }, [])

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
                <Home />
              )}
            />

            <Route
              exact
              path='/item/:city/:address'
              render={(props) => (
                <Item {...props} listingsData={data} />
              )}
            />

            <Route
              exact
              path="/karta/bostad"
              render={(props) => (
                <MapPage
                  {...props}
                />
              )}
            />

            <Route exact path="/mina-sidor/logga-in" component={Login} />

            <Route exact path="/mina-sidor/anvandare/ny" component={Register} />

            <Route exact path="/mina-sidor/sparat" component={SavedHomes} />

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
  filteredItems: PropTypes.func.isRequired,
  getHomeData: PropTypes.func.isRequired,
  getCityData: PropTypes.func.isRequired,
  loadUser: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  item: state.item
})

export default connect(mapStateToProps, { filteredItems, getCityData, getHomeData, loadUser })(App)
