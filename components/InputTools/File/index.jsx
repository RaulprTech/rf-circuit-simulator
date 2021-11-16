import React from 'react'

function index() {
    return (
        <div className="z-10 w-screen h-full flex flex-col">
            <div className="extraOutline p-8 h-full w-full bg-whtie m-auto rounded-lg">
                <div className="file_upload p-5 relative border-4 border-dotted border-gray-300 rounded-lg w-full h-full">
                    <svg className="text-indigo-500 w-24 mx-auto mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" /></svg>
                    <div className="input_field flex flex-col w-max mx-auto text-center">
                        <label>
                            <input className="text-sm cursor-pointer w-36 hidden" type="file" multiple />
                            <div className="text bg-indigo-600 text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-indigo-500">Seleccione</div>
                        </label>
                        <div className="title text-indigo-500 uppercase">o arrastre el archivo aqui</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default index