import React from 'react'

const App = () => {
  return <div>
    <header class="py-4 md:py-6">
        <div class="container flex items-center justify-between px-4 md:px-6 color:black">
          <link class="flex items-center space-x-2" href="#">
            <terminalIcon class="h-6 w-6" />
            <span class="font-bold tracking-tighter">shadcn</span>
          </link>
          <nav class="hidden space-x-4 md:flex">
            <link
              className="font-medium text-gray-500 hover:text-gray-900 transition-colors dark:text-gray-400 dark:hover:text-gray-50"
              href="#"
            >
              Features
            </link>
            <link
              className="font-medium text-gray-500 hover:text-gray-900 transition-colors dark:text-gray-400 dark:hover:text-gray-50"
              href="#"
            >
              References
            </link>
            <link
              className="font-medium text-gray-500 hover:text-gray-900 transition-colors dark:text-gray-400 dark:hover:text-gray-50"
              href="#"
            >
              Get Started
            </link>
          </nav>
          <div className="flex items-center space-x-4">
            <link
              className="font-medium text-gray-500 hover:text-gray-900 transition-colors dark:text-gray-400 dark:hover:text-gray-50"
              href="#"
            >
              Sign in
            </link>
            <link
              className="inline-block h-10 rounded-md bg-gray-900 px-4 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
              href="#"
            >
              Get Started
            </link>
          </div>
        </div>
      </header>





  </div>
}

export default App