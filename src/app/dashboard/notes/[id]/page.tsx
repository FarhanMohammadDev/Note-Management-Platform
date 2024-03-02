'use client'

export default function Page({ params }: { params: { id: string } }) {

  const { id } = params;

  return (
    <div className="max-w-xl mx-auto mt-16 flex flex-col border rounded-lg bg-white p-8">
      <span className="w-20 bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-red-900 dark:text-red-300">
        important
      </span>
      <h2 className="title-font mb-1 text-lg font-medium text-gray-900">Feedback</h2>
      <p className="mb-5 leading-relaxed text-gray-600">If you had any issues or you liked our product, please share
        with us!
      </p>
      <div className="mb-4">
        {/* <label htmlFor="email" className="text-sm leading-7 text-gray-600">Email</label> */}
        {/* <input type="email" id="email" name="email" className="w-full rounded border border-gray-300 bg-white py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200" /> */}
      </div>
      <div className="mb-4">
        {/* <label htmlFor="message" className="text-sm leading-7 text-gray-600">Message</label> */}
        {/* <textarea id="message" name="message" className="h-32 w-full resize-none rounded border border-gray-300 bg-white py-1 px-3 text-base leading-6 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"></textarea> */}
        <article>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo tenetur ad iusto illum rem numquam et amet consequuntur corporis asperiores, iure consequatur repellat cumque reprehenderit aliquam veniam aut ut enim?
          </p>
        </article>
      </div>
      {/* <button className="rounded border-0 bg-indigo-500 py-2 px-6 text-lg text-white hover:bg-indigo-600 focus:outline-none">Send</button> */}
      <p className="mt-3 text-xs text-gray-500">Feel free to connect with us on social media platforms.</p>

      <div className="flex justify-between mt-8">
        {/* <Status status={status} /> */}

        <span className="bg-red-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">
          Deadline : 57657
        </span>

        <span className="bg-red-100 text-blue-900 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-blue-400 dark:text-blue-900">
          Created at : 57577
        </span>
      </div>
    </div>
  )
}