import React, { Component } from 'react';

class Request extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  setTableRow = (table, i) => {
    const keys = Object.keys(table);
    return (
      <tr>
        <td>{table[keys[0]][i]}</td>
        <td>{table[keys[1]][i]}</td>
        <td>{table[keys[2]][i]}</td>
      </tr>
    )
  }
  
  render() {
    const { type, path, details, table, example } = this.props.content;
    let queryTable;
    let queryText;
    if (this.props.content.queryText) {
      queryTable = this.props.content.queryTable;
      queryText = this.props.content.queryText;
    }
    return (
      <div className='request'>
        <h3>{type} <span>{path}</span></h3>
        <p>{details}</p>
        {table && 
          <table>
            <tr>
              { Object.keys(table).map(header => <th>{header}</th>) }
            </tr>
            {
              table.parameters.map((item, i) => {
                return this.setTableRow(table, i)
              })
            }
          </table>
        }
        {queryText && <p>{this.props.content.queryText}</p>}
        {queryTable &&
          <table>
            <tr>
              {Object.keys(queryTable).map(header => <th>{header}</th>)}
            </tr>
            {
              queryTable.parameters.map((item, i) => {
                return this.setTableRow(queryTable, i)
              })
            }
          </table>
        }
        {example &&
          <div>
            <p className='example'>Try Out An Example Request</p>
            <form>
              <label>Request Path
                <input value={example.path}></input>
              </label>
              <label>Request Body
                <textarea value={example.body}></textarea>
              </label>
            </form>
            <textarea></textarea>
          </div>
        }
      </div>
    )
  }
}

export default Request;