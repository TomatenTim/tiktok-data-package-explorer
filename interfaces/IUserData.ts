// mainly generated with https://app.quicktype.io/


// TikTok Data after clen up
export default interface IUserData {

  favorites?: {
    videos?: Array<IUrlDate>;
    effects?: Array<IUrlDate>;
    hashtags?: Array<IUrlDate>;
    sounds?: Array<IUrlDate>;
  };


  history?: {
    videos?: Array<IUrlDate>;
    logins?: Array<IHistoryLogins>;
    searches?: Array<IHistorySearches>
    shares?: Array<IHistoryShares>
    purchases?: Array<IHistoryPurchases>
  }


  follower?: Array<IFollower>;
  following?: Array<IFollower>;


  settings?: ISettings;


  comments?: Array<IComment>;


  chats?: Array<IChat>;


  profile?: IProfile;

}

// ========================================================== //
// =                         GLOBAL                         = //
// ========================================================== //
interface IUrlDate {
  url: string;
  date: Date;
}

type IEnabledDisabledDefault = 'enabled' | 'disabled' | 'default';
type IEveryoneFriendsMyselfOff = 'everyone' | 'friends' | 'myself' | 'off';



// ========================================================== //
// =                         HISTORY                        = //
// ========================================================== //

interface IHistoryLogins {
  date?: Date;
  ip?: string;
  deviceModel?: string;
  deviceSystem?: string;
  networkType?: string;
  carrier?: string;
}


interface IHistorySearches {
  text: string;
  date: Date;
}

interface IHistoryShares {
  url: string;
  date: Date;
  type: 'video' | 'hashtag';
  method: string; // share method (chat/copy/discord/...)
}

interface IHistoryPurchases {
  // TODO: 
}


// ========================================================== //
// =                  FOLLOWER & FOLLOWING                  = //
// ========================================================== //
interface IFollower {
  username: string;
  date: Date;
}





// ========================================================== //
// =                        SETTINGS                        = //
// ========================================================== //
interface ISettings {
  allowDownload?: IEnabledDisabledDefault;
  allowOthersToFindMe?: boolean;
  language?: string;
  videoLanguagePreferences?: Array<string>;
  personalizedAds?: boolean;
  privateAccount?: boolean;
  notifications?: {
    comment?: IEnabledDisabledDefault;
    follower?: IEnabledDisabledDefault;
    like?: IEnabledDisabledDefault;
  };
  whoCan?: {
    duet?: IEveryoneFriendsMyselfOff;
    stitch?: IEveryoneFriendsMyselfOff;
    comment?: IEveryoneFriendsMyselfOff;
    dm?: IEveryoneFriendsMyselfOff;
    viewLikes?: IEveryoneFriendsMyselfOff;
  }
}


// ========================================================== //
// =                         COMMENT                        = //
// ========================================================== //
interface IComment {
  text: string;
  date: Date;
}



// ========================================================== //
// =                          CHAT                          = //
// ========================================================== //
interface IChat {
  username: string;
  messages: Array<IChatMessages>;
}

interface IChatMessages {
  text: string;
  username: string;
  date: Date;
}


// ========================================================== //
// =                         PROFILE                        = //
// ========================================================== //
interface IProfile {
  username?: string;
  bio?: string;
  email?: string;
  birthdate?: Date;
  profilePictureUrl?: string;
  profileVideoUrl?: string;
  phoneNumber?: string;
  externalProdider?: Array<any> // external Provider data (Google Login)
}







/*

  Unknown Values

    activity.hashtag
    appSettings.settings.settingsMap.contentPreferences.*
    tiktokShopping.*
    video.videos.*

  Values 2 Check

    appSettings.settings.settingsMap.pushNotification.* -> settings->notifications

*/