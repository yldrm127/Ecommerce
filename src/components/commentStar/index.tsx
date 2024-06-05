import { useState } from "react";
import StarPurple500SharpIcon from "@mui/icons-material/StarPurple500Sharp";
function index() {
  const [star, setStar] = useState<string>("0.0");
  const HandleStarChange=(num:number)=>{
   setStar(num.toFixed(1))
  }
  return (
    <div className="cursor-pointer flex">
      <span className="text-xl mr-2 w-[30px]">{star}</span>
      {
        ["1","2","3","4","5"].map((index)=>(
            <span onClick={()=>HandleStarChange(Number(index))}>
            <StarPurple500SharpIcon className={star >= index ? "text-amber-400" : ""} />
          </span>
        ))
      }
     
     
    </div>
  );
}

export default index;
