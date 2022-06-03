import jszip from "jszip";
import { off } from "process";
import IUserData from "../interfaces/IUserData";


/**
 * reads userData from .json file in the TikTok Data Export and retuns it as a JSON object
 * 
 * @param zip jszip object from TikTok Data Export
 * @returns   json object with userData
 */
const readUserDataFromZipJson = async (zip: jszip) => {

  const tikTokUserDataFile = zip.file('/user_data.json');
  if (!tikTokUserDataFile) {
    return null;
  }
  const tikTokUserDataJsonString = await tikTokUserDataFile.async('string');
  const tikTokUserData = JSON.parse(tikTokUserDataJsonString);

  // ========================================================== //
  let userData: IUserData = {
  };


  // ====================== FAVORITES ====================== //

  if (!userData.favorites)
    userData.favorites = {};

  // favorites.videos
  userData.favorites.videos = tikTokUserData['Activity']['Like List']['ItemFavoriteList'].map((video: any) => {
    return {
      url: video.VideoLink,
      date: new Date(video.Date)
    }
  });

  // favorites.effects
  userData.favorites.effects = tikTokUserData['Activity']['Favorite Effects']['FavoriteEffectsList'].map((effect: any) => {
    return {
      url: effect.EffectLink,
      date: new Date(effect.Date)
    }
  });

  // favorites.hashtags
  userData.favorites.hashtags = tikTokUserData['Activity']['Favorite Hashtags']['FavoriteHashtagList'].map((hashtag: any) => {
    return {
      url: hashtag.Link,
      date: new Date(hashtag.Date)
    }
  });

  // favorites.sounds
  userData.favorites.sounds = tikTokUserData['Activity']['Favorite Sounds']['FavoriteSoundList'].map((sound: any) => {
    return {
      url: sound.Link,
      date: new Date(sound.Date)
    }
  });

  // ====================== HISTORY ====================== //

  // history.videos
  if (!userData.history)
    userData.history = {};

  userData.history.videos = tikTokUserData['Activity']['Video Browsing History']['VideoList'].map((video: any) => {
    return {
      url: video.VideoLink,
      date: new Date(video.Date)
    }
  });

  // history.logins
  userData.history.logins = tikTokUserData['Activity']['Login History']['LoginHistoryList'].map((login: any) => {
    return {
      date: new Date(login.Date.replace(' UTC', '')),
      ip: login.IP,
      deviceModel: login.DeviceModel,
      deviceOS: login.DeviceSystem,
      networkType: login.NetworkType,
      carrier: login.Carrier


    }
  });

  // history.searches
  userData.history.searches = tikTokUserData['Activity']['Search History']['SearchList'].map((search: any) => {
    return {
      text: search.SearchTerm,
      date: new Date(search.Date)
    }
  });

  // history.shares
  userData.history.shares = tikTokUserData['Activity']['Share History']['ShareHistoryList'].map((share: any) => {
    return {
      date: new Date(share.Date),
      url: share.Link,
      type: share.SharedContent,
      method: share.Method
    }
  });

  // TODO: history.purchases


  // ====================== FOLLOWER / FOLLOWING ====================== //


  userData.follower = tikTokUserData['Activity']['Follower List']['FansList'].map((follower: any) => {
    return {
      username: follower.UserName,
      date: new Date(follower.Date),
    }
  });

  userData.following = tikTokUserData['Activity']['Following List']['Following'].map((following: any) => {
    return {
      username: following.UserName,
      date: new Date(following.Date),
    }
  });



  // ====================== SETTINGS ====================== //

  const tikTokUserDataSettings = tikTokUserData['App Settings']['Settings']['SettingsMap']

  userData.settings = {
    allowDownload: tikTokUserDataSettings['Allow DownLoad'],
    allowOthersToFindMe: tikTokUserDataSettings['Allow Others to Find Me'] === 'Enabled',
    language: tikTokUserDataSettings['App Language'],
    videoLanguagePreferences: tikTokUserDataSettings['Content Preferences']['Video Languages Preferences'],
    personalizedAds: tikTokUserDataSettings['Personalized Ads'] === 'Enabled',
    privateAccount: tikTokUserDataSettings['Private Account'] === 'Enabled',
    notifications: {
      comment: tikTokUserDataSettings['Push Notification']['New Comments on My Video'],
      follower: tikTokUserDataSettings['Push Notification']['New Fans'],
      like: tikTokUserDataSettings['Push Notification']['New Likes on My Video'],
    },
    whoCan: {
      duet: tikTokUserDataSettings['Who Can Duet With Me'],
      stitch: tikTokUserDataSettings['Who Can Stitch with your videos'],
      comment: tikTokUserDataSettings['Who Can Post Comments'],
      dm: tikTokUserDataSettings['Who Can Send Me Message'],
      viewLikes: tikTokUserDataSettings['Who Can View Videos I Liked'],
    }
  }


  // ====================== COMMENTS ====================== //

  userData.comments = tikTokUserData['Comment']['Comments']['CommentsList'].map((comment: any) => {
    return {
      text: comment.Comment,
      date: new Date(comment.Date),
    }
  });

  // ====================== CHATS ====================== //

  Object.keys(tikTokUserData['Direct Messages']['Chat History']['ChatHistory']).forEach((key: string) => {
    const chat = tikTokUserData['Direct Messages']['Chat History']['ChatHistory'][key]

    userData.chats?.push({
      username: key.replace('Chat History with ', '').substring(0, -2),
      messages: chat.map((message: any) => {
        return {
          text: message.Message,
          date: new Date(message.Date),
        }
      })
    });
  });


  // ====================== PROFILE ====================== //

  const none2Undefined = (value:string):string|undefined => {
    return value === 'None' ? undefined : value;
  }

  const tikTokUserDataProfile = tikTokUserData['Profile']['Profile Information']['ProfileMap'];
  userData.profile = {
    username: tikTokUserDataProfile['userName'],
    bio: tikTokUserDataProfile['bioDescription'],
    email: none2Undefined(tikTokUserDataProfile['email']),
    birthday: new Date(tikTokUserDataProfile['birthDate']),
    profilePictureUrl: none2Undefined(tikTokUserDataProfile['profilePictureUrl']),
    profileVideoUrl: none2Undefined(tikTokUserDataProfile['profileVideoUrl']),
    phoneNumber: none2Undefined(tikTokUserDataProfile['telephoneNumber']),
    externalProdider: tikTokUserDataProfile['PlatformInfo']
  }

  return userData;
}

export default readUserDataFromZipJson;