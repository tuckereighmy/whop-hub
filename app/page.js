'use client'

import { useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, TransitionChild } from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
  PlusIcon,
} from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Dashboard', href: '#', icon: '/assets/home.svg', current: true },
  { name: 'Portfolio', href: 'https://www.teighmy22.com/', icon: '/assets/portfolio.svg', current: false },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/teighmy22/', icon: '/assets/linkedin.svg', current: false },
  { name: 'SoundCloud', href: 'https://soundcloud.com/uckerighmy', icon: '/assets/soundcloud.svg', current: false },
]
const teams = [
  { id: 1, name: 'Cover Letter', href: 'cover.js', initial: 'CL', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <>
      {/**
        This example requires updating your template:

        ```
        <html class="h-full bg-black">
        <body class="h-full bg-black">
        ```
      */}
      <div className="bg-black h-screen w-screen flex">
        <Dialog open={sidebarOpen} onClose={setSidebarOpen} className="relative z-50 lg:hidden">
          <DialogBackdrop
            transition
            className="fixed inset-0 bg-neutral-900/80 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
          />

          <div className="fixed inset-0 flex">
            <DialogPanel
              transition
              className="relative mr-16 flex w-full max-w-xs h-full flex-1 transform transition duration-300 ease-in-out data-[closed]:-translate-x-full bg-black"
            >
              <TransitionChild>
                <div className="absolute left-full top-0 flex w-16 justify-start pt-5 duration-300 ease-in-out data-[closed]:opacity-0">
                  <button type="button" onClick={() => setSidebarOpen(false)} className="-m-2.5 p-2.5">
                    <span className="sr-only">Close sidebar</span>
                    <XMarkIcon aria-hidden="true" className="h-6 w-6 text-white" />
                  </button>
                </div>
              </TransitionChild>
              {/* Sidebar component, swap this element with another sidebar if you like */}
              <div className="flex grow flex-col gap-y-5 overflow-hidden bg-black px-6 pb-2">
                <div className="flex h-16 shrink-0 items-center">
                  <img
                    alt="Your Company"
                    src="/assets/tucklogo.svg"
                    className="h-8 w-auto"
                  />
                </div>
                <nav className="flex flex-1 flex-col">
                  <ul role="list" className="flex flex-1 flex-col gap-y-7">
                    <li>
                      <ul role="list" className="-mx-2 space-y-1">
                        {navigation.map((item) => (
                          <li key={item.name}>
                            <a
                              href={item.href}
                              className={classNames(
                                item.current
                                  ? 'bg-neutral-900 text-white'
                                  : 'text-neutral-400 hover:bg-neutral-900 hover:text-white',
                                'group flex items-center justify-start gap-x-3 rounded-xl p-4 w-[264px] h-[48px] text-sm font-semibold font-[Inter] leading-6',
                              )}
                            >
                              <img src={item.icon} alt={`${item.name} icon`} className={classNames(item.current ? 'text-white' : 'text-neutral-400', 'h-6 w-6 shrink-0 group-hover:text-white')} />
                              {item.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </li>
                    <li>
                      <hr className="border-t border-neutral-700 my-4" />
                      <ul role="list" className="-mx-2 mt-2 space-y-1">
                        {teams.map((team) => (
                          <li key={team.name}>
                            <a
                              href={team.href}
                              className={classNames(
                                team.current
                                  ? 'bg-neutral-900 text-white'
                                  : 'text-neutral-400 hover:bg-neutral-900 hover:text-white',
                                'group flex items-center justify-start gap-x-3 rounded-xl p-4 w-[264px] h-[48px] text-sm font-semibold font-[Inter] leading-6',
                              )}
                            >
                              <span
                                className={classNames(
                                  team.current
                                    ? 'border-white text-white'
                                    : 'border-neutral-500 text-neutral-400 group-hover:border-white group-hover:text-white',
                                  'flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border bg-black text-[0.625rem] font-regular font-[Inter]',
                                )}
                              >
                                {team.initial}
                              </span>
                              <span className="truncate">{team.name}</span>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </li>
                  </ul>
                </nav>
              </div>
            </DialogPanel>
          </div>
        </Dialog>

        {/* Static sidebar for desktop */}
        <div className="hidden lg:flex lg:flex-col lg:h-screen lg:w-auto lg:flex-shrink-0">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex grow flex-col gap-y-5 overflow-y-auto  bg-black px-6 h-full">
            <div className="flex h-16 shrink-0 items-center pt-8">
              <img
                alt="Your Company"
                src="/assets/tucklogo.svg"
                className="h-6 w-auto"
              />
            </div>
            <nav className="flex flex-1 flex-col">
              <ul role="list" className="flex flex-1 flex-col">
                <li>
                  <ul role="list" className="-mx-2 space-y-1">
                    {navigation.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className={classNames(
                            item.current
                              ? 'bg-neutral-900 text-white'
                              : 'text-neutral-400 hover:bg-neutral-800 hover:text-white',
                            'group flex items-center justify-start gap-x-3 rounded-xl p-4 w-[264px] h-[48px] text-sm font-semibold font-[Inter] leading-6',
                          )}
                        >
                          <img src={item.icon} alt={`${item.name} icon`} className="h-6 w-6 shrink-0 text-neutral-400" />
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
                <li>
                  <hr className="border-t border-neutral-700 my-4" />
                  <ul role="list" className="-mx-2 mt-2 space-y-1">
                    {teams.map((team) => (
                      <li key={team.name}>
                        <a
                          href={team.href}
                          className={classNames(
                            team.current
                              ? 'bg-neutral-800 text-white'
                              : 'text-neutral-400 hover:bg-neutral-800 hover:text-white',
                            'group flex items-center justify-start gap-x-3 rounded-xl p-4 w-[264px] h-[48px] text-sm font-semibold font-[Inter] leading-6',
                          )}
                        >
                          <span
                            className={classNames(
                              team.current
                                ? 'border-white text-white'
                                : 'border-neutral-500 text-neutral-400 group-hover:border-white group-hover:text-white',
                              'flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border bg-black text-[0.625rem] font-regular font-[Inter]',
                            )}
                          >
                            {team.initial}
                          </span>
                          <span className="truncate">{team.name}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
                <li className="-mx-6 mt-auto">
                  <a
                    href="#"
                    className="flex items-center gap-x-4 px-6 py-3 text-sm font-semibold font-[Inter] leading-6 text-neutral-400 hover:bg-neutral-800"
                  >
                    <img
                      alt=""
                      src="/assets/TE LOGO_whop.svg"
                      className="h-8 w-8 rounded-full bg-neutral-800"
                    />
                    <span className="sr-only">Your profile</span>
                    <span aria-hidden="true">Tucker Eighmy</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="sticky top-0 z-40 flex items-center gap-x-6 bg-black px-4 py-4 shadow-sm sm:px-6 lg:hidden">
          <button type="button" onClick={() => setSidebarOpen(true)} className="-m-2.5 p-2.5 text-neutral-400 lg:hidden">
            <span className="sr-only">Open sidebar</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
          <div className="flex-1 text-sm font-semibold font-[Inter] leading-6 text-neutral-400">Dashboard</div>
          <a href="#">
            <span className="sr-only">Your profile</span>
            <img
              alt=""
              src="/assets/TE LOGO_whop.svg"
              className="h-8 w-8 rounded-full bg-neutral-800"
            />
          </a>
        </div>

        <main className="flex-1 h-screen flex justify-center items-center p-2">
  <div className="flex justify-center items-center w-full h-full background-grey rounded-lg">
    <div className="flex flex-row items-center justify-center w-full h-full bg-neutral-900 rounded-lg flex-grow">
    <div className="flex flex-col items-center mr-8">
        {/* First button and text */}
        <a
          href="#"
          className="relative block w-32 h-32 rounded-3xl border-2 border-solid border-neutral-600 text-center hover:border-neutral-500 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 m-2 bg-neutral-800 text-white font-[Inter] flex items-center justify-center"
        >
          <span className="text-4xl font-bold text-neutral-400">CL</span>
        </a>
        <span className="mt-1 block text-sm font-semibold text-white font-[Inter]">
          Cover Letter
        </span>
      </div>
      {/* Second button and text */}
      <div className="flex flex-col items-center">
        <a
          href="mailto:teighmy22@gmail.com?subject=We'd Love to Hear More!"
          className="relative block w-32 h-32 rounded-3xl border-2 border-dashed border-neutral-600 text-center hover:border-neutral-500 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 m-2 bg-neutra-900 text-white font-[Inter] flex items-center justify-center"
        >
          <PlusIcon className="h-12 w-12 text-neutral-400" />
        </a>
        <span className="mt-1 block text-sm font-semibold text-white font-[Inter]">
          New Product Designer
        </span>
      </div>
      
      
    </div>
  </div>
</main>



        
      </div>
    </>
  )
}
