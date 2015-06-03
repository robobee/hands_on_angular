# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Category.create( name: "Hello World" )
Category.create( name: "New" )
Category.create( name: "Awesome" )
User.create( email: 'admin@example.com', password: 'password')
User.create( email: 'admin2@example.com', password: 'password')
