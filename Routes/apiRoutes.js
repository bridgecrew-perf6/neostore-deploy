const express = require("express");
const router = express.Router();
const productModel = require("../Db/productSchema")
const cartModel = require("../Db/cartSchema")
const addressModel = require("../Db/addressSchema")
const placedorderModel = require("../Db/placedorderSchema")
const jwt = require("jsonwebtoken");
const jwtSecret = "asdasd324234#@$dgdfg";
function authenticateToken(req, res, next) {
    let token = req.body.token
    if (token == null) {
        res.json({ "err": 1, "msg": "Token not match" })
    }
    else {
        jwt.verify(token, jwtSecret, (err, data) => {
            if (err) {
                res.json({ "err": 1, "msg": "Token incorrect" })
            }
            else {
                next();
            }
        })
    }
}
// fetch product ----------------------------------------------------------------------------
router.get("/", (req, res) => {
    productModel.find().populate(["category_id", "color_id"]).then(product => {
        res.send(product)
    })
}) 
router.post("/fetchproduct", (req, res) => {
    let findArg = req.body.filterArgs!=undefined?req.body.filterArgs:{};
    let order = req.body.order ? req.body.order : "asc";
    let sortBy = req.body.sortBy ? req.body.sortBy : "created_at";
    productModel.find(findArg).populate(["category_id", "color_id"]).sort([[sortBy, order]]).then(product => {
        res.send(product)
    })
})

// router.post("/fetchproducts", (req, res) => {

//     let findArg = {}
//     let order = req.body.order ? req.body.order : "asc";
//     let sortBy = req.body.sortBy ? req.body.sortBy : "product_rating";
//     let page = req.body.page ? req.body.page : 1;
//     let size = req.body.size ? req.body.size : 6; 

//     let limit = parseInt(size);
//     let skip = (page - 1) * 6;
//     console.log('skip', skip);
//     console.log('limt', limit);
//     console.log(req.body.filters)
// for (let key in req.body.filters) {
//     if (req.body.filters[key].length > 0) {
//         findArg[key] = req.body.filters[key];
//     }
// }
//         productModel.find(findArg)
//             .populate(["category_id", "color_id"])
//             .skip(skip)
//             .limit(limit)
//             .sort([[sortBy, order]])
//             .exec((err, product) => {
//                 if (err) return res.status(400).json({ success: false, err })
//                 res.status(200).json(product)
//             })
//     }
// --------------------------------------add to cart login----------------------
router.post('/fetchcart', authenticateToken, (req, res) => {
    cartModel.findOne({ user_id: req.body.user_id }, (err, data) => {
        if (err) throw err;
        if (data) {
            res.send(data)
        }
    })
})
router.post('/setcart', authenticateToken, (req, res) => {
    cartModel.updateOne({ user_id: req.body.user_id }, { $set: { cart_value: req.body.cartData } }, (err, data) => {
        if (err) {
            res.send(err)
        }
        else {
            res.send(data)
        }
    })
})

// --------------------------------------orders----------------------
router.post('/fetchplacedorder', authenticateToken, (req, res) => {
    placedorderModel.find({ user_id: req.body.user_id }, (err, data) => {
        if (err) throw err;
        if (data) {
            res.send(data)
        }
    })
})
router.post("/addplacedorder", authenticateToken, (req, res) => {
    new placedorderModel({ user_id: req.body.user_id, amount: req.body.amount, address: req.body._address, products: JSON.parse(req.body.productData) }).save((err, data) => {
        if (data) {
            res.json({ success: true, odata: data })
        }
        else {
            console.log(err);
            res.json({ success: false, message: err })
        }
    })
})
router.post('/cancelorder', authenticateToken, (req, res) => {
    console.log(req.body);
    placedorderModel.updateOne({ _id: req.body.user_id }, { $set: { active_flag: false } }, (err, data) => {
        if (err) throw err;
        if (data) {
            console.log(data);
            res.json({ success: true })
        }
    })
})
// -----------------------------------------Address Routes ----------------------
router.post('/fetchaddress', authenticateToken, (req, res) => {
    addressModel.findOne({ user_id: req.body.user_id }, (err, data) => {
        if (err) throw err;
        if (data) {
            res.send(data)
        }
    })
})
router.post('/setaddress', authenticateToken, (req, res) => {
    addressModel.updateOne({ user_id: req.body.user_id }, { $set: { address: req.body.addressArr } }, (err, data) => {
        if (err) throw err;
        else {
            res.json({ success: true })
        }
    })
})
// ---------------------------------------search route --------------------------
router.post('/searchProduct', (req, res) => {
    let value = req.body.value;
    if (value == '') {
        res.send([])
    }
    else {
        productModel.find().populate(["category_id", "color_id"]).then(product => {
            let filteredProduct = product.filter(function (el) {
                return el.product_name.toLowerCase().includes(value.toLowerCase()) || el.category_id.category_name.toLowerCase().includes(value.toLowerCase()) || el.color_id.color_name.toLowerCase().includes(value.toLowerCase());
            })   
            res.send(filteredProduct)
        })
    }
})
module.exports = router;