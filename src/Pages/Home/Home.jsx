
import { useContext, useEffect, useState } from "react";
import { ThreeCircles } from "react-loader-spinner";
import NoteCard from "../../Components/NoteCard/NoteCard";
import { AuthContext } from "../../Context/AuthProvider";

const Home = () => {
  const [isLoading, setIsLoading] = useState(false)
  const { user } = useContext(AuthContext)
  const [notes, setNotes] = useState([])


  useEffect(() => {
    setIsLoading(true)
    fetch(`http://localhost:8000/api/v1/note/${user?.email}`)
      .then(res => res.json())
      .then(data => {
        setNotes(data?.data?.userNotes)
        setIsLoading(false)
      })
  }, [])






  if (isLoading) {
    return (
      <div className="h-3/4 w-full flex justify-center items-center mt-20" >
        <ThreeCircles
          height="150"
          width="150"
          color="#3075FF"
          wrapperStyle={{}}
          wrapperclassName=""
          visible={true}
          ariaLabel="three-circles-rotating"
          outerCircleColor=""
          innerCircleColor=""
          middleCircleColor=""
        />
      </div>
    )
  }

  return (
    <div>
      {/* <CreateNote /> */}
      <div className="w-[99%] mx-auto mt-10 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {notes?.map(note => {
            return (
              <NoteCard key={note?._id} note={note}></NoteCard>
            )
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
