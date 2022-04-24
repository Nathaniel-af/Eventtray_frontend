import React from "react";
import Nav from "../components/Nav";
export default function Feed() {
  return (
    <>
      <Nav />

      <div className="mx-auto flex">
        <div class="flex  flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md bg-coolGray-50 text-coolGray-800">
          <div class="flex space-x-4">
            <img
              alt="profile pic"
              src="https://images.unsplash.com/photo-1531384441138-2736e62e0919?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              className="object-cover w-12 h-12 rounded-full shadow"
            />
            <div class="flex flex-col space-y-1">
              <a href="user" class="text-sm font-semibold">
                USER
              </a>
              <span class="text-xs text-coolGray-600">12/04/2022</span>
            </div>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1531384441138-2736e62e0919?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              class="object-cover w-full mb-4 h-60 sm:h-96 "
              alt="intro"
            />
            <h2 class="mb-1 text-xl font-semibold">Description</h2>
          </div>
          <div>
            <div class="flex">
              <div class="flex-auto p-1">
                <div class="flex flex-wrap">
                  <p class="flex-auto text-base font-semibold">user</p>
                  <div class="text-sm font-semibold text-gray-500">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Deleniti, animi? Ea ut doloremque impedit, animi commodi
                    maxime nesciunt repellat adipisci, id, harum ullam
                    laudantium iste iusto atque libero quis consectetur?
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
