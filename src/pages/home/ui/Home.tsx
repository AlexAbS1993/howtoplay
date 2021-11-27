import { UserCard } from "../../../widgets/UserCard"
import styles from '../styles/Home.module.css'

export const Home = () => {
    return (
        
        <div className={styles.home}>
                <div className={styles.home_main}>
                    <UserCard id='1'/>
                </div>
        </div>
    )
}