import React from 'react';

const Request = (props) => {
  const { type, path, details, table, example } = props.content;

  const setTableRow = (table, i) => {
    const keys = Object.keys(table);
    return (
      <tr>
        <td>{table[keys[0]][i]}</td>
        <td>{table[keys[1]][i]}</td>
        <td>{table[keys[2]][i]}</td>
      </tr>
    )
  }
  return (
    <div>
      <h3>{type} <span>{path}</span></h3>
      <p>{details}</p>
      {table && 
        <table>
          <tr>
            { Object.keys(table).map(header => <th>{header}</th>) }
          </tr>
          {
            table.parameters.map((item, i) => {
              return setTableRow(table, i)
            })
          }
        </table>
      }
      {props.content.queryText && <p>{props.content.queryText}</p>}
      {props.content.queryTable &&
        <table>
          <tr>
            {Object.keys(props.content.queryTable).map(header => <th>{header}</th>)}
          </tr>
          {
            props.content.queryTable.parameters.map((item, i) => {
              return setTableRow(props.content.queryTable, i)
            })
          }
        </table>
      }
      {example &&
        <div>
          <form>
            <p>Example:</p>
            <label>Request Path
              <input value={example.path}></input>
            </label>
            <label>Request Body
              <input value={example.body}></input>
            </label>
          </form>
          <textarea></textarea>
        </div>
      }
    </div>
  )
}

export default Request;