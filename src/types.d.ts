export interface ICharacter {
  image: string,
  name: 'rock' | 'scissors' | 'paper',
  className?: string,
  size?: 'big' | 'small'
}