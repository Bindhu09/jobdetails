import { Box, TextField } from '@mui/material';
import React from 'react';
import textStyles from './TextField.module.scss';
/**
 * Author : Manjusha
 * @param label : label is whatever the label we need in the textField
 * @param className : className is to give that particular styles
 * @param errorMessage : If the required field not written correctly it will throw an error
 * @returns 
 */
const Textfield = ({ label, className, errorMessege }) => {
  return (
    <Box className={textStyles.textField}>
      <TextField
        helperText={errorMessege}
        label={label}
        multiline
        maxRows={4}
        className={textStyles.textField}
      />
    </Box>
  );
};

export default Textfield;
