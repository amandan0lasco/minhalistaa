import LogoImage from '../../assets/logo.png'
import './header.styles.css'

const Header = () => {
    return (
        <header className= 'header'>
          <div>
         <img className= 'LogoImage' src={LogoImage} alt='logotipo minha listinha'/>
          </div>
        </header>

    )
}

export default Header