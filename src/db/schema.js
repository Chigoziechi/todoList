const db = require('./connection')
sql = `CREATE TABLE todo_list(
	id integer primary key, 
	name varchar, 
	description varchar)`;
db.run(sql);
 