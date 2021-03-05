import React from 'react'
import { ThemeProvider} from 'styled-components';
import Button from './not-using/StyledButton';

const theme = {
    primary: 'green',
    alert: 'aquamarine',
    font: 'helvetica',
    fontSize: '10rem'
}

export default function StyledComp() {  
    return (
        <div>
        <ThemeProvider theme={theme}>
            <Button color="alert"> styled button </Button>
        </ThemeProvider>
        </div>
    )
}