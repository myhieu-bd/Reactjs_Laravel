import React, { Component } from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { withRouter } from 'react-router-dom';
class MyBlogItem extends Component {
    onDelete(id){
      return(event)=> {
          fetch("http://127.0.0.1:8000/api/delete/post/" +id,{
              method:"DELETE",
              headers: {
                "Content-Type": "application/json"
            },
          }).then(response => {
              console.log(response);
              alert("Delete a post was successfull");
                    window.location.reload();
          });
      }
    }
    render() {
        return (
           
                <tr>
                    <td>{this.props.item.id}</td>
                    <td>  <Link to ={'/post/' + this.props.item.id}><img src={'http://127.0.0.1:8000' + this.props.item.image}  height="100px" width="100px" /> </Link></td>
                    <td>{this.props.item.content}</td>
                   <td className="edit"> <Link to ={'/editpost/'+this.props.item.id }><button>Edit</button></Link></td>
                    <td className="dele"><button onClick={this.onDelete(this.props.item.id)}>Delete</button></td>
                </tr>
                
        );
    }
}

export default withRouter(MyBlogItem);