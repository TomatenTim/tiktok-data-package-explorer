
import { ResponsiveBar } from '@nivo/bar';
import type { NextPage } from 'next'
import { useMemo } from 'react'
import ProfileCard from '../components/stats/ProfileCard';
import { useUserData } from '../stores/userData'


const Home: NextPage = () => {


  const userData = useUserData(state => state.userData);


  return (
    <>

      <ProfileCard userProfile={userData.profile} />

    </>
  )
}

export default Home
