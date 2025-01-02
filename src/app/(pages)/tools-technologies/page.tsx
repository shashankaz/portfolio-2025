const ToolsTech = () => {
  return (
    <div className="pt-4 md:pt-8 pb-16 min-h-screen">
      <h1 className="text-3xl font-bold">Tools & Technologies</h1>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h3 className="text-xl font-semibold">Programming Languages</h3>
          <ul className="list-inside list-disc mt-2">
            <li>C++</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>Python</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Web Development</h3>
          <ul className="list-inside list-disc mt-2">
            <li>HTML5</li>
            <li>CSS3</li>
            <li>ReactJS</li>
            <li>NextJS</li>
            <li>NodeJS</li>
            <li>ExpressJS</li>
            <li>TailwindCSS</li>
            <li>Bootstrap</li>
            <li>MaterialUI</li>
            <li>Redux Toolkit</li>
            <li>REST APIs</li>
            <li>Django</li>
            <li>Firebase</li>
            <li>Appwrite</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Database Technologies</h3>
          <ul className="list-inside list-disc mt-2">
            <li>MySQL</li>
            <li>MongoDB</li>
            <li>PostgreSQL</li>
            <li>Prisma</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Developer Tools</h3>
          <ul className="list-inside list-disc mt-2">
            <li>Git</li>
            <li>GitHub</li>
            <li>Postman</li>
            <li>VSCode</li>
            <li>Docker</li>
            <li>npm</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ToolsTech;
