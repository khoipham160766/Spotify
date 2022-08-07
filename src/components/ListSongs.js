import React from "react";

export default function ListSongs() {
    return(
        <div className="col-span-2">
            <table className="table-auto w-full mt-3">
                <thead className="text-white h-12">
                    <tr>
                        <th className="w-[10%]">#</th>
                        <th className="text-left">title</th>
                        <th className="w-[10%]">author</th>
                        <th className="w-[10%]">Download</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="text-center">1</td>
                        <td>1</td>
                        <td className="text-center">1</td>
                        <td className="text-center"><i className="fa fa-download"></i></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}