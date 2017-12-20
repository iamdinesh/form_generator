import React from 'react';
import XHRManager from './XHRManager.jsx';

export default class MFC extends XHRManager {
  
  constructor(metaData) {
    super();
    this.metaData = metaData;
  }

  wrapFormGroup(caption, element) {
    return (
      <div className="form-group">
        <label> {caption} </label>
        {element}
      </div>);
  }

  generateField(field) {
    switch (field.type){
      case 'text':
        const input = (
          <input
            type={field.type}
            className="form-control"
            name={field.name}
            placeholder={field.placeholder ? field.placeholder : null}
          />);
        return this.wrapFormGroup(field.caption, input);
      case 'select':
        const select = (
          <select
            className="form-control"
            name={field.name}
          >
          {field.options.map(option => <option value={option.value} key={option.value}> {option.text} </option>)}
          </select>);
        return this.wrapFormGroup(field.caption, select);
      case 'slider':
        const slider = (
          <input
            type="range"
            className="form-control"
            name={field.name}
            min={field.min !== undefined ? field.min : null}
            max={field.max !== undefined ? field.max : null}
          />);
        return this.wrapFormGroup(field.caption, slider);
      default:
        return null;
    }
  }

  generateHeader() {
    return <h2>{this.metaData.caption}</h2>;
  }

  generateFormFields() {
    return this.metaData.fields.map(field => this.generateField(field));
  }

  generateFormFooter() {
    return  <button className="btn btn-primary" type="button" onClick={this.handleSubmit}> Submit </button>;
  }

  wrapForm(fields, formFooter) {
    return <form> {fields} {formFooter} </form>;
  }

  generateHTML() {
    const header = this.generateHeader();
    const fields = this.generateFormFields();
    const formFooter = this.generateFormFooter();
    const form = this.wrapForm(fields, formFooter);
    return (
      <div>
        {header}
        {form}
      </div>);
  }
}
