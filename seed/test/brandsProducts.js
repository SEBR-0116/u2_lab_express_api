const db = require('../db')
const { Brand, Product } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const brand1 = await new Brand({
    title: "Kakka Kaaka",
    director: "GVM",
    runtime: 2.35,
    rating: 5,
    year_release: "2005-02-09",
    description: "Action",
    gener: "Action",
    image: 'https://www.apple.com'
    
  })
  brand1.save()

  const brand2 = await new Brand({
    title: "Leo",
    director: "Logesh",
    runtime: 2.65,
    rating: 5,
    year_release: "2024-02-09",
    description: "Action",
    gener: "Action",
    image:  'https://www.vespa.com'
  })
  brand2.save()

  const brand3 = await new Brand({
    title: "VTV",
    director: "GVM",
    runtime: 2.15,
    rating: 5,
    year_release: "2008-02-09",
    description: "Romance",
    gener: "Romance",
    image: 'https://www.newbalance.com'
  })
 
  const products = [
    {
        name: "Suriya",
        bob: "1985-02-09",
        image: 'https://www.apple.com/airpods',
        nationality: "Indian",
        is_active: true,
        brand_id: brand1._id
    },
    {
        name: "Vijay",
        bob: "1983-05-19",
        image: 'https://www.apple.com/iphone-11-pro',
        nationality: "Indian",
        is_active: true,
        brand_id: brand2._id
     
    },
    {
        name: "Simbu",
        bob: "1989-05-19",
        image: 'https://www.apple.com/watch',
        nationality: "Indian",
        is_active: true,
        brand_id: brand3._id
 
    }
   
  ]

  await Product.insertMany(products)
  console.log('Created products!')
}

const run = async () => {
  await main()
  db.close()
}

run()