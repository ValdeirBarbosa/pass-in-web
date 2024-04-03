import nlwUnitedIcon from '../assets/nlw-unite-icon.svg'
import { NavLink } from './nav-link';

export function Header() {
  return (
    <div className='flex items-center gap-5 py-2 '>
        <img src={nlwUnitedIcon} className='px-4' />
        <nav className='flex items-center gap-5  '>
            
        <NavLink  href="/eventos">Eventos</NavLink>
        <NavLink href="participantes">Participantes</NavLink>
           
        </nav>
    </div>
  );
}
