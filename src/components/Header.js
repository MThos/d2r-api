import React from "react";
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import WebhookIcon from '@mui/icons-material/Webhook';
import { useAuth0 } from "@auth0/auth0-react";


const Header = () => {
  const { isAuthenticated, user } = useAuth0();

  return (
    <header>
      <div id="header-icon">
        <a href="/"><WebhookIcon id="main-icon" /></a>
      </div>
      <div>
        <img src="images/d2r_logo_white_name.png" id="header-logo" />
      </div>
      <div id="user-login">
        <div id="user">
        {
          isAuthenticated ? user.email : "Not Logged In"
        }
        </div>
        <div id="user-btn">
        {
          isAuthenticated ? <LogoutButton /> : <LoginButton />
        }
        </div>
      </div>
    </header>
  )
}

export default Header;