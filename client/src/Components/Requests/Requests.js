import Request from '../Request/Request';
import content from '../../utils/content';
import React from 'react';

const Requests = () => {

  return (
    <div>
      <h3>States</h3>
      {
        content.states.map(endpoint => {
          return <Request content={endpoint}/>
        })
      }
      <h3>Stations</h3>
      {
        content.stations.map(endpoint => {
          return <Request content={endpoint} />
        })
      }
    </div>
  )
}

export default Requests;