import { Link } from "react-router-dom";

function Card({ blog }) {
  return (
      <Link to={"/single/"+blog.id} >
        <div className="max-w-sm mb-6 md:md-0 col-span-12 sm:col-span-6 lg:col-span-4 border p-4 rounded-lg shadow-lg mx-auto mt-5">
          <a href="#">
            <img
              src={blog.image}
              className="w-full mb-4 rounded-lg shadow-none transition-shadow duration-500 ease-in-out group-hover:shadow-lg"
              alt="laravel9-1646792144.jpg"
            />
            <div className="flex items-center mb-3">
        
              <p className="font-mono text-xs font-normal opacity-75 text-black">
                {blog.createdAt}
              </p>
            </div>
            <p className="font-display max-w-sm text-2xl font-bold leading-tight max-h-8 overflow-hidden">
              <span className="link-underline link-underline-black text-black">
                {blog.title}
              </span>
            </p><p className="font-display max-w-sm text-[18px] font-serif leading-tight max-h-8 overflow-hidden opacity-60">
              <span className="link-underline link-underline-black text-black">
                {blog.subtitle}
              </span>
            </p>
            <p className="font-display max-w-sm text-[15px] leading-tight max-h-11 overflow-hidden">
              <span className=" font-mono">{blog.description}</span>
            </p>
            
          </a>
        </div>
      </Link>
  );
}

export default Card;
