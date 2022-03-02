import React from "react";

import {Route, Switch} from 'react-router-dom';
import Home from "./page/home";
import CadastroProduto from "./page/register/Products/cadastro";
import  ConsultaProdutos  from "./page/register/Products/consulta";

export default () => {
  return(
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/cadastro-produtos/:sku?" component={CadastroProduto} />
        <Route exact path="/consulta-produtos" component={ConsultaProdutos} />
      </Switch>
  )
}