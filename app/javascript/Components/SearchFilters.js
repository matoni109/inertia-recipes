import { usePage } from "@inertiajs/inertia-react";
import React, { useState } from "react";

const SearchFilter = (props) => {
  return (
    <form class="bg-gray-800 xl:w-72">
      <div class="flex justify-between px-4 py-3 xl:hidden">
        <div class="relative max-w-xs w-full">
          <div class="absolute inset-y-0 left-0 flex items-center pl-3">
            <svg
              class="h-6 w-6 fill-current text-gray-600"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16.32 14.9l1.1 1.1c.4-.02.83.13 1.14.44l3 3a1.5 1.5 0 0 1-2.12 2.12l-3-3a1.5 1.5 0 0 1-.44-1.14l-1.1-1.1a8 8 0 1 1 1.41-1.41l.01-.01zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
            </svg>
          </div>

          <input
            type="search"
            v-model="searchKeywords"
            class="block w-full form-input form-input-dark pl-10 pr-4 py-2"
            placeholder="Search by keywords"
            aria-label="Search by keywords"
          />
        </div>
        <button
          type="button"
          class="ml-4 inline-flex items-center hover:bg-gray-600 focus:outline-none focus:shadow-outline rounded-lg shadow pl-3 pr-4"
          click="toggle"
          class="bg-gray-600"
        >
          <svg
            class="h-6 w-6 fill-current text-gray-500"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M3 6a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1zm3 6a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1zm4 5a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-4z" />
          </svg>
          <span class="ml-1 text-white font-medium">Filters</span>
        </button>
      </div>
      <div
        class="{ 'hidden': !isOpen, 'block': isOpen }"
        class="xl:block xl:h-full xl:flex xl:flex-col xl:justify-between"
      >
        <div class="lg:flex xl:block xl:overflow-y-auto">
          <div class="px-4 py-4 border-t border-gray-900 lg:w-1/3 xl:border-t-0 xl:w-full">
            <div class="flex flex-wrap -mx-2">
              <label class="block w-1/2 px-2 sm:w-1/4 lg:w-1/2">
                <span class="text-sm font-semibold text-gray-500">
                  Bedrooms
                </span>
                <select
                  class="mt-1 form-select form-select-dark block w-full"
                  v-model="searchBeds"
                >
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </label>
              <label class="block w-1/2 px-2 sm:w-1/4 lg:w-1/2">
                <span class="text-sm font-semibold text-gray-500">
                  Bathrooms
                </span>
                <select
                  class="mt-1 form-select form-select-dark block w-full"
                  v-model="searchBaths"
                >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                </select>
              </label>
              <label class="mt-4 block w-full px-2 sm:mt-0 sm:w-1/2 lg:mt-4 lg:w-full">
                <span class="text-sm font-semibold text-gray-500">
                  Price Range
                </span>
                <select
                  class="mt-1 form-select form-select-dark block w-full"
                  v-model="searchPrice"
                >
                  <option value="120000">Up to $1,200/wk</option>
                  <option value="180000">Up to $1,800/wk</option>
                  <option value="190000">Up to $1,900/wk</option>
                  <option value="200000">Up to $2,000/wk</option>
                </select>
              </label>
            </div>
          </div>
          <div class="px-4 py-4 border-t border-gray-900 lg:w-1/3 lg:border-l xl:w-full">
            <span class="block text-sm font-semibold text-gray-500">
              Property Type
            </span>
            <div class="sm:flex sm:-mx-2 lg:block lg:mx-0">
              <template v-for="(propertyType, index) in propertyTypes">
                <label
                  key="index"
                  class="mt-3 sm:w-1/4 sm:px-2 flex items-center lg:w-full lg:px-0"
                >
                  <input
                    class="form-radio form-radio-dark"
                    type="radio"
                    name="propertyType"
                    value="propertyType"
                  />
                  <span class="ml-2 text-white"> propertyType </span>
                </label>
              </template>
            </div>
          </div>
          <div class="px-4 py-4 border-t border-gray-900 lg:w-1/3 lg:border-l xl:w-full">
            <span class="block text-sm font-semibold text-gray-500">
              Amenities
            </span>
            <div class="sm:flex sm:-mx-2 sm:flex-wrap">
              <template v-for="(amenity,index) in amenities">
                <label
                  key="index"
                  class="mt-3 flex items-center sm:w-1/4 sm:pl-2 lg:w-1/2 xl:w-full"
                >
                  <input
                    class="form-checkbox form-checkbox-dark"
                    type="checkbox"
                    name="amenity"
                  />
                  <span class="ml-2 text-white"> amenity </span>
                </label>
              </template>
            </div>
          </div>
        </div>
        <div class="bg-gray-900 px-4 py-4 sm:text-right">
          <button class="block w-full sm:w-auto sm:inline-block bg-indigo-500 hover:bg-indigo-400 font-semibold text-white px-4 py-2 rounded-lg xl:block xl:w-full">
            Update results
          </button>
        </div>
      </div>
    </form>
  );
};

export default SearchFilter;
