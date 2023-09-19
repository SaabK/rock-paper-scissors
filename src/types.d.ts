export interface IClassName {
  className?: string
}

export interface player {
  player: 'rock' | 'scissors' | 'paper' | null
}

export interface ICharacter {
  image: string,
  name: 'rock' | 'scissors' | 'paper' | null,
  size?: 'big' | 'small',
} 

export interface PlayerState {
  
}

export interface IOpponent {
  image: string
}

export interface IResult {
  result: 'win' | 'lose' | 'draw' | null
}