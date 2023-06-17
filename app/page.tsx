"use client";

import Card from "@/components/Card";

export default function Home() {
  return (
    <HomeWrapper>
      <CardWrapper>
        <Card className="w-11/12 border-2 !border-black !bg-[#ead792] hover:bg-[#ead792]">
          <Introduction />
        </Card>
      </CardWrapper>

      <Tokenomics />
      <Roadmap />
      <Resources />
    </HomeWrapper>
  );
}

function HomeWrapper({ children }: { children: React.ReactNode }) {
  return <div className="">{children}</div>;
}

function CardWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-10 flex items-center justify-center">{children}</div>
  );
}

function Introduction() {
  return (
    <div>
      <p className="text-4xl">About Littleboy&apos;s token, LittleBoyCoin :</p>
      <br />
      <p className="text-4xl">
        $LBC is a multi purpose token on the OCTA network. Soon to be on others
        such as altcoinchain, bsc, polygon and eth. The main purpose is for use
        on Littleboy&apos;s website services such as games, merch and more,
        using $LBC for purchases and for prize payouts.
      </p>
      <br />
      <p className="text-4xl">
        A % from the profits will be burnt to decrease supply. We plan to build
        alot around this token and we&apos;re always open to community ideas.
      </p>
      <br />
      <p className="text-4xl">
        Fun fact : Littleboy was also the name of a nuclear warhead in WWII.
      </p>
    </div>
  );
}

function Tokenomics() {
  return (
    <div className="mt-14 text-center">
      <h1 className="m-auto w-fit rounded-md border-2 border-black !bg-[#e0c04a] p-3 text-4xl font-bold md:text-5xl lg:p-3 lg:text-5xl">
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
        <div className="w-3/4 flex-1 rounded-md border-2 border-black !bg-[#bfa44b] p-1 text-3xl md:w-2/3 md:text-4xl lg:w-full lg:p-2 lg:text-left lg:text-[30px]">
          <div className="border-2 border-black !bg-[#e0c04a] p-3">
            The purpose of these tokens can be changed or adjusted based on the
            community&apos;s requests.
          </div>
        </div>
      </div>
    </div>
  );
}

function Roadmap() {
  return (
    <div className="mb-14 mt-14">
      <h2 className="m-auto w-fit rounded-md border-2 border-black !bg-[#53ad70] p-3 text-4xl font-bold md:text-5xl">
        Roadmap
      </h2>

      <div className="mt-10">
        <ul className="mt-14 space-y-10 px-2 md:flex md:flex-col md:items-center">
          <li className="flex-1 space-y-3 rounded-md border-2 border-black !bg-[#aaeac0] p-4 md:w-3/4 md:flex-1 md:space-y-5">
            <div>
              <h4 className="text-3xl font-medium md:text-2xl lg:text-3xl">
                Phase-1
              </h4>
            </div>
            <span className="pl-7 text-2xl lg:text-2xl">
              <ul>
                <li>
                  <div className="flex items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="green"
                      className="h-7 w-7"
                    >
                      <path
                        fillRule="evenodd"
                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                        clipRule="evenodd"
                      />
                    </svg>

                    <a>Site release</a>
                  </div>
                </li>
                <li>
                  <div className="flex items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="red"
                      className="h-7 w-7"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
                        clipRule="evenodd"
                      />
                    </svg>

                    <a>Games section</a>
                  </div>
                </li>
                <li>
                  <div className="flex items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="red"
                      className="h-7 w-7"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
                        clipRule="evenodd"
                      />
                    </svg>

                    <a>First-game lottery</a>
                  </div>
                </li>
                <li>
                  <div className="flex items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="green"
                      className="h-7 w-7"
                    >
                      <path
                        fillRule="evenodd"
                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                        clipRule="evenodd"
                      />
                    </svg>

                    <a>Promotional airdrop</a>
                  </div>
                </li>
              </ul>
            </span>
          </li>
          <li className="flex-1 space-y-3 rounded-md border-2 border-black !bg-[#aaeac0] p-4 md:w-3/4 md:flex-1 md:space-y-5">
            <div>
              <h4 className="text-3xl font-medium md:text-2xl lg:text-3xl">
                Phase-2
              </h4>
            </div>
            <span className="pl-7 text-2xl lg:text-2xl">
              <ul>
                <li>
                  <div className="flex items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="red"
                      className="h-7 w-7"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
                        clipRule="evenodd"
                      />
                    </svg>

                    <a>CEX Listing</a>
                  </div>
                </li>
                <li>
                  <div className="flex items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="red"
                      className="h-7 w-7"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
                        clipRule="evenodd"
                      />
                    </svg>

                    <a>Bridge to other chains</a>
                  </div>
                </li>
                <li>
                  <div className="flex items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="red"
                      className="h-7 w-7"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
                        clipRule="evenodd"
                      />
                    </svg>

                    <a>New DEXs</a>
                  </div>
                </li>
                <li>
                  <div className="flex items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="red"
                      className="h-7 w-7"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
                        clipRule="evenodd"
                      />
                    </svg>

                    <a>Promotional airdrop</a>
                  </div>
                </li>
              </ul>
            </span>
          </li>
          <li className="flex-1 space-y-3 rounded-md border-2 border-black !bg-[#aaeac0] p-4 md:w-3/4 md:flex-1 md:space-y-5">
            <div>
              <h4 className="text-3xl font-medium md:text-2xl lg:text-3xl">
                Phase-3
              </h4>
            </div>
            <span className="pl-7 text-2xl lg:text-2xl">
              <ul>
                <li>
                  <div className="flex items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="red"
                      className="h-8 w-8 md:h-7 md:w-7"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
                        clipRule="evenodd"
                      />
                    </svg>

                    <a>New games in the game section</a>
                  </div>
                </li>
                <li>
                  <div className="flex items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="red"
                      className="h-8 w-8 md:h-7 md:w-7"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
                        clipRule="evenodd"
                      />
                    </svg>

                    <a>Shop/marketplace section open</a>
                  </div>
                </li>
                <li>
                  <div className="flex items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="red"
                      className="h-7 w-7"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
                        clipRule="evenodd"
                      />
                    </svg>

                    <a>Promotional airdrop</a>
                  </div>
                </li>
              </ul>
            </span>
          </li>
          <li className="flex-1 space-y-3 rounded-md border-2 border-black !bg-[#aaeac0] p-4 md:w-3/4 md:flex-1 md:space-y-5">
            <div>
              <h4 className="text-3xl font-medium md:text-2xl lg:text-3xl">
                Phase-4
              </h4>
            </div>
            <span className="pl-7 text-2xl lg:text-2xl">
              <ul>
                <li>
                  <div className="flex items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="red"
                      className="h-12 w-12 md:h-7 md:w-7"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
                        clipRule="evenodd"
                      />
                    </svg>

                    <a>Accepting new ideas from community for new games</a>
                  </div>
                </li>
                <li>
                  <div className="flex items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="red"
                      className="h-7 w-7"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
                        clipRule="evenodd"
                      />
                    </svg>

                    <a>Merges</a>
                  </div>
                </li>
                <li>
                  <div className="flex items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="red"
                      className="h-7 w-7"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
                        clipRule="evenodd"
                      />
                    </svg>

                    <a>Drops</a>
                  </div>
                </li>
                <li>
                  <div className="flex items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="red"
                      className="h-7 w-7"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
                        clipRule="evenodd"
                      />
                    </svg>

                    <a>Marketing etc</a>
                  </div>
                </li>
              </ul>
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

function Resources() {
  return (
    <>
      <div className="flex flex-col justify-center gap-x-24 md:flex-row">
        <div className="mx-5 text-center">
          <div className="rounded-md border-2 border-black !bg-[#e0c04a] p-3 text-4xl font-bold lg:text-5xl">
            Official Links
          </div>
          <div className="mt-7 flex-1 rounded-md border-2 !border-black !bg-[#ead792] p-3 md:hidden ">
            <ul>
              <li>
                <a
                  href="https://twitter.com/littleboys_coin"
                  className="text-3xl font-semibold underline"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://discord.gg/FMWz38Cd"
                  className="text-3xl font-semibold underline"
                >
                  Discord
                </a>
              </li>
              <li>
                <a
                  href="https://t.me/lbcgroup1"
                  className="text-3xl font-semibold underline"
                >
                  Telegram
                </a>
              </li>
              <li>
                <a className="text-3xl font-semibold underline">Whitepaper</a>
              </li>
            </ul>
            <p className="mt-5 text-2xl">
              You can contribute. We are open for all ideas and users.
            </p>
          </div>
        </div>

        <div className="mx-5">
          <div className="mt-14 rounded-md border-2 border-black !bg-[#e0c04a] p-3 text-center text-4xl font-bold md:mt-0 lg:text-5xl">
            Metamask
          </div>
          <div className="mt-7 flex-1 rounded-md border-2 !border-black !bg-[#ead792] p-3 md:hidden">
            <ul>
              <li>
                <span className="text-2xl">
                  Network Name: <a className="font-semibold">Octaspace</a>
                </span>
              </li>
              <li>
                <span className="text-2xl">
                  RPC URL:{" "}
                  <a
                    href="https://rpc.octa.space"
                    className="font-semibold underline"
                  >
                    -&gt; Link
                  </a>
                </span>
              </li>
              <li>
                <span className="text-2xl">
                  Chain ID: <a className="font-semibold">800001</a>
                </span>
              </li>
              <li>
                <span className="text-2xl">
                  Symbol: <a className="font-semibold">OCTA</a>
                </span>
              </li>
              <li>
                <span className="text-2xl">
                  Explorer:{" "}
                  <a
                    href="https://explorer.octa.space"
                    className="font-semibold underline"
                  >
                    -&gt; Link
                  </a>
                </span>
              </li>
              <li>
                <span className="text-2xl">
                  Token Contract:{" "}
                  <a className="break-all font-semibold">
                    0x59dbfdc05a1e460dd374167a4041c31275ebce04
                  </a>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mx-7 mt-7 hidden justify-center gap-x-5 md:flex">
        <div className="flex-1 rounded-md border-2 !border-black !bg-[#ead792] p-3 text-center">
          <ul>
            <li>
              <a
                href="https://twitter.com/littleboys_coin"
                className="text-3xl font-semibold underline"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="https://discord.gg/FMWz38Cd"
                className="text-3xl font-semibold underline"
              >
                Discord
              </a>
            </li>
            <li>
              <a
                href="https://t.me/lbcgroup1"
                className="text-3xl font-semibold underline"
              >
                Telegram
              </a>
            </li>
            <li>
              <a className="text-3xl font-semibold underline">Whitepaper</a>
            </li>
          </ul>
          <p className="mt-5 text-2xl lg:text-3xl">
            You can contribute. We are open for all ideas and users.
          </p>
        </div>

        <div className="flex-1 rounded-md border-2 !border-black !bg-[#ead792] p-3">
          <ul>
            <li>
              <span className="text-2xl lg:text-3xl">
                Network Name: <a className="font-semibold">Octaspace</a>
              </span>
            </li>
            <li>
              <span className="text-2xl lg:text-3xl">
                RPC URL:{" "}
                <a
                  href="https://rpc.octa.space"
                  className="font-semibold underline"
                >
                  -&gt; Link
                </a>
              </span>
            </li>
            <li>
              <span className="text-2xl lg:text-3xl">
                Chain ID: <a className="font-semibold">800001</a>
              </span>
            </li>
            <li>
              <span className="text-2xl lg:text-3xl">
                Symbol: <a className="font-semibold">OCTA</a>
              </span>
            </li>
            <li>
              <span className="text-2xl lg:text-3xl">
                Explorer:{" "}
                <a
                  href="https://explorer.octa.space"
                  className="font-semibold underline"
                >
                  -&gt; Link
                </a>
              </span>
            </li>
            <li>
              <span className="text-2xl lg:text-3xl">
                Token Contract:{" "}
                <a className="break-all font-semibold">
                  0x59dbfdc05a1e460dd374167a4041c31275ebce04
                </a>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
