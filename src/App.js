import { Fragment, useLayoutEffect, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
  XMarkIcon,
  Bars3Icon,
  EnvelopeIcon,
  CheckIcon,
} from "@heroicons/react/24/outline";
import { DownloadCloud, LogOut, Search } from "feather-icons-react";
import FeatureCard from "./components/sidebar/FeatureCard";
import { ReactComponent as LogoBar } from "./assets/icons/LogoIcon.svg";
import { ReactComponent as VisaIcon } from "./assets/icons/VisaIcon.svg";
import { ReactComponent as MasterIcon } from "./assets/icons/MasterIcon.svg";
import { navigation, plans } from "./data/sampleData";
import { classNames } from "./utils/functions";

const tabBtn = [
  { name: "Details", link: "#" },
  { name: "Profile", link: "#" },
  { name: "Password", link: "#" },
  { name: "Team", link: "#" },
  { name: "Plan", link: "#" },
  { name: "Billing", link: "#" },
  { name: "Notifications", link: "#" },
  { name: "Integrations", link: "#" },
  { name: "API", link: "#" },
];

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectCard, setSelectCard] = useState("visa");
  const [selectEmail, setSelectEmail] = useState();
  const checkbox = useRef();
  const [checked, setChecked] = useState(false);
  const [indeterminate, setIndeterminate] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState([]);

  useLayoutEffect(() => {
    const isIndeterminate =
      selectedPlan.length > 0 && selectedPlan.length < plans.length;
    setChecked(selectedPlan.length === plans.length);
    setIndeterminate(isIndeterminate);
    checkbox.current.indeterminate = isIndeterminate;
  }, [selectedPlan]);

  function toggleAll() {
    setSelectedPlan(checked || indeterminate ? [] : plans);
    setChecked(!checked && !indeterminate);
    setIndeterminate(false);
  }

  return (
    <div className="subpixel-antialiased">
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 flex z-40 md:hidden"
          onClose={setSidebarOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="relative flex-1 flex flex-col max-w-xs w-full bg-white">
              <Transition.Child
                as={Fragment}
                enter="ease-in-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in-out duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="absolute top-0 right-0 -mr-12 pt-2">
                  <button
                    type="button"
                    className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                    onClick={() => setSidebarOpen(false)}
                  >
                    <span className="sr-only">Close sidebar</span>
                    <XMarkIcon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </button>
                </div>
              </Transition.Child>
              <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
                <div className="flex-shrink-0 flex items-center px-4">
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-logo-purple-600-mark-gray-800-text.svg"
                    alt="Workflow"
                  />
                </div>
                <nav className="mt-5 px-2 space-y-1">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "bg-gray-100 text-gray-900"
                          : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                        "group flex items-center px-2 py-2 text-base font-medium rounded-md"
                      )}
                    >
                      {item.isDivider && (
                        <item.icon
                          className={classNames(
                            item.current
                              ? "text-gray-500"
                              : "text-gray-400 group-hover:text-gray-500",
                            "mr-4 flex-shrink-0 h-6 w-6"
                          )}
                          aria-hidden="true"
                        />
                      )}
                      {item.name}
                    </a>
                  ))}
                </nav>
              </div>
              <div className="flex-shrink-0 flex border-t border-gray-200 p-4">
                <a href="#" className="flex-shrink-0 group block">
                  <div className="flex items-center">
                    <div>
                      <img
                        className="inline-block h-10 w-10 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </div>
                    <div className="ml-3">
                      <p className="text-base font-medium text-gray-700 group-hover:text-gray-900">
                        Olivia Rhye
                      </p>
                      <p className="text-sm font-medium text-gray-500 group-hover:text-gray-700">
                        View profile
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </Transition.Child>
          <div className="flex-shrink-0 w-14">
            {/* Force sidebar to shrink to fit close icon */}
          </div>
        </Dialog>
      </Transition.Root>

      {/* Static sidebar for desktop */}
      <div className="hidden md:flex md:w-72 md:flex-col md:fixed md:inset-y-0">
        {/* Sidebar component */}
        <div className="flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-white">
          <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
            <div className="flex items-center flex-shrink-0 px-4">
              <LogoBar className="h-8 w-auto" />
            </div>
            {/* Sidebar Search */}
            <div className="px-3 mt-5">
              <label htmlFor="search" className="sr-only">
                Search
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div
                  className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
                  aria-hidden="true"
                >
                  <Search
                    className="mr-3 h-4 w-4 text-gray-400"
                    aria-hidden="true"
                  />
                </div>
                <input
                  type="text"
                  name="search"
                  id="search"
                  className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-9 sm:text-sm border-gray-300 rounded-md font-light"
                  placeholder="Search"
                />
              </div>
            </div>
            <nav className="mt-5 flex-1 px-2 bg-white space-y-1">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-100 text-gray-900"
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                    "group flex items-center justify-between px-2 py-2 text-sm font-medium rounded-md"
                  )}
                >
                  <div className="flex items-center">
                    {item.isDivider && (
                      <item.icon
                        className={classNames(
                          item.current
                            ? "text-gray-500"
                            : "text-gray-400 group-hover:text-gray-500",
                          "mr-3 flex-shrink-0 h-6 w-6"
                        )}
                        aria-hidden="true"
                      />
                    )}
                    {item.name}
                  </div>
                  {item.count ? (
                    <span
                      className={classNames(
                        item.current
                          ? "bg-white"
                          : "bg-gray-100 group-hover:bg-gray-200",
                        "ml-3 inline-block py-0.5 px-2 text-xs font-normal rounded-full"
                      )}
                    >
                      {item.count}
                    </span>
                  ) : null}
                </a>
              ))}
            </nav>
            <div className="flex-1 flex items-start justify-center px-4">
              <FeatureCard />
            </div>
          </div>
          <div className="flex-shrink-0 flex items-start justify-between border-t border-gray-200 mx-4 py-4">
            <a href="/" className="flex-shrink-0 group block">
              <div className="flex items-center">
                <div>
                  <img
                    className="inline-block h-9 w-9 rounded-full object-cover object-top "
                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1661&q=80"
                    alt=""
                  />
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                    Olivia Rhye
                  </p>
                  <p className="text-xs text-gray-500 group-hover:text-gray-700">
                    olivia@untitiledui.com
                  </p>
                </div>
              </div>
            </a>
            <LogOut className="flex-shrink-0 h-5 w-5 text-gray-500 hover:text-gray-700 cursor-pointer" />
          </div>
        </div>
      </div>

      <div className="md:pl-72 flex flex-col flex-1">
        <div className="sticky top-0 z-10 md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3 bg-gray-100">
          <button
            type="button"
            className="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500"
            onClick={() => setSidebarOpen(true)}
          >
            <span className="sr-only">Open sidebar</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
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
              <div className="py-4 overflow-auto">
                <span className="relative z-0 inline-flex shadow-sm rounded-md">
                  {tabBtn.map((btn, index) => (
                    <button
                      type="button"
                      key={btn.name}
                      className={
                        index === 0
                          ? "relative inline-flex items-center px-4 py-2 rounded-l-md border border-gray-300 bg-white text-xs md:text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-0 focus:ring-purple-500"
                          : index === tabBtn.length - 1
                          ? "-ml-px relative inline-flex items-center px-4 py-2 rounded-r-md border border-gray-300 bg-white  text-xs md:text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-0 focus:ring-purple-500"
                          : "relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-xs md:text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-0 focus:ring-purple-500 border-l-0"
                      }
                    >
                      {btn.name}
                    </button>
                  ))}
                </span>
              </div>

              <div className="space-y-6 sm:space-y-5">
                <div className="divide-y divide-gray-200 pt-8 space-y-6 sm:pt-10 sm:space-y-5">
                  <div>
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      Payment method
                    </h3>
                    <p className="mt-1 max-w-2xl text-sm text-gray-500">
                      Update your billing details and address
                    </p>
                  </div>
                  <div className="space-y-6 sm:space-y-5 divide-y divide-gray-200">
                    <div className="pt-6 sm:pt-5">
                      <div role="group" aria-labelledby="label-email">
                        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-baseline">
                          <div>
                            <div
                              className="text-sm font-medium text-gray-900 sm:text-sm sm:text-gray-700"
                              id="label-email"
                            >
                              Contact email
                            </div>
                            <p className="text-xs text-gray-500">
                              Where should invoices be sent?
                            </p>
                          </div>
                          <div className="mt-4 sm:mt-0 sm:col-span-2">
                            <div className="max-w-lg space-y-4">
                              <div className="relative flex items-start">
                                <div className="flex items-center h-5">
                                  <input
                                    id="send-email-main"
                                    name="send-email"
                                    type="radio"
                                    className="focus:ring-white focus:ring-0 focus:border-purple-600 h-4 w-4 text-purple-600 border-gray-300"
                                    value="main"
                                    checked={selectEmail === "main"}
                                    onChange={(event) =>
                                      setSelectEmail(event.target.value)
                                    }
                                  />
                                </div>
                                <div className="ml-3 text-sm">
                                  <label
                                    htmlFor="send-email-main"
                                    className="font-medium text-gray-700"
                                  >
                                    Send to my account email
                                  </label>
                                  <p className="text-gray-500">
                                    olivia@untitledui.com
                                  </p>
                                </div>
                              </div>
                              <div>
                                <div className="relative flex items-start">
                                  <div className="flex items-center h-5">
                                    <input
                                      id="send-email-alt"
                                      type="radio"
                                      className="focus:ring-white focus:ring-0 focus:border-purple-600 h-4 w-4 text-purple-600 border-gray-300"
                                      value="alternative"
                                      checked={selectEmail === "alternative"}
                                      onChange={(event) =>
                                        setSelectEmail(event.target.value)
                                      }
                                    />
                                  </div>
                                  <div className="ml-3 text-sm w-full">
                                    <label
                                      htmlFor="send-email-alt"
                                      className="font-medium text-gray-700"
                                    >
                                      Send to an alternative email
                                    </label>
                                    {selectEmail === "alternative" && (
                                      <div className="mt-1 relative rounded-md shadow-sm">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                          <EnvelopeIcon
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
                        </div>
                      </div>
                    </div>
                    <div className="pt-6 sm:pt-5">
                      <div role="group" aria-labelledby="label-notifications">
                        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start">
                          <div>
                            <div
                              className="text-base font-medium text-gray-900 sm:text-sm sm:text-gray-700"
                              id="label-notifications"
                            >
                              Card details
                            </div>
                            <p className="text-xs text-gray-500">
                              Select default payment method
                            </p>
                          </div>
                          <div className="sm:col-span-2">
                            <div className="max-w-lg">
                              <div className="space-y-4">
                                <label
                                  className={
                                    selectCard === "visa"
                                      ? "flex items-start justify-between bg-purple-50 px-4 py-3 rounded-lg border border-purple-200"
                                      : "flex items-start justify-between bg-white px-4 py-3 rounded-lg border border-gray-200"
                                  }
                                >
                                  <div className="flex justify-start items-start">
                                    <div className="bg-white w-10 h-6 rounded justify-center flex items-center border border-gray-100">
                                      <VisaIcon className="" />
                                    </div>
                                    <div className="ml-3 text-xs space-y-0.5">
                                      <div
                                        className={
                                          selectCard !== "visa"
                                            ? "text-gray-900"
                                            : "text-purple-900"
                                        }
                                      >
                                        Visa ending in 1234
                                      </div>
                                      <div
                                        className={
                                          selectCard === "visa"
                                            ? "text-purple-400"
                                            : "text-gray-500"
                                        }
                                      >
                                        Expiry 06/2024
                                      </div>
                                      <div
                                        className={
                                          selectCard === "visa"
                                            ? "text-purple-400 pt-2"
                                            : "text-gray-700 pt-2"
                                        }
                                      >
                                        Set as default{" "}
                                        <span className="text-purple-800 font-medium ml-4">
                                          Edit
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                  <input
                                    type="radio"
                                    className="focus:ring-0 focus:ring-white h-4 w-4 text-purple-600 border-gray-300 focus:outline-0"
                                    value="visa"
                                    checked={selectCard === "visa"}
                                    onChange={(event) =>
                                      setSelectCard(event.target.value)
                                    }
                                  />
                                </label>

                                <label
                                  className={
                                    selectCard === "master"
                                      ? "flex items-start justify-between bg-purple-50 px-4 py-3 rounded-lg border border-purple-200"
                                      : "flex items-start justify-between bg-white px-4 py-3 rounded-lg border border-gray-200"
                                  }
                                >
                                  <div className="flex justify-start items-start">
                                    <div className="bg-white w-10 h-6 rounded justify-center flex items-center border border-gray-100">
                                      <MasterIcon className="" />
                                    </div>
                                    <div className="ml-3 text-xs space-y-0.5">
                                      <div
                                        className={
                                          selectCard !== "master"
                                            ? "text-gray-900"
                                            : "text-purple-900"
                                        }
                                      >
                                        Mastercard ending in 1234
                                      </div>
                                      <div
                                        className={
                                          selectCard === "master"
                                            ? "text-purple-400"
                                            : "text-gray-500"
                                        }
                                      >
                                        Expiry 06/2024
                                      </div>
                                      <div
                                        className={
                                          selectCard === "master"
                                            ? "text-purple-400 pt-2"
                                            : "text-gray-700 pt-2"
                                        }
                                      >
                                        Set as default
                                        <span className="text-purple-600 font-medium ml-4">
                                          Edit
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                  <input
                                    type="radio"
                                    className="focus:ring-0 focus:ring-white h-4 w-4 text-purple-600 border-gray-300"
                                    value="master"
                                    checked={selectCard === "master"}
                                    onChange={(event) =>
                                      setSelectCard(event.target.value)
                                    }
                                  />
                                </label>
                              </div>
                              <p className="text-xs text-gray-500 mt-1 font-medium">
                                <span className="text-xl mr-1 font-normal">
                                  +
                                </span>{" "}
                                Add new payment method
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Billing history */}
              <div className="sm:flex sm:items-center mt-10">
                <div className="sm:flex-auto">
                  <h1 className="text-lg font-semibold text-gray-900">
                    Billing history
                  </h1>
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
              <div className="mt-8 flex flex-col">
                <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                    <div className="relative overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                      {selectedPlan.length > 0 && (
                        <div className="absolute top-0 left-12 flex h-12 items-center space-x-3 bg-gray-50 sm:left-16">
                          <button
                            type="button"
                            className="inline-flex items-center rounded border border-gray-300 bg-white px-2.5 py-1.5 text-xs font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-30"
                          >
                            Bulk edit
                          </button>
                          <button
                            type="button"
                            className="inline-flex items-center rounded border border-gray-300 bg-white px-2.5 py-1.5 text-xs font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-30"
                          >
                            Delete all
                          </button>
                        </div>
                      )}
                      <table className="min-w-full table-fixed divide-y divide-gray-300">
                        <thead className="bg-gray-50">
                          <tr>
                            <th
                              scope="col"
                              className="relative w-12 px-6 sm:w-16 sm:px-8"
                            >
                              <input
                                type="checkbox"
                                className="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-purple-600 focus:ring-0 focus:border-gray-400 sm:left-6"
                                ref={checkbox}
                                checked={checked}
                                onChange={toggleAll}
                              />
                            </th>
                            <th
                              scope="col"
                              className="min-w-[12rem] py-3.5 pr-3 text-left text-sm font-normal text-gray-500"
                            >
                              Invoice
                            </th>
                            <th
                              scope="col"
                              className="px-3 py-3.5 text-left text-sm font-normal text-gray-500"
                            >
                              Amount
                            </th>
                            <th
                              scope="col"
                              className="px-3 py-3.5 text-left text-sm font-normal text-gray-500"
                            >
                              Date
                            </th>
                            <th
                              scope="col"
                              className="px-3 py-3.5 text-left text-sm font-normal text-gray-500"
                            >
                              Status
                            </th>
                            <th
                              scope="col"
                              className="min-w-[8rem] px-3 py-3.5 text-left text-sm font-normal text-gray-500"
                            >
                              Users on plan
                            </th>
                            <th scope="col" className="relative py-3.5 pl-3">
                              <span className="sr-only">Download</span>
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 bg-white">
                          {plans.map((plan, index) => (
                            <tr
                              key={plan.email + index.toString()}
                              className={
                                selectedPlan.includes(plan)
                                  ? "bg-gray-50"
                                  : undefined
                              }
                            >
                              <td className="relative w-12 px-6 sm:w-16 sm:px-8">
                                {selectedPlan.includes(plan) && (
                                  <div className="absolute inset-y-0 left-0 w-0.5 bg-purple-600" />
                                )}
                                <input
                                  type="checkbox"
                                  className="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-purple-600 focus:ring-0 focus:border-gray-400 sm:left-6"
                                  value={plan.email}
                                  checked={selectedPlan.includes(plan)}
                                  onChange={(e) =>
                                    setSelectedPlan(
                                      e.target.checked
                                        ? [...selectedPlan, plan]
                                        : selectedPlan.filter((p) => p !== plan)
                                    )
                                  }
                                />
                              </td>
                              <td
                                className={classNames(
                                  "whitespace-nowrap py-4 pr-3 text-sm font-medium capitalize",
                                  selectedPlan.includes(plan)
                                    ? "text-purple-600"
                                    : "text-gray-900"
                                )}
                              >
                                {plan.invoice}
                              </td>
                              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                {plan.amount}
                              </td>
                              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 capitalize">
                                {plan.date}
                              </td>
                              <td className="whitespace-nowrap px-3 py-3">
                                <span className="whitespace-nowrap px-3 py-1 text-xs text-gray-500 inline-flex items-center space-x-2 capitalize bg-green-50 rounded-full text-green-700 font-medium">
                                  <CheckIcon className="w-3 h-4 mr-1 text-green-900" />
                                  {plan.status}
                                </span>
                              </td>
                              <td className="whitespace-nowrap px-3 py-3">
                                <div className="flex items-center -space-x-1">
                                  <div className="flex overflow-hidden -space-x-1">
                                    {plan.users.map((user, index) => (
                                      <img
                                        key={user.email + index}
                                        className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                                        src={user.imageUrl}
                                        alt={user.name}
                                      />
                                    ))}
                                  </div>
                                  {plan.totalUsers > plan.users.length ? (
                                    <span className="flex-shrink-0 text-[11px] leading-5 font-medium h-7 w-7 bg-gray-50 rounded-full text-gray-500 inline-flex items-center justify-center ring-2 ring-white">
                                      +{plan.totalUsers - plan.users.length}
                                    </span>
                                  ) : null}
                                </div>
                              </td>
                              <td className="whitespace-nowrap py-4 pl-3 text-right text-sm font-medium flex justify-end items-center pr-2">
                                <DownloadCloud className="mr-3 flex-shrink-0 h-4 w-4 text-gray-700 group-hover:text-gray-900" />
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>

              {/* /End Content */}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
