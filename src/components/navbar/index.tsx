import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
function index() {
  return (
    <nav className="bg-primary text-white p-5  flex items-center justify-between">
      <ul className="flex gap-10 m-5 cursor-pointer">
        <li><a>Home</a></li>
        <li>
          <select
            name="categoris"
            id="categories"
            className="bg-primary outline-none cursor-pointer"
          >
            <option value="technology">technology</option>
            <option value="clothes">clothes</option>
            <option value="accessory">accessory</option>
          </select>
        </li>
        <li >about</li>
      </ul>
      <a className="cursor-pointer">
        <ShoppingBasketIcon />
      </a>
    </nav>
  );
}

export default index;
