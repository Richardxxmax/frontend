import { createSlice, current } from '@reduxjs/toolkit'

const initialState = {
  userID:-1,
  firstName:"",
  isLoggedIn : false, 
  isLoggedOut : true,
  email : "guess@guess.com",
  admin : 0,
  successMessage:"",
  token:"",
  profilephoto:"",
  creditScore:0,
  availableBalance:0,
  currentBalance:0,
  createdAt:""

}

const  AppState = createSlice({
  name: 'appState',
  initialState,
  reducers: {
   setFirstName: (state,action) => {     
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
setSuccessMessage: (state,action) => {     
  state.successMessage = action.payload;
},setToken: (state,action) => {     
  state.token = action.payload;
},
setCurrentBalance: (state,action) => {     
  state.currentBalance = action.payload;
},setAvailableBalance: (state,action) => {     
  state.availableBalance = action.payload;
},setCreditScore: (state,action) => {     
  state.creditScore = action.payload;
},setCreatedAt: (state,action) => {     
  state.createdAt= action.payload;
},
},
})

// Action creators are generated for each case reducer function
export const {setFirstName,setID,setIsLoggedIn,setIsLoggedOut,setLastName,SetEmail,SetAdmin,setSuccessMessage,setToken,setCreditScore,setAvailableBalance,setCurrentBalance,setCreatedAt} = AppState.actions

export default AppState.reducer