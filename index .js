
//Middleware
// Middleware in Node.js is a function that handles requests between the server and the final route handler.
// It can modify the request or response, run code, and pass control to the next function. Middleware is essential for tasks like authentication, logging, and data parsing.
app.use(express.urlencoded({extended: false})); 

app.use((req,res,next)=>{
    console.log("hello from middleware 1");
next(); 
});
//it allow code to move forward 

app.use((req,res,next)=>{
    console.log("hello from middleware 2");
return res.end('Hey');
});
//then it go to middleware 2 for print or excute the further part .