import { useRouter } from 'next/router'

const EventInfo = () => {
    const router = useRouter()
    const slug = router.query;
    console.log('slug', slug)

    return (
        <>
            <h1>Event Page</h1>
        </>
    )
}

export default EventInfo