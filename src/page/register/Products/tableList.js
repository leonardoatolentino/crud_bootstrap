import React from "react";

export default (props) => (
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
        props.produtos.map ((produto, index) => {
          return(
            <tr key={index}>
              <th>{produto.nome}</th>
              <th>{produto.sku}</th>
              <th>{produto.preco}</th>
              <th>{produto.fornecedor}</th>
              <th>
                <button 
                  onClick={ () => props.editarAction(produto.sku)} 
                  className="btn btn-primary"
                  >Editar
                </button>
              </th>
              <th> 
                <button 
                  className="btn btn-danger"
                  onClick={ () => props.deletarAction(produto.sku)}
                  >Remover
                </button>
              </th>
            </tr>
          )
        })
      }
    </tbody>
  </table>
);