import { Link } from "react-router-dom"
import logoImg from "../../assets/logo.jfif"
import { FiUser, FiLogIn, FiLogOut } from "react-icons/fi"
import { useState } from "react"

export default function Header() {
  const [isLogged, setIsLogged] = useState(false)
  const [loadingAuth, setLoadingAuth] = useState(false)
  return (
    <div className="w-full flex items-center justify-center h-16 bg-white drop-shadow mb-4">
      <header className="flex w-full max-w-7xl items-center justify-between px-1 mx-auto font-sans">
          <Link to="/">
          <div className="flex items-center justify-between px-1 mx-auto mx-2">
            <img src={logoImg} alt="Logo do site" width="50px" className="rounded-full"/>
            <p className="text-blue-500 text-xl mx-2"> PÁGINA INICIAL </p>
          </div>
          </Link>
          <Link to="/sobre">
            <p className="text-blue-500 text-xl mx-2"> SOBRE A IGREJA PIB CUBATÃO </p>
          </Link>
          <Link to="/Pastores">
            <p className="text-blue-500 text-xl mx-2"> CONHEÇA OS NOSSOS PASTORES </p>
          </Link>
          <Link to="/Doacao">
            <p className="text-blue-500 text-xl mx-2"> CANAL DE DOAÇÕES </p>
          </Link>
          {!loadingAuth && isLogged && (
              <Link to="/home">
                <div className="border-2 rounded-full p-1 border-gray-900">
                  <FiUser size={24} color="#000" />
                </div>
              </Link>
            )}
          {!loadingAuth && !isLogged && (
              <Link to="/login">
                <div className="border-2 rounded-full p-1 border-gray-900">
                  <FiLogIn size={24} color="#000" />
                </div>
              </Link>
            )}
             {loadingAuth && isLogged && (
              <Link to="/login">
                <div className="border-2 rounded-full p-1 border-gray-900">
                  <FiLogOut size={24} color="#000" />
                </div>
              </Link>
            )}
      </header>
    </div>
  )
}