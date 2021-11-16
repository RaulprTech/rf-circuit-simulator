import React from 'react'

export default () => {
    return (
        <article className="flex justify-around p-5 h-full w-full">
                <div className="mx-auto flex">
                    <div className="bg-white my-6 justify-center">
                        <table className="border-collapse">
                            <thead>
                                <tr>
                                    <th className="py-4 px-6 bg-gray-900 font-bold uppercase text-sm text-white border-b border-grey-light">
                                        Parametros
                                        <select id="param" className=" cursor-pointer text-sm text-white bg-gray-900 outline-none px-4 py-2 rounded-lg">
                                            <option value="Z" selected><b>Z</b></option>
                                            <option value="Y"><b>Y</b></option>
                                            <option value="ABCD"><b>ABCD</b></option>
                                            <option value="S"><b>S</b></option>
                                            <option value="T"><b>T</b></option>
                                        </select>
                                    </th>
                                    <th className="py-4 px-6 bg-gray-900 font-bold uppercase text-sm text-white border-b border-grey-light">
                                        Parametros
                                        <select id="param" className=" cursor-pointer text-sm text-white bg-gray-900 outline-none px-4 py-2 rounded-lg">
                                            <option value="Z"><b>Z</b></option>
                                            <option value="Y" selected><b>Y</b></option>
                                            <option value="ABCD"><b>ABCD</b></option>
                                            <option value="S"><b>S</b></option>
                                            <option value="T"><b>T</b></option>
                                        </select>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <InputParam idInput="Z1" idResult="Y1" />
                                <InputParam idInput="Z2" idResult="Y2" />
                                <InputParam idInput="Z3" idResult="Y3" />
                                <InputParam idInput="Z4" idResult="Y4" />
                                <tr className="hover:bg-grey-lighter">
                                    <td className="py-4 px-6 border-b border-grey-light">
                                        <button>
                                            <button className="flex justify-around">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                                </svg>
                                                Convertir
                                            </button>
                                        </button>
                                    </td>
                                    <td className="py-4 px-6 text-center border-b border-grey-light">
                                        <button className="flex justify-around">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                            </svg>
                                            Graficar
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
        </article>
    )
}

const InputParam = ({ idInput, idResult, result = 0 }) => {
    return (
        <tr className=" w-full hover:bg-grey-lighter">
            <td className="py-4 px-6 border-b border-grey-light w-16">
                <div className="flex flex-col space-y-2">
                    <input
                        id={idInput}
                        type="text"
                        name="params"
                        placeholder={idInput}
                        className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200"
                    />
                </div>
            </td>
            <td className="py-4 px-6 text-center border-b border-grey-light">
                {idResult} = {result}
            </td>
        </tr>
    )
}