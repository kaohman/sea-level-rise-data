import Request from '../Request/Request';
import content from '../../utils/content';
import React from 'react';

const Requests = () => {

  return (
    <div>
      <h3 id='state-top' className='database-table-names'>States</h3>
      {
        content.states.map(endpoint => {
          return <Request type='state' content={endpoint} key={endpoint.id}/>
        })
      }
      <h3 id='station-top' className='database-table-names'>Stations</h3>
      {
        content.stations.map(endpoint => {
          return <Request type='station' content={endpoint} key={endpoint.id}/>
        })
      }
    </div>
  )
}

export default Requests;