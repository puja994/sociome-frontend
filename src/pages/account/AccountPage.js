import React from 'react'
import { AccountComp } from '../../components/account/AccountComp'
// import { AccountComp } from '../../components/account/AccountComp'
import { PublicDonation } from '../../components/account/PublicDonation'
import { PrivateLayout } from '../../components/layout/PrivateLayout'
import { Group } from '../group/Group'

export const AccountPage = () => {
    return (
       <PrivateLayout>
           <AccountComp/>
       </PrivateLayout>
    )
}
