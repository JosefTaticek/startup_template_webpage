import Dashboard from "./images/placeholder.svg";

const App = () => {


  return <div class="">

  <header class="py-4 md:py-6">
    <div class=" px-4 md:px-6 flex items-center justify-between">
      <h1>Logo</h1>
      <nav class="flex space-x-2">
        <h2 class="font-medium text-gray-500 hover:text-gray-900 transition-colors dark:text-gray-400 dark:hover:text-gray-50 cursor-pointer" href="#">Features</h2>
        <h2 class="font-medium text-gray-500 hover:text-gray-900 transition-colors dark:text-gray-400 dark:hover:text-gray-50 cursor-pointer" href="#">References</h2>
      </nav>

      <div class="flex space-x-2 items-center">
        <h2 class="font-medium text-gray-500 hover:text-gray-900 transition-colors dark:text-gray-400 dark:hover:text-gray-50 cursor-pointer">Sign in</h2>
        <h2 class="flex justify-center items-center rounded-md py-4 bg-gray-900 px-4 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300">Get Started</h2>
      </div>
    </div>
  </header>  
    
  <main>


 {/*Main top*/}
  <section class="mt-32">
    <div class="flex flex-col items-center justify-center">
      <p class="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">AI for B2B</p>
      <h1 class="text-4xl font-bold tracking-tighter sm:text-6xl py-2">Unleash the Power of AI</h1>
      <p class="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 border-b border-gray-300 pb-10 my-4 text-center">Transform your business with our advanced AI platform. From predictive analytics to intelligent automation, we help you unlock new opportunities and drive innovation.</p>
    </div>
  </section>

  {/*Text+picture section*/}
  <section>
    <div>
      <h1 class="text-4xl font-bold tracking-tighter sm:text-5xl py-2 text-center">Powering Business Transformation</h1>
      <p class="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 my-4 text-center">Our AI solution is designed to deliver real value to your enterprise. With our cutting-edge technology and industry expertise, you can harness the full potential of AI to improve operational efficiency, enhance customer experience, and accelerate innovation.</p>
      <img alt="image" src={Dashboard} class="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"/>
    </div>
  </section>

  {/*Table text section*/}
  <section>
    <div class="flex flex-col items-center justify-center mt-10 border-t border-gray-300 pt-10">
      <p class="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">Key Features</p>
      <h1 class="text-4xl font-bold tracking-tighter sm:text-5xl py-2">Innovation at Your Fingertips</h1>
      <p class="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 border-b border-gray-300 pb-10 my-4 text-center">Our platform offers a comprehensive suite of AI capabilities to meet the diverse needs of your organization. Here are some of the features that set us apart.</p>
    </div>

    <div>
      
    </div>
  </section>


  </main>
  


  <footer>
    
  </footer>


    
  </div>
}

export default App