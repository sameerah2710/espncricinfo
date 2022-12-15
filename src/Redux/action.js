import * as types from './actionTypes';
import axios from 'axios';

const getInternationalTeamData = () => (dispatch) => {
   dispatch({type:types.GET_INTERNATIONAL_TEAM_DATA_REQUEST});
   return axios.get(`http://localhost:8080/internationalTeam`)
      .then((r)=>{
         dispatch({type:types.GET_INTERNATIONAL_TEAM_DATA_SUCCESS,payload:r.data});
      })
      .catch((e)=>{
         dispatch({type:types.GET_INTERNATIONAL_TEAM_DATA_FAILURE,payload:e});
      })
}

const getWomenTeamData = () => (dispatch) => {
   dispatch({type:types.GET_WOMEN_TEAM_DATA_REQUEST});
   return axios.get(`http://localhost:8080/womenTeam`)
      .then((r)=>{
         
         dispatch({type:types.GET_WOMEN_TEAM_DATA_SUCCESS,payload:r.data});
      })
      .catch((e)=>{
         dispatch({type:types.GET_WOMEN_TEAM_DATA_FAILURE,payload:e});
      })
}

const getIplTeamData = () => (dispatch) => {
   dispatch({type:types.GET_IPL_TEAM_DATA_REQUEST});
   return axios.get(`http://localhost:8080/iplTeams`)
      .then((r)=>{
         dispatch({type:types.GET_IPL_TEAM_DATA_SUCCESS,payload:r.data});
      })
      .catch((e)=>{
         dispatch({type:types.GET_IPL_TEAM_DATA_FAILURE,payload:e});
      })
}

const getArticlesData = ()=>(dispatch)=>{
   dispatch({type:types.GET_ARTICLES_DATA_REQUEST});
   return axios.get(`http://localhost:8080/articles`)
         .then((r)=>{
            dispatch({type:types.GET_ARTICLES_DATA_SUCCESS,payload:r.data});
         })
         .catch((e)=>{
            dispatch({type:types.GET_ARTICLES_DATA_FAILURE})
         })
}

export {getInternationalTeamData, getWomenTeamData, getIplTeamData,getArticlesData};