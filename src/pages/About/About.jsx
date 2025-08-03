import HeroImg from "@/assets/images/hero.jpg";

export default function About() {
  return (
    <>
      <section id="about" className="py-16 md:py-32  text-white bg-[#04081A]">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl text-white">
            Developer, Designer, FreeLancer, Innovator
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
            <div className="relative mb-6 sm:mb-0">
              <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl p-px from-zinc-300 to-transparent">
                <img
                  src={HeroImg}
                  className="rounded-[15px] shadow block"
                  alt="payments illustration"
                  width={1207}
                  height={929}
                />
              </div>
            </div>

            <div className="relative space-y-4">
  <p className="text-white">
    Hello! I'm Yash Mehra, a frontend developer with a strong foundation in building responsive, high-performance interfaces using{" "}
    <span className="font-bold text-white">React.js and Tailwind CSS</span>. With over 3 years of experience, I've worked on diverse real-world projects and freelance assignments, consistently delivering clean and user-centric web experiences.
  </p>

  <p className="text-white">
    I've built full-fledged platforms including job portals, e-commerce sites, and blogging systems, collaborating with teams and also leading development efforts solo.{" "}
    <span className="font-bold text-white">Currently, I'm working at IUS Digital Solutions</span>, where I'm independently developing a modern client-facing website from the ground up.
  </p>

  <div className="pt-6">
    <blockquote className="border-l-4 border-gray-300 pl-4">
      <p className="text-white">
        I'm an eager learner and future-focused developer, currently expanding into backend technologies to grow as a{" "}
        <span className="font-bold text-white">full-stack developer</span>. My goal is to build seamless web solutions and contribute to meaningful, real-world digital products that empower users and developers alike.
      </p>

      <div className="mt-6 space-y-3">
        <cite className="block font-medium text-white">
          Yash Mehra, Web Developer
        </cite>
      </div>
    </blockquote>
  </div>
</div>

          </div>
        </div>
      </section>
    </>
  );
}
