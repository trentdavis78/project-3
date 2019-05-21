/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';

// Utils
import auth from '../../utils/auth';

//import './styles.scss';

export default class HomePage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  state = { showButton: false }

  componentDidMount() {
    if (auth.getToken()) {
      this.setState({ showButton: true });
    }
  }

  logout = (e) => {
    e.preventDefault();
    auth.clearAppStorage();
    this.setState({ showButton: false });
  }

  render() {
    return (
      <div>
        {/* <div>
          <h1>
            Welcome !
          </h1>
          <p>
            This is the HomePage of your app therefore the access is not restricted
          </p>
          <p>
            Try to access a protected url by either changing the url from the browser or by clicking on the <Link to={'/${Math.random}'}>link</Link>
          </p>   {/* <Route exact path="/connect/:provider" component={ConnectPage} /> */}
        </div>
    );
  }
}
