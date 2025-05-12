// const asyncHandler = (requestHandler) => {
//   return async (req, res, next) => {
//     Promise
//       .resolve(requestHandler(req, res, next))
//       .catch((err) => next(err));
//   };
// };

// or

function asyncHandler(requestHandler) {
  return function (req, res, next) {
    Promise
      .resolve(requestHandler(req, res, next))
      .catch(function (err) {
        next(err);
      });
  };
}

export { asyncHandler };
