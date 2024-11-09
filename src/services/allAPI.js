import commonAPI from "./commonAPI"
import SERVER_URL from "./serverUrl"


// registerAPI called by Auth component when user click register btn
export const registerAPI = async (reqbody)=>{
    return await commonAPI("POST",`${SERVER_URL}/register`,reqbody)
}

// loginAPI called by Auth component when user click register btn
export const loginAPI = async (reqbody)=>{
    return await commonAPI("POST",`${SERVER_URL}/login`,reqbody)
}

// addProjectAPI called by Add component when user click add project
export const addProjectAPI = async (reqbody,reqHeader)=>{
    return await commonAPI("POST",`${SERVER_URL}/add-project`,reqbody,reqHeader)
}

// getHomeProjectAPI called by home component when page loaded in browser
export const getHomeProjectAPI = async ()=>{
    return await commonAPI("GET",`${SERVER_URL}/home-project`,{})
}

// allProjectAPI called by Project Component when page loaded in browser
export const allProjectAPI = async (searchKey,reqHeader)=>{
    return await commonAPI("GET",`${SERVER_URL}/all-projects?search=${searchKey}`,{},reqHeader)
}

// userProjectAPI called by view component when page loaded in browser
export const userProjectAPI = async (reqHeader)=>{
    return await commonAPI("GET",`${SERVER_URL}/user-projects`,{},reqHeader)
}

// updateProjectAPI called by edit component when update btn is clicked
export const updateProjectAPI = async (id,reqBody,reqHeader)=>{
    return await commonAPI("PUT",`${SERVER_URL}/projects/${id}/edit`,reqBody,reqHeader)
}

// userProjectRemoveAPI called by view component when delete btn is clicked
export const userProjectRemoveAPI = async (id,reqHeader)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/projects/${id}/remove`,{},reqHeader)
}

// updateUserAPI called by profile component when update btn is clicked
export const updateUserAPI = async (reqBody,reqHeader)=>{
    return await commonAPI("PUT",`${SERVER_URL}/edit-user`,reqBody,reqHeader)
}