import React from 'react'
import Page from './components/page'
import Musicplayer from './components/musicplayer'
import Manga from './components/manga'
import Discord from './components/discordbot'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

function App() {



  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/myportfolio/" element={<Page />} />
          <Route path="/myportfolio/discord" element={<Discord />} />
          <Route path="/myportfolio/manga" element={<Manga />} />
          <Route path="/myportfolio/musicplayer" element={<Musicplayer />} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
