import React, { Component } from 'react'

import "./Vitrine.css"

import Compras from './compras/Compras'

export class Livros extends Component {
    constructor(props){
      super(props);
      this.state={
        act: 0,
        index: '',
        shopping: [],
        datas: [
          {id: 1, title: "O Programador Pragmático: De Aprendiz a Mestre", autor: "Andrew Hunt, David Thomas", price: 125.50, stock: 50},
  
          {id: 2, title: "The Mythical Man-Month: Essays on Software Engineering", autor: "Frederick P. Brooks Jr.", price: 170.19, stock: 32},   
  
          {id: 3, title: "Expressões Regulares - Uma Abordagem Divertida", autor: "Aurelio Marinho Jargas", price: 47.20, stock: 10},
  
          {id: 4, title: "Domain-Driven Design: Tackling Complexity in the Heart of Software", autor: "Eric Evans", price: 251.14, stock: 32},
  
          {id: 5, title: "Padrões de Arquitetura de Aplicações Corporativas", autor: "Martin Fowler", price: 101.59, stock: 25},
  
          {id: 6, title: "The Design of Design: Essays from a Computer Scientist", autor: "Frederick P. Jr. Brooks", price: 161.75, stock: 5},
  
          {id: 7, title: "Shell Script Profissional", autor: "Aurelio Marinho Jargas", price: 62.35, stock: 37},
  
          {id: 8, title: "NoSQL Essencial: Um Guia Conciso para o Mundo Emergente da Persistência Poliglota", autor: "Pramod J. Sadalage, Martin Fowler", price: 52.00, stock: 19},
  
          {id: 9, title: "Refactoring: Improving the Design of Existing Code", autor: "Martin Fowler", price: 220.63, stock: 43},
  
          {id: 10, title: "Clean Architecture: A Craftsman's Guide to Software Structure and Design", autor: "Robert C. Martin", price: 148.61, stock: 1},
  
          {id: 11, title: "Clean Code: A Handbook of Agile Software Craftsmanship", autor: "Robert C. Martin", price: 180.04, stock: 16},
  
          {id: 12, title: "Clean Agile: Back to Basics", autor: "Robert C. Martin", price: 174.20, stock: 29},
  
          {id: 13, title: "Building Microservices: Designing Fine-Grained Systems", autor: "Sam Newman", price: 209.30, stock: 6},
  
          {id: 14, title: "Designing Data-Intensive Applications: The Big Ideas Behind Reliable, Scalable, and Maintainable Systems", autor: "Martin Kleppmann", price: 82.99, stock: 37}
      ]
      }
    } 
  
    componentDidMount(){
      this.refs.title.focus();
    }

    onCreate = (e) => {
      e.preventDefault();
  
      let datas = this.state.datas;
      let id = this.state.datas.length + 1;
      let title = this.refs.title.value;
      let autor = this.refs.autor.value;
      let price = this.refs.price.value;
      let stock = this.refs.stock.value;   

      if (this.state.act === 0) { 
        let data = {
          id, title, autor, price, stock
        }

        if(data.title !== "" && data.autor !== "" && data.price !== "" && data.stock !== ""){
          datas.push(data); 
        } else {
          alert("Só é possível adicionar um livro se ele conter todos os dados!");
        }
        

      } else if (this.state.act === 1) { 
          let index = this.state.index;
          datas[index].id = id;
          datas[index].title = title;
          datas[index].autor = autor;
          datas[index].price = price;
          datas[index].stock = stock;
      }    
  
      this.setState({
        datas: datas,
        act: 0
      });
  
      this.refs.myForm.reset();
      this.refs.title.focus();
    }
  
    onDelete = (i) => {
      let datas = this.state.datas;
      datas.splice(i,1);
      this.setState({
        datas: datas
      });
  
      this.refs.myForm.reset();
      this.refs.title.focus();
    }
  
    onUpdate = (i) => {
      let data = this.state.datas[i];
      this.refs.title.value = data.title;
      this.refs.autor.value = data.autor;
      this.refs.price.value = data.price;
      this.refs.stock.value = data.stock;

      this.setState({
        act: 1,
        index: i
      });
  
      this.refs.title.focus();
    }  

    onShopping = (i) => {
      let datas = this.state.datas[i]
      let shopping = this.state.shopping;

      shopping.push(datas)
    
      this.setState({
        shopping: shopping,
        act: 0
      });
    }
  
    onDeleteShopping(book) {
      this.setState({
        shopping: this.state.shopping.filter(item => item.id !== book)
      })
    }

    render() {
      let datas = this.state.datas;
      return (
        <div>
          <div className="create">
            <h2 className="create_title">Adicionar Livros: </h2>
            <form onCreate={this.onCreate} ref="myForm" className="create_form">
                <input className="create_input" placeholder="Título" ref="title"/>
                <input className="create_input" placeholder="Autor" ref="autor"/>
                <input className="create_input" type="number" placeholder="Preço" ref="price"/>
                <input className="create_input" type="number" placeholder="Quantidade em Estoque" ref="stock"/>
                <button onClick={(e)=>this.onCreate(e)} className="create_btn">Adicionar</button>
            </form>
          </div>

          <div className="main">
              <div className="list flex">
                  <table className="list_specify">
                    <thead  className="list_title">
                      <tr>
                        <th className="list_top">Lista</th>
                      </tr>
                    </thead>

                    <thead  className="table_top">
                      <tr>
                        <th className="list_top">Título</th>
                        <th className="list_top">Autor</th>
                        <th className="list_top">Preço</th>
                        <th className="list_top">Estoque</th>
                        <th className="list_top">Edição</th>
                        <th className="list_top">Compra</th>
                      </tr>
                    </thead>

                    <thead className="table_main">
                      {datas.map((data, i) =>
                        <tr key={i} className="main_row">
                          <th className="main_item">{data.title}</th>
                          <th className="main_item">{data.autor}</th>
                          <th className="main_item">R$ {data.price}</th>
                          <th className="main_item">{data.stock}</th>
                          <th className="main_item--size">
                            <button className="main_btn" onClick={()=>this.onDelete(i)}>Deletar</button>
                            <button className="main_btn" onClick={()=>this.onUpdate(i)}>Editar</button>
                          </th>
                          <th>
                            <button className="main_btn" onClick={()=>this.onShopping(i)}>Add</button>
                          </th>
                        </tr>
                        )}
                    </thead>
                  </table>
                              
                  <div className="shopping nFlex">    
                    <h1 className="shopping_title">Compras</h1>
                    <div className="shopping_main">     
                      <Compras shopping={this.state.shopping} deleteFunction={(book) => this.onDeleteShopping(book)}/>
                    </div>
                  </div>
            </div>
          </div>
        </div>
      );
    }
  }
  
export default Livros
