import Participant from './Participant'


const Event = new Schema({
    id: Number,
    name: String,
    description: String,
    date: Date,
    location: String,
    price: Number,
    host: String,
    participants: [Participant],
})

