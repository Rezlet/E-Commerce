import React from 'react';
import { TextField, Grid } from '@material-ui/core';
import { useFormContext, Controller} from 'react-hook-form'

const FormInput = ({name, label, required, fullWidth}) => {
    const {control} = useFormContext()
  return (
      <Grid item xs={12} sm={6}>
           <Controller
        control={control}
        fullWidth
        render={() => (
          <TextField label={label} required={required} name={name} fullWidth={fullWidth} />
        )}
      />
      </Grid>
   )
};

export default FormInput;
