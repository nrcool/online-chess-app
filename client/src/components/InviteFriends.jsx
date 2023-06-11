import React,{useState} from "react";
import {
    EmailShareButton,
    FacebookShareButton,
    LinkedinShareButton,
    TwitterShareButton,
    WhatsappShareButton,
    EmailIcon,
    FacebookIcon,
    LinkedinIcon,
    TwitterIcon,
    WhatsappIcon
  } from "react-share";
export default function InviteFriends() {
    const [showModal, setShowModal] = useState(false);
  return (
    <>
    
<button onClick={()=>setShowModal(true)} type="button" className=" bg-gray-900 text-gray-900 bg-gray-800 hover:bg-gray-300 hover:text-cyan-950 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 text-white dark:hover:bg-gray-700">
  <svg aria-hidden="true" className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path></svg>
  Invite Friends
</button>
{showModal && 
<div id="crypto-modal" aria-hidden="true" className="fixed  top-0 lg:top-100 sm:left-0  right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full" >
    <div className="relative w-full max-w-md max-h-full">
    {/*     <!-- Modal content --> */}
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button type="button" onClick={()=>setShowModal(false)}  className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-hide="crypto-modal">
                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>  
                <span className="sr-only">Close modal</span>
            </button>
            {/* <!-- Modal header --> */}
            <div className="px-6 py-4 border-b bg-black rounded-t dark:border-gray-600">
                <h3 className="text-base font-semibold text-white lg:text-xl dark:text-white">
                    Send request to your friends and family
                </h3>
            </div>
            {/* <!-- Modal body --> */}
            <div className="p-6 bg-gray-600">
                <p className="text-lg font-normal text-white ">use any link to share.</p>
                <ul className="my-4 space-y-3">
                    <li>
                        <EmailShareButton url="https://online-chess-app.onrender.com/#/register" className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                            <EmailIcon size={48}/>
                            <span className="flex-1 ml-3 whitespace-nowrap text-gray-100">Email</span>
                       
                        </EmailShareButton >
                    </li>
                    <li>
                        <FacebookShareButton url="https://online-chess-app.onrender.com/#/register"  className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                            <FacebookIcon size={48}/>
                            <span className="flex-1 ml-3 whitespace-nowrap text-gray-100">Facebook</span>
                            <span className="inline-flex items-center justify-center px-2 py-0.5 ml-3 text-xs font-medium text-gray-500  bg-lime-300 rounded dark:bg-gray-700 dark:text-gray-400">Popular</span>
                        </FacebookShareButton >
                    </li>
                    <li>
                        <WhatsappShareButton url="https://online-chess-app.onrender.com/#/register"  className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                            <WhatsappIcon size={48}/>
                            <span className="flex-1 ml-3 whitespace-nowrap text-gray-100">Whatsapp</span>
                            <span className="inline-flex items-center justify-center px-2 py-0.5 ml-3 text-xs font-medium text-gray-500 bg-lime-300 rounded dark:bg-gray-700 dark:text-gray-400">Popular</span>
                        </WhatsappShareButton >
                    </li>
                    <li>
                        <TwitterShareButton url="https://online-chess-app.onrender.com/#/register"  className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                            <TwitterIcon size={48}/>
                            <span className="flex-1 ml-3 whitespace-nowrap text-gray-100">Twitter</span>
                            <span className="inline-flex items-center justify-center px-2 py-0.5 ml-3 text-xs font-medium text-gray-500 bg-lime-300 rounded dark:bg-gray-700 dark:text-gray-400">Popular</span>
                        </TwitterShareButton >
                    </li>
                    <li>
                        <LinkedinShareButton url="https://online-chess-app.onrender.com/#/register"  className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                            <LinkedinIcon size={48}/>
                            <span className="flex-1 ml-3 whitespace-nowrap text-gray-100">LinkedIn</span>
                            <span className="inline-flex items-center justify-center px-2 py-0.5 ml-3 text-xs font-medium text-gray-500 bg-lime-300 rounded dark:bg-gray-700 dark:text-gray-400">Popular</span>
                        </LinkedinShareButton >
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>}
</>
  );
}
