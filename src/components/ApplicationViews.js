import React from "react"
import { Route } from "react-router-dom"
import { GameList } from "./game/gamelist.js"
import { GameProvider } from "./game/gameprovider.js"
import { GameForm } from "./game/gameform.js"
import { EventList } from "./event/eventlist.js"
import { EventProvider } from "./event/eventprovider.js"
import { EventForm } from "./event/eventform.js"

export const ApplicationViews = () => {
    return <>
        <main style={{
            margin: "5rem 2rem",
            lineHeight: "1.75rem"
        }}> 
            <GameProvider>
                <Route exact path="/" render={props => <GameList {...props}/>} />
                    
                <Route exact path="/games/new" render={props => <GameForm {...props} />} />

                <EventProvider>
                    <Route exact path="/events" render={props => <EventList {...props} />} />
                    <Route exact path="/events/new" render={props => <EventForm {...props} />} />

                </EventProvider>
            </GameProvider>
        </main>
    </>
}
