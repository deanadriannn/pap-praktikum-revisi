import * as React from 'react';
import Sidebar from "@/components/custom/sidebar";

export default function Authenticated({children,}: Readonly<{children: React.ReactNode;}>) {
return (
    <>
    <Sidebar /> 
    <div className='px-36 py-28'>
    
    {children}
    </div>
    </>
)   
}