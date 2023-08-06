import React, { useEffect, useState } from 'react'
import CodeMirror from '@uiw/react-codemirror';
import { sql } from "@codemirror/lang-sql"
import { githubLight } from '@uiw/codemirror-theme-github';

const Editor = ({ setQuery, query, runQuery, tableData, setTableData }) => {

    return (
        <div className='flex flex-col h-full min-h-[500px] w-full gap-4 '>
            {/* top controls */}
            <div className='px-4  py-2 justify-between border items-center flex rounded-2xl'>
                <img src="./sql.svg" width={200} />
                <button onClick={() => runQuery(query)} className='flex bg-blue-600 text-white rounded-xl px-4 space-x-2 py-2 active:bg-green-700 '>
                    <p>Run</p>
                    <span className='material-symbols-outlined'>play_arrow</span>
                </button>
            </div>

            {/* code editor  */}
            <CodeMirror
                className='w-full h-full  outline-none text-lg border text-start rounded-2xl overflow-hidden'
                value={query}
                height="100%"
                extensions={[sql({ jsx: true })]}
                onChange={setQuery}
                theme={githubLight}
                key={"codemirror"}
            />
        </div>
    );
}



export default Editor