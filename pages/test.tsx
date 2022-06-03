
import type { NextPage } from 'next'
import { useMemo } from 'react'
import { useUserData } from '../stores/userData'


const Home: NextPage = () => {


  const userData = useUserData(state => state.userData);

  const data = useMemo(() => {
    return JSON.stringify({
      likes: userData?.favorites?.videos?.length,
      videos: userData?.history?.videos?.length,
    })
  }, [userData]);

  return (
    <>
      
      {data}

    </>
  )
}

export default Home
