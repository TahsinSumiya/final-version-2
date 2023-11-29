// const jwt = require('jsonwebtoken');

// // Middleware for verifying JWT token
// const authenticateToken = (req, res, next) => {
//   // Get the token from the request headers or cookies
//   const token = req.headers.authorization || req.cookies.token;

//   if (!token) {
//     // No token provided, unauthorized
//     return res.status(401).json({ status: 401, message: 'Unauthorized' });
//   }

//   // Verify the token
//   jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
//     if (err) {
//       // Token verification failed, unauthorized
//       return res.status(401).json({ status: 401, message: 'Unauthorized' });
//     }

//     // Attach the user object to the request for use in subsequent route handlers
//     req.user = user;

//     // Proceed to the next middleware or route handler
//     next();
//   });
// };

// // Apply the middleware to routes that need authentication

