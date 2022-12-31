import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { useRoute } from './router';
import { getAuth } from 'firebase/auth';

const auth = getAuth();

import { store } from './components/redux/store';
import Main from './components/Main';

const App = () => {
  const [user, setUser] = useState(null);

  // auth.onAuthStateChanged(user => {
  //   setUser(user);
  // });

  console.log(user);

  const route = useRoute(user);

  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );

  // const route = useRoute(user);
};
export default App;
