import Link from "next/link";
import Image from "next/image";

type ProjectCardProps = {
  title: string;
  description: string;
  src: string;
  projectLink: string;
};

const ProjectCard = ({
  title,
  description,
  src,
  projectLink,
}: ProjectCardProps) => {
  return (
    <Link href={projectLink} target="_blank">
      <div className="w-full overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-shadow">
        <Image
          src={src}
          alt={title}
          width={1000}
          height={1000}
          className="object-cover w-full h-40"
        />
        <div className="p-4 flex flex-col gap-2">
          <h3 className="text-lg font-semibold md:text-xl line-clamp-1">
            {title}
          </h3>
          <p className="text-sm line-clamp-2">{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
