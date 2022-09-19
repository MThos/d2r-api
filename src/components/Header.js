import React from "react";
import MainTitle from "./MainTitle";
import LoginIcon from '@mui/icons-material/Login';
import LaunchIcon from '@mui/icons-material/Launch';
import WebhookIcon from '@mui/icons-material/Webhook';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const Header = () => {
  const [openSignup, setOpenSignup] = React.useState(false);
  const handleOpenSignup = () => setOpenSignup(true);
  const handleCloseSignup = () => setOpenSignup(false);

  const [openLogin, setOpenLogin] = React.useState(false);
  const handleOpenLogin = () => setOpenLogin(true);
  const handleCloseLogin = () => setOpenLogin(false);

  const style = {
    position: 'absolute',
    color: 'black',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 350,
    bgcolor: 'white',
    border: '6px solid black',
    boxShadow: 24,
    padding: '20px 20px',
    textAlign: 'center'
  };

  return (
    <header>
      <div id="header-icon">
        <WebhookIcon id="main-icon" />
      </div>
      <MainTitle title="D2R API" />
      <div id="user-login">
          <LoginIcon id="login-icon" onClick={handleOpenLogin} data-tip="LOGIN" data-border="true" data-place="bottom" data-background-color="black" />
          <LaunchIcon id="signup-icon" onClick={handleOpenSignup} data-tip="SIGN UP" data-border="true" data-place="bottom" data-background-color="black" />
      </div>

      <Modal
        open={openLogin}
        onClose={handleCloseLogin}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            LOGIN
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Enter your credentials to access your API key.
          </Typography>
          <br/>
          <TextField id="outlined-basic" label="Email" variant="outlined" color="warning" size="small" fullWidth margin="dense" required />
          <br/>
          <TextField id="outlined-basic" label="Password" variant="outlined" color="warning" size="small" fullWidth margin="dense" required password />
          <br/><br/>
          <Button variant="outlined" color="warning">Submit</Button>
        </Box>
      </Modal>

      <Modal
        open={openSignup}
        onClose={handleCloseSignup}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            SIGN UP
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Sign up for access to 10 API calls per minute.
          </Typography>
          <br/>
          <TextField id="outlined-basic" label="Name" variant="outlined" color="warning" size="small" fullWidth margin="dense" required />
          <br/>
          <TextField id="outlined-basic" label="Email" variant="outlined" color="warning" size="small" fullWidth margin="dense" required />
          <br/>
          <TextField id="outlined-basic" label="Password" variant="outlined" color="warning" size="small" fullWidth margin="dense" required password helperText="10+ character including symbol, number and uppercase" />
          <br/><br/>
          <Button variant="outlined" color="warning">Submit</Button>
        </Box>
      </Modal>
    </header>
  )
}

export default Header;