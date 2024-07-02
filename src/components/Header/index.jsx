import styles from "./Header.module.css";
import user from '../../assets/images/user.webp'
import home from '../../assets/icons/home-2.svg'
import car from '../../assets/icons/car.svg'
import award from '../../assets/icons/award.svg'
import logout from '../../assets/icons/log-in-1.svg'
import { Link } from 'react-router-dom'

function Header() {
  const ativo = (selected) => {
    let ids = ["home", "car", "pass"]
    ids.forEach((e)=>{
      document.getElementById(e+"Button").classList.remove(styles.active)
    })
    document.getElementById(selected+"Button").classList.add(styles.active)
    console.log(selected)
  } 
  return (
    <>
      <div className={styles.header}>
        {/* <div className={styles.main_title}> */}
          {/* <hr /> */}
          <div className={styles.title}>ROCKET LEAGUE</div>
        {/* </div> */}
        <div className={styles.user_area}>
          <div className={styles.circle_img}>
            <img
              src={user}
              alt="User"
            />
          </div>
          <span className={styles.username}>Pruu Pruu</span>
          <span className={styles.role}>Admin</span>
        </div>
        <div className={styles.nav_bar}>
            <ul>
                <li id="homeButton" onClick={()=>ativo("home")} className={styles.active}><img src={home} /><Link to="/">Home</Link></li>
                <li id="carButton"  onClick={()=>ativo("car")}><img src={car} /> <Link to="/chassis">Chassis</Link></li>
                <li id="passButton" onClick={()=>ativo("pass")} className={styles.frescura}><img src={award} /><Link to="/pass">Pass</Link></li>
            </ul>
        </div>
        <div>
            <ul>
                <li><img src={logout} /><a href="#">Logout</a></li>
            </ul>
        </div>
      </div>
    </>
  );
}

export default Header;
