import { gql, useApolloClient, useMutation } from '@apollo/client';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FormEvent, useContext, useState } from 'react';

import Error from '../components/error/Error';
import Loading from '../components/loading/Loading';
import AuthContext from '../store/auth-context';
import ParseErrors from '../utils/parseErrors';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginErrors, setLoginErros] = useState<string[] | undefined>(
    undefined
  );

  const router = useRouter();

  const client = useApolloClient();
  const [login, { data, loading, error }] = useMutation(LOGIN_MUTATION);

  const authCtx = useContext(AuthContext);

  const submitHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const res = await login({
      variables: { username: username, password: password },
    });

    if (res.data.tokenAuth.success) {
      authCtx.login(res.data.tokenAuth.token);
      client.resetStore().then(() => {
        router.push('/');
      });
    } else {
      setLoginErros(ParseErrors(res.data.tokenAuth.errors));
    }
  };

  return (
    <>
      <div className="container mx-auto w-full fixed xl:top-20">
        {error && (
          <Error errorTitle="Authentication failure!" errorList={null} />
        )}
        {loginErrors && (
          <Error errorTitle="Authentication failure!" errorList={loginErrors} />
        )}
      </div>
      {loading && <Loading />}
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <img className="mx-auto h-12 w-auto" src="favicon.ico" alt="logo" />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Sign in to your account
            </h2>
          </div>
          <form
            className="mt-8 space-y-6"
            action="#"
            method="POST"
            onSubmit={(event) => submitHandler(event)}
          >
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="username" className="sr-only">
                  Email address
                </label>
                <input
                  id="username"
                  name="username"
                  type="username"
                  autoComplete="username"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                  placeholder="Username"
                  onChange={(event) => setUsername(event.target.value)}
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="text-sm">
                <Link
                  href="/forgotpassword"
                  className="font-medium text-green-600 hover:text-green-500"
                >
                  Forgot your password?
                </Link>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                Sign in
              </button>
            </div>
            <div>
              <Link
                href="/join"
                className="group relative w-full flex justify-center py-2 px-4 border border-green-500 text-sm font-medium rounded-md hover:bg-green-100"
              >
                Join now
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

const LOGIN_MUTATION = gql`
  mutation ($username: String!, $password: String!) {
    tokenAuth(username: $username, password: $password) {
      success
      errors
      token {
        payload {
          origIat
          exp
        }
        token
      }
      user {
        isActive
        username
        email
        status {
          verified
        }
      }
    }
  }
`;

export default Login;
