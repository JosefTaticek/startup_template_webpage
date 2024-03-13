import Dashboard from "../img/placeholder.svg";

const Features = () => {
  return <div>

<main className="">
{/*Main top*/}
 <section className="mt-20">
   <div className="flex flex-col items-center justify-center">
     <p className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">AI for B2B</p>
     <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl py-2">Our product features</h1>
     <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed  border-b border-gray-300 pb-20 my-4 text-center">Transform your business with our advanced AI platform. From predictive analytics to intelligent automation, we help you unlock new opportunities and drive innovation.</p>
   </div>
 </section>


 {/*Text+picture section*/}
 <section className="mt-12">
   <div className="flex flex-col items-center justify-center">
     <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl py-2 text-center">Build the feature with our AI tool</h1>
     <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 my-4 text-center">Our AI solution is designed to deliver real value to your enterprise. With our cutting-edge technology and industry expertise, you can harness the full potential of AI to improve operational efficiency, enhance customer experience, and accelerate innovation.</p>
     <img alt="XX" src={Dashboard} className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center h-[400px]"/>
   </div>
 </section>


 {/*Key features (grid) text section*/}
<section className="mt-24">
  <div className="flex flex-col justify-center items-center mx-16 lg:flex lg:flex-row">
    <div>
      <p className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">ML model</p>
      <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl text-left">Advanced machine learning</h1>
      <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 my-4 text-left">Leverage the latest in ML algorithms to extract insights from your data and make accurate predictions.</p>
    </div>
    <div>
      <img alt="XXS" src={Dashboard} className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center h-[400px]"/>
    </div>
  </div>
</section>

<section className="mt-24">
  <div className="flex flex-col justify-center items-center mx-16 lg:flex lg:flex-row">
    <div>
      <p className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">AI based</p>
      <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl text-left">Automated Decision Support</h1>
      <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 my-4 text-left">Empower your team with AI-driven recommendations that enhance decision-making and drive business outcomes.</p>
    </div>
    <div>
      <img alt="XXA" src={Dashboard} className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center h-[400px]"/>
    </div>
  </div>
</section>

<section className="mt-24">
  <div className="flex flex-col justify-center items-center mx-16 lg:flex lg:flex-row">
    <div>
      <p className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">CX</p>
      <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl text-left">Personalized Customer Engagement</h1>
      <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 my-4 text-left">Deliver hyper-personalized experiences by segmenting audiences and tailoring content based on individual preferences.</p>
    </div>
    <div>
      <img alt="XXG" src={Dashboard} className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center h-[400px]"/>
    </div>
  </div>
</section>


 {/*Real results section*/}
 <section className="bg-gray-100 py-12 md:py-24 mt-24">
  <div className="space-y-12 px-4 md:px-">
    <div className="flex flex-col items-center justify-center space-y-4 text-center">
      <div className="flex flex-col items-center">
        <p className="inline-block rounded-lg bg-gray-900 px-3 text-sm font-semibold text-gray-50 py-1">Trusted by Industry Leaders</p>
        <h1 className="text-3xl sm:text-5xl tracking-tighter font-bold py-5">Real Results, Satisfied Clients</h1>
        <p className="max-w-[800px] text-center py-3 text-gray-500 md:text-xl lg:text-base xl:text-xl">Don't just take our word for it. Hear from the companies that have experienced the impact of our AI solution on their business.</p>
      </div>
    </div>

    <div className="mx-auto grid max-w-sm items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
      <div className="flex flex-col items-center space-y-2">
        <img alt="XYY" src={Dashboard} class="h-[120px] w-[120px] rounded-lg overflow-hidden"></img>
        <p className="text-sm text-gray-500">The AI platform provided by Acme AI has been a game-changer for our organization. We have been able to unlock new insights from our data and leverage the power of AI to improve operational efficiency and customer experience.</p>
        <h2 className="font-medium">- John Doe, CEO</h2>
      </div>
      <div className="flex flex-col items-center space-y-2">
      <img alt="Yxx" src={Dashboard} class="h-[120px] w-[120px] rounded-lg overflow-hidden"></img>
        <p className="text-sm text-gray-500">The AI platform provided by Acme AI has been a game-changer for our organization. We have been able to unlock new insights from our data and leverage the power of AI to improve operational efficiency and customer experience.</p>
        <h2>- John Novak, VP of sales</h2>
      </div>
      <div className="flex flex-col items-center space-y-2">
      <img alt="XY2" src={Dashboard} class="h-[120px] w-[120px] rounded-lg overflow-hidden"></img>
        <p className="text-sm text-gray-500">The AI platform provided by Acme AI has been a game-changer for our organization. We have been able to unlock new insights from our data and leverage the power of AI to improve operational efficiency and customer experience.</p>
        <h2>- Thomas Rockie, President</h2>
      </div>
    </div>
  </div>
 </section>


 <section className="py-12 md:py-24">
  <div className=" flex flex-col items-center justify-center space-y-4 px-4 md:px-6">
    <div className="text-center space-y-2">
      <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Experience the Power of AI</h1>
      <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">Ready to take your business to the next level with AI? Contact us to schedule a demo or learn more about our AI solutions.</p>
    </div>
    <a
      className="px-8 py-[10px] bg-black text-white font-semibold rounded-md shadow-sm hover:bg-black/90 focus:outline-none focus:ring-offset-2" href="https://www.seznam.cz/">
     Get started
    </a>
  </div>
</section>



 </main>
  </div>
}

export default Features