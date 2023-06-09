import Card from "@/components/Card";
import { ReactNode } from "react";

export default function Home() {
  return (
    <HomeWrapper>
      <CardWrapper>
        <Card className="w-11/12 border-2 !border-black !bg-[#ead792] hover:bg-[#ead792]">
          <Introduction />
        </Card>
      </CardWrapper>

      <Tokenomics />
    </HomeWrapper>
  );
}

function HomeWrapper({ children }: { children: ReactNode }) {
  return <div className="">{children}</div>;
}

function CardWrapper({ children }: { children: ReactNode }) {
  return (
    <div className="mt-10 flex items-center justify-center">{children}</div>
  );
}

function Introduction() {
  return (
    <div>
      <p className="text-4xl">
        Littleboy Token: Games, Shop with Crypto Merch, and Much More...
      </p>
      <br />
      <p className="text-4xl">
        Littleboy Token has gambling games with LBC tokens. The profits from
        these games will be burned, resulting in a decrease in token supply. We
        also have plans to open our shop, where we will accept crypto payments
        and use LBC for payouts. While we are primarily a token, we have
        ambitious plans to build a lot around it and are always open to your
        ideas. Littleboy Token utilizes a very fast, scalable, and early
        blockchain called Octa Chain.
      </p>
      <br />
      <p className="text-4xl">
        Some history: Little Boy was the type of atomic bomb dropped on the
        Japanese city of Hiroshima on August 6, 1945, during World War II.
      </p>
    </div>
  );
}

function Tokenomics() {
  return (
    <div className="mb-14 mt-14 text-center">
      <h1 className="m-auto w-fit rounded-md border-2 border-black !bg-[#e0c04a] p-3 text-4xl font-semibold md:text-5xl lg:p-3 lg:text-5xl">
        Tokenomics
      </h1>
      <div className="mt-10 flex flex-col items-center gap-4 lg:mx-4 lg:flex-row">
        <div className="w-3/4 flex-1 transform-gpu rounded-md border-2 border-black !bg-[#e0c04a] p-2 text-3xl transition-transform duration-100 hover:ml-4 hover:mr-4 hover:scale-110 md:w-2/3 md:text-4xl lg:p-3 lg:text-4xl">
          5% Team
        </div>
        <div className="w-3/4 flex-1 transform-gpu rounded-md border-2 border-black !bg-[#e0c04a] p-2 text-3xl transition-transform duration-100 hover:ml-4 hover:mr-4 hover:scale-110 md:w-2/3 md:text-4xl lg:p-3 lg:text-4xl">
          10% Games
        </div>
        <div className="w-3/4 flex-1 transform-gpu rounded-md border-2 border-black !bg-[#e0c04a] p-2 text-3xl transition-transform duration-100 hover:ml-4 hover:mr-4 hover:scale-110 md:w-2/3 md:text-4xl lg:p-3 lg:text-4xl">
          15% Airdrop
        </div>
      </div>
      <div className="mt-10 flex flex-col items-center gap-4 lg:mx-4 lg:flex-row">
        <div className="w-3/4 flex-1 transform-gpu rounded-md border-2 border-black !bg-[#e0c04a] p-2 text-3xl transition-transform duration-100 hover:ml-4 hover:mr-4 hover:scale-110 md:w-2/3 md:text-4xl lg:p-3 lg:text-4xl">
          10% Marketing
        </div>
        <div className="w-3/4 flex-1 transform-gpu rounded-md border-2 border-black !bg-[#e0c04a] p-2 text-3xl transition-transform duration-100 hover:ml-4 hover:mr-4 hover:scale-110 md:w-2/3 md:text-4xl lg:p-3 lg:text-4xl">
          10% Shop
        </div>
        <div className="w-3/4 flex-1 transform-gpu rounded-md border-2 border-black !bg-[#e0c04a] p-2 text-3xl transition-transform duration-100 hover:ml-4 hover:mr-4 hover:scale-110 md:w-2/3 md:text-4xl lg:p-3 lg:text-4xl">
          15% Listing
        </div>
      </div>
      <div className="mt-10 flex flex-col items-center gap-4 lg:mx-4 lg:flex-row">
        <div className="w-3/4 flex-1 transform-gpu rounded-md border-2 border-black !bg-[#e0c04a] p-2 text-3xl transition-transform duration-100 hover:ml-6 hover:mr-6 hover:scale-110 md:w-2/3 md:text-4xl lg:p-3 lg:text-4xl">
          15% Community Pools
        </div>
        <div className="w-3/4 flex-1 transform-gpu rounded-md border-2 border-black !bg-[#e0c04a] p-2 text-3xl transition-transform duration-100 hover:ml-6 hover:mr-6 hover:scale-110 md:w-2/3 md:text-4xl lg:p-3 lg:text-4xl">
          10% Liquidity Pools
        </div>
      </div>
      <div className="mt-10 flex flex-col items-center gap-4 lg:mx-4">
        <div className="w-3/4 flex-1 transform-gpu rounded-md border-2 border-black !bg-[#e0c04a] p-2 text-3xl transition-transform duration-100 hover:scale-110 md:w-2/3 md:text-4xl lg:p-3 lg:text-4xl">
          5% Ukrainian Military
        </div>
      </div>
      <div className="mt-10 flex flex-col items-center gap-4 lg:mx-4">
        <div className="w-3/4 flex-1 transform-gpu rounded-md border-2 border-black !bg-[#bfa44b] p-1 text-3xl transition-transform duration-100 hover:scale-110 md:w-2/3 md:text-4xl lg:w-full lg:p-2 lg:text-left lg:text-[30px]">
          <div className="border-2 border-black !bg-[#e0c04a] p-3">
            The purpose of these tokens can be changed or adjusted based on the
            community&apos;s requests.
          </div>
        </div>
      </div>
    </div>
  );
}
