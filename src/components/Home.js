import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { AiOutlineCaretUp, AiOutlineCaretDown } from 'react-icons/ai'
import i18next from 'i18next'
import CrudOper from './CrudOper'


const languages = [
    {
        code: 'fr',
        name: 'Francais',
        country_code: 'fr',
       
        
    },
    {
        code: 'en',
        name: 'English',
        country_code: 'gb'
    },
    {
        code: 'kiny',
        name: 'Kinyarwanda',
        country_code: 'rw'
    }
]

const GlobeIcon = ({ width = 24, height = 24 }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        fill="currentColor"
        className="bi bi-globe"
        viewBox="0 0 16 16"
    >
        <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z" />
    </svg>
)

function Home() {
    const [isOpen, setIsOpen] = useState(false)
    const { t } = useTranslation()
    return (
        <div className='container sm:mx-0 bg-slate-50 dark:bg-slate-600 dark:text-white lg:mx-[20.8rem] h-[80%] w-[60%]'>
            <div className='relative flex flex-col float-right w-[340px] h-[340px] rounded-lg justify-end'>
                <button onClick={() => setIsOpen((prev) => !prev)} className='absolute bg-blue-400 dark:bg-slate-500 top-0 p-1 mx-[26.5rem] w-[70px] flex items-center font-bold text-lg rounded-lg tracking-wider border-4 border-transparent active-white duration-300 active:text-white'><GlobeIcon />
                    {!isOpen ? (
                        <AiOutlineCaretDown className='h-8' />
                    ) : (
                        <AiOutlineCaretUp className='h-8' />
                    )}
                </button>
                {isOpen && (
                    <div className='bg-blue-400 dark:bg-slate-500 absolute top-14 flex flex-col items-start rounded-lg p-2 mx-[21.4rem]  w-[45%]'>
                        {languages.map((item, i,) => (
                            <div key={i.country_code} class="flex w-full justify-between hover:bg-blue-300 cursor-pointer rounded-r-lg border-l-transparent" onClick={() => i18next.changeLanguage(item.code)}>
                                {/* <h3>{item.code}</h3> */}
                                <h3>{item.name}</h3>
                            </div>
                        ))}
                    </div>
                )}

            </div>
            <div className='flex flex-col items-center mt-4'>
                <h1 className='mb-3 font-bold'>{t('welcome_message')}</h1>
                <div>
                    <CrudOper />
                </div>
            </div>

        </div>
    )
}

export default Home
