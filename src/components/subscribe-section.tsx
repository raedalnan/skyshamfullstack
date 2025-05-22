import { Button } from "./ui/button";
import { Input } from "./ui/input";
import Wrapper from "./wrapper";

export default function SubscribeSection() {
  return (
    <section className="pb-10">
      <Wrapper className="">
        <div className="bg-blue-50 py-20 rounded-t-2xl rounded-br-2xl px-6">
          <h3 className="font-semibold text-navy text-center leading-[1.4] text-2xl md:text-3xl md:w-[75%] mx-auto">
            Subscribe to get information, latest news and other interesting
            offers about Sky Sham 
          </h3>
          <form className="mt-18 md:w-[50%] mx-auto flex gap-4 flex-col sm:flex-row ">
            <Input className="" placeholder="Email" />
            <Button className="h-12 px-4">Subscribe</Button>
          </form>
        </div>
      </Wrapper>
    </section>
  );
}
