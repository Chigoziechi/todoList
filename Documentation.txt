Setup and configure a server using Node.js and Express in a file named app.js.

run npm install in the package.json directory to install dependencies
create the database table by runin node  src/db/schema from the root folder

run node start

GET /todo returns all todo list

#to add item to todo list
POST /todo  
payload {
	"name": "string",
	"description": "string "
        }

# to delete item from the list
DELETE /todo/:id
params: id integer
