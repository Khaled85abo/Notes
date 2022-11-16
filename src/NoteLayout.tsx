import { Note } from "./App"
import {useParams, Navigate, Outlet, useOutletContext} from 'react-router-dom'
type NotesLayoutProps = {
    notes : Note[]
}
export function NoteLayout({notes}: NotesLayoutProps){
    const {id} = useParams()
    const note = notes.find(n=> n.id ===id)

    if(note == null) return <Navigate to="/" replace />

    return (
        <Outlet context={note} />
    )

}


export function useNote(){
    return useOutletContext<Note>()
}