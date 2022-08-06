import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Label, InputSearchContact } from './Filter.styled';
class Filter extends Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <>
        <Label>
          Find contacts by name
          <InputSearchContact
            type="text"
            value={value}
            onChange={onChange}
          ></InputSearchContact>
        </Label>
      </>
    );
  }
}

export default Filter;

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
