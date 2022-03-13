export default function HomePage() {
  return (
    <div className="flex flex-row justify-center pb-16 w-full">
      <div className="container">
        <div className="w-full">
          <div className="flex flex-row justify-center items-center py-6 pt-48">
            <img alt="" className="w-12 h-12" src={require('../images/umi.png')} />
            <p className="mx-4 text-xl">x</p>
            <img alt="" className="w-12 h-12" src={require('../images/tailwindcss.png')} />
          </div>
          <h1 className="text-center"></h1>
        </div>
        <h1 className="text-4xl font-extrabold tracking-tight text-center text-slate-900 dark:text-white sm:text-5xl lg:text-6xl">
          UmiJS
          <span className="mx-4">x</span>
          TailwindCss
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg text-center text-slate-600 dark:text-slate-400">
          This is an example using
          <a
            className="mx-2 text-cyan-500"
            href="https://umijs.org/zh-CN"
            rel="noreferrer"
            target="_blank"
          >
            UmiJS
          </a>
          with
          <a
            className="mx-2 text-cyan-500"
            href="https://tailwindcss.com/"
            rel="noreferrer"
            target="_blank"
          >
            TailwindCss
          </a>
          .
        </p>
        <div className="p-16 mt-16 w-full bg-gray-50 rounded-2xl">
          <p className="mb-4 text-4xl font-extrabold text-slate-900">Examples</p>

          <div className="flex flex-row my-16">
            <p className="w-1/3 text-2xl font-bold text-slate-900">Text Size</p>
            <div>
              <p className="text-xs">text-xs</p>
              <p className="text-sm">text-sm</p>
              <p className="text-base">text-base</p>
              <p className="text-lg">text-lg</p>
              <p className="text-xl">text-xl</p>
              <p className="text-2xl">text-2xl</p>
              <p className="text-3xl">text-3xl</p>
            </div>
          </div>

          <div className="flex flex-row my-16">
            <p className="w-1/3 text-2xl font-bold text-slate-900">Text Color</p>

            <div>
              <p className="text-red-300">text-red-300</p>
              <p className="text-blue-600">text-blue-600</p>
              <p className="text-green-300">text-green-300</p>
              <p className="text-pink-400">text-pink-400</p>
            </div>
          </div>

          <div className="flex flex-row my-16">
            <p className="w-1/3 text-2xl font-bold text-slate-900">Sizes</p>
            <div>
              <div className="p-4 my-4 w-24 bg-white rounded-2xl shadow-2xl">w-24</div>
              <div className="p-4 my-4 w-36 bg-white rounded-2xl shadow-2xl">w-36</div>
              <div className="p-4 my-4 w-64 bg-white rounded-2xl shadow-2xl">w-64</div>
              <div className="p-4 my-4 w-96 bg-white rounded-2xl shadow-2xl">w-96</div>
            </div>
          </div>

          <div className="flex flex-row my-16">
            <p className="w-1/3 text-2xl font-bold text-slate-900">Animations</p>

            <section className="flex flex-wrap justify-start items-center p-10 sm:flex-col md:flex-row">
              <div className="relative m-10 w-32 h-32 animate-spin">
                <div className="absolute inset-0 bg-white rounded-lg shadow-2xl opacity-25" />
                <div className="absolute inset-0">
                  <div className="w-full h-full bg-white rounded-lg shadow-2xl" />
                </div>
              </div>

              <div className="relative m-10 w-32 h-32 animate-pulse">
                <div className="absolute inset-0 bg-white rounded-lg shadow-2xl opacity-25" />
                <div className="absolute inset-0">
                  <div className="w-full h-full bg-white rounded-lg shadow-2xl" />
                </div>
              </div>

              <div className="relative m-10 w-32 h-32 animate-ping">
                <div className="absolute inset-0 bg-white rounded-lg shadow-2xl opacity-25" />
                <div className="absolute inset-0">
                  <div className="w-full h-full bg-white rounded-lg shadow-2xl" />
                </div>
              </div>

              <div className="relative m-10 w-32 h-32 animate-bounce">
                <div className="absolute inset-0 bg-white rounded-lg shadow-2xl opacity-25" />
                <div className="absolute inset-0">
                  <div className="w-full h-full bg-white rounded-lg shadow-2xl" />
                </div>
              </div>
            </section>
          </div>

          <div className="flex flex-row my-16">
            <p className="w-1/3 text-2xl font-bold text-slate-900">Hover Animations</p>

            <section className="flex flex-wrap justify-start items-center p-10 sm:flex-col md:flex-row">
              <div className="relative m-5 w-32 h-32 cursor-pointer">
                <div className="absolute inset-0 bg-white rounded-lg shadow-2xl opacity-25" />
                <div className="absolute inset-0 transition duration-300 hover:scale-75">
                  <div className="w-full h-full bg-white rounded-lg shadow-2xl" />
                </div>
              </div>

              <div className="relative m-5 w-32 h-32 cursor-pointer">
                <div className="absolute inset-0 bg-white rounded-lg shadow-2xl opacity-25" />
                <div className="absolute inset-0 transition duration-300 hover:scale-75 hover:rotate-90">
                  <div className="w-full h-full bg-white rounded-lg shadow-2xl" />
                </div>
              </div>

              <div className="relative m-5 w-32 h-32 cursor-pointer">
                <div className="absolute inset-0 bg-white rounded-lg shadow-2xl opacity-25" />
                <div className="absolute inset-0 transition duration-300 hover:rotate-45">
                  <div className="w-full h-full bg-white rounded-lg shadow-2xl" />
                </div>
              </div>

              <div className="relative m-5 w-32 h-32 cursor-pointer">
                <div className="absolute inset-0 bg-white rounded-lg shadow-2xl opacity-25" />
                <div className="absolute inset-0 transition duration-300 hover:-rotate-45">
                  <div className="w-full h-full bg-white rounded-lg shadow-2xl" />
                </div>
              </div>

              <div className="relative m-5 w-32 h-32 cursor-pointer">
                <div className="absolute inset-0 bg-white rounded-lg shadow-2xl opacity-25" />
                <div className="absolute inset-0 transition duration-300 hover:-rotate-45 origin-left">
                  <div className="w-full h-full bg-white rounded-lg shadow-2xl" />
                </div>
              </div>

              <div className="relative m-5 w-32 h-32 cursor-pointer">
                <div className="absolute inset-0 bg-white rounded-lg shadow-2xl opacity-25" />
                <div className="absolute inset-0 transition duration-300 hover:-translate-x-10">
                  <div className="w-full h-full bg-white rounded-lg shadow-2xl" />
                </div>
              </div>

              <div className="relative m-5 w-32 h-32 cursor-pointer">
                <div className="absolute inset-0 bg-white rounded-lg shadow-2xl opacity-25" />

                <div className="absolute inset-0 transition duration-300 hover:scale-150 hover:rotate-90 hover:translate-x-full">
                  <div className="w-full h-full bg-white rounded-lg shadow-2xl" />
                </div>
              </div>

              <div className="relative m-5 w-32 h-32 cursor-pointer">
                <div className="absolute inset-0 bg-white rounded-lg shadow-2xl opacity-25" />
                <div className="absolute inset-0 transition duration-300 hover:skew-y-12">
                  <div className="w-full h-full bg-white rounded-lg shadow-2xl" />
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
