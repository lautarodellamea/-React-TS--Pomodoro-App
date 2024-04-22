export interface SoundState {
  isPlaying: boolean;
  name: string;
  volume: number;
}

export interface PomodoroState extends SoundState {
  mode: string;
  soundTime: number; // Duración en segundos
  sessionTime: number; // Tiempo de sesión en minutos
  breakTime: number; // Duración del recreo en minutos
  interval: number; // Intervalo en minutos
}

export interface AppState {
  music: SoundState;
  rain: SoundState;
  alarm: PomodoroState;
}


export interface UIState {
  modalInfo: boolean
  menuPanel: boolean

}