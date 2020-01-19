import React from 'react'
// Components
import Layout from '../components/Layout'
import BadgeNew from '../pages/BadgeNew'
import BadgeEdit from '../components/BadgeEdit'
import Badges from '../pages/Badges'
import BadgeDetailsContainer from '../pages/BadgeDetailsContainer'

import NotFound from '../pages/NotFound'

import {BrowserRouter, Switch, Route} from 'react-router-dom'

// Seria el método render de la clase component
/*Esto lo podemos hacer cuando no haya ningun otro metodo que hemos declarado o que no estemos usando estado*/
function App() {
    return (
        
        <BrowserRouter>
            <Layout>
                <Switch>{/*Va a tomar la dirección que esta en el navegador y renderizar solamente una ruta el primero que coincida con la dirección */}
                    <Route exact path="/badges" component={Badges}/> {/*exact  especifica la ruta*/}
                    <Route exact path="/badges/new" component={BadgeNew}/>
                    <Route exact path="/badges/:badgeId" component={BadgeDetailsContainer}/>
                    <Route exact path="/badges/:badgeId/edit" component={BadgeEdit}/>
                    <Route exact component={NotFound}/>
                </Switch>
            </Layout>
        </BrowserRouter>
    )
}

export default App
