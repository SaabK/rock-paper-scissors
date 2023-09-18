import scissorsImage from '../assets/icon-scissors.svg';
import rockImage from '../assets/icon-rock.svg';
import Character from './Character';
import Result from './Result';

function Match() {
  return (
    <div className="flex items-center gap-16 mx-auto w-fit">
      <div className='flex flex-col items-center gap-8'>
        <p className='uppercase text-lg tracking-widest'>You Picked</p>
        <Character image={scissorsImage} name='scissors' size='big'  />
      </div>

      <Result />

      <div className='flex flex-col items-center gap-8'>
        <p className='uppercase text-lg tracking-widest'>The House Picked</p>
        <Character image={rockImage} name='rock' size='big' />
      </div>
    </div>
  )
}

export default Match;