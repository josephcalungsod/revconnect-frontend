
import { Account } from "../models/Account"

interface props{
    account:Account

}

export function Home(props:props){
    
    return (
        <>
           <h1>Welcome, {props.account.accountName}!</h1>            
            <br/>
            

            <div>
            <h3></h3>
            </div>
            <br/>
            
            <div>
                <h3></h3>
           
            </div>
            <br/>

            <div>
            <h3></h3>
               
            </div>
            <br/>

            <div>
            <h3></h3>
            </div>
            <br/>
        </>

    )
}

