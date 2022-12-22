import Event from './Event'

const Participant =  new Schema({
    id: Number,
    name: String,
    email: String,
    image: String,
    phone: String,
    bookedevents: [Event],
    eventshosted: [Event]
})
