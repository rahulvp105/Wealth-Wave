// Ace Excel: prod_QqL7xlwKiZQ0GD
// Personal Finance: prod_QqLEz5T17qvdYx
//  Systemetic Investment: prod_QqLGS9Z371eUYo

const express = require("express")
const cors = require("cors")
const { it } = require("node:test")
var stripe = require("stripe")("sk_test_51PyeBe12LfZKuF5wJgIGeBQBTjIETR6zOatrgaVgiMfrBxq4u5RBXcD721Yy6tDAmNSCHl798uJuJVn2e5nSZZUk00aymTvBRx")
const mongoose = require("mongoose")
const app = express()
const jwt = require("jsonwebtoken")
const FormDataModel = require ('./model/FormData');

app.use(cors())
app.use(express.static("public"))
app.use(express.json())


app.use(express.urlencoded())

mongoose.connect('mongodb://localhost:27017/WealthWave', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('MongoDB connected');
}).catch(err => console.log(err));

const formSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    city: String,
    workingType: String,
    interest: String
});

const clubForm = mongoose.model('clubForm', formSchema);

const User = new mongoose.Schema({
    username: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},

})

const usermodel  = mongoose.model("UserData",User)
// app.post('/api/register',async(req,res)=>{
//     console.log(req.body)
//     const {username,email,password} = req.body
//     try{
//         console.log(req.body)
//         const newUser=new usermodel({username,email,password})
//         await newUser.save()
//         res.json({status: "ok"})
//     }
//     catch(err){
//         console.log(err)
//     }
// })

app.post('/register', (req, res)=>{
    console.log(req.body)
    const {email, password} = req.body;
    FormDataModel.findOne({email: email})
    .then(user => {
        if(user){
            res.json("Already registered")
        }
        else{
            FormDataModel.create(req.body)
            .then(log_reg_form => res.json(log_reg_form))
            .catch(err => res.json(err))
        }
    })
    
})
app.post('/login', (req, res)=>{
    // To find record from the database
    const {email, password} = req.body;
    FormDataModel.findOne({email: email})
    .then(user => {
        if(user){
            // If user found then these 2 cases
            if(user.password === password) {
                res.json("Success");
            }
            else{
                res.json("Wrong password");
            }
        }
        // If user not found then 
        else{
            res.json("No records found! ");
        }
    })
})
// app.post('/api/login',async(req,res)=>{
//     try{
//         const user = await User.findOne({
//             email: req.body.email,
//             password: req.body.password
//         })
//         if(user){
//             const token = jwt.sign({
//                 email: user.email,
//                 password: user.password
//             },"secret123")
//             res.json({status: "ok", user: true})
//         }
//         else{
//             res.json({status: "ok", user: false})

//         }
//     }
//     catch(err){
//         console.log(err)
//     }
// })

app.post('/api/form', async (req, res) => {
    console.log(req.body)
    const { name, email, phone, city,workingType,interest } = req.body;
    console.log(name)

    try {
        const newForm = new clubForm({ name, email, phone, city,workingType,interest });
        await newForm.save();
        res.status(201).json({ message: 'Form data saved' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to save form data' });
    }
});

app.post("/checkout",async(req,res)=>{
    const items = req.body.items
    let lineItems = []

    items.forEach(item => {
        lineItems.push({
            price: item.id,
            quantity: item.quantity
        })
    });

    const session = await stripe.checkout.sessions.create({
        line_items: lineItems,
        mode: 'payment',
        success_url: "http://localhost:3000/success",
        cancel_url: "http://localhost:3000/cancel"

    })

    res.send(JSON.stringify({
        url: session.url
    }))
})

app.listen(3001 ,()=>{
    console.log("Server is running pn 3001")
})