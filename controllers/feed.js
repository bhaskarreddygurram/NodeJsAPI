const mysql = require('mysql');

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "configuration"
});
//Yconsole.log(con)

exports.getPosts = ( req, res, next ) => {

 con.connect(function(err) {
        if (err) throw err;
    con.query("SELECT * FROM cf_entity", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
        res.status(200).json(result);
      }); 
    //res.status(200).json({ posts: [{title: 'First Post',conntent: 'this is first post'}], msg: "success", count: 1});
    
      });
};

exports.createPosts = ( req, res, next ) => {
    console.log('request', req);
    const title = req.body.title;
    const content = req.body.content;
    // Create post in DB
    res.status(201).json({
        msg: 'Post successfully created',
        post: {id: new Date().toDateString(), title: title, content: content},
    })
}