import React, { useState } from "react"
// import logo from './logo.svg';
// import './App.css';
import Card from "./components/ui/Card"
import AnalyzePlaylist from "./utils/AnalyzePlaylist"

function App() {
  const [value, setvalue] = useState<string>("")
  // 提交
  const handleSubmit = (inputUrl: string) => {
    //url链接be like: "https://open.spotify.com/album/6DEjYFkNZh67HP7R9PSZvv?si=2b2e5822ca404301"
    const category = inputUrl.includes('album') ? 'ablum' : 'playlist'

    // 列表或专辑Id
    const id = inputUrl.split(`/${category}/`)[1].split("?")[0]
    
    console.log('id为？', id)

    AnalyzePlaylist(id, category)
  }
  return (
    <div className='w-full h-screen flex justify-center items-center'>
      <div className='w-1/2'>
        {/* <Card>1111</Card> */}

        <form className='mb-20'>
          <label
            htmlFor='default-search'
            className='mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white'
          >
            Search
          </label>
          <div className='relative'>
            <div className='absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none'>
              <svg
                className='w-4 h-4 text-gray-500 dark:text-gray-400'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 20 20'
              >
                <path
                  stroke='currentColor'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
                />
              </svg>
            </div>
            <input
              value={value}
              onChange={(e) => {
                setvalue(e.target.value)
              }}
              type='search'
              id='default-search'
              className='block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              placeholder='键入spotify歌单链接'
              required
            />
            <button
              type='submit'
              className='text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
              onClick={() => handleSubmit(value)}
            >
              Search
            </button>
          </div>
        </form>

        <Card list={["test1", "test2"]}>Spotify 歌单</Card>
      </div>
    </div>
  )
}

export default App
