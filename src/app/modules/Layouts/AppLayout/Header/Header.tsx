import { IMenu } from "@app/interface/config/menu.interface";
import { MegaMenu, Navbar } from "flowbite-react";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

interface IHeader {
    menuItems: IMenu
}

export default function Header({}:IHeader) {
    const location = useLocation();
    const navigate = useNavigate()

    return(
        <>
            <MegaMenu>
                <div className="container mx-auto">
                    <div className="flex flex-wrap items-center justify-between py-3 md:space-x-8">
                        <Navbar.Brand>
                            <img alt="" src="/assets/img/route-square.png" height={40} width={40}/>
                            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Micro Map</span>
                        </Navbar.Brand>
                        <Navbar.Collapse>
                            <Navbar.Link className={`${location?.pathname == "/" ? "bg-primary rounded-full px-4 py-2" : "hover:text-primary"} cursor-pointer`} onClick={() => navigate('/')}>Home</Navbar.Link>
                            <Navbar.Link className={`${location?.pathname == "/playground" ? "bg-primary rounded-full px-4 py-2" : "hover:text-primary"} cursor-pointer`} onClick={() => navigate('/playground')}>Playground</Navbar.Link>
                        </Navbar.Collapse>
                    </div>

                </div>
            </MegaMenu>
        </>
    )
}