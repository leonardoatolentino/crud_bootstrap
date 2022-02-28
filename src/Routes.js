import React from "react";

import {HashRouter, Route, Switch} from 'react-router-dom';
import Home from "./page/home";
import CadastroProduto from "./page/register/Products/cadastro";

export default () =>{
  return(
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route  path="/cadastro-produtos" component={CadastroProduto} />
      </Switch>
    </HashRouter>
  )
}