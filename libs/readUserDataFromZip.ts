import jszip from "jszip";



/**
 * get userData from TikTok Data Export as JSON object
 * 
 * @param zipFile zipFile from TikTok Data Export
 * @returns       json object with userData
 */
const readUserDataFromZip = async (zipFile: File) => {
  const zip = await jszip.loadAsync(zipFile)

  // try to load userData from .json file
  let userData = readUserDataFromJsonZip(zip);
  // if not found, try to load userData from .txt file
  if (!userData) {
    userData = readUserDataFromTxtZip(zip);
  }

  return userData;
}

/**
 * reads userData from .json file in the TikTok Data Export and retuns it as a JSON object
 * 
 * @param zip jszip object from TikTok Data Export
 * @returns   json object with userData
 */
const readUserDataFromJsonZip = async (zip: jszip) => {

  const userDataFile = zip.file('/user_data.json');
  if (!userDataFile) {
    return null;
  }
  const userDataJsonString = await userDataFile.async('string');
  const userData = JSON.parse(userDataJsonString);
  return userData;
}

/**
 * reads userData from .txt file in the TikTok Data Export and retuns it as a JSON object
 * 
 * @param zip jszip object from TikTok Data Export
 * @returns   json object with userData
 */
const readUserDataFromTxtZip = async (zip: jszip) => {
  // TODO: read userData from .txt files
  return null;
}


export default readUserDataFromZip;