import { Link } from "react-router-dom";
import Logo from "../../Assets/Logo.jpg";
import { useSelector } from "react-redux";
import { BsMinecart } from "react-icons/bs";

const Header = () => {
  const length = useSelector((store) => store.cart.length);
  return (
    <div className="flex justify-between p-2 shadow-md sticky top-0 w-full bg-white z-50">
      <div className="w-16">
        <img className="logo" src={Logo} />
      </div>
      <div>
        <ul className="flex p-0">
          <Link to={"/"} className="p-5">
            <li className="cursor-pointer font-serif text-lg">Home</li>
          </Link>
          <Link to={"/about"} className="p-5">
            <li className="cursor-pointer font-serif text-lg">About</li>{" "}
          </Link>
          <Link to={"/contact"} className="p-5">
            <li className="cursor-pointer font-serif text-lg">Contact</li>{" "}
          </Link>
          <Link to="/cart" className="p-5">
            <div className="flex ">
              <BsMinecart
                size={32}
                color={length ? "green" : "black"}
                className="relative bottom-1"
              />
              <p
                style={{ top: "1px" }}
                className={`relative right-5 text-sm  ${
                  length && "text-green-800"
                }`}
              >
                {length}
              </p>
              <li className="font-serif text-lg">Cart</li>
            </div>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
