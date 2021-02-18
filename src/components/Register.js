import {useState} from 'react';
import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import bg from '../assets/bg.jpg';
import Button from '@material-ui/core/Button';


const Wrapper = styled.div`
    display: flex;
    gap: 50px;
    padding: 50px;
`
const Img = styled.img`
    width: 50%;

`
const FormWrapper = styled(Paper)`
    padding: 50px;
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 300px;
`
const currencies = [
    {
      value: 'USD',
      label: '$',
    },
    {
      value: 'EUR',
      label: '€',
    },
    {
      value: 'BTC',
      label: '฿',
    },
    {
      value: 'JPY',
      label: '¥',
    },
  ];

function Register() {
    const [currency, setCurrency] = useState('EUR');

    const handleChange = (event) => {
      setCurrency(event.target.value);
    };

    return (
        <Wrapper>
            <Img src={bg}/>
            <FormWrapper>
            <Form autoComplete='off'>
                <TextField variant='standard' name='name' label='Name' />
                <TextField variant='standard' name='name' label='Email' />
                <TextField
                    id="standard-select-currency"
                    select
                    label="Interests"
                    value={currency}
                    
                    onChange={handleChange}
                    helperText="Please select your currency"
                >
                    {currencies.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                        {option.label}
                        </MenuItem>
                    ))}
                </TextField>
                <Button color="primary" variant="contained">Register</Button>
            </Form>
            </FormWrapper>
        </Wrapper>
    )
}

export default Register
