import { useState } from "react";
import { DownloadCloud, Menu, Mail } from "feather-icons-react";
import { ReactComponent as LogoBar } from "./assets/icons/LogoIcon.svg";
import { CardType, emailType } from "./data/sampleData";
import MobileSidebar from "./components/sidebar/MobileSidebar";
import MainSidebar from "./components/sidebar/MainSidebar";
import HeaderTabBtns from "./components/main/HeaderTabBtns";
import SectionHeader from "./components/main/SectionHeader";
import EmailSelector from "./components/main/EmailSelector";
import DescTitle from "./components/main/DescTitle";
import CardSelector from "./components/main/CardSelector";
import BillingSection from "./components/main/BillingSection";
import { Helmet } from "react-helmet";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectCard, setSelectCard] = useState("visa");
  const [selectEmail, setSelectEmail] = useState();

  return (
    <div className="subpixel-antialiased">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Vencru | Settings</title>
        <link rel="icon" href="./assets/favicon.png" />
      </Helmet>
      <MobileSidebar
        setSidebarOpen={setSidebarOpen}
        sidebarOpen={sidebarOpen}
        Logo={LogoBar}
      />

      {/* Static sidebar for desktop */}
      <div className="hidden md:flex md:w-72 md:flex-col md:fixed md:inset-y-0">
        {/* Sidebar component */}
        <MainSidebar Logo={LogoBar} />
      </div>

      <div className="md:pl-72 flex flex-col flex-1">
        <section className="sticky top-0 z-10 md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3 bg-white flex items-center justify-between border-b border-gray-100">
          <LogoBar className="h-8 w-auto" />
          <button
            type="button"
            className="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500"
            onClick={() => setSidebarOpen(true)}
          >
            <span className="sr-only">Open sidebar</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </section>

        <main className="flex-1 bg-gray-50">
          <div className="py-6">
            <div className="max-w-full mx-auto px-4 sm:px-6 md:px-8">
              <h1 className="text-3xl font-medium text-gray-900">Settings</h1>
              <h3 className="text-gray-400 text-base">
                Manage your team and preferences here
              </h3>
            </div>
            <div className="max-w-full mx-auto px-4 sm:px-6 md:px-8">
              {/* Page Content */}
              <HeaderTabBtns />

              <div className="space-y-6 sm:space-y-5">
                <section className="divide-y divide-gray-200 pt-8 space-y-6 sm:pt-10 sm:space-y-5">
                  <div className="space-y-6 sm:space-y-5 divide-y divide-gray-200">
                    <SectionHeader
                      title="Payment method"
                      subTitle="Update your billing details and address."
                    />
                    <div className="pt-6 sm:pt-5">
                      <div role="group" aria-labelledby="label-email">
                        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-baseline">
                          <DescTitle
                            id="label-email"
                            title="Contact email"
                            subText="Where should invoices be sent?"
                          />
                          <div className="mt-4 sm:mt-0 sm:col-span-2">
                            <div className="max-w-lg space-y-4">
                              {emailType.map((item) => (
                                <EmailSelector
                                  label={item.label}
                                  key={item.id.toString()}
                                  value={item.value}
                                  selectorId={item.id.toString()}
                                  selected={selectEmail}
                                  setSelected={setSelectEmail}
                                  subLabel={item.subLabel}
                                />
                              ))}
                              {selectEmail === "alternative" && (
                                <div className="mt-1 relative rounded-md shadow-sm">
                                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Mail
                                      className="h-5 w-5 text-gray-400"
                                      aria-hidden="true"
                                    />
                                  </div>
                                  <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="focus:ring-0 focus:border-gray-400 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                                    placeholder="billing@untitledui.com"
                                  />
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="pt-6 sm:pt-5">
                      <div role="group" aria-labelledby="label-notifications">
                        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start">
                          <DescTitle
                            id="label-notifications"
                            title="Card details"
                            subText="Select default payment method"
                          />
                          <div className="sm:col-span-2">
                            <div className="max-w-lg">
                              <div className="space-y-4">
                                {CardType.map((card) => (
                                  <CardSelector
                                    value={card.value}
                                    selected={selectCard}
                                    setSelected={setSelectCard}
                                    exp={card.exp}
                                    topText={card.topText}
                                    Icon={card.icon}
                                    key={card.id.toString()}
                                  />
                                ))}
                              </div>
                              <p className="text-xs text-gray-500 mt-1 font-medium cursor-pointer">
                                <span className="text-xl mr-1 font-normal">
                                  +
                                </span>
                                Add new payment method
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>

              {/* Billing history */}
              <section>
                <div className="sm:flex sm:items-center mt-10">
                  <div className="sm:flex-auto">
                    <SectionHeader title="Billing history" />
                  </div>
                  <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                    <button
                      type="button"
                      className="inline-flex items-center justify-center rounded-md border border-gray-300 px-4 py-2 text-xs font-medium text-gray-900 shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-0 sm:w-auto group hover:text-gray-900"
                    >
                      <DownloadCloud className="mr-3 flex-shrink-0 h-4 w-4 text-gray-700 group-hover:text-gray-900" />
                      Download all
                    </button>
                  </div>
                </div>
                <BillingSection />
              </section>
              {/* /End Content */}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
