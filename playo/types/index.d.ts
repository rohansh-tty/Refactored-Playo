export default interface Event {
    id: string;
    name: string;
    description: string;
    date: Date;
    price: string;
    time: string;
    location: string;
    hostedby: Participant;
    participants: Participant[];
    
  }

export default interface Participant{
    id: string;
    name: string;
    email: string;
    phone: string;
    image: string;
    bookedevents: Event[];
    eventshosted: Event[];


}

