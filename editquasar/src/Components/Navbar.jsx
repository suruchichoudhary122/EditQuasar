import { Link } from "react-router-dom";


export default function Navbar (){
    return(
        <nav>
           <ul className="flex gap-4 justify-center flex-wrap  bg-slate-600 h-auto py-4">
            <img src="https://editpro5.wordpress.com/wp-content/uploads/2024/02/cropped-editpro_logo-removebg-preview.png?w=64&h=64"
            height={20} width={23}/>
            <li>  <Link to={"/"} >Home</Link></li>
       
           <li> <Link to={"/services"}>Services</Link></li>
           <li> <Link to={"/pricing"}>Pricing</Link></li>
           <li> <Link to={"/careers"}>Careers</Link></li>
           <li> <Link to={"/aboutus"}>About Us</Link></li>
           <li> <Link to={"/contactus"}>Contact Us</Link></li>
            </ul>
        </nav>
    )
}