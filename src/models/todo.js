const db = require('../db/connection.js');
 let sql;
 

function Todo() {
  this.get = async function(res) {

    const getAllQ = `SELECT * FROM todo_list`;
       db.all(getAllQ, [], (err, rows)=>{
        if (err) return res.status(400).send(err);
          return res.status(200).send({
            status: true,
            data: rows
          })
       });
   
  };
   
  this.create = async function(todo,res) {
    if (!todo.name || !todo.description) {
      return res.status(400).send({ message: 'Information not complete' });
    }
    
    const createTodo = `insert into todo_list (name, description) Values (?, ?) Returning *`
    const values = [
      todo.name,
      todo.description
    ]
        db.run(createTodo, values, (err)=>{
          if (err) return res.status(400).send(err);

          return res.status(201).send(
            {
              status: true,
              message: ' Todo added to list successful',
            })
          });    
  

  };  
  this.delete = async function(id,res) {
   const deleteTodo = `DELETE from todo_list where id = ? `
     db.run(deleteTodo, [id], (err)=>{
      if(err) return res.status(400).send(err);
      return res.status(201).send({
        message: `deleted successfully`,        
      });
     });
    }

}
module.exports = new Todo();
