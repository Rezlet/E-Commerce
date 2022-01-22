import React from 'react';
import { InputLabel, Select, MenuItem, Button, Grid, Typography} from '@material-ui/core'
import { useForm, FormProvider} from 'react-hook-form'

import { commerce } from '../../lib/commerce';

import FormInput from './FormInput'
const AddressForm = () => {
    const [shippingCountries, setShippingCountries] = useState([])
    const [shippingCountry, setShippingCountry] = useState('')
    const [shippingSubdivisions, setShippingSubdivisions] = useState([])
    const [shippingSubdivision, setShippingSubdivision] = useState('')
    const [shippingOptions, setShippingOptions] = useState([])
    const [shippingOption, setShippingOption] = useState('')
    const methods = useForm()
  return (
     <>
        <Typography variant='h6' gutterBottom>
            Shipping Address
        </Typography>
        <FormProvider {...methods}>
            <form onSubmit=''>
                <Grid container spacing={3}>
                    <FormInput required name='firstName' label="First name" fullWidth/>
                    <FormInput required name='lastName' label="Last name" fullWidth/>
                    <FormInput required name='address' label="Address" fullWidth/>
                    <FormInput required name='email' label="Email" fullWidth/>
                    <FormInput required name='city' label="City" fullWidth/>
                    <FormInput required name='zip' label="ZIP / Postal code" fullWidth/>
                    <Grid item xs={12} sm={6}>
                        <InputLabel>
                            Shipping Country
                        </InputLabel>

                        <Select value={} fullWidth onChange={}>
                            <MenuItem key={} value={}>
                                Select Me
                            </MenuItem>
                        </Select>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <InputLabel>
                            Shipping Subdivision
                        </InputLabel>

                        <Select value={} fullWidth onChange={}>
                            <MenuItem key={} value={}>
                                Select Me
                            </MenuItem>
                        </Select>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <InputLabel>
                            Shipping Option
                        </InputLabel>

                        <Select value={} fullWidth onChange={}>
                            <MenuItem key={} value={}>
                                Select Me
                            </MenuItem>
                        </Select>
                    </Grid>
                </Grid>
            </form>
        </FormProvider>
     </>
  )
};

export default AddressForm;
