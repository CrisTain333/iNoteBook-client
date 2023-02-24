import { useQuery } from "@tanstack/react-query";
import React, { useContext, useEffect, useState } from "react";
import { ThreeCircles } from "react-loader-spinner";
import { AuthContext } from "../../Context/AuthProvider";
import NoteCard from "../NoteCard/NoteCard";

const Notes = () => {
  const [isLoading, setIsLoading] = useState(false)
  const { user } = useContext(AuthContext)
  const [notes, setNotes] = useState([])


  useEffect(() => {
    fetch(`http://localhost:8000/api/v1/note/${user?.email}`)
      .then(res => res.json())
      .then(data => {
        setNotes(data?.data?.userNotes)
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
  return <div>
    {notes?.map(note => {
      return (
        <NoteCard key={note?._id} note={note}></NoteCard>
      )
    })}

  </div>;
};

export default Notes;
