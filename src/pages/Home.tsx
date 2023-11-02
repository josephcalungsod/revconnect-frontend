
import { useContext } from "react"
import { Account } from "../models/Account"
import { AccountContext } from "../App";
import './Home.css'


export function Home(){
    const accountContext = useContext(AccountContext);    
    
    return (
        <>
            <h1>Welcome, {accountContext.account.firstName} to RevConnect!</h1>

        <div className="container">
            <img className="img" src="https://lh3.googleusercontent.com/du1Lbdrk5jh73nyvT3ACcrTVnjjn7Q6fWn0oI8uXaALLkrT4jALbndRNjJdWa_RSXcl4XeM3dXYrItAQTQmMxDnezUkJ0cXubc4a_fk3yffWRnkmH4xQ=w1100"/>
            <div className="description">
                <h2>Innovasion meets Connectivity :)</h2>
                <p>Welcome to the vibrant hub of RevConnect, 
                    where groundbreaking innovation intertwines seamlessly with the power of connectivity. 
                    Here, we embark on a journey that celebrates the energy of ideas, 
                    technology, and the endless possibilities within the digital realm.</p>
            </div>
        </div>
        </>

    )
}

