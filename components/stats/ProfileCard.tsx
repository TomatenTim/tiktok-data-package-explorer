import { Avatar, Card, Grid, Tooltip, Typography } from "@mui/material"
import { profile } from "console";
import useTranslation from "next-translate/useTranslation"
import Image, { ImageProps } from "next/image";
import { useState } from "react";
import IUserData from "../../interfaces/IUserData"


interface IProfileCardProps {
  userProfile: IUserData['profile']
}
export default function ProfileCard({userProfile}:IProfileCardProps) {

  const { t } = useTranslation('stats');

  // userProfile.username = 'username';
  // userProfile.email = 'meine@mail.com';
  // userProfile.phoneNumber = '+49123456789';
  // userProfile.bio = 'This is my bio :D';
  
  if(!userProfile) 
    return (
      <>
        <Card>
          ERROR :/
        </Card>
      </>
    )

  return (
    <>
      <Card>

        <Grid container>
        
          {/* Profile Picture */}
          <Grid item xs={12} sx={{
            display: 'flex',
            justifyContent: 'center'
          }}>
            <Avatar
              sizes="12"
              src={userProfile.profilePictureUrl}
              alt={userProfile.username}
              sx={{ width: 150, height: 150 }}
            />
          </Grid>

          {/* Username */}
          <Grid item xs={12} sx={{
            display: 'flex',
            justifyContent: 'center'
          }}>
            <Typography variant="h5">
              {userProfile.username}
            </Typography>
          </Grid>

          {/* Bio */}
          <Grid item xs={12} sx={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '1rem'
          }}>
            <Typography variant="body1">
              {userProfile.bio}
            </Typography>
          </Grid>

          <GridField name={t('profile.username')} value={userProfile.username} />
          <GridField name={t('profile.birthday')} value={userProfile.birthday?.toLocaleDateString()} />
          <GridField name={t('profile.email')} value={userProfile.email} hideValue={true} />
          <GridField name={t('profile.phoneNumber')} value={userProfile.phoneNumber} hideValue={true} />
          


        </Grid>
      

        {/* { JSON.stringify(userProfile) } */}
      </Card>
    </>
  )
}



interface IGridFieldProps {
  name: string;
  value: string|number|undefined;
  hideValue?: boolean; // should the value be hidden by default
}
const GridField = ({ name, value, hideValue }: IGridFieldProps) => {

   const {t} = useTranslation('stats')

  // state to store currend censorState
  const [valueHidden, setValueHidden] = useState<boolean>(hideValue||false);

  
  // setValueHidden(true);
  // handle click on value
  const handleClick = () => {
    setValueHidden(!valueHidden);
  }

  return (
    <>
      <Grid item xs={6}>
        { name }
      </Grid>
      <Grid item xs={6} onClick={handleClick}>
        { valueHidden ? 
          <Tooltip title={t('clickToReveal')}><span>{'*'.repeat(value?.toString().length || 0)}</span></Tooltip>:
          <>{value}</>
        }
      </Grid>
    </>
  )
}