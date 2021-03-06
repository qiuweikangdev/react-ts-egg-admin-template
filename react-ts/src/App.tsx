import React from 'react'; 
import { Provider } from "react-redux";
import { HashRouter,Route,Switch,Redirect } from "react-router-dom";
import InnerLayout from '@/layout/innerLayout/index'
import OuterLayout from '@/layout/outerLayout/index';
import store from "@/store";
import ViewportProvider from '@/hooks/useViewport/viewportContext'
import './styles/index.less'

function App() {
  return (
    <Provider store={store}>
      <HashRouter>
      <Switch>
        {/* 
          注意：
          由于没有设置exact，只要url中包含"/",就会与这个路由匹配成功，所以必须将它写在最后。
        */}
        <Route path='/account' component={OuterLayout}></Route>
        <ViewportProvider>
        <Redirect from='/' to='/dashboard' exact></Redirect>
        <Route path='/'  component={InnerLayout}></Route>
        </ViewportProvider>
      </Switch>
      </HashRouter>
     </Provider>
  );
}

export default App;
