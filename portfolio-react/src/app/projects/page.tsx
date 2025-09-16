"use client";
import ProjectCard from '../components/projectGallery'
import NightSky from '../components/nightSky'
import Tags from '../components/projectGallery'

export default function projectsPage() {
  return (
    <section className=" relative h-screen p-6 text-white">
      <NightSky />
      <ProjectCard/>
    </section>
  );
}