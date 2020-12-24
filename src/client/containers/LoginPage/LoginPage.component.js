import React from 'react';
import Button from '../../components/SignInButton/Button';
import { HyfLogo } from '../../components/HyfBigLogo/HyfBigLogo.stories';
import runtimeEnv from '@mars/heroku-js-runtime-env';

export default function LoginPage() {
  const env = runtimeEnv();
  const client = env.REACT_APP_SLACK_CLIENT_ID;
  const authenticateUser = () => {
    const clientId = env.REACT_APP_SLACK_CLIENT_ID;
    const oauthUrl = `https://slack.com/oauth/v2/authorize?client_id=${clientId}&user_scope=identity.basic`;
    window.location = oauthUrl;
  };
  return (
    <>
      <HyfLogo />

      <Button onClick={authenticateUser} />
      <p>client number: {client}</p>
      <p>env variables: {process.env.NODE_ENV}</p>
    </>
  );
}
