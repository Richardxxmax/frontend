import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
 
 export const  SuccessAlert  = ({text}) => {
    return (
      <Stack sx={{ width: '100%' }} spacing={2}>
        <Alert severity="success">{text}</Alert>
      </Stack>
    );
  }

 export const  WarningAlert  = ({text}) => {
    return (
      <Stack sx={{ width: '100%' }} spacing={2}>
        <Alert severity="warning">{text}</Alert>
      </Stack>
    );
  }

  export const  ErrorAlert  = ({text}) => {
    return (
      <Stack sx={{ width: '100%' }} spacing={2}>
        <Alert severity="error">{text}</Alert>
      </Stack>
    );
  }


