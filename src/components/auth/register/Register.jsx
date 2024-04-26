import {
  Avatar,
  Button,
  Grid,
  Paper,
  Radio,
  TextField,
  Typography,
} from "@mui/material";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import React from "react";
import { CheckBox } from "@mui/icons-material";

function Register() {
  const paperStyle = { padding: "30px 20px", width: 300, margin: "20px auto" };
  const headerStyle = { margin: 0 };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  return (
    <Grid>
      <Paper elevation={20} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <AddCircleIcon />
          </Avatar>
          <h2 style={headerStyle}>Sign Up</h2>
          <Typography variant="caption">
            Please fill this form to create an account!
          </Typography>
        </Grid>
        <form>
          <TextField fullWidth label="Name" />
          <TextField fullWidth label="Email" />
          <FormControl>
            <FormLabel id="demo-customized-radios">Gender</FormLabel>
            <RadioGroup
              defaultValue="female"
              aria-labelledby="demo-customized-radios"
              name="customized-radios"
              style={{ display: "initial" }}
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
            </RadioGroup>
          </FormControl>
          <TextField fullWidth label="Phone Number" />
          <TextField fullWidth label="Password" />
          <TextField fullWidth label="Confirm Password" />
          <FormControlLabel
            control={<CheckBox />}
            label="I accept the terms and conditions"
          />
          <Button type="submit" variant="contained" color="primary">
            Sign up
          </Button>
        </form>
      </Paper>
    </Grid>
  );
}

export default Register;
