const express =
    require("express");

const router =
    express.Router();

const Customer =
    require("../models/Customer");


// =====================
// CREATE ACCOUNT
// =====================

router.post(
    "/",
    async (req, res) => {

        try {

            const newCustomer =
                new Customer(req.body);

            const savedCustomer =
                await newCustomer.save();

            res.status(201)
                .json(savedCustomer);

        }

        catch (error) {

            res.status(500)
                .json({
                    message:
                        error.message
                });

        }

    });


// =====================
// FETCH CUSTOMERS
// =====================

router.get(
    "/",
    async (req, res) => {

        try {

            const customers =
                await Customer.find();

            res.status(200)
                .json(customers);

        }

        catch (error) {

            res.status(500)
                .json({
                    message:
                        error.message
                });

        }

    });


// =====================
// UPDATE CUSTOMER
// =====================

router.put(
    "/:id",
    async (req, res) => {

        try {

            const updatedCustomer =
                await Customer
                    .findByIdAndUpdate(

                        req.params.id,

                        req.body,

                        {
                            new: true
                        }

                    );

            res.status(200)
                .json(updatedCustomer);

        }

        catch (error) {

            res.status(500)
                .json({
                    message:
                        error.message
                });

        }

    });


// =====================
// DELETE CUSTOMER
// =====================

router.delete(
    "/:id",
    async (req, res) => {

        try {

            await Customer
                .findByIdAndDelete(
                    req.params.id
                );

            res.status(200)
                .json({
                    message:
                        "Customer Deleted"
                });

        }

        catch (error) {

            res.status(500)
                .json({
                    message:
                        error.message
                });

        }

    });

// =====================
// DEPOSIT MONEY
// =====================

router.put(
    "/deposit/:id",
    async (req, res) => {

        try {

            const amount =
                Number(req.body.amount);

            const customer =
                await Customer.findById(
                    req.params.id
                );

            customer.balance += amount;

            await customer.save();

            res.status(200)
                .json(customer);

        }

        catch (error) {

            res.status(500)
                .json({
                    message:
                        error.message
                });

        }

    });


// =====================
// WITHDRAW MONEY
// =====================

router.put(
    "/withdraw/:id",
    async (req, res) => {

        try {

            const amount =
                Number(req.body.amount);

            const customer =
                await Customer.findById(
                    req.params.id
                );


            // Prevent negative balance

            if (
                customer.balance
                < amount
            ) {

                return res
                    .status(400)
                    .json({

                        message:
                            "Insufficient Balance"

                    });

            }


            customer.balance -= amount;

            await customer.save();

            res.status(200)
                .json(customer);

        }

        catch (error) {

            res.status(500)
                .json({
                    message:
                        error.message
                });

        }

    });

module.exports =
    router;








// const express =
// require("express");

// const router =
// express.Router();

// const Customer =
// require(
// "../models/Customer"
// );


// // =====================
// // CREATE ACCOUNT
// // =====================

// router.post(
// "/",
// async (req, res) => {

// try {

// const newCustomer =
// new Customer(
// req.body
// );

// const savedCustomer =
// await
// newCustomer.save();

// res.status(201)
// .json(savedCustomer);

// }

// catch(error){

// res.status(500)
// .json({
// message:
// error.message
// });

// }

// });


// // =====================
// // FETCH CUSTOMERS
// // =====================

// router.get(
// "/",
// async (req, res) => {

// try {

// const customers =
// await Customer.find();

// res.status(200)
// .json(customers);

// }

// catch(error){

// res.status(500)
// .json({
// message:
// error.message
// });

// }

// });

// module.exports =
// router;