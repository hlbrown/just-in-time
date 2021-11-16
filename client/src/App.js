import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { Provider } from 'react-redux';
import store from 'utils/store';

import Home from 'pages/Home';

import NoMatch from 'pages/NoMatch';
import Login from 'pages/Login';
import Signup from 'pages/Signup';
import SlackContactForm from 'pages/SlackContactForm';

import Header from 'components/Header';
import Footer from 'components/Footer';




const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});



const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

//const mapDispatchToProps = dispatch => ({ 
// hideModal: () => dispatch(hideModal()),
// showModal: (modalProps, modalType) => {
//  dispatch(showModal({ modalProps, modalType }))
// }
//})

function App() {
 
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <Provider store={store}>
            <Header />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/contact" component={SlackContactForm} />
              <Route component={NoMatch} />
            </Switch>
            <Footer />
          </Provider>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
