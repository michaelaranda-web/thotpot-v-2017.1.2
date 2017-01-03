# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

#Categories
Category.create(title: "Social Skills")
Category.create(title: "Tennis")
Category.create(title: "Public Speaking")

public_speaking_id = Category.where(title: "Public Speaking").first.id

# Thots
Thot.create(title: "Invitation and Inspire", details: "Check this site out: http://www.improveyoursocialskills.com/conversation", category: public_speaking_id)