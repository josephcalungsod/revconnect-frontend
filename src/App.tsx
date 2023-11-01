import React, { createContext, useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { CreatePostPage } from './pages/CreatePostPage';
import { PostsPage } from './pages/PostsPage';
import { Account } from './models/Account';
import { Role } from './models/Role';
import { AdminPage } from './pages/AdminPage';
import { AdminPostsList } from './components/AdminPostsList';
import { LogoutPage } from './pages/LogoutPage';
import { RegisterPage } from './pages/RegisterPage';
import { LoginPage } from './pages/LoginPage';
import { AccountsPage } from './pages/AccountsPage';
import { Home } from './pages/Home';

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
          <Navbar></Navbar>
          <Routes>
            <Route path = "/" element = {<></>}></Route>
            <Route path = "/login" element = {<LoginPage></LoginPage>}></Route>
            <Route path = "/logout" element = {<LogoutPage></LogoutPage>}></Route>
            <Route path = "/register" element = {<RegisterPage></RegisterPage>}></Route>
            <Route path = "/post" element = {<CreatePostPage></CreatePostPage>}></Route>
            <Route path = "/allPosts" element = {<PostsPage></PostsPage>}></Route>            
            <Route path = "/admin/adminPage" element = {<AdminPage></AdminPage>}></Route>
            <Route path = "/admin/posts" element = {<AdminPostsList></AdminPostsList>}></Route>
            <Route path = "/admin/accounts" element = {<AccountsPage></AccountsPage>}></Route>
          </Routes>
        </BrowserRouter>
      </AccountContext.Provider>
    </div>
  );
}

export default App;
