
import React, { Component } from 'react';
import './CategoryItem.css';
import CategoryItem from './CategoryItem';

class Category extends Component {
    constructor(){
        super();
        this.state = {
            categories: []
        }
        this.getData();
    }

    getData(){
        fetch("http://127.0.0.1:8000/api/categories")
        .then(response => {
                response.json().then((data) =>  {
                    console.log(data);
                this.updateUI(data);
            });
        });
        }

    updateUI(data){
        this.setState({
            categories:data
        })
    }

    show(){
        const { categories } = this.state;
        var list = categories.map((item,index)=>
            <CategoryItem item = {item} key = {index}/>

        )
        return list;

    }
    render() {
        return (
            <div className="Category">
                <h1>COURSE</h1>
                {this.show()}
            </div>
        );
    }
}

export default Category;