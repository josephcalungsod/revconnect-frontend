import { AdminNavbar } from "../components/AdminNavbar";
import { AdminPostsList } from "../components/AdminPostsList";
import { AdminUserAccountsList } from "../components/AdminUserAccountsList";


export function AdminPage(){
    
    return (
        <>
            <AdminNavbar/>
            <h1>Admin Page</h1>
            <br/>

            <div>
            <h3>Admin Requests View</h3>
            </div>
            <br/>
            
            <div>
                <h3>Admin User View</h3>
                <AdminUserAccountsList/>        
            </div>
            <br/>

            <div>
            <h3>Admin Posts View</h3>
                <AdminPostsList/>
            </div>
            <br/>

            <div>
            <h3>Admin Comments View</h3>
            </div>
            <br/>
        </>

    )
}

/**
     * admin:
     * - view reports?
     * 
     * users:
     * - view all users
     *   - view user:
     *       -username
     *       -role
     *       -posts?
     *       -comments?
     *   - reset password
     *   - disable user
     *   - change role
     *   - 
     * posts:
     * - delete posts
     * comments:
     * - delete comment
     * 
     * 
     * 
     * 
     * 
     * 
     * 
     */