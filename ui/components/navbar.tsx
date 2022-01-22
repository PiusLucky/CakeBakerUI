import React, { useContext } from "react";
import Link from 'next/link'
import AuthContext from "../context/auth";
import UserDataService from "../services/UserService";
import { useRouter } from "next/router";


const NavBar: React.FC = () => {
  const router = useRouter()
  const { loggedIn, setTriggerRender } = useContext(AuthContext);
  const signOut = (e: any) => {
    e.preventDefault();
     UserDataService.unauthenticate()
       .then((response: any) => {
         setTriggerRender(Math.random().toString())
         router.push("/")
       })
       .catch((err: any) => {
         console.log(err);
       });
  }
  return (<header className="text-gray-400 bg-gray-900 body-font">
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <a href="/" className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
        <svg
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            width="72px"
            height="58.8px"
            viewBox="0 0 72 58.8"
            xmlSpace="preserve"
          >
            <style
              type="text/css"
              dangerouslySetInnerHTML={{
                __html:
                  "\n\t.st0{fill:#FFFFFF;}\n\t.st1{fill:#EB4998;}\n\t.st2{fill:none;}\n"
              }}
            />
            <g>
              <g>
                <path
                  className="st0"
                  d="M26.9,49.6c0,1.1-0.3,1.9-1,2.6c-0.7,0.7-1.6,1-2.6,1H10.1c-1.1,0-1.9-0.3-2.6-1c-0.7-0.7-1-1.5-1-2.6V5.7
              c0-1.1,0.3-1.9,1-2.6s1.5-1,2.6-1h13.2c1.1,0,1.9,0.3,2.6,1c0.7,0.7,1,1.5,1,2.6v9.8c0,1.1-0.9,2.1-2.1,2.1h-0.5
              c-1.1,0-2.1-0.9-2.1-2.1V8.2c0-1.1-0.9-2.1-2.1-2.1H13C11.9,6.1,11,7,11,8.2v39c0,1.1,0.9,2.1,2.1,2.1h7.3c1.1,0,2.1-0.9,2.1-2.1
              v-8.5c0-1.1,0.9-2.1,2.1-2.1h0.5c1.1,0,2.1,0.9,2.1,2.1V49.6z"
                />
                <path
                  className="st0"
                  d="M51.3,51c0,1.1-0.9,2-2,2h-2.2v-0.9c-1.7,0.2-3.4,0.5-5,0.7c-2.1,0.3-3.8,0.4-5,0.4c-2.3,0-3.5-1.2-3.5-3.5
              V38.4c0-2.4,1.2-3.6,3.6-3.6h8c1.1,0,2-0.9,2-2v-5.3c0-1.1-0.9-2-2-2h-5.1c-1.1,0-2,0.9-2,2v1.3c0,1.1-0.9,2-2,2h-0.1
              c-1.1,0-2-0.9-2-2v-3.2c0-2.4,1.2-3.6,3.6-3.6h10.2c2.4,0,3.6,1.2,3.6,3.6V51z M47.2,47.1v-7c0-1.1-0.9-2-2-2h-5.5
              c-1.1,0-2,0.9-2,2v7.1c0,1.1,0.9,2,2.1,2l5.5-0.1C46.3,49.1,47.2,48.2,47.2,47.1z"
                />
              </g>
              <circle className="st1" cx="60.6" cy="48.3" r="4.8" />
              <line className="st2" x1="-8157.6" y1={2} x2="8225.4" y2={2} />
              <line className="st2" x1="-8157.6" y1="34.1" x2="8225.4" y2="34.1" />
            </g>
          </svg>
      </a>
      <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700    flex flex-wrap items-center text-base justify-center">
         <a className={`mr-5 hover:text-white text-hover ${router.pathname == "/dashboard" ? "text-white" : ""}`} href={`${loggedIn?"/dashboard":"/"}`}>{loggedIn?"Dashboard":"Home"}</a>
        
        {loggedIn && (
           <>
            <a href="/orders" className={`mr-5 hover:text-white text-hover ${router.pathname == "/orders" ? "text-white" : ""}`}>Orders</a>
            <a href="/profile" className={`mr-5 hover:text-white text-hover ${router.pathname == "/profile" ? "text-white" : ""}`}>Profile</a>
            <a href="/receipts" className={`mr-5 hover:text-white text-hover ${router.pathname == "/receipts" ? "text-white" : ""}`}>Receipts</a>
           </>
          )
       }

      </nav>
      {!loggedIn?
      <Link href={`${router.pathname == "/register"?"/":"/register"}`} passHref>
        <button className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
          {router.pathname == "/register"?<span>Login</span>:<span>Register</span>}
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
      </Link>
      :
      <button onClick={(e) => signOut(e)} className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
        Sign Out
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          className="w-4 h-4 ml-1"
          viewBox="0 0 24 24"
        >
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </button>
      }
    </div>
  </header>
)}


export default NavBar;
