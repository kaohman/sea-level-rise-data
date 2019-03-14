import React, { Component } from 'react';
import { fetchData } from '../../utils/api';
import { UnControlled as CodeMirror } from 'react-codemirror2';
import '../../../node_modules/codemirror/lib/codemirror.css';
import '../../../node_modules/codemirror/theme/material.css';
import '../../../node_modules/codemirror/mode/javascript/javascript';

class Request extends Component {
  constructor(props) {
    super(props);
    this.state = {
      path: this.props.content.example.path || '',
      body: JSON.stringify(this.props.content.example.body) || {},
      response: ''
    }
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const { type } = this.props.content;
    const { path, body } = this.state;
    const data = type === 'POST' ? body : null;
    const response = await fetchData(path, type, data);
    await this.setState({ response });
  }

  hideResponse = () => {
    this.setState({ response: '' });
  }

  handleChange = (e) => {
    e.preventDefault();
    const { id, value } = e.target;
    this.setState({ [id]: value });
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
    const { id, type, path, details, table, example, hash } = this.props.content;
    let queryTable;
    let queryText;
    if (this.props.content.queryText) {
      queryTable = this.props.content.queryTable;
      queryText = this.props.content.queryText;
    }
    return (
      <div className='request'>
        <h3 id={`${this.props.type}-${hash}`}>{type} <span>{path}</span></h3>
        <p>{details}</p>
        {table && 
          <table>
            <tbody>
              <tr>
                { Object.keys(table).map(header => <th>{header}</th>) }
              </tr>
              {
                table.parameters.map((item, i) => {
                  return this.setTableRow(table, i)
                })
              }
            </tbody>
          </table>
        }
        {queryText && <p>{this.props.content.queryText}</p>}
        {queryTable &&
          <table>
            <tbody>
              <tr>
                {Object.keys(queryTable).map(header => <th>{header}</th>)}
              </tr>
              {
                queryTable.parameters.map((item, i) => {
                  return this.setTableRow(queryTable, i)
                })
              }
            </tbody>
          </table>
        }
        {example.path &&
          <div>
            <p className='example'>Try Out An Example Request</p>
            <form autoComplete='off' onSubmit={this.handleSubmit}>
              <label>Request Path:
                <input onChange={this.handleChange} id='path' value={this.state.path}></input>
              </label>
              {example.body &&
                <label>Request Body:
                  <textarea onChange={this.handleChange} id='body' value={this.state.body}></textarea>
                </label>
              }
              <button type='submit'>Send Request</button>
            </form>
            {this.state.response !== '' &&
              <div>
                <p className='response'>Response:</p>
                <CodeMirror
                  options={{
                    mode: 'javascript',
                    jsonld: true,
                    smartIndent: true,
                    readOnly: true,
                    theme: 'material',
                    lineWrapping: true
                  }}
                  value={JSON.stringify(this.state.response)}
                />
              <button className='hide-button' onClick={this.hideResponse}>Hide Response</button>
              </div>
            }
          </div>
        }
      </div>
    )
  }
}

export default Request;