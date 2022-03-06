const express = require('express');
const router = express.Router();
const Product = require('../models/product');
const review = require('../models/review');
const Review = require('../models/review');
const mongoose = require('mongoose')


router.get('/products', async (req, res) => {
    
    const products = await Product.find({});

    res.render('products/index', { products });
});


router.get('/products/new', (req, res) => {
    res.render('products/new');
});

router.post('/products', async (req, res) => {
    const { name, price, desc, img } = req.body;

    await Product.create({ name, price, desc, img });

    res.redirect('/products');
});

router.get('/products/:id', async (req, res) => {
    const { id } = req.params;

    const product = await Product.findById(id).populate('reviews');

    res.render('products/show', { product });
});


router.get('/products/:id/edit', async (req, res) => {
    const { id } = req.params;

    const product = await Product.findById(id);

    res.render('products/edit', { product })
});

router.patch('/products/:id', async (req, res) => {
    const { id } = req.params;

    const { name, price, img, desc } = req.body;

    await Product.findByIdAndUpdate(id, { name, price, img, desc });

    res.redirect(`/products/${id}`);
});

router.delete('/products/:id', async (req, res) => {
    
    const { id } = req.params;

    await Product.findByIdAndDelete(id);

    res.redirect('/products');
});

router.delete('/products/:productid/:reviewid',async(req,res)=>{
    
    const{ reviewid,productid } = req.params;
    // console.log(reviewid.trim());
    // const id = mongoose.Types.ObjectId(reviewid);
    // console.log(id.trim())
    await Review.findByIdAndDelete(reviewid);

    // res.redirect(`/products`);
    res.redirect(`/products/${productid}`);

    const product = await Product.findById(productid);
    console.log(product.reviews[3])

    
});

router.post('/products/:productid/review', async(req, res) => {
    
    const { productid } = req.params;
    const { rating, comment } = req.body;

    // finding the product to add review
    const product = await Product.findById(productid);

    // creating a new review with given rating and comment
    const review = new Review({ rating, comment });

    // adding a review to reviews array of a product
    product.reviews.push(review);
    
    // saving the review in a database

    await review.save();

    // saving the product in a database
    await product.save();


    res.redirect(`/products/${productid}`);
})

module.exports = router;