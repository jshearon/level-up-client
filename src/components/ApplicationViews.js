import React from "react"
import { Route } from "react-router-dom"
import { GameList } from "./game/gamelist.js"
import { GameProvider } from "./game/gameprovider.js"
import { EventList } from "./event/eventlist.js"
import { EventProvider } from "./event/eventprovider.js"

export const ApplicationViews = () => {
    return <>
        <main style={{
            margin: "5rem 2rem",
            lineHeight: "1.75rem"
        }}> 
            <GameProvider>
                <Route exact path="/">
                    <GameList />
                </Route>
            </GameProvider>
            <EventProvider>
                <Route exact path="/events">
                    <EventList />
                 </Route>
            </EventProvider>
        </main>
    </>
}
