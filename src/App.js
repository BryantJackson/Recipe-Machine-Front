import React, { useCallback, useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link, useParams } from 'react-router-dom';
import { LinkContainer, PageContainer } from './components/containers.styled';
import { FaArrowRight } from 'react-icons/fa';
import { StyledDateTitle, StyledList } from './components/title-area.styled';
import LoadingPage from './components/loading-page';
import DayPlan from './components/day-plan';
import useFetch from './components/useFetch';
import StyledModal from './components/modal.styled';

function App() {
  const [ workingWeek, setWorkingWeek] = useState('current-week');
  const { items, isLoading, error, setCurrentUrl, makePostRequest} = useFetch('/', {workingWeek});
  
  function GetDay() {
      let { id } = useParams();
      
      return (
        <DayPlan meals={items[id]} key={id} dayId={id} workingWeek={workingWeek} makePostRequest={makePostRequest}/>
      )
  }

  const HandleClick = useCallback(() => {
    setCurrentUrl('/replace_current_meal_plan')
  }, [setCurrentUrl])
  
  const DisplayLinks = useCallback(() => {
    let links =  items.map((item, index) => {
      let date = Object.keys(item)[0]
      let titles = item[date].map((recipe) => { return <li key={recipe['name']} >{recipe['name']}</li> } )
      
      return (
          <Link style={{color: "transparent", textDecoration: "none"}} to={`/${index}`} key={index} >
            <LinkContainer>
              <StyledDateTitle style={{gridTemplateColumns: "0.9fr 0.02fr 0.08fr"}}>
                <p>{Object.keys(item)[0]}</p>
                <span>Go to day</span>
                <span>{<FaArrowRight />}</span>            
              </StyledDateTitle>
              <StyledList>{titles}</StyledList>
            </LinkContainer>
          </Link>
      )
    })
    
    return (<PageContainer>
      <div>
        <StyledModal style={{float: 'right'}} clickFunc={HandleClick} setWorkingWeek={setWorkingWeek} setCurrentUrl={setCurrentUrl} workingWeek={workingWeek}/>
        <h2>Meal plan for: <span>{Object.keys(items[0])[0]} - {Object.keys(items.at(-1))[0]}</span></h2>
      </div>

      {links}
      </PageContainer>)
     
  }, [items, HandleClick, setCurrentUrl, workingWeek])

  return (
    <Router>
      <div className="App">

        {/* <LoadingPage /> */}
      
        { error && <div>{error}</div>}

        {isLoading && <h2>Loading. Please Wait...</h2>}
        
          <Switch>
            <Route exact path="/">
            { items && <DisplayLinks /> }
            </Route>
            <Route path="/:id">
            { items && <GetDay /> }
            </Route>
          </Switch>

          
      </div>
    </Router>
  );
}

export default App;
