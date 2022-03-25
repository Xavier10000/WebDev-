const express = require('express');
const app = express();
const path = require('path');
const connectDB = require('./db');
const seedDB = require('./seed');
const Blog = require('./models/blog');
const methodOverride = require('method-override');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

// Connecting to database
connectDB();


// seedDB();


app.get('/blogs', async (req, res) => {
    const blogs = await Blog.findAll();
    res.render('index', { blogs });
});

app.get('/blogs/new', async (req, res) => {
    res.render('new');
});


app.post('/blogs', async (req, res) => {
    const { author, content, img, title } = req.body;

    await Blog.create({ author, content, img, title });

    res.redirect('/blogs');
});


app.get('/blogs/:id', async (req, res) => {
    
    const { id } = req.params;


    const blog = await Blog.findOne({
        where: {
            id: id
        }
    });

    res.render('show', { blog });
});


// Edit and Delete Homework
app.get('/blogs/:id/edit', async (req,res)=>{
    try{
        const { id } = req.params;

        const blog = await Blog.findOne({
            where: {
                id: id
            }
        });
        res.render('edit',{blog});
    }catch(e){
        console.log(e);
    }
   
});

app.patch('/blogs/:id',async (req,res) =>{

     const { id }= req.params;
     const {author,title,img,content} = req.body;
     await Blog.update({
        author : author,
        title : title,
        img : img,
        content : content
     },
     {returning : true,where:{ id : id }}
     );
     
     res.redirect(`/blogs/${id}`);

});

app.delete('/blogs/:id',async (req,res)=>{
    const { id } = req.params;
    await Blog.destroy({
        where:{
            id : id
        }
    });
    res.redirect('/blogs');
})



app.listen(3000,()=>{
  console.log(`server started at port http://localhost:3000/blogs`);
});