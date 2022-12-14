import React from "react"
import TitleScreen from "./TitleScreen"
import Settings from "./Settings"
import Game from "./game/Game"
import NotFound from "./NotFound"
import {
  Routes,
  Route
} from "react-router-dom"

export default function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<TitleScreen />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/game" element={<Game />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  )
}
