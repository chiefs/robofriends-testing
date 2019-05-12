import React, { Component } from 'react';

import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import Header from '../components/Header';
import './MainPage.css';

class MainPage extends Component {
  componentDidMount() {
    this.props.onRequestRobots();
  }

  filterRobots = () => {
    return this.props.robots.filter(r =>
      r.name.toLowerCase().includes(this.props.searchField.toLowerCase())
    );
  };

  render() {
    const { onSearchChanged, isPending } = this.props;
    let filteredRobots = this.filterRobots();

    return (
      <div className="tc">
        <Header />
        <SearchBox searchChange={onSearchChanged} />
        <Scroll>
          {isPending ? (
            <h1>Loading...</h1>
          ) : (
            <ErrorBoundry>
              <CardList robots={filteredRobots} />
            </ErrorBoundry>
          )}
        </Scroll>
      </div>
    );
  }
}

export default MainPage;
