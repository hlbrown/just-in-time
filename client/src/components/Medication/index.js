import React from "react";

import { Grid, Box, TextField, InputLabel} from "@material-ui/core";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';



import Checkbox from '@mui/material/Checkbox';




export default function ErrorRadios() {
    const [prescription, setPrescription] = React.useState('');
    const [otc, setOtc] = React.useState('');
    const [addmedication, setAddMedication] = React.useState('');
  const [error, setError] = React.useState(false);
  const [helperText, setHelperText] = React.useState();

//   const handleRadioChange = (e) => {
//     // setValue(e.target.value);
//     setHelperText(' ');
//     setError(false);
// //   };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (prescription == 'true') {
      setHelperText('Prescription!');
      setError(false);
    } else if (prescription == 'false') {
      setHelperText('not prescription');
      setError(true);
    } else {
      setHelperText('Please select an option.');
      setError(true);
    }
  };

    return (
       <div>
            <form onSubmit={handleSubmit}
            >
      <FormControl
        component="fieldset"
        error={error}
        variant="standard"
          >
              <FormLabel
                  component="legend">
                  Medication Information
              </FormLabel>
              <TextField
                  label="name"
                  name="name"
                  id="name"
                  required
              >
              </TextField>
              <TextField
                  label="brand"
                  name="brand"
                  id="brand"
                >
              </TextField>
              <TextField
                  label="dose"
                  name="dose"
                  id="dose"
                  required>
              </TextField>
              <TextField
                  label="interactions"
                  name="interactions"
                  id="interactions"
                  required>
              </TextField>
              <FormLabel component="legend">Prescription</FormLabel>       

        <RadioGroup                  
          aria-label="prescription"
          name="prescription"
          value={prescription}
          onChange={(e) => setPrescription(e.target.value)}
        >
        <FormControlLabel
          value="true"
          control={<Radio />}
          label="True"
        />
        <FormControlLabel
          value="false"
          control={<Radio />} label="False"
        />
                  
        </RadioGroup>
        <FormLabel
          component="legend">
          Over The Counter
        </FormLabel>
        <RadioGroup
          aria-label="otc"
          name="otc"
          value={otc}
          onChange={(e) => setOtc(e.target.value)}
        >     
          <FormControlLabel value="true" control={<Radio />} label="True" />
          <FormControlLabel value="false" control={<Radio />} label="False" />
              </RadioGroup>
         <FormLabel component="legend">Add Another Medication?</FormLabel> 
              <RadioGroup                  
          aria-label="addmedication"
          name="addmedication"
          value={addmedication}
          onChange={(e) => setAddMedication(e.target.value)}
        >
        <FormControlLabel
          value="true"
          control={<Radio />}
          label="True"
        />
        <FormControlLabel
          value="false"
          control={<Radio />} label="False"
        />
        </RadioGroup>
          </FormControl>
           {/* <Button sx={{ mt: 1, mr: 1 }} type="submit" variant="outlined">
          Check Answer
        </Button> */}
            </form>
    </div>
  );
}
