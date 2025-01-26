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
        <div className="flex gap-2">
          <h1>ENGINEER</h1>
          <div className="rounded-full bg-primary py-4 px-3 h-[60px] flex gap-2 items-center">
            <div className="relative rounded-full bg-green-500 w-4 h-4">
              <div className="rounded-full absolute bg-green-500 animate-ping w-4 h-4"></div>
            </div>
            <p>Let&apos;s Connect!</p>
          </div>
        </div>
      </div>
      <div>tech stack</div>
    </div>
  );
};
export default Home;
