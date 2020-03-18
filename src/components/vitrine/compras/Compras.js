import './Compras.css'
import React, { Component } from 'react'

export class Compras extends Component {
    componentDidMount() {
        this.setState({
            itemBook: this.props.shopping
        })
    }

    shouldComponentUpdate(props) {
        const itemBook = this.state.itemBook;
        const shopping = this.props.shopping;
    
        const index = itemBook.map(item => item.id)

         if (props !== this.props || this.state !== props) {
            if (props.shopping.length !== shopping.length || itemBook.length !== shopping.length) {
                this.setState({
                    itemBook: shopping.map(book => {
                        if (index.indexOf(book.id) === -1 ) {
                            return book;
                        }
                       
                        return itemBook.filter(item => item.id === book.id)[0]
                    })
                })
            }
            return true;
        }
        return false;
    }

    constructor(props) {
        super(props);
        this.state = {
            itemBook: [],
            currentAmount: []
        }
    }

    deleteShopping(book) {
        this.setState({
            itemBook: this.state.itemBook.filter(item => item.id !== book.id)
        })

        this.props.deleteFunction(book)
    }
     
    handleChange(id, value) {     
        this.state.itemBook.filter(shopping => {

            if( value > shopping.stock) {
                alert("Valor maior do que o estoque.");  
                return false;
            }

            if (shopping.id === id) {
                return true;
            }
            return false;
            }).map(shopping => {
                this.setState({
                    itemBook: this.state.itemBook.map(item => {
                        if (item.id === shopping.id) {
                            return {
                                ...item,
                                currentAmount: value,
                                subTotal: (value * item.price).toFixed(2)
                            }
                        }
                        return item
                    })
                })
            })
    }

    render() { 
        const shopping = this.state.itemBook; 
        
        //lógica para o total
        //const total = shopping.reduce() 
        return (
            shopping.map(book => { 
 
            return (
                <div key={book.id} className="item">
                    <p className="item--space"> Título: {book.title} </p>
                    <p className="item--space"> Autor: {book.autor} </p>
                    <p className="item--space"> Preço unitário: R$ {book.price} </p>
                    <p className="item--space"> Quantidade em Estoque: {book.stock} unidades </p>
                    <div className="item--adjust flexv">
                        <p className="item--space">Quantidade: </p>
                        <input
                            className="item_input"
                            value={book.currentAmount || 1}
                            type="number"
                            placeholder="Quantidade"
                            onChange={(e) => this.handleChange(book.id, e.target.value)}
                            id={book.id}
                            min="1" 
                            max={book.stock}
                        />
                    </div>
                    <p className="item--space"> SubTotal: R$ {book.subTotal || book.price} </p>
                    <button onClick={() => this.deleteShopping(book.id)}>Deletar</button>
                </div>
                );
            })
        );        
    }
}

export default Compras