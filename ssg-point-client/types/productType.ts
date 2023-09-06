export interface ProductDataType {
  products: ProductType[],
  total: Number,
  skip: Number,
  limit: Number
}

export interface ProductType {
  id: Number,
  title: String,
  description: String,
  price: Number,
  discountPercentage: Number,
  rating: Number,
  stock: Number,
  brand: String,
  category: String,
  thumbnail: String,
  images: String[],
}