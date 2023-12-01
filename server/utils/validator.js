const { body, validationResult } = require('express-validator');
const mongoose = require('mongoose');

const validateTask = [
    body('title').notEmpty().withMessage('Title is required').isLength({ max: 100 }).withMessage('Title cannot exceed 100 characters'),
    body('description').optional().isString().withMessage('Description should be a string'),
    body('completed').optional().isBoolean().withMessage('Completed should be a boolean value'),

    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];

module.exports = { validateTask };

// exports.userSignupValidator = (req, res, next) => {
//     // req.check('name', 'Name is required.').notEmpty();
//     // req.check('email', 'Email must be between 4 to 32 characters.')
//     //    .matches(/.+\@.+\..+/)
//     //    .withMessage('Email must contain @.')
//     //    .isLength({
//     //        min: 4,
//     //        max: 32
//     //    });
//     // req.check('password', 'Password is required.').notEmpty();
//     // req.check('password')
//     //    .isLength({min:4})
//     //    .withMessage('Password must contain at least 4 characters.')
//     //    .matches(/\d/)
//     //    .withMessage('Password must contain a number.');
//     // const errors = req.validationErrors();
//     // if (errors) {
//     //     const firstError = errors.map(error => error.msg)[0];
//     //     return res.status(400).json({ error: firstError});
//     // }   
//    [ body('name').notEmpty().withMessage('Name is required.'),
//   body('email')
//     .isLength({ min: 4, max: 32 }).withMessage('Email must be between 4 to 32 characters.')
//     .matches(/.+\@.+\..+/).withMessage('Email must contain @.'),
//   body('password')
//     .notEmpty().withMessage('Password is required.')
//     .isLength({ min: 4 }).withMessage('Password must contain at least 4 characters.')
//     .matches(/\d/).withMessage('Password must contain a number.'),
// ], (req, res) => {
//   // Check for validation errors
//   const errors = validationResult(req);
//   if (!errors.isEmpty()) {
//     return res.status(400).json({ errors: errors.array() });
//   }
//     next();
// }}