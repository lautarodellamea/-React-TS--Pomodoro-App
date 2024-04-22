import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'

import './styles/global.css'
import './styles/settings.css'
import './styles/pomodoro.css'

import { MusicProvider } from './context/MusicProvider.tsx'
import { RainProvider } from './context/RainProvider.tsx'
import { UIProvider } from './context/UIProvider.tsx'
import { PomodoroProvider } from './context/PomodoroProvider.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>

    <UIProvider>
      <PomodoroProvider>
        <MusicProvider>
          <RainProvider>
            <App />
          </RainProvider>
        </MusicProvider>
      </PomodoroProvider>
    </UIProvider>


  </React.StrictMode>,
)
