"use client";

import { useEffect, useState } from "react";
import Card from "./_components/Card";

type Project = {
  name: string;
  topics: string[] | null;
  html_url: string;
  homepage: string | null;
  created_at: string;
};

const GitHub = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProjects = async () => {
      setLoading(true);
      const res = await fetch("https://api.github.com/users/shashankaz/repos");
      const data: Project[] = await res.json();

      const sortedData = data.sort(
        (a, b) =>
          new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
      );
      setProjects(sortedData);
      setLoading(false);
    };

    fetchProjects();
  }, []);

  return (
    <div className="pt-4 md:pt-8 pb-16 min-h-screen">
      <h1 className="text-3xl font-bold">GitHub Repositories</h1>
      <div className="mt-8 space-y-4">
        {loading ? (
          <h4 className="text-xl font-semibold text-center mt-20">
            Loading...
          </h4>
        ) : (
          projects.map((project, index) => <Card key={index} data={project} />)
        )}
      </div>
    </div>
  );
};

export default GitHub;
