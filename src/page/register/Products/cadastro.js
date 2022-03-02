import React from "react";
import ProdutoService from "../../../services/produtoService";


const stateInit = {
  nome:'',
  sku:'',
  descricao:'',
  preco:0,
  fornecedor:'',
  sucesso: false,
  errors:[]
}

class CadastroProduto extends React.Component {

  state = stateInit;

  constructor(){
    super()
    this.service = new ProdutoService
  }

  onChange = (event) =>{
    const valor = event.target.value
    const nomeCampo = event.target.name
    this.setState({[nomeCampo]: valor})

  }

  onSubmit = (event) =>{

    const  produto = {
      nome: this.state.nome,
      sku:this.state.sku,
      descricao: this.state.descricao,
      preco: this.state.preco,
      fornecedor: this.state.fornecedor
    }
    try{
      this.service.salvar(produto);
      this.limpaCampos();
      this.setState({sucesso: true});
    }catch(erro){
      const errors = erro.errors;
      this.setState({errors: errors});
    }
    
  }

  limpaCampos = () =>{
    this.setState(stateInit)
  }
  
  render(){
    return(
      <div className="card">
        <div className="card-header">
            Cadastro de Produtos
        </div>
        <div className="card-body">
        { this.state.sucesso &&
          <div class="alert alert-dismissible alert-success">
            <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
            <strong>Bem feito!</strong> Cadastro  realizado com sucesso!
          </div>
        }
        { this.state.errors.length > 0 &&

          this.state.errors.map( msg => {
            return(
              <div class="alert alert-dismissible alert-danger">
                <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
                <strong>Error!</strong> {msg}
              </div>
            )
          })
        }
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label>Nome: *</label>
                <input 
                  type="text" 
                  className="form-control" 
                  value={this.state.nome}
                  name='nome'
                  onChange={this.onChange}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label>SKU: *</label>
                <input 
                  name='sku'
                  type="text" 
                  className="form-control"
                  value={this.state.sku}
                  onChange={this.onChange}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 mt-3">
              <div className="form-group">
                <label>Descrição:</label>
                <textarea 
                  name='descricao'
                  className="form-control"
                  value={this.state.descricao}
                  onChange={this.onChange}
                />
              </div>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-md-6">
              <div className="form-group">
                <label>Preço: *</label>
                <input 
                  name='preco'
                  type="text" 
                  className="form-control"
                  value={this.state.preco}
                  onChange={this.onChange}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label>Fornecedor: *</label>
                <input 
                  name='fornecedor'
                  type="text"
                  className="form-control"
                  value={this.state.fornecedor} 
                  onChange={this.onChange}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-1">
              <button onClick={this.onSubmit} className="btn btn-success mt-4">Salvar</button>
            </div>
            <div className="col-md-1">
              <button onClick={this.limpaCampos} className="btn btn-primary mt-4">Limpar</button>
            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default CadastroProduto;