import React from 'react';

const App = () => (
  <div className="relative flex size-full min-h-screen flex-col bg-slate-50 group/design-root overflow-x-hidden" style={{ fontFamily: 'Inter, "Noto Sans", sans-serif' }}>
    <div className="layout-container flex h-full grow flex-col">
      <div className="px-40 flex flex-1 justify-center py-5">
        <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
          <div className="@container">
            <div className="@[480px]:p-4">
              <div
                className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-center justify-center p-4"
                style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://cdn.usegalileo.ai/sdxl10/82c8fcf3-7aa7-4ddf-b004-3413d9660e00.png")' }}
              >
                <div className="flex flex-col gap-2 text-center">
                  <h1
                    className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]"
                  >
                    Remembering the heroes
                  </h1>
                  <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
                    Brave individuals who sacrificed their lives to abolish the quota system in Bangladesh
                  </h2>
                </div>
                <label className="flex flex-col min-w-40 h-14 w-full max-w-[480px] @[480px]:h-16">
                  <div className="flex w-full flex-1 items-stretch rounded-xl h-full">
                    <div
                      className="text-[#4e7397] flex border border-[#d0dbe7] bg-slate-50 items-center justify-center pl-[15px] rounded-l-xl border-r-0"
                      data-icon="MagnifyingGlass"
                      data-size="20px"
                      data-weight="regular"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                        <path
                          d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"
                        />
                      </svg>
                    </div>
                    <input
                      placeholder="Search for a hero..."
                      className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#0e141b] focus:outline-0 focus:ring-0 border border-[#d0dbe7] bg-slate-50 focus:border-[#d0dbe7] h-full placeholder:text-[#4e7397] px-[15px] rounded-r-none border-r-0 pr-2 rounded-l-none border-l-0 pl-2 text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal"
                    />
                    <div className="flex items-center justify-center rounded-r-xl border-l-0 border border-[#d0dbe7] bg-slate-50 pr-[7px]">
                      <button
                        className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#1980e6] text-slate-50 text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]"
                      >
                        <span className="truncate">Search</span>
                      </button>
                    </div>
                  </div>
                </label>
              </div>
            </div>
          </div>
          <h2 className="text-[#0e141b] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Remember the heroes</h2>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
            {/* Repeat this block for each hero */}
            <div className="flex flex-col gap-3 pb-3">
              <div
                className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                style={{ backgroundImage: 'url("https://cdn.usegalileo.ai/sdxl10/72149da6-713c-4d6e-98bd-e86da9fed024.png")' }}
              />
              <div>
                <p className="text-[#0e141b] text-base font-medium leading-normal">Rashedul Islam</p>
                <p className="text-[#4e7397] text-sm font-normal leading-normal">Student of Dhaka University</p>
              </div>
            </div>
            {/* Add other hero blocks here */}
          </div>
          <div className="flex px-4 py-3">
            <button
              className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 flex-1 bg-[#e7edf3] text-[#0e141b] text-sm font-bold leading-normal tracking-[0.015em]"
            >
              <span className="truncate">View all heroes</span>
            </button>
          </div>
          <h2 className="text-[#0e141b] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Tributes</h2>
          <div className="flex items-center px-4 py-3 gap-3 @container">
            <label className="flex flex-col min-w-40 h-full flex-1">
              <div className="text-[#4e7397] flex border border-[#d0dbe7] bg-slate-50 items-center justify-center pl-[15px] rounded-xl border-r-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                  <path
                    d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"
                  />
                </svg>
              </div>
              <input
                placeholder="Search for a tribute..."
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#0e141b] focus:outline-0 focus:ring-0 border border-[#d0dbe7] bg-slate-50 focus:border-[#d0dbe7] h-full placeholder:text-[#4e7397] px-[15px] rounded-l-none border-r-0 pr-2 rounded-r-none border-l-0 pl-2 text-sm font-normal leading-normal"
              />
            </label>
            <button
              className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 flex-1 bg-[#1980e6] text-slate-50 text-sm font-bold leading-normal tracking-[0.015em]"
            >
              <span className="truncate">Search</span>
            </button>
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
            {/* Repeat this block for each tribute */}
            <div className="flex flex-col gap-3 pb-3">
              <div
                className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                style={{ backgroundImage: 'url("https://cdn.usegalileo.ai/sdxl10/6d2452c6-b58b-4514-8531-47703f7c782d.png")' }}
              />
              <div>
                <p className="text-[#0e141b] text-base font-medium leading-normal">Shahid Rumi</p>
                <p className="text-[#4e7397] text-sm font-normal leading-normal">Tribute Writer</p>
              </div>
            </div>
            {/* Add other tribute blocks here */}
          </div>
          <div className="flex px-4 py-3">
            <button
              className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 flex-1 bg-[#e7edf3] text-[#0e141b] text-sm font-bold leading-normal tracking-[0.015em]"
            >
              <span className="truncate">View all tributes</span>
            </button>
          </div>
          <div className="px-4 py-3 flex flex-col gap-3">
            <h3 className="text-[#0e141b] text-[22px] font-bold leading-tight tracking-[-0.015em]">Support the Cause</h3>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-4 rounded-xl border border-[#d0dbe7] bg-slate-50 p-4">
                <div className="text-[#0e141b] text-lg font-bold leading-normal">Donate</div>
                <p className="text-[#4e7397] text-sm font-normal leading-normal">Support the cause by donating to our fund.</p>
                <a
                  href="#"
                  className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#1980e6] text-slate-50 text-sm font-bold leading-normal tracking-[0.015em] text-center"
                >
                  <span className="truncate">Donate Now</span>
                </a>
              </div>
              <div className="flex flex-col gap-4 rounded-xl border border-[#d0dbe7] bg-slate-50 p-4">
                <div className="text-[#0e141b] text-lg font-bold leading-normal">Volunteer</div>
                <p className="text-[#4e7397] text-sm font-normal leading-normal">Join us as a volunteer to help with various activities.</p>
                <a
                  href="#"
                  className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#1980e6] text-slate-50 text-sm font-bold leading-normal tracking-[0.015em] text-center"
                >
                  <span className="truncate">Sign Up</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="border-t border-solid border-[#e7edf3] bg-[#f5f8f9] px-10 py-6">
        <div className="flex flex-col gap-4">
          <div className="text-[#0e141b] text-sm font-normal leading-normal">
            <p>© 2024 Salute - Remembering the heroes</p>
            <p>All rights reserved.</p>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="text-[#0e141b] text-sm font-medium leading-normal">Privacy Policy</a>
            <a href="#" className="text-[#0e141b] text-sm font-medium leading-normal">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  </div>
);

export default App;
