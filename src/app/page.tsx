import { techStack } from "@/components/techStack";

const Home = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex gap-2">
        <div>image</div>
        <div>
          <p>Afi Hillman</p>
          <p>Based in Malaysia</p>
        </div>
      </div>
      <div>
        <h1>SOFTWARE</h1>
        <div className="flex items-center gap-2">
          <h1 className="text-center">ENGINEER</h1>
          <div className="rounded-full border-ring border py-4 px-3 h-[60px] flex gap-2 items-center hover:bg-primary hover:text-primary-foreground duration-300 cursor-pointer">
            <div className="relative rounded-full bg-green-500 w-4 h-4">
              <div className="rounded-full absolute bg-green-500 animate-ping w-4 h-4"></div>
            </div>
            <p>Let&apos;s Connect!</p>
          </div>
        </div>
      </div>
      <div className="space-y-10 w-full">
        <div className="space-y-4">
          <h1>My Tech Stack</h1>
          <p>list of shiz</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-between">
          {techStack.map((tech, index) => (
            <div
              key={index}
              className="flex flex-grow gap-2 rounded-xl p-2.5 border border-ring hover:bg-foreground/10 duration-300 dark:bg-red-500"
            >
              <div className={`p-3 rounded-lg w-fit ${tech.bgColor}`}>
                {tech.icon}
              </div>
              <div className="flex flex-col justify-between">
                <h4>{tech.name}</h4>
                <p>{tech.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Home;
