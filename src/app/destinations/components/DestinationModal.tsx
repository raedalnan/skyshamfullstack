'use client';

import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import Image from 'next/image';
import { XMarkIcon } from '@heroicons/react/24/outline';

interface DestinationModalProps {
  isOpen: boolean;
  onClose: () => void;
  destination: {
    name: string;
    image: string;
    details: string;
  } | null;
}

export const DestinationModal = ({ isOpen, onClose, destination }: DestinationModalProps) => {
  if (!destination) return null;

  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog onClose={onClose} className="relative z-50">
        {/* Backdrop */}
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/70" />
        </Transition.Child>

        {/* Modal */}
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="relative w-full max-w-2xl overflow-hidden rounded-xl bg-white shadow-2xl">
                {/* Close button */}
                <button
                  onClick={onClose}
                  className="absolute right-4 top-4 z-10 rounded-full bg-white/80 p-1 text-gray-600 hover:bg-white hover:text-gray-900"
                >
                  <XMarkIcon className="h-6 w-6" />
                </button>

                {/* Image */}
                <div className="relative h-64 w-full sm:h-80">
                  <Image
                    src={destination.image}
                    alt={destination.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <Dialog.Title className="text-2xl font-bold text-gray-900">
                    {destination.name}
                  </Dialog.Title>
                  <p className="mt-4 text-gray-600">
                    {destination.details}
                  </p>

                  {/* Booking buttons */}
                  <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-start">
                    <button className="flex items-center justify-center rounded-lg bg-amber-500 px-6 py-3 font-semibold text-white transition-colors hover:bg-amber-600">
                      ✈️ Book Flight
                    </button>
                    <button className="flex items-center justify-center rounded-lg bg-blue-500 px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-600">
                      🏨 Book Hotel
                    </button>
                    <button className="flex items-center justify-center rounded-lg bg-orange-700 px-6 py-3 font-semibold text-white transition-colors hover:bg-orange-800">
                      🚕 Book Airport Taxi
                    </button>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}; 