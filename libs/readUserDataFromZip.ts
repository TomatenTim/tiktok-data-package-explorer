import jszip from "jszip";
import readUserDataFromZipJson from "./readUserDataFromZipJson";



/**
 * get userData from TikTok Data Export as JSON object
 * 
 * @param zipFile zipFile from TikTok Data Export
 * @returns       json object with userData
 */
const readUserDataFromZip = async (zipFile: File) => {
  const zip = await jszip.loadAsync(zipFile)

  // try to load userData from .json file
  let userData = readUserDataFromZipJson(zip);
  // if not found, try to load userData from .txt file
  if (!userData) {
    userData = readUserDataFromTxtZip(zip);
  }

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