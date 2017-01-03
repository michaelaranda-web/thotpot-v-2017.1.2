# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

puts "Creating Categories..."

Category.create(title: "Social Skills", url_friendly_title: 'social_skills')
Category.create(title: "Tennis", url_friendly_title: 'tennis')
Category.create(title: "Public Speaking", url_friendly_title: 'public_speaking')

social_skills_id = Category.where(title: "Social Skills").first.id
tennis_id = Category.where(title: "Tennis").first.id
public_speaking_id = Category.where(title: "Public Speaking").first.id

puts "Creating Thots..."

Thot.create(title: "Ask open-ended questions to promote discussion", details: "Open-ended questions give more room for people to elaborate. But if the questions is too open-ended, they may not be able to come up with anything too interesting to say.", category_id: social_skills_id)
Thot.create(title: "Stay in touch with people", details: "It only takes a little bit of effort to check in with people (even just a few times a year), but it makes such a big difference in terms of maintaining friendships", category_id: public_speaking_id)
Thot.create(title: "Keep your eye on the ball", details: "Keeping you eye on the ball is easy to forget, but is usually what's wrong when your game feels off.", category_id: tennis_id)
Thot.create(title: "Jump into the serve for more power", details: "Jumping into the ball gives you forward momentum and causes you to end up inside of the court.", category_id: tennis_id)
Thot.create(title: "Invitation and Inspire", details: "Check this site out: http://www.improveyoursocialskills.com/conversation", category_id: public_speaking_id)
