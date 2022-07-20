import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useAuth, useLoginWithRedirect, AdminPortal } from '@frontegg/nextjs';
import { ContextHolder } from '@frontegg/rest-api'

function index() {
    const imageStyle = {
        padding: 'auto',
        borderRadius: '7px',
    }

    const profStyle = {
        borderRadius: '100px',
    }

    const { user } = useAuth();

    const logoutHandle = () => {
        const baseUrl = ContextHolder.getContext().baseUrl;
        // alert(baseUrl)
        window.location.href = `${baseUrl}/oauth/logout?post_logout_redirect_uri=${window.location}`;
    };
    
    const data = [
        {
            id: 1,
            imgLink: '/Images/icons/menu.svg',
            title: 'Dashboard'
        },
        {
            id: 2,
            imgLink: '/Images/icons/askq.svg',
            title: 'Ask Queries'
        },
        {
            id: 3,
            imgLink: '/Images/icons/allq.svg',
            title: 'All Queries'
        },
        {
            id: 4,
            imgLink: '/Images/icons/editq.svg',
            title: 'Edit Queries'
        },
        {
            id: 5,
            imgLink: '/Images/icons/quickq.svg',
            title: 'Quick Assistance'
        },
        {
            id: 6,
            imgLink: '/Images/icons/logout.svg',
            title: 'Logout'
        },

    ]
  return (
    <div className='SideBar-BV'>
        <div className='d-flex flex-column justify-content-between wholeContainer'>
        <div className='d-flex justify-content-center p-3'>
            <Image 
                src="/Images/banner-medium.png" 
                width={220} 
                height={85} 
                style={imageStyle}
            />
        </div>
        <div className='d-flex flex-column justify-content-between align-items-center Nav'>
        <div className='d-flex flex-column justify-content-center align-items-center'>
            {
                data.map((item)=>(
                    <div className='d-flex justify-content-start align-items-center NavList' key={item.id} onClick={item.title === "Logout" ? logoutHandle : ''}>
                        <div>
                            <Image src={item.imgLink} width={30} height={30} />
                        </div>
                        <div className='m-3'>
                            <Link href={'#'}><p>{item.title}</p></Link>
                        </div>
                    </div>
                ))
            }
        </div>
        <div className='d-flex justify-content-center align-items-center bottomSection' onClick={()=>AdminPortal.show()}>
            <div>
                <img src={user?.profilePictureUrl} width={30} height={30} style={profStyle} />
            </div>
            <div>
                <Link href={'#'}><p>{user?.name}</p></Link>
            </div>
        </div>
        </div>
        </div>
    </div>
  )
}

export default index