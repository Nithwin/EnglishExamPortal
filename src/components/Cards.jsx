import Card from "./Card"
import { CgProfile } from "react-icons/cg";
import Progress from 'react-circle-progress-bar';


export const WelcomeCard = () => (
  <Card className=" space-y-5 h-full max-w-[27rem] mx-auto min-w-[22rem] lg:col-span-1 lg:row-span-2 lg:m-0 lg:max-w-none lg:grid lg:place-items-center lg:h-full lg:mx-0 lg:min-w-0 lg:p-0 lg:space-y-0">
    <p className="text-[2.5rem] lg:text-[3rem]">Welcome</p>
    <div className="flex flex-col items-center lg:p-5 w-full">
      <div className="flex items-center flex-col">
        <CgProfile className="size-[7rem] ring-8 ring-white rounded-full" />
      </div>
      <div className="bg-white rounded-4xl w-full space-y-7 m-0 lg:py-[2rem]">
        <div className="space-y-2 pt-[1rem]">
          <p className="text-sky font-bold text-[2rem] text-center">
            Nithwin V. M
          </p>
          <hr className="h-0.5 bg-primary rounded-full w-[8rem] mx-auto" />
          <p className="text-center text-lightgrey text-sm">
            22cs055@nandhaengg.org
          </p>
        </div>
        <div className="flex flex-col w-full p-3 gap-y-3 lg:py-[1rem]">
          <div className="flex justify-between">
            <p className="text-lightgrey  text-sm ">Register Number</p>
            <p className="uppercase font-semibold  text-sm lg:text-[1rem]">22cs055</p>
          </div>
          <div className="flex justify-between">
            <p className="text-lightgrey  text-sm ">Degree</p>
            <p className="uppercase font-semibold  text-sm ">b.e cse</p>
          </div>
          <div className="flex justify-between">
            <p className="text-lightgrey  text-sm ">Batch</p>
            <p className="uppercase font-semibold text-sm ">2026</p>
          </div>
          <div className="flex justify-between">
            <p className="text-lightgrey  text-sm ">College</p>
            <p className="font-semibold  text-sm ">
              Nandha Engineering College
            </p>
          </div>
        </div>
      </div>
    </div>
  </Card>
)

export const SolvedCards = () => (
  <Card className="space-y-5 h-full max-w-[27rem] mx-auto min-w-[22rem] lg:col-span-2 lg:row-span-1 lg:max-w-none lg:m-0 lg:min-w-0">

    <p className="text-[2.5rem]">Solved question</p >
    <div className="lg:flex lg:w-full lg:justify-evenly ">
      <div className="flex justify-center ">
        <Progress
          hideBall
          strokeWidth={10}
          subtitle={`${100}/${1000}`}
          gradient={[{ stop: 0.0, color: '#2563EB' }, { stop: 1, color: '#2563EB' }]}
          progress={200 / 1000 * 100} />
      </div>
      <div className="flex flex-col gap-3">
        <div>
          <div class="mb-1 text-lg font-medium flex justify-between">
            <span >Easy</span>
            <span >100/1000</span>
          </div>
          <div class="w-full rounded-full h-2.5 mb-4 bg-gray-300">
            <div class="bg-green-500 h-2.5 rounded-full "
              style={{
                width: '45%'
              }}
            ></div>
          </div>
        </div>
        <div>
          <div class="mb-1 text-lg font-medium flex justify-between">
            <span >Medium</span>
            <span >100/1000</span>
          </div>
          <div class="w-full rounded-full h-2.5 mb-4 bg-gray-300">
            <div class="bg-yellow-500 h-2.5 rounded-full "
              style={{
                width: '65%'
              }}
            ></div>
          </div>
        </div>
        <div>
          <div class="mb-1 text-lg font-medium flex justify-between">
            <span >Hard</span>
            <span >100/1000</span>
          </div>
          <div class="w-full rounded-full h-2.5 mb-4 bg-gray-300">
            <div class="bg-red-500 h-2.5 rounded-full "
              style={{
                width: '45%'
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  </Card>
)

export const WritingCard = () => (
  <Card className={"space-y-5 max-w-[27rem] mx-auto min-w-[22rem] lg:col-span-1 lg:row-span-1 lg:max-w-none lg:m-0  lg:min-w-0"}>
    <p className="text-[2.5rem] text-center">Writing</p>
    <div className="flex justify-between">
      <div>
        <p className="text-xl">Attended</p>
        <p className="text-2xl font-semibold text-center">360</p>
      </div>
      <div>
        <p className="text-xl">Solved</p>
        <p className="text-2xl font-semibold text-center">260</p>
      </div>
    </div>
    <div className="space-y-2">
      <p className="text-xl text-center">Accuracy</p>
      <p className="text-3xl text-green-600 font-semibold text-center">56%</p>
    </div>
  </Card>

)


export const TopScoreCard = ({ className }) => (
  <Card className={`${className || ''} space-y-7 max-w-[27rem] mx-auto min-w-[22rem] lg:row-span-3 lg:col-span-1 lg:max-w-none lg:m-0 lg:min-w-0 `}>
    <p className="text-[2.5rem] text-start">Top Score</p>
    <div className="space-y-4">
      <div className="w-full h-[2rem] bg-red-500 rounded-full"></div>
      <div className="w-full h-[2rem] bg-purple-500 rounded-full"></div>
      <div className="w-full h-[2rem] bg-green-500 rounded-full"></div>
      <div className="w-full h-[2rem] bg-indigo-500 rounded-full"></div>
      <div className="w-full h-[2rem] bg-indigo-500 rounded-full"></div>
      <div className="w-full h-[2rem] bg-indigo-500 rounded-full"></div>
      <div className="w-full h-[2rem] bg-indigo-500 rounded-full"></div>
      <div className="w-full h-[2rem] bg-indigo-500 rounded-full"></div>
      <div className="w-full h-[2rem] bg-indigo-500 rounded-full"></div>
      <div className="w-full h-[2rem] bg-indigo-500 rounded-full"></div>
      <div className="w-full h-[2rem] bg-lightgrey rounded-full"></div>
    </div>
  </Card>
)


export const ReadingCard = () => (
  <Card className="space-y-7 max-w-[27rem] mx-auto min-w-[22rem] lg:col-span-1 lg:row-span-1 lg:max-w-none lg:m-0 lg:min-w-0 ">
    <p className="text-[2.5rem] text-center">Reading</p>
    <div className="flex justify-between">
      <div>
        <p className="text-xl">Attended</p>
        <p className="text-2xl font-semibold text-center">360</p>
      </div>
      <div>
        <p className="text-xl">Solved</p>
        <p className="text-2xl font-semibold text-center">260</p>
      </div>
    </div>
    <div className="space-y-2">
      <p className="text-xl text-center">Accuracy</p>
      <p className="text-3xl text-green-600 font-semibold text-center">56%</p>
    </div>
  </Card>
)

export const SpeakingCard = () => (
  <Card className={"space-y-7 max-w-[27rem] mx-auto min-w-[22rem] lg:row-span-1 lg:col-span-1 lg:max-w-none lg:m-0 lg:min-w-0"}>
    <p className="text-[2.5rem] text-center">Speaking</p>
    <div className="flex justify-between">
      <div>
        <p className="text-xl">Attended</p>
        <p className="text-2xl font-semibold text-center">360</p>
      </div>
      <div>
        <p className="text-xl">Solved</p>
        <p className="text-2xl font-semibold text-center">260</p>
      </div>
    </div>
    <div className="space-y-2">
      <p className="text-xl text-center">Accuracy</p>
      <p className="text-3xl text-green-600 font-semibold text-center">56%</p>
    </div>
  </Card>

)

export const ListeningCard = () => (
  <Card className={"space-y-7 max-w-[27rem] mx-auto min-w-[22rem] lg:row-span-1 lg:col-span-1 lg:max-w-none lg:m-0 lg:min-w-0"}>
    <p className="text-[2.5rem] text-center">Listening</p>
    <div className="flex justify-between">
      <div>
        <p className="text-xl">Attended</p>
        <p className="text-2xl font-semibold text-center">360</p>
      </div>
      <div>
        <p className="text-xl">Solved</p>
        <p className="text-2xl font-semibold text-center">260</p>
      </div>
    </div>
    <div className="space-y-2">
      <p className="text-xl text-center">Accuracy</p>
      <p className="text-3xl text-green-600 font-semibold text-center">56%</p>
    </div>
  </Card>
)

export const ScoreCard = () => (
  <Card className={"max-w-[27rem] mx-auto min-w-[22rem] lg:row-span-1 lg:col-span-1 lg:max-w-none lg:m-0 lg:min-w-0"}>
    <div className="grid place-items-center h-[11rem] ">
      <div class="relative size-60">
        <svg class="size-full rotate-180" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
          {/* <!-- Background Circle (Gauge) --> */}
          <circle cx="18" cy="18" r="16" fill="none" class="stroke-current text-gray-300 " stroke-width="3" stroke-dasharray="50 100" stroke-linecap="round"></circle>

          {/* <!-- Gauge Progress --> */}
          <circle cx="18" cy="18" r="16" fill="none" class="stroke-current text-blue-600 " stroke-width="1" stroke-dasharray="25 100" stroke-linecap="round"></circle>
        </svg>

        {/* <!-- Value Text --> */}
        <div class="absolute top-[4rem] start-1/2 transform -translate-x-1/2 text-center">
          <span class="text-2xl font-bold text-blue-600 ">50</span>
          <span class="text-lg font-semibold text-blue-600 block">Score</span>
        </div>
      </div>
    </div>
  </Card>
)


