import React, { useContext, useState, useEffect } from "react"
import { EventContext } from "./eventprovider.js"
import { GameContext } from "../game/gameprovider.js"


export const EventForm = props => {
  const { createEvent } = useContext(EventContext)
  const { getGames, games } = useContext(GameContext)
    
  const [currentEvent, setCurrentEvent] = useState({
    description: "",
    gameId: 0,
    date: "",
    time: ""
  })

    useEffect(() => {
        getGames()
    }, [])

    const handleControlledInputChange = (e) => {
      const newEventState = Object.assign({}, currentEvent)
      newEventState[e.target.name] = e.target.value
      setCurrentEvent(newEventState)
    }

    return (
        <form className="eventForm">
            <h2 className="eventForm__title">Schedule New Event</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="gameId">Game: </label>
                    <select name="gameId" className="form-control"
                        defaultValue={currentEvent.gameId}
                        onChange={handleControlledInputChange}>
                        <option value="0">Select a game...</option>
                        {
                            games.map(game => (
                                <option value={game.id} key={game.id}>{game.title}</option>
                            ))
                        }
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Description: </label>
                    <input type="text" name="description" required autoFocus className="form-control"
                        defaultValue={currentEvent.description}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="date">Date: </label>
                    <input type="date" name="date" required autoFocus className="form-control"
                        defaultValue={currentEvent.date}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="numberOfPlayers">Time: </label>
                    <input type="time" name="time" required autoFocus className="form-control"
                        defaultValue={currentEvent.time}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            {/* Create the rest of the input fields */}

            <button type="submit"
                onClick={e => {
                    e.preventDefault()

                    createEvent({
                        gameId: currentEvent.gameId,
                        description: currentEvent.description,
                        date: currentEvent.date,
                        time: currentEvent.time
                    }).then(() => props.history.push({pathname: "/events"}))
                }}
                className="btn btn-primary">Create Event</button>
        </form>
    )
}
