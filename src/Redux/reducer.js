import * as types from './actionTypes';

const initialState = {
   internationalTeam:[],
   womensTeam:[],
   iplTeam:[],
   articles:[],
   isLoading: false,
   isError:false,
};

export const reducer = (state = initialState, action) => {

   const {type, payload} = action;
   switch(type){
     case types.GET_INTERNATIONAL_TEAM_DATA_REQUEST:
      return {
         ...state,
         isLoading:true
      }
      case types.GET_INTERNATIONAL_TEAM_DATA_SUCCESS:
         return {
            ...state,
            isLoading:false,
            internationalTeam:payload
         }
      case types.GET_INTERNATIONAL_TEAM_DATA_FAILURE:
         return {
            ...state,
            isError:true
         }
      case types.GET_WOMEN_TEAM_DATA_REQUEST:
         return {
            ...state,
            isLoading:true
         }
      case types.GET_WOMEN_TEAM_DATA_SUCCESS:
         return {
            ...state,
            isLoading:false,
            womensTeam:payload
         }
      case types.GET_WOMEN_TEAM_DATA_FAILURE:
         return {
            ...state,
            isError:true
         }
      case types.GET_IPL_TEAM_DATA_REQUEST:
         return {
            ...state,
            isLoading:true
         }
      case types.GET_IPL_TEAM_DATA_SUCCESS:
         return {
            ...state,
            isLoading:false,
            iplTeam:payload
         }
      case types.GET_IPL_TEAM_DATA_FAILURE:
         return {
            ...state,
            isError:true
         }
      case types.GET_ARTICLES_DATA_REQUEST:
         return{
            ...state,
            isLoading:true
         }
      case types.GET_ARTICLES_DATA_SUCCESS:
         return{
            ...state,
            isLoading:false,
            articles:payload
         }
      case types.GET_ARTICLES_DATA_FAILURE:
         return{
            ...state,
            isError:true
         }
      default:
         return {
            ...state
         }
   }
}
