import Image from "next/image";
import H2 from "./h2";
import H4 from "./h4";
import StepList from "./step-list";
import TripCard from "./trip-card";
import { Progress } from "./ui/progress";
import Wrapper from "./wrapper";

export default function BookingSteps() {
  return (
    <section className="py-10">
      <Wrapper>
        <header className="py-10">
          <H4>Easy and Fast</H4>
          <H2 className="mt-3">
            Book your next trip <br className="hidden md:block" /> in 3 easy
            steps
          </H2>
        </header>
        <div className="flex flex-col gap-8 lg:flex-row justify-between lg:items-center ">
          <div className="basis-1/2">
            <StepList />
          </div>
          <div className="pb-20 sm:pb-10 basis-1/2 flex justify-center relative">
            <TripCard className="sm:min-w-[400px]" />
            <div className="card  right-0 rounded-lg bg-white px-4 py-6 min-w-[250px]  shadow shadow-blue-200 bottom-0 absolute flex gap-2">
              <Image
                height={60}
                width={60}
                className="rounded-full h-14 w-14 object-cover"
                src="/rome.jpg"
                alt={""}
              />

              <div className="text">
                <H4>ongoing</H4>
                <h3 className="mt-2 text-lg font-medium  capitalize">
                  trip to rome
                </h3>
                <p className="mb-3 mt-4 font-medium text-sm">
                  <span className="text-[#8A79DF]">40%</span> completed
                </p>
                <Progress value={40} />
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
}
