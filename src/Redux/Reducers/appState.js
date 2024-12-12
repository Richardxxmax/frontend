import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  appTheme:"white",
  appTextColor:"black",
  SideBarState:false,
  userID:-1,
  firstName:"",
  isLoggedIn : false, 
  isLoggedOut : true,
  email : "guess@guess.com",
  admin : 0,
  productID:-1,
  visitorId:-1,
  shareModal:false,
  shareLink:"",
  successMessage:"",
  token:"",
  profilephoto:"",
  routepage:"/PIDControllerX/adminnews"

}

const  AppState = createSlice({
  name: 'appState',
  initialState,
  reducers: {
    setAppTheme: (state,action) => {     
      state.appTheme = action.payload;
   },
   setAppTextColor: (state,action) => {     
    state.appTextColor = action.payload;
 },
   setSideBarState: (state,action) => {     
    state.SideBarState = action.payload;
 }, setFirstName: (state,action) => {     
  state.firstName = action.payload;
},
setIsLoggedIn: (state,action) => {     
  state.isLoggedIn  = action.payload;
},
setIsLoggedOut: (state,action) => {     
  state.isLoggedOut  = action.payload;
},
setLastName: (state,action) => {     
  state.setLastName  = action.payload;
},setID: (state,action) => {     
  state.userID= action.payload;
},
SetEmail: (state,action) => {     
  state.email = action.payload;
},
SetAdmin: (state,action) => {     
  state.admin = action.payload;
},
SetProductID: (state,action) => {     
  state.productID = action.payload;
},
setVisitorId: (state,action) => {     
  state.visitorId = action.payload;
},setShareModal: (state,action) => {     
  state.shareModal = action.payload;
},setShareLink: (state,action) => {     
  state.shareLink = action.payload;
},setSuccessMessage: (state,action) => {     
  state.successMessage = action.payload;
},setToken: (state,action) => {     
  state.token = action.payload;
},setRoutePage: (state,action) => {     
  state.routepage = action.payload;
},setProfilePhoto: (state,action) => {     
  state.profilephoto = action.payload;
}, 
},
})

// Action creators are generated for each case reducer function
export const {setProfilePhoto,setRoutePage,setAppTheme,setSideBarState,setAppTextColor,setFirstName,setID,setIsLoggedIn,setIsLoggedOut,setLastName,SetEmail,SetAdmin,SetProductID,setVisitorId,setShareModal,setShareLink,setSuccessMessage,setToken} = AppState.actions

export default AppState.reducer