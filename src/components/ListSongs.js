import React, { useContext, useEffect, useState } from "react";
import { Songs } from "../Context";

export default function ListSongs() {
    const {DataSongs, handleSetSong, song} = useContext(Songs);
    const [idSong, setIdSong] = useState(0);
    const handlePlaySong = (idsong) =>  {
        setIdSong(idsong);
        handleSetSong(idsong);
    }
    useEffect(()=>{
        setIdSong(song.id);
    },[song])
    return(
        <div className="col-span-2 overflow-y-scroll">
            <table className="table-auto w-full mt-1">
                <thead className="text-white h-12">
                    <tr>
                        <th className="w-[10%]">STT</th>
                        <th className="text-left">title</th>
                        <th className="w-[10%]">Author</th>
                        <th className="w-[10%]">Download</th>
                    </tr>
                </thead>
                <tbody>
                    { DataSongs.map((song, index) => (
                    <tr key={index} 
                        className={`bg-slate-800 h-12 text-gray-400 hover:bg-slate-600 hover:text-cyan-600 cursor-pointer ${idSong === song.id && `bg-slate-600 text-cyan-600`}`} 
                        onClick={()=>handlePlaySong(song.id)}
                    >
                        <td className="text-center">{index + 1}</td>
                        <td>{song.name}</td>
                        <td className="text-center">{song.author}</td>
                        <td className="text-center"><a href={song.url}><i className="fa fa-download"></i></a></td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}