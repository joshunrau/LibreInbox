import { Fragment, useState } from 'react';

import { Dialog, Transition } from '@headlessui/react';
import Bars3Icon from '@heroicons/react/24/outline/Bars3Icon';
import CalendarIcon from '@heroicons/react/24/outline/CalendarIcon';
import ChevronLeftIcon from '@heroicons/react/24/outline/ChevronLeftIcon';
import CogIcon from '@heroicons/react/24/outline/CogIcon';
import EnvelopeIcon from '@heroicons/react/24/outline/EnvelopeIcon';
import FunnelIcon from '@heroicons/react/24/outline/FunnelIcon';
import HomeIcon from '@heroicons/react/24/outline/HomeIcon';
import MagnifyingGlassCircleIcon from '@heroicons/react/24/outline/MagnifyingGlassCircleIcon';
import MagnifyingGlassIcon from '@heroicons/react/24/outline/MagnifyingGlassIcon';
import MapIcon from '@heroicons/react/24/outline/MapPinIcon';
import PhoneIcon from '@heroicons/react/24/outline/PhoneIcon';
import QuestionMarkCircleIcon from '@heroicons/react/24/outline/QuestionMarkCircleIcon';
import Squares2X2Icon from '@heroicons/react/24/outline/Squares2X2Icon';
import UserGroupIcon from '@heroicons/react/24/outline/UserGroupIcon';
import XMarkIcon from '@heroicons/react/24/outline/XMarkIcon';

import { cn } from '@/utils/cn';

const user = {
  imageUrl:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  name: 'Tom Cook'
};

const navigation = [
  { current: false, href: '#', icon: HomeIcon, name: 'Dashboard' },
  { current: false, href: '#', icon: CalendarIcon, name: 'Calendar' },
  { current: false, href: '#', icon: UserGroupIcon, name: 'Teams' },
  { current: true, href: '#', icon: MagnifyingGlassCircleIcon, name: 'Directory' },
  { current: false, href: '#', icon: QuestionMarkCircleIcon, name: 'Announcements' },
  { current: false, href: '#', icon: MapIcon, name: 'Office Map' }
];
const secondaryNavigation = [
  { href: '#', icon: Squares2X2Icon, name: 'Apps' },
  { href: '#', icon: CogIcon, name: 'Settings' }
];
const tabs = [
  { current: true, href: '#', name: 'Profile' },
  { current: false, href: '#', name: 'Calendar' },
  { current: false, href: '#', name: 'Recognition' }
];
const profile = {
  about: `
    <p>Tincidunt quam neque in cursus viverra orci, dapibus nec tristique. Nullam ut sit dolor consectetur urna, dui cras nec sed. Cursus risus congue arcu aenean posuere aliquam.</p>
    <p>Et vivamus lorem pulvinar nascetur non. Pulvinar a sed platea rhoncus ac mauris amet. Urna, sem pretium sit pretium urna, senectus vitae. Scelerisque fermentum, cursus felis dui suspendisse velit pharetra. Augue et duis cursus maecenas eget quam lectus. Accumsan vitae nascetur pharetra rhoncus praesent dictum risus suspendisse.</p>
  `,
  coverImageUrl:
    'https://images.unsplash.com/photo-1444628838545-ac4016a5418a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
  fields: {
    Birthday: 'June 8, 1990',
    Email: 'ricardocooper@example.com',
    Location: 'San Francisco',
    Phone: '(555) 123-4567',
    Salary: '$145,000',
    Sits: 'Oasis, 4th floor',
    Team: 'Product Development',
    Title: 'Senior Front-End Developer'
  },
  imageUrl:
    'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
  name: 'Ricardo Cooper'
};
const directory = {
  A: [
    {
      id: 1,
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      name: 'Leslie Abbott',
      role: 'Co-Founder / CEO'
    },
    {
      id: 2,
      imageUrl:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      name: 'Hector Adams',
      role: 'VP, Marketing'
    },
    {
      id: 3,
      imageUrl:
        'https://images.unsplash.com/photo-1520785643438-5bf77931f493?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      name: 'Blake Alexander',
      role: 'Account Coordinator'
    },
    {
      id: 4,
      imageUrl:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      name: 'Fabricio Andrews',
      role: 'Senior Art Director'
    }
  ],
  B: [
    {
      id: 5,
      imageUrl:
        'https://images.unsplash.com/photo-1501031170107-cfd33f0cbdcc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      name: 'Angela Beaver',
      role: 'Chief Strategy Officer'
    },
    {
      id: 6,
      imageUrl:
        'https://images.unsplash.com/photo-1506980595904-70325b7fdd90?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      name: 'Yvette Blanchard',
      role: 'Studio Artist'
    },
    {
      id: 7,
      imageUrl:
        'https://images.unsplash.com/photo-1513910367299-bce8d8a0ebf6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      name: 'Lawrence Brooks',
      role: 'Content Specialist'
    }
  ],
  C: [
    {
      id: 8,
      imageUrl:
        'https://images.unsplash.com/photo-1517070208541-6ddc4d3efbcb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      name: 'Jeffrey Clark',
      role: 'Senior Art Director'
    },
    {
      id: 9,
      imageUrl:
        'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      name: 'Kathryn Cooper',
      role: 'Associate Creative Director'
    }
  ],
  E: [
    {
      id: 10,
      imageUrl:
        'https://images.unsplash.com/photo-1509783236416-c9ad59bae472?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      name: 'Alicia Edwards',
      role: 'Junior Copywriter'
    },
    {
      id: 11,
      imageUrl:
        'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      name: 'Benjamin Emerson',
      role: 'Director, Print Operations'
    },
    {
      id: 12,
      imageUrl:
        'https://images.unsplash.com/photo-1504703395950-b89145a5425b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      name: 'Jillian Erics',
      role: 'Designer'
    },
    {
      id: 13,
      imageUrl:
        'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      name: 'Chelsea Evans',
      role: 'Human Resources Manager'
    }
  ],
  G: [
    {
      id: 14,
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      name: 'Michael Gillard',
      role: 'Co-Founder / CTO'
    },
    {
      id: 15,
      imageUrl:
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      name: 'Dries Giuessepe',
      role: 'Manager, Business Relations'
    }
  ],
  M: [
    {
      id: 16,
      imageUrl:
        'https://images.unsplash.com/photo-1507101105822-7472b28e22ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      name: 'Jenny Harrison',
      role: 'Studio Artist'
    },
    {
      id: 17,
      imageUrl:
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      name: 'Lindsay Hatley',
      role: 'Front-end Developer'
    },
    {
      id: 18,
      imageUrl:
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      name: 'Anna Hill',
      role: 'Partner, Creative'
    }
  ],
  S: [
    {
      id: 19,
      imageUrl:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      name: 'Courtney Samuels',
      role: 'Designer'
    },
    {
      id: 20,
      imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      name: 'Tom Simpson',
      role: 'Director, Product Development'
    }
  ],
  T: [
    {
      id: 21,
      imageUrl:
        'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      name: 'Floyd Thompson',
      role: 'Principal Designer'
    },
    {
      id: 22,
      imageUrl:
        'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      name: 'Leonard Timmons',
      role: 'Senior Designer'
    },
    {
      id: 23,
      imageUrl:
        'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      name: 'Whitney Trudeau',
      role: 'Copywriter'
    }
  ],
  W: [
    {
      id: 24,
      imageUrl:
        'https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      name: 'Kristin Watson',
      role: 'VP, Human Resources'
    },
    {
      id: 25,
      imageUrl:
        'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      name: 'Emily Wilson',
      role: 'VP, User Experience'
    }
  ],
  Y: [
    {
      id: 26,
      imageUrl:
        'https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      name: 'Emma Young',
      role: 'Senior Front-end Developer'
    }
  ]
};
const team = [
  {
    handle: 'lesliealexander',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    name: 'Leslie Alexander',
    role: 'Co-Founder / CEO'
  },
  {
    handle: 'michaelfoster',
    imageUrl:
      'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    name: 'Michael Foster',
    role: 'Co-Founder / CTO'
  },
  {
    handle: 'driesvincent',
    imageUrl:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    name: 'Dries Vincent',
    role: 'Manager, Business Relations'
  },
  {
    handle: 'lindsaywalton',
    imageUrl:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    name: 'Lindsay Walton',
    role: 'Front-end Developer'
  }
];

export const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-white">
        <body class="h-full overflow-hidden">
        ```
      */}
      <div className="flex h-full">
        <Transition.Root as={Fragment} show={sidebarOpen}>
          <Dialog as="div" className="fixed inset-0 z-40 flex lg:hidden" onClose={setSidebarOpen}>
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
              <div className="relative flex w-full max-w-xs flex-1 flex-col bg-white focus:outline-none">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute right-0 top-0 -mr-12 pt-2">
                    <button
                      className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                      type="button"
                      onClick={() => setSidebarOpen(false)}
                    >
                      <span className="sr-only">Close sidebar</span>
                      <XMarkIcon aria-hidden="true" className="h-6 w-6 text-white" />
                    </button>
                  </div>
                </Transition.Child>
                <div className="h-0 flex-1 overflow-y-auto pb-4 pt-5">
                  <div className="flex flex-shrink-0 items-center px-4">
                    <img
                      alt="Workflow"
                      className="h-8 w-auto"
                      src="https://tailwindui.com/img/logos/workflow-logo-pink-500-mark-gray-900-text.svg"
                    />
                  </div>
                  <nav aria-label="Sidebar" className="mt-5">
                    <div className="space-y-1 px-2">
                      {navigation.map((item) => (
                        <a
                          aria-current={item.current ? 'page' : undefined}
                          className={cn(
                            item.current
                              ? 'bg-gray-100 text-gray-900'
                              : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                            'group flex items-center rounded-md px-2 py-2 text-base font-medium'
                          )}
                          href={item.href}
                          key={item.name}
                        >
                          <item.icon
                            aria-hidden="true"
                            className={cn(
                              item.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500',
                              'mr-4 h-6 w-6'
                            )}
                          />
                          {item.name}
                        </a>
                      ))}
                    </div>
                    <hr aria-hidden="true" className="my-5 border-t border-gray-200" />
                    <div className="space-y-1 px-2">
                      {secondaryNavigation.map((item) => (
                        <a
                          className="group flex items-center rounded-md px-2 py-2 text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                          href={item.href}
                          key={item.name}
                        >
                          <item.icon
                            aria-hidden="true"
                            className="mr-4 h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                          />
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </nav>
                </div>
                <div className="flex flex-shrink-0 border-t border-gray-200 p-4">
                  <a className="group block flex-shrink-0" href="#">
                    <div className="flex items-center">
                      <div>
                        <img alt="" className="inline-block h-10 w-10 rounded-full" src={user.imageUrl} />
                      </div>
                      <div className="ml-3">
                        <p className="text-base font-medium text-gray-700 group-hover:text-gray-900">{user.name}</p>
                        <p className="text-sm font-medium text-gray-500 group-hover:text-gray-700">View profile</p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </Transition.Child>
            <div aria-hidden="true" className="w-14 flex-shrink-0">
              {/* Force sidebar to shrink to fit close icon */}
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className="hidden lg:flex lg:flex-shrink-0">
          <div className="flex w-64 flex-col">
            {/* Sidebar component, swap this element with another sidebar if you like */}
            <div className="flex min-h-0 flex-1 flex-col border-r border-gray-200 bg-gray-100">
              <div className="flex flex-1 flex-col overflow-y-auto pb-4 pt-5">
                <div className="flex flex-shrink-0 items-center px-4">
                  <img
                    alt="Workflow"
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-logo-pink-500-mark-gray-900-text.svg"
                  />
                </div>
                <nav aria-label="Sidebar" className="mt-5 flex-1">
                  <div className="space-y-1 px-2">
                    {navigation.map((item) => (
                      <a
                        aria-current={item.current ? 'page' : undefined}
                        className={cn(
                          item.current
                            ? 'bg-gray-200 text-gray-900'
                            : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                          'group flex items-center rounded-md px-2 py-2 text-sm font-medium'
                        )}
                        href={item.href}
                        key={item.name}
                      >
                        <item.icon
                          aria-hidden="true"
                          className={cn(
                            item.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500',
                            'mr-3 h-6 w-6 flex-shrink-0'
                          )}
                        />
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <hr aria-hidden="true" className="my-5 border-t border-gray-200" />
                  <div className="flex-1 space-y-1 px-2">
                    {secondaryNavigation.map((item) => (
                      <a
                        className="group flex items-center rounded-md px-2 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                        href={item.href}
                        key={item.name}
                      >
                        <item.icon
                          aria-hidden="true"
                          className="mr-3 h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                        />
                        {item.name}
                      </a>
                    ))}
                  </div>
                </nav>
              </div>
              <div className="flex flex-shrink-0 border-t border-gray-200 p-4">
                <a className="group block w-full flex-shrink-0" href="#">
                  <div className="flex items-center">
                    <div>
                      <img alt="" className="inline-block h-9 w-9 rounded-full" src={user.imageUrl} />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-700 group-hover:text-gray-900">{user.name}</p>
                      <p className="text-xs font-medium text-gray-500 group-hover:text-gray-700">View profile</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex min-w-0 flex-1 flex-col overflow-hidden">
          <div className="lg:hidden">
            <div className="flex items-center justify-between border-b border-gray-200 bg-gray-50 px-4 py-1.5">
              <div>
                <img
                  alt="Workflow"
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/workflow-mark-pink-500.svg"
                />
              </div>
              <div>
                <button
                  className="-mr-3 inline-flex h-12 w-12 items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-pink-600"
                  type="button"
                  onClick={() => setSidebarOpen(true)}
                >
                  <span className="sr-only">Open sidebar</span>
                  <Bars3Icon aria-hidden="true" className="h-6 w-6" />
                </button>
              </div>
            </div>
          </div>
          <div className="relative z-0 flex flex-1 overflow-hidden">
            <main className="relative z-0 flex-1 overflow-y-auto focus:outline-none xl:order-last">
              {/* Breadcrumb */}
              <nav aria-label="Breadcrumb" className="flex items-start px-4 py-3 sm:px-6 lg:px-8 xl:hidden">
                <a className="inline-flex items-center space-x-3 text-sm font-medium text-gray-900" href="#">
                  <ChevronLeftIcon aria-hidden="true" className="-ml-2 h-5 w-5 text-gray-400" />
                  <span>Directory</span>
                </a>
              </nav>

              <article>
                {/* Profile header */}
                <div>
                  <div>
                    <img alt="" className="h-32 w-full object-cover lg:h-48" src={profile.coverImageUrl} />
                  </div>
                  <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                    <div className="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
                      <div className="flex">
                        <img
                          alt=""
                          className="h-24 w-24 rounded-full ring-4 ring-white sm:h-32 sm:w-32"
                          src={profile.imageUrl}
                        />
                      </div>
                      <div className="mt-6 sm:flex sm:min-w-0 sm:flex-1 sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
                        <div className="mt-6 min-w-0 flex-1 sm:hidden 2xl:block">
                          <h1 className="truncate text-2xl font-bold text-gray-900">{profile.name}</h1>
                        </div>
                        <div className="mt-6 flex flex-col justify-stretch space-y-3 sm:flex-row sm:space-x-4 sm:space-y-0">
                          <button
                            className="inline-flex justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
                            type="button"
                          >
                            <EnvelopeIcon aria-hidden="true" className="-ml-1 mr-2 h-5 w-5 text-gray-400" />
                            <span>Message</span>
                          </button>
                          <button
                            className="inline-flex justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
                            type="button"
                          >
                            <PhoneIcon aria-hidden="true" className="-ml-1 mr-2 h-5 w-5 text-gray-400" />
                            <span>Call</span>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="mt-6 hidden min-w-0 flex-1 sm:block 2xl:hidden">
                      <h1 className="truncate text-2xl font-bold text-gray-900">{profile.name}</h1>
                    </div>
                  </div>
                </div>

                {/* Tabs */}
                <div className="mt-6 sm:mt-2 2xl:mt-5">
                  <div className="border-b border-gray-200">
                    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                      <nav aria-label="Tabs" className="-mb-px flex space-x-8">
                        {tabs.map((tab) => (
                          <a
                            aria-current={tab.current ? 'page' : undefined}
                            className={cn(
                              tab.current
                                ? 'border-pink-500 text-gray-900'
                                : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                              'whitespace-nowrap border-b-2 px-1 py-4 text-sm font-medium'
                            )}
                            href={tab.href}
                            key={tab.name}
                          >
                            {tab.name}
                          </a>
                        ))}
                      </nav>
                    </div>
                  </div>
                </div>

                {/* Description list */}
                <div className="mx-auto mt-6 max-w-5xl px-4 sm:px-6 lg:px-8">
                  <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                    {Object.keys(profile.fields).map((field) => (
                      <div className="sm:col-span-1" key={field}>
                        <dt className="text-sm font-medium text-gray-500">{field}</dt>
                        <dd className="mt-1 text-sm text-gray-900">{profile.fields[field]}</dd>
                      </div>
                    ))}
                    <div className="sm:col-span-2">
                      <dt className="text-sm font-medium text-gray-500">About</dt>
                      <dd
                        className="mt-1 max-w-prose space-y-5 text-sm text-gray-900"
                        dangerouslySetInnerHTML={{ __html: profile.about }}
                      />
                    </div>
                  </dl>
                </div>

                {/* Team member list */}
                <div className="mx-auto mt-8 max-w-5xl px-4 pb-12 sm:px-6 lg:px-8">
                  <h2 className="text-sm font-medium text-gray-500">Team members</h2>
                  <div className="mt-1 grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {team.map((person) => (
                      <div
                        className="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-pink-500 focus-within:ring-offset-2 hover:border-gray-400"
                        key={person.handle}
                      >
                        <div className="flex-shrink-0">
                          <img alt="" className="h-10 w-10 rounded-full" src={person.imageUrl} />
                        </div>
                        <div className="min-w-0 flex-1">
                          <a className="focus:outline-none" href="#">
                            <span aria-hidden="true" className="absolute inset-0" />
                            <p className="text-sm font-medium text-gray-900">{person.name}</p>
                            <p className="truncate text-sm text-gray-500">{person.role}</p>
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            </main>
            <aside className="hidden w-96 flex-shrink-0 border-r border-gray-200 xl:order-first xl:flex xl:flex-col">
              <div className="px-6 pb-4 pt-6">
                <h2 className="text-lg font-medium text-gray-900">Directory</h2>
                <p className="mt-1 text-sm text-gray-600">Search directory of 3,018 employees</p>
                <form action="#" className="mt-6 flex space-x-4">
                  <div className="min-w-0 flex-1">
                    <label className="sr-only" htmlFor="search">
                      Search
                    </label>
                    <div className="relative rounded-md shadow-sm">
                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <MagnifyingGlassIcon aria-hidden="true" className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        className="block w-full rounded-md border-gray-300 pl-10 focus:border-pink-500 focus:ring-pink-500 sm:text-sm"
                        id="search"
                        name="search"
                        placeholder="Search"
                        type="search"
                      />
                    </div>
                  </div>
                  <button
                    className="inline-flex justify-center rounded-md border border-gray-300 bg-white px-3.5 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
                    type="submit"
                  >
                    <FunnelIcon aria-hidden="true" className="h-5 w-5 text-gray-400" />
                    <span className="sr-only">Search</span>
                  </button>
                </form>
              </div>
              {/* Directory list */}
              <nav aria-label="Directory" className="min-h-0 flex-1 overflow-y-auto">
                {Object.keys(directory).map((letter) => (
                  <div className="relative" key={letter}>
                    <div className="sticky top-0 z-10 border-b border-t border-gray-200 bg-gray-50 px-6 py-1 text-sm font-medium text-gray-500">
                      <h3>{letter}</h3>
                    </div>
                    <ul className="relative z-0 divide-y divide-gray-200" role="list">
                      {directory[letter].map((person) => (
                        <li key={person.id}>
                          <div className="relative flex items-center space-x-3 px-6 py-5 focus-within:ring-2 focus-within:ring-inset focus-within:ring-pink-500 hover:bg-gray-50">
                            <div className="flex-shrink-0">
                              <img alt="" className="h-10 w-10 rounded-full" src={person.imageUrl} />
                            </div>
                            <div className="min-w-0 flex-1">
                              <a className="focus:outline-none" href="#">
                                {/* Extend touch target to entire panel */}
                                <span aria-hidden="true" className="absolute inset-0" />
                                <p className="text-sm font-medium text-gray-900">{person.name}</p>
                                <p className="truncate text-sm text-gray-500">{person.role}</p>
                              </a>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </nav>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
};
