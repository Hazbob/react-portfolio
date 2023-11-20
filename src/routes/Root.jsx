import {Outlet} from 'react-router-dom'
import '@mantine/carousel/styles.css';

export default function Root() {
    return (
        <>
            <div className=" flex items-center justify-center h-screen">
                <div style={{height: '90vh'}} className="w-11/12 bg-white mx-auto rounded-md">
                    <Outlet/>
                </div>

            </div>
        </>
    );
}