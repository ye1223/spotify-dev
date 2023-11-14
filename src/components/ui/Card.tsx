import React from "react"

const Card: React.FC<{ children?: React.ReactNode; list: string[] }> = ({
  children,
  list,
}) => {
  return (
    <>
      <a
        href='#'
        className='block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'
      >
        {children}

        <ul className='w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white'>
          {/* 歌单列表渲染 */}
          {list.map((item: string) => (
            <li className='w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600'>
              {item}
            </li>
          ))}
        </ul>
      </a>
    </>
  )
}

export default Card
