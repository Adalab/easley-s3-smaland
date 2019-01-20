import React, { Component } from 'react';

import DesignContainer from './DesignContainer.js';
import FillContainer from './FillContainer.js';
import ShareContainer from './ShareContainer.js';

class CollapsableContainer extends Component {
  render() {
    return (
      <div className="tunning__responsive">
        <DesignContainer />
        <FillContainer skills={this.props.skills}/>
        <ShareContainer/>
      </div>

    )
  };

}

export default CollapsableContainer;