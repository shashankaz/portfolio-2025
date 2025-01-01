import Image from "next/image";

const Hero = () => {
  return (
    <main className="flex flex-col-reverse md:flex-row items-start md:items-center justify-between gap-10 py-8">
      <div>
        <h1 className="text-3xl font-bold flex flex-col md:flex-row md:items-end gap-2">
          Hey, I&apos;m Shashank
          <span className="text-blue-500 text-xl font-light"> /sha.shank/</span>
        </h1>
        <p className="mt-4">
          I&apos;m a Full Stack Developer passionate about building scalable web
          apps, modern interfaces, and AI-powered solutions. I enjoy exploring
          DevOps and contributing to open-source projects. Let&apos;s connect
          and create something amazing!
        </p>
      </div>
      <div className="rounded-xl overflow-hidden w-36 md:min-w-36">
        <Image
          src="/profile.png"
          alt="Profile"
          width={200}
          height={200}
          className="h-full w-full object-cover"
        />
      </div>
    </main>
  );
};

export default Hero;
