import {useState, useEffect, useCallback} from "react";
import axios from "axios";


export const api = axios.create({
  baseURL: 'https://recipe-machine-back.herokuapp.com',
  withCredentials: true
})

api.interceptors.request.use(
  function(config) {
    config.headers.withCredentials = true;
    return config
  },
  function(err) {
    return Promise.reject(err)
  }
)

const useFetch = (url, props) => {
    const [items, setItems] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)
    const [currentUrl, setCurrentUrl] = useState(null)

    useEffect(() => {
        setCurrentUrl(url)
    }, [url])

    const makeGetRequest = useCallback(() => {
      if(currentUrl){
        api.get(currentUrl, {headers : {'Working-Week' : props.workingWeek}})
        .then(response => {
          setItems(response.data)
          setIsLoading(false);
          setCurrentUrl('')
          
        })
        .catch(err => {
          setError(err.message)
          setIsLoading(false);
        }) 
      }
    }, [currentUrl, props.workingWeek])

    useEffect(() => { makeGetRequest(); }, [makeGetRequest])

    const makePostRequest = (postURL, postData) => {
      setIsLoading(true);
      
      api.post(postURL, postData, {headers : {'Working-Week' : props.workingWeek}})
        .then(response => {
            setItems(response.data);
            setIsLoading(false);
        })
        .catch(err => {
            setError(err.message);
            setIsLoading(false);
        })
    }
      
    return {items, isLoading, error, setCurrentUrl, makePostRequest}
}

export default useFetch;