import { Button } from "@mui/material";
import { useState } from "react";
import CommentStar from "../../components/commentStar"
import Comments from "../../components/comments"
export default function Index() {
  const[imgChange,setImgChange]=useState<string>("https://www.searchenginejournal.com/wp-content/uploads/2022/08/google-shopping-ads-6304dccb7a49e-sej.png")
  return (
    <div className="flex  flex-wrap  w-100 h-100 mt-10">
      <div className="basis-2/4 cursor-pointer ">
        <img src={imgChange}/>
        <div className="flex flex-row h-[100px] justify-between mt-5 ">
          <img 
            className="h-auto"
            src="https://www.searchenginejournal.com/wp-content/uploads/2022/08/google-shopping-ads-6304dccb7a49e-sej.png"
          />
          <img
            className=" h-auto"
            src="https://www.searchenginejournal.com/wp-content/uploads/2022/08/google-shopping-ads-6304dccb7a49e-sej.png"
          />
          <img
            className=" h-auto"
            src="https://www.searchenginejournal.com/wp-content/uploads/2022/08/google-shopping-ads-6304dccb7a49e-sej.png"
          />
        </div>
      </div>
      <div className="basis-2/4 p-5">
        <div>
        <h1 className="text-2xl mb-3">Product Name</h1> 
        <CommentStar/>
        </div>
       
        <span>Product info</span>
        <p className="mb-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et sem
          eget sem dapibus aliquet. Ut tincidunt ipsum id urna cursus, in
          suscipit ipsum blandit. Mauris sit amet mi feugiat dolor mattis
          tincidunt. Maecenas fringilla augue in elit iaculis, sed dignissim leo
          lobortis. Suspendisse nec augue ac lorem finibus aliquet. Pellentesque
          habitant morbi tristique senectus et netus et malesuada fames ac
          turpis egestas. Proin a consequat erat. Sed viverra nisi nibh. Etiam
          nec ultrices urna. Donec dolor leo, vehicula at sapien ac, varius
          sagittis ipsum. Mauris nisl ante, lobortis sit amet auctor in,
          placerat ut sapien. In hac habitasse platea dictumst. Suspendisse a
          ullamcorper neque. Cras dictum nibh sed tellus facilisis tincidunt.
          Quisque sed dui sit amet magna scelerisque euismod ut quis dolor.
        </p>
        <Button   variant="contained" className="mt-10">Buy $60</Button>
      </div>
 <Comments/>
    </div>
  );
}
