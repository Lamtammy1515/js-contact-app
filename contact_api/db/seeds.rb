# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

business = Category.create(name: 'business')
family = Category.create(name: 'family')
friend = Category.create(name: 'friend')

# Contact.create(name: 'sunshine', email: 'sunshine@example.com', number: "(111)111-1111")
# Contact.create(name: 'mick', email: 'mick@example.com', number: "(222)222-2222")
# Contact.create(name: 'luffy', email: 'luffy@example.com', number: "(333)333-3333")

Contact.create([
    {name: 'sunshine', email: 'sunshine@example.com', number: "(111)111-1111", category_id: 1},
    {name: 'mick', email: 'mick@example.com', number: "(222)222-2222", category_id: 2},
    {name: 'luffy', email: 'luffy@example.com', number: "(333)333-3333", category_id: 3}
])