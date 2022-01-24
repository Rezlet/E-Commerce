import React from 'react';
import { TextField, Grid } from '@material-ui/core';
import { useFormContext, useForm, Controller} from 'react-hook-form'

const FormInput = ({name, label, fullWidth}) => {
    const {register} = useFormContext()
    const { control } = useForm()
  return (
      <Grid item xs={12} sm={6}>
           <Controller
           name={name}
           control={control}
        fullWidth
        render={({field}) => (
          <TextField  {...register(field.name)} defaultValue='' fullWidth={fullWidth} label={label} required/>
        )}
      />
      </Grid>
   )
};

export default FormInput;
