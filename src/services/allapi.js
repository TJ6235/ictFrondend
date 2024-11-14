// all api

import { commonApi } from "./commonApi"
import { serverUrl } from "./serverUrl"


// register
export const registerApi = async(reqBody)=>{
   return await commonApi("POST",`${serverUrl}/register`,reqBody,"")
}

// add file api

export const addFileApi = async(reqBody , reqHeader)=>{
   return await commonApi("POST",`${serverUrl}/add-file`,reqBody,reqHeader)
}

// edit file api
export const editFileApi = async (fileId, reqBody, reqHeader) => {
    return await commonApi("PUT", `${serverUrl}/edit-file/${fileId}`, reqBody, reqHeader);
};

// delete file api
export const deleteFileApi = async (fileId, reqHeader) => {
    return await commonApi("DELETE", `${serverUrl}/delete-file/${fileId}`, null, reqHeader);
};