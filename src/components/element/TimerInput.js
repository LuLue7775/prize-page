// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { useValidation } from '../../utils/hooks/useValidation';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const TimerInput = ({ startCount }) => {
  const { data, handleChange, handleSubmit, errors, isValid } = useValidation({
    validations: {
      inputMin: {
        pattern: {
          value: '^[0-5]?[0-9]$',
          message: 'put in number 0-59'
        }
      },
      inputSec: {
        pattern: {
          value: '^[0-5]?[0-9]$',
          message: 'put in number 0-59'
        }
      }
    }
  });

  useEffect(() => {
    if (!isValid) return;

    startCount(data.inputMin, data.inputSec);
  }, [isValid]);

  return (
    <StyledForm className="time-input" onSubmit={handleSubmit}>
      <StyledInput
        name="userInputMin"
        value={data.inputMin}
        onChange={handleChange('inputMin')}
        required
        min="0"
        max="59"
        type="number"
      />
      {/* Min */}
      <StyledInput
        name="userInputSec"
        value={data.inputSec}
        onChange={handleChange('inputSec')}
        required
        min="0"
        max="59"
        type="number"
      />
      {/* Sec */}
      <StyledButton type="submit" value="Set and Start" />
      <div>{errors.inputMin ? <StyledError>{errors.inputMin}</StyledError> : 'min'}</div>
      <div>{errors.inputSec ? <StyledError>{errors.inputSec}</StyledError> : 'sec'}</div>
    </StyledForm>
  );
};
export default TimerInput;

TimerInput.propTypes = {
  startCount: PropTypes.func,
  stopCount: PropTypes.func
};

const StyledForm = styled.form`
  padding: 1em;
  width: 80%;
  margin: 0 auto;
  align-items: center;
  justify-items: center;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 4px;
`;

const StyledInput = styled.input`
  margin-left: 1em;
  margin-right: 1em;
  width: 100%;
  min-width: 40px;
  max-width: 120px;
  padding: 1em;
  box-sizing: border-box;

  border-radius: 11px;
  --focus: 2px rgba(39, 94, 254, 0.25);
  outline: none;
  transition: box-shadow 0.2s;

  &:focus {
    box-shadow: 0 0 0 var(--focus);
  }
  &:hover {
    background-color: #ffe7b3;
    transition: background-color 0.2s;
  }
`;
const StyledButton = styled.input`
  margin-left: 1em;
  margin-right: 1em;
  max-width: 100px;
  width: 100%;

  height: 40px;
  border-radius: 11px;
  &:hover {
    background-color: #ffe7b3;
    transition: background-color 0.4s;
  }
`;

const StyledError = styled.p`
  font-size: 0.3em;
  color: #fa3a11;
`;
