import React from 'react'
import { withPageAuthRequired } from '@auth0/nextjs-auth0'

function PremiumContent() {
  return (
    <div>PremiumContent for Members only</div>
  )
}

export default PremiumContent

export const getServerSideProps = withPageAuthRequired();