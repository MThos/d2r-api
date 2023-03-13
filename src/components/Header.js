import React from "react";
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import Image from "./Image";
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
        <a href="/"><Image id="header-logo" src="d2r_logo_white_name.webp" alt="d2r-api logo" /></a>
      </div>
      <div id="user-login">
        <div id="user-btn">
        {
          isAuthenticated ? <LogoutButton /> : <LoginButton />
        }
        </div>
        <div id="user">
        {
          isAuthenticated ? user.email : "Not Logged In"
        }
        </div>
      </div>
    </header>
  )
}

export default Header;