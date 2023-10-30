import React, { createContext, useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { LoginForm } from './components/LoginForm';
import { RegisterForm } from './components/RegisterForm';
import { CreatePostPage } from './pages/CreatePostPage';
import { PostsPage } from './pages/PostsPage';
import { Account } from './models/Account';
import { Role } from './models/Role';
import { AdminPage } from './pages/AdminPage';
import { AdminUserAccountCard } from './components/AdminUserAccountCard';
import { AdminUserAccountsList } from './components/AdminUserAccountsList';
import { AdminPostsList } from './components/AdminPostsList';
import { AdminNavbar } from './components/AdminNavbar';

export const AccountContext = createContext(
  {
    account: {
      accountName: "",
      password: "",
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      role: Role.PERSONAL,
      isDisabled: false
    }, setAccount: (account : Account) => {}
  }
);

function App() {
  const [account, setAccount] = useState<Account>({
    accountId: -1,
    accountName: "",
    password: "",
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    role: Role.PERSONAL,
    isDisabled: false
  });
  let context = {account, setAccount};

  return (
    <div className="App">
      <AccountContext.Provider value = {context}>
        <BrowserRouter>
          <Navbar account={context.account} role={context.account.role}></Navbar>
          {/* {context.account.role === (Role.ADMIN)? (<><AdminNavbar/></>):(<></>)} */}
          
          <Routes>
            <Route path = "/" element = {<></>}></Route>
            <Route path = "/login" element = {<LoginForm></LoginForm>}></Route>
            <Route path = "/register" element = {<RegisterForm></RegisterForm>}></Route>
            <Route path = "/post" element = {<CreatePostPage></CreatePostPage>}></Route>
            <Route path = "/allPosts" element = {<PostsPage></PostsPage>}></Route>            
            <Route path = "/admin/adminPage" element = {<AdminPage></AdminPage>}></Route>
            <Route path = "/admin/posts" element = {<AdminPostsList></AdminPostsList>}></Route>
            <Route path = "/admin/accounts" element = {<AdminUserAccountsList></AdminUserAccountsList>}></Route>
          </Routes>
        </BrowserRouter>
      </AccountContext.Provider>
    </div>
  );
}

export default App;
