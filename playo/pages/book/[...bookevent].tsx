import { useRouter } from 'next/router'

const BookEvent = () => {
    const router = useRouter()
    const slug = router.query;
    const eventId = slug['bookevent']
    return (
        <>
            <h1>Book Event: {eventId}</h1>
        </>
    )
}

export default BookEvent