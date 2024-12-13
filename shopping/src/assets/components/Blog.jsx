import { useEffect } from "react";
import LatestNews from "./LatestNews";

function Blog() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="blogMainDiv" >
      <div className="blogDiv ">
        <img src="/breadcrumb-bg.jpg" className="w-100 mb-5" alt="" style={{marginTop:"30px"}}/>
        <h1 className="our">Our Blog</h1>
      </div>
      <div className="mt-5">
        <LatestNews />
      </div>
    </div>
  );
}

export default Blog;