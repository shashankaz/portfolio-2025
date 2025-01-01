import Link from "next/link";

const Blog = () => {
  return (
    <div className="pt-4 md:pt-8 pb-16 min-h-screen">
      <h1 className="text-3xl font-bold">Blog</h1>
      <div className="mt-8">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Blog;

const Card = () => {
  return (
    <Link href="/blog/1">
      <div className="border border-black rounded-xl shadow-[3px_3px] p-3 mb-4">
        <h1 className="text-xl font-semibold line-clamp-1">
          Lorem ipsum dolor sit amet consectetur adipisicing.
        </h1>
        <p className="line-clamp-2 mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
          tempore cupiditate nostrum dignissimos perferendis repellat atque
          minus veritatis reprehenderit fuga!
        </p>
        <div className="flex justify-between mt-2">
          <p>Views: 0</p>
          <p>2 days ago</p>
        </div>
      </div>
    </Link>
  );
};
