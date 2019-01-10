import React, { Component } from 'react';
import DesignCollapsable from './DesignCollapsable';
import FillCollapsable from './FillCollapsable';
import ShareCollapsable from './ShareCollapsable';


class CollapsableContainer extends Component {
  render() {
    return (
      <div className="tunning__responsive">
        <DesignCollapsable />
        <FillCollapsable />
        <ShareCollapsable />
      </div>

    )
  }
}

export default CollapsableContainer;