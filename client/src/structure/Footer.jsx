import { CheckSquare, Mail, Phone, MapPin, Instagram, Twitter, Facebook  } from "lucide-react"

function Footer() {

  return (
    <footer id="contacts" className="bg-gray-900 text-white">
      <div className="container  py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center">
              <CheckSquare className="h-8 w-8 text-emerald-500" />
              <span className="ml-2 text-xl font-bold">TaskManagement</span>
            </div>
            <p className="mt-4 text-gray-400">
              Simplify project management and boost productivity with our intuitive task management platform.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-8 w-8"/>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-8 w-8"/>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-8 w-8"/>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#features" className="text-gray-400 hover:text-white transition-colors">
                  Features
                </a>
              </li>
              
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-6 w-6 text-emerald-500 flex-shrink-0 mr-3" />
                <span className="text-gray-400">CoICT</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-6 w-6 text-emerald-500 flex-shrink-0 mr-3" />
                <span className="text-gray-400">+255683208698</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-6 w-6 text-emerald-500 flex-shrink-0 mr-3" />
                <span className="text-gray-400">Info@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} TaskManagement. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
