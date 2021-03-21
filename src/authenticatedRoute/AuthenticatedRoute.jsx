import { Route, Redirect } from 'react-router-dom';

const AuthenticatedRoute = ({component: Component, authed, ...rest}) => {
    return (
      <Route
        {...rest}
        render={(props) => authed
          ? <Component {...props} />
          : <Redirect to={{pathname: '/error', state: {from: props.location}}} />}
      />
    )
  }

  export default AuthenticatedRoute;