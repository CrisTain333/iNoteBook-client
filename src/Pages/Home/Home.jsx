import Notes from "../../Components/Notes/Notes";

const Home = () => {
  return (
    <div>
      {/* <CreateNote /> */}
      <div className="w-[99%] mx-auto mt-10 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <Notes />
          <Notes />
          <Notes />
          <Notes />
          <Notes />
        </div>
      </div>
    </div>
  );
};

export default Home;
