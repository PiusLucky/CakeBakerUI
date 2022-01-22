export const Footer = () => (
 <footer className="text-gray-400 bg-gray-900 body-font">
     <div className="bg-gray-800 bg-opacity-75">
       <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
         <p className="text-gray-400 text-sm text-center sm:text-left">
           © 2022  — CakeBaker
           <a
             href="https://hire-pius.herokuapp.com/"
             className="text-gray-500 ml-1"
             target="_blank"
             rel="noopener noreferrer"
           >
             @lucky_pius
           </a>
         </p>
         <span className="sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center text-gray-400 text-sm">
           all tasty...
         </span>
       </div>
     </div>
   </footer>
)


export default Footer;
