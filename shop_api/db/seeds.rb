# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Product.delete_all

product1 = Product.create(
  {
  item_id: "1#1",
  price: 25.00,
  url: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/797ca034358287.56cdbd029cecb.jpg",
  stock: 10,
  clothing: "scarf"
  });

product2 = Product.create(
  {
  item_id: "2#1",
  price: 15.00,
  url: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/2472ba34358287.56cdbd029de83.jpg",
  stock: 9,
  clothing: "scarf"
  });

product3 = Product.create(
  {
  item_id: "3#1",
  price: 35.00,
  url: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/321f8334358287.56cdbd02a1499.jpg",
  stock: 11,
  clothing: "top"
  });




