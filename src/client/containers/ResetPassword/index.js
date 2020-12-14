import React, { useState } from 'react';
import ResetPassword from '../../components/Forms/ResetPassword';
import Loader from '../../components/Loader';

function resetPassword() {
  // eslint-disable-next-line
  console.warn('Reset password is not implemented!');
}

export default function ResetPasswordContainer() {
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async ({ email }) => {
    setIsLoading(true);
    await resetPassword({ email });
    setIsLoading(false);
  };
  if (isLoading) return <Loader />;
  return <ResetPassword onSubmit={onSubmit} />;
}
