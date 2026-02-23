import {useState} from 'react';


export const LangToggleButton = () => {

    const [selected, setSelected] = useState<'kk' | 'kor'>('kk');

    return (
        <div className="mb-4">
            <p className="text-xs text-purple-400 mb-2 px-1 font-medium uppercase tracking-wider">I want to learn</p>

            <div className="bg-purple-50 rounded-xl p-1 flex gap-1">

                <button
                    onClick={() => setSelected('kk')}
                    className={`flex-1 py-2 text-sm rounded-lg transition-all duration-200 ${
                        selected === 'kk'
                            ? 'bg-white text-purple-600 font-semibold shadow-sm'
                            : 'text-gray-400 hover:text-gray-600'
                    }`}
                >
                    Karakalpak
                </button>
                <button
                    onClick={() => setSelected('kor')}
                    className={`flex-1 py-2 text-sm rounded-lg transition-all duration-200 ${
                        selected === 'kor'
                            ? 'bg-white text-purple-600 font-semibold shadow-sm'
                            : 'text-gray-400 hover:text-gray-600'
                    }`}
                >
                    Korean
                </button>
            </div>
        </div>
    )
}
