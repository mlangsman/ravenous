import React from 'react';
import './BusinessList.css';

import Business from '../Business./Business';

export class BusinessList extends React.Component {

  render() {
    return (
      <div class="BusinessList">
        <Business />
        <Business />
        <Business />
        <Business />
        <Business />
        <Business />
      </div>
    );
  }



}
