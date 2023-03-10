import React, { useLayoutEffect, useRef, useState } from "react";
import { plans } from "../../data/sampleData";
import { classNames } from "../../utils/functions";
import { CheckIcon } from "@heroicons/react/24/outline";
import { DownloadCloud } from "feather-icons-react";
import "./HideScroller.css";

function BillingSection() {
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
    <div className="mt-4 flex flex-col">
      <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8 scrollbar-hide">
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
                      selectedPlan.includes(plan) ? "bg-gray-50" : undefined
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
  );
}

export default BillingSection;
