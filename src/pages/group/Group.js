import React from 'react'
import { GroupFeed } from '../../components/groups/groupfeed/GroupFeed'
import { PrivateGroup } from '../../components/groups/privategroup/PrivateGroup'
import { SearchGroup } from '../../components/groups/searchgroup/SearchGroup'
import { DefaultLayout } from '../../components/layout/DefaultLayout'
import { PrivateLayout } from '../../components/layout/PrivateLayout'
// import './group.css'

export const Group = () => {
    return (
      <DefaultLayout>
            <SearchGroup/>
            <PrivateGroup/>
            <GroupFeed/>
            </DefaultLayout>
            
           
     
    )
}
