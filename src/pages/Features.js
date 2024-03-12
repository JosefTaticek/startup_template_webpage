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
<section className="mt-20">
  <div className="flex flex-row justify-center items-center mx-16">
    <div>
      <p className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">AI for B2B</p>
      <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl text-left">Advanced machine learning</h1>
      <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 my-4 text-left">Leverage the latest in ML algorithms to extract insights from your data and make accurate predictions.</p>
    </div>
    <div>
      <img alt="XX" src={Dashboard} className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center h-[400px]"/>
    </div>
  </div>
</section>

{/*
 <section className="my-10 mt-10">
   <div class="flex flex-col items-center justify-center mt-10 border-t border-gray-300 pt-10">
     <p className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">Key Features</p>
     <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl py-2">Innovation at Your Fingertips</h1>
     <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 border-b border-gray-300 pb-10 my-4 text-center">Our platform offers a comprehensive suite of AI capabilities to meet the diverse needs of your organization. Here are some of the features that set us apart.</p>
   </div>

  <div className="mx-auto grid max-w-sm items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5-xl lg:grid-cols-3">
      <div className="grid gap-1">
        <h3 className="text-lg font-bold">Advanced Machine Learning</h3>
        <p className="text-sm text-gray-500">Leverage the latest in ML algorithms to extract insights from your data and make accurate predictions.</p>
      </div>

      <div className="grid gap-1 ">
        <h3 className="text-lg font-bold">Automated Decision Support</h3>
        <p className="text-sm text-gray-500">Empower your team with AI-driven recommendations that enhance decision-making and drive business outcomes.</p>
      </div>

      <div className="grid gap-1">
        <h3 className="text-lg font-bold">Personalized Customer Engagement</h3>
        <p className="text-sm text-gray-500">Deliver hyper-personalized experiences by segmenting audiences and tailoring content based on individual preferences.</p>
      </div>

      <div className="grid gap-1">
        <h3 className="text-lg font-bold">Automated Workflow Orchestration</h3>
        <p className="text-sm text-gray-500">Streamline your business processes with AI-powered automation that handles repetitive tasks and workflows.</p>
      </div>

      <div>
        <h3 className="text-lg font-bold">Real-time Anomaly Detection</h3>
        <p className="text-sm text-gray-500">Identify anomalies and potential issues in your operations in real time, allowing you to take proactive measures.</p>
      </div>

      <div>
        <h3 className="text-lg font-bold">Predictive Maintenance Insights</h3>
        <p className="text-sm text-gray-500">Anticipate equipment failures and maintenance needs based on AI-generated insights, reducing downtime and costs.</p>
      </div>
   </div>
 </section>
*/}

 {/*Real results section*/}
 <section className="bg-gray-100 py-12 md:py-24">
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
    <div className="my-4 w-full max-w-[400px] space-y-2">
      <input
        type="email"
        placeholder="Enter your email"
        className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500"
      />
      <button
        type="submit"
        className="w-full px-4 py-2 bg-black text-white font-semibold rounded-md shadow-sm hover:bg-black/90 focus:outline-none focus:ring-offset-2"
      >
        Contact Sales
      </button>
    </div>
  </div>
</section>



 </main>
  </div>
}

export default Features