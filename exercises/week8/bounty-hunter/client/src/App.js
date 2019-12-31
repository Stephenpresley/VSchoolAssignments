import React, {Component} from 'react';

//Components
import AddBounty from './AddBounty';
import BountiesList from './BountiesList'
import {axiosContext} from './AxoisContext'

//Style
import './App.css'

class App extends Component {

  componentDidMount() {
    this.props.getAll()
  }

  render() {
    return (
      <div>
        <AddBounty button='submit' type='add' />
        <BountiesList />
      </div>
    );
  }
};

export default axiosContext(App);
