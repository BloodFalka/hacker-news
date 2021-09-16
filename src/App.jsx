import React from 'react'
import { Switch, Route, Redirect } from 'react-router'
import styled from 'styled-components'
import Header from './components/Header/header'
import Feed from './components/pages/Feed/Feed'
import Item from './components/pages/Item/Item'
import Jobs from './components/pages/Jobs/Jobs'
import NavScrollToTop from './components/HOC/NavScrollToTop'

const Main = styled.div`
    padding: 70px 20px 20px 20px;
    max-width: 1200px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    @media(max-width: 576px) {
        padding: 20px 20px 70px 20px;
    }
`

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row-reverse;
`

export default function App() {
    return (
        <Wrapper>
            <Header />
            < Main >
                <NavScrollToTop>
                    <Switch>
                        <Route
                            exact
                            path="/"
                            render={() => <Redirect to="/news"/>}
                        />
                        <Route path="/news" exact component={Feed}/>
                        <Route path="/jobs" exact component={Jobs}/>
                        <Route path="/item/:id" component={Item}/>
                    </Switch>
                </NavScrollToTop>
            </Main >
        </Wrapper >
    )
}