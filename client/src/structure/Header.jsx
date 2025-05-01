import { useState } from "react";
import { Menu, Plus } from "lucide-react";
import Button from "../components/Button";
import CustomLink from "../components/CustomLink";
import { Link } from 'react-router-dom';
import { SignupLink, LoginLink } from "../components/PageLink";


function Header(){
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    return(
    <header className="bg-white sticky top-0 z-50 ">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-2xl">✅</span>
              <span className="ml-2 text-xl font-bold text-gray-800">TaskManagement</span>
            </div>
  
            {/* Desktop navigation */}
            <nav className="hidden md:flex space-x-10">
              <CustomLink href="#features" className="nav-links">
                Features
              </CustomLink>
              <CustomLink href="#contacts" className="nav-links">
                Contact
              </CustomLink>
              
              
            </nav>
  
            <div className="hidden md:flex items-center space-x-4">
              <LoginLink/>
              <SignupLink/>
            </div>
  
            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button className={"text-gray-600 hover:text-emerald-600 focus:outline-none text-2xl"} onClick={() => setIsMenuOpen(!isMenuOpen)}>{isMenuOpen ? <Plus /> : <Menu />} </Button>
            </div>
          </div>
        </div>
  
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white">
            <div className="container mx-auto px-2 py-4 space-y-3 text-center">
              
              <CustomLink href="#features" className="nav-links block" onClick={() => setIsMenuOpen(false)}>
                Features
              </CustomLink>
              <CustomLink href="#contacts" className="nav-links block" onClick={() => setIsMenuOpen(false)}>
                Contact
              </CustomLink>
             
              
              <div className="pt-4 border-t border-gray-300 flex flex-col space-y-3">
                <LoginLink/>
                <SignupLink/>
              </div>
            </div>
          </div>
        )}
      </header>
    )
}

export default Header;