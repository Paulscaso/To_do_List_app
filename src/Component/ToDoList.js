import React, { Component,useState } from "react";
export default class TodoList extends Component {
    constructor(){
        super()

        this.state={
            todos: [
              { Id: 1, Title: 'Push your code to github', Status: 'Done' },
              { Id: 2, Title: 'put your assignments in excelsheet', Status: 'Pending' },
              { Id: 3, Title: 'watch ReactJs tutorials in Youtube', Status:'pending'}
            ]
         }
    }
render() {
   
    return (

         <div>
             <h1>TodoList </h1>
                <table className="table">
                   <thead>
                     <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Status</th>
                        <th>Action</th>
                     </tr>
                   </thead>
                   <tbody>
                       {
                           this.state.todos.length > 0 ?
                           this.state.todos.map(x => {
                            return (
                                 <tr key={x.Id}>
                                 <td>{x.Id}</td>
                                 <td>{x.Title}</td>
                                 <td >{x.Status}</td>
                                 <td>
                                    <button>Delete</button>
                                 </td>
                                 </tr>
                             );
                          })
                          : <h3>No todos</h3>
                           
                       }
                    </tbody>
                </table>
          </div> 
      );
   }
}