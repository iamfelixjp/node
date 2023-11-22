const Product = require('../models/productModel');

const getAllProductsStatic = async (req, res) => {
  // throw new Error('testing async error');
  const search = 'dern';
  const products = await Product.find({ price: { $gt: 30 } })
    .sort('price')
    .select('name price');

  res.status(200).json({ products, productCount: products.length });
};

// GET ALL PRODUCTS
const getAllProducts = async (req, res) => {
  const { featured, company, name, sort, fields, numericFilters } = req.query;
  const queryObject = {};

  if (featured) {
    queryObject.featured = featured === 'true' ? true : false;
  }

  if (company) {
    queryObject.company = company;
  }

  if (name) {
    queryObject.name = { $regex: name, $options: 'i' };
  }

  // NUMERIC FILTERS
  if (numericFilters) {
    const operatorMap = {
      '>': '$gt',
      '>=': '$gte',
      '=': '$eq',
      '<': '$lt',
      '<=': '$lte',
    };

    // const regEx = /\b(<|>|>=|=|<|<=)\b/g;
    const regEx = /\b(<|>|>=|=|<=)\b/g;

    let filters = numericFilters.replace(
      regEx,
      (match) => `-${operatorMap[match]}-`
    );

    const options = ['price', 'rating'];
    filters = filters.split(',').forEach((item) => {
      const [field, operator, value] = item.split('-');
      if (options.includes(field)) {
        queryObject[field] = { [operator]: Number(value) };
      }
    });
  }

  console.log(queryObject);
  let result = Product.find(queryObject);

  // SORT
  if (sort) {
    // console.log(sort);
    const sortList = sort.split(',').join(' ');
    result = result.sort(sortList);
  } else {
    result = result.sort('createdAt');
  }

  // SELECTED FIELDS
  if (fields) {
    const fieldstList = fields.split(',').join(' ');
    result = result.select(fieldstList);
  }

  // PAGINATION LOGIC
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;
  const skip = (page - 1) * limit;

  // ADDING LIMIT AND SKIP TO QUERY TO BE SENT TO DB
  result = result.skip(skip).limit(limit);

  // AWAITING DATA FROM DB BASED ON QUERY
  const products = await result;

  // RESPONSE TO USER WITH DATA FROM DB
  res.status(200).json({ products, productCount: products.length });
};

module.exports = {
  getAllProducts,
  getAllProductsStatic,
};
