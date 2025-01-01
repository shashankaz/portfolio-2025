import Link from "next/link";
import { formatDistanceToNow } from "date-fns";
import { ArrowRight } from "lucide-react";

type CardProps = {
  data: {
    name: string;
    topics: string[] | null;
    html_url: string;
    homepage: string | null;
    created_at: string;
  };
};

const Card = ({ data }: CardProps) => {
  return (
    <div className="border border-black rounded-xl shadow-[3px_3px] p-3 flex flex-col md:flex-row justify-between md:items-center">
      <div>
        <h1 className="text-2xl font-semibold capitalize">
          {data.name.split("-").join(" ")}
        </h1>
        <p className="mt-2 italic">{data.topics?.join(", ")}</p>
        <div className="flex gap-2 mt-2">
          <Link
            href={data.html_url}
            target="_blank"
            className="focus:outline-none"
          >
            <button className="px-3 py-1 group flex items-center gap-1 bg-blue-500 text-white rounded-full text-sm">
              Github
              <div className="group-hover:-rotate-45 transition-all">
                <ArrowRight size={16} />
              </div>
            </button>
          </Link>
          {data.homepage && (
            <Link
              href={data.homepage}
              target="_blank"
              className="focus:outline-none"
            >
              <button className="px-3 py-1 group flex items-center gap-1 bg-blue-500 text-white rounded-full text-sm">
                Live
                <div className="group-hover:-rotate-45 transition-all">
                  <ArrowRight size={16} />
                </div>
              </button>
            </Link>
          )}
        </div>
      </div>
      <p className="text-sm mt-2 md:mt-0 text-end">
        {formatDistanceToNow(new Date(data.created_at), {
          addSuffix: true,
        })}
      </p>
    </div>
  );
};

export default Card;
