import React from 'react'
import { withPageAuthRequired } from '@auth0/nextjs-auth0'
import events from '../db/events.json';
import Event from '../types/index'
import Participant from '../types/index'
import Link from 'next/link'
import { WithPageAuthRequired } from '@auth0/nextjs-auth0/client';

function feed() {
    return (

        <>
            <div className="flex flex-col h-screen  ">
                <div className="h-1/4">
                    <div className="flex flex-row justify-between items-center h-full">
                        <div className="flex flex-row items-center">
                            Playo
                        </div>
                        <div className="flex flex-row items-center">
                            <button className="btn "> <a href='/api/auth/logout'>Logout</a></button>
                        </div>
                        <div className="flex flex-row items-center">
                            <button className="btn "> <a href='/api/auth/logout'>Create an Event</a></button>
                        </div>
                    </div>
                </div>

                <div className="shadow-md sm:rounded-lg h-3/4">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="py-3 px-6">
                                    Name
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Location
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Date
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Price
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    <span className="sr-only">Edit</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                events["events"].map((event: any) => (<>
                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                        <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            <Link
                                                href={{
                                                    pathname: '/events/[id]',
                                                    query: { id: event.id },
                                                }}
                                            >
                                                {event.name}
                                            </Link>
                                        </th>
                                        <td className="py-4 px-6">
                                            {event.location}
                                        </td>
                                        <td className="py-4 px-6">
                                            {event.hostedby}
                                        </td>
                                        <td className="py-4 px-6">
                                            {event.price}
                                        </td>
                                        <td className="py-4 px-6 text-right">
                                            <Link href={{
                                                pathname: '/book/[id]',
                                                query: { id: event.id },
                                            }}>
                                                <button className="btn btn-active btn-primary">Book Now</button>

                                            </Link>
                                        </td>
                                    </tr>
                                </>))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>


    )
}

export default feed
export const getServerSideProps = withPageAuthRequired();

