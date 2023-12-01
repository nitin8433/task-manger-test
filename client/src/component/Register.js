import React, { useState } from "react";
import {
    Box,
    Button,
    Typography,
    TextField,
    Grid,
    styled,
    Dialog,
    DialogTitle,
    DialogContentText,
    DialogActions,
    DialogContent,
} from "@material-ui/core";
import { VisibilityOff, Visibility, ArrowBack as ArrowBackIcon } from "@material-ui/icons";

  export const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [openDialogSignUp, setOpenDialogSignUp] = useState(false);
    const [regData, setRegData] = useState({
        regfullName: "",
        regEmail: "",
        regPhoneNumber: "",
        regPassword: "",
    });

    const handleInputChange = (e) => {
        setRegData({
            ...regData,
            [e.target.name]: e.target.value,
        });
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = () => {
        // Implement your registration logic here using regData
    };

    const handleCloseSignUp = () => {
        setOpenDialogSignUp(false);
    };

    return (
        <div>
            <Box
                style={{
                    display: "flex",
                    padding: "15px",
                    borderRadius: "7px",
                    backgroundColor: "white",
                    maxWidth: "450px",
                    margin: "auto",
                }}
            >
                <div>
                    <ArrowBackIcon />
                </div>
                <div>
                    <Typography style={{ marginLeft: "30px" }}>Register</Typography>
                </div>
            </Box>
            <RegisterBox>
                <RegisterHead>Sign Up</RegisterHead>
                <RegisterNameHead>Full Name</RegisterNameHead>
                <InputTextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="fullName"
                    placeholder="Full Name"
                    name="regfullName"
                    onChange={handleInputChange}
                />
                <RegisterNameHead>Email Id</RegisterNameHead>
                <InputTextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="email"
                    placeholder="Email Address"
                    name="regEmail"
                    onChange={handleInputChange}
                />
                <RegisterNameHead>Phone Number</RegisterNameHead>
                <InputTextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    placeholder="Phone Number"
                    id="phoneNumber"
                    name="regPhoneNumber"
                    type="tel"
                    onChange={handleInputChange}
                />
                <RegisterNameHead>Password</RegisterNameHead>
                <InputTextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="password"
                    placeholder="Password"
                    name="regPassword"
                    type={showPassword ? "text" : "password"}
                    onChange={handleInputChange}
                    InputProps={{
                        endAdornment: (
                            <Button
                                data-test-id="togglePasswordVisibility"
                                onClick={togglePasswordVisibility}
                            >
                                {showPassword ? <Visibility /> : <VisibilityOff />}
                            </Button>
                        ),
                    }}
                />
                <Grid container justify="center">
                    <Grid item>
                        <RegisterButton
                            variant="contained"
                            onClick={handleSubmit}
                            data-test-id="toggleVisibilty"
                        >
                            Register
                        </RegisterButton>
                    </Grid>
                </Grid>
            </RegisterBox>
            <div>
                <Dialog open={openDialogSignUp} onClose={handleCloseSignUp}>
                    <DialogTitle>Something went wrong</DialogTitle>
                    <DialogContent>
                        <DialogContentText>{/* Display error message here */}</DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button
                            onClick={handleCloseSignUp}
                            data-test-id="handleCloseSignUp"
                            color="primary"
                        >
                            Cancel
                        </Button>
                        <Button onClick={handleCloseSignUp} color="primary" autoFocus>
                            Ok
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        </div>
    );
};

const RegisterHead = styled(Typography)({
    fontSize: "46px",
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
});

const RegisterBox = styled(Box)({
    maxWidth: "450px",
    margin: "auto",
    backgroundColor: "#0000FF",
    padding: "20px",
});

const RegisterNameHead = styled(Typography)({
    fontSize: "20px",
    fontWeight: 600,
    color: "white",
    marginTop: "10px",
});

const RegisterButton = styled(Button)({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "12px 50px 12px 50px",
    borderRadius: "13px",
    fontSize: "14px",
    fontWeight: 700,
    color: "royalblue",
    marginTop: "40px",
    backgroundColor: "white",
    textTransform: "none",
});

const InputTextField = styled(TextField)({
    backgroundColor: "white",
    borderRadius: "5px",
});

export default Register;
