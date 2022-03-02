import React from "react";
import ProdutoService from "../../../services/produtoService";
import { withRouter } from "react-router-dom";

class ConsultaProdutos extends React.Component{

  state = {
    produtos: []
  }

  constructor(){
    super()
    this.service = new ProdutoService();
  }

  componentDidMount(){
    const produtos = this.service.obterProduto();
    this.setState({ produtos });

  }

  preparaEditar = (sku) => {
    console.log('sku para editar: ', sku);
    this.props.history.push(`/cadastro-produtos/${sku}`);
  }

  render(){
    return(
      <div className="card">
        <div className="card-header">
            Consulta Produtos
        </div>
        <div className="card-body">
          <table className="table table-hover ml-2">
            <thead>
              <tr>
                <th >Nome</th>
                <th>SKU</th>
                <th>Preço</th>
                <th>Fornecedor</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              { 
                this.state.produtos.map ((produto, index) => {
                  return(
                    <tr key={index}>
                      <th>{produto.nome}</th>
                      <th>{produto.sku}</th>
                      <th>{produto.preco}</th>
                      <th>{produto.fornecedor}</th>
                      <th>
                        <button onClick={ () => this.preparaEditar(produto.sku)} className="btn btn-primary">Editar</button>
                      </th>
                      <th> 
                        <button className="btn btn-danger">Remover</button>
                      </th>
                    </tr>
                  )
                })
              }
            </tbody>
        </table>
      </div> 
     </div> 
  )}
}

export default withRouter(ConsultaProdutos);