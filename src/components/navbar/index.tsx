import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Dropdown } from "flowbite-react";
import { useState } from "react";
import { Link } from "react-router-dom";
function index() {
  const [categori, setCategori] = useState<string>("Categories");
  const handleCategorieChange = (newCategory: string) => {
    setCategori(newCategory);
  };
  return (
    <nav className="bg-primary text-white p-5  flex items-center justify-between">
      <ul className="flex gap-10 m-5 cursor-pointer">
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li className="flex  items-center w-[100px]">
          <Dropdown
            className="bg-primary z-10 text-center "
            label={categori}
            dismissOnClick={true}
          >
            <Dropdown.Item
              value="shoe"
              onClick={() => handleCategorieChange("shoe")}
            >
              shoe
            </Dropdown.Item>
            <Dropdown.Item
              value="dress"
              onClick={() => handleCategorieChange("dress")}
            >
              dress
            </Dropdown.Item>
            <Dropdown.Item
              value="bag"
              onClick={() => handleCategorieChange("bag")}
            >
              bag
            </Dropdown.Item>
            <Dropdown.Item
              value="t-shirt"
              onClick={() => handleCategorieChange("t-shirt")}
            >
              t-shirt
            </Dropdown.Item>
          </Dropdown>
        </li>
        <li>about</li>
      </ul>
      <a className="cursor-pointer">
        <ShoppingBasketIcon />
      </a>
    </nav>
  );
}

export default index;
