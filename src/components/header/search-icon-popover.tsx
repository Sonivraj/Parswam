'use client'

import { CloseButton, Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
import { Cancel01Icon, Search01Icon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

const SearchIconPopover = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const router = useRouter()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch(e)
    }
  }

  return (
    <Popover className="relative">
      {({ open, close }) => (
        <>
          <PopoverButton className="-m-2.5 flex cursor-pointer items-center justify-center rounded-md p-2.5 hover:bg-gray-100 focus-visible:outline-0 dark:hover:bg-zinc-700">
            <HugeiconsIcon icon={Search01Icon} size={24} color="currentColor" strokeWidth={1} />
          </PopoverButton>

          <PopoverPanel
            transition
            className="absolute top-full right-0 z-50 mt-3 w-80 rounded-lg bg-white p-6 shadow-xl ring-1 ring-zinc-950/5 transition data-closed:translate-y-2 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in dark:bg-zinc-800 dark:ring-white/10"
          >
            <div className="flex flex-col space-y-6">
              {/* Header */}
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">Search</h3>
                <CloseButton
                  className="flex cursor-pointer items-center justify-center rounded-md p-1 hover:bg-gray-100 dark:hover:bg-zinc-700"
                  onClick={close}
                >
                  <HugeiconsIcon icon={Cancel01Icon} size={20} color="currentColor" strokeWidth={1} />
                </CloseButton>
              </div>

              {/* Search Input */}
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-3 flex items-center">
                  <HugeiconsIcon icon={Search01Icon} size={18} color="#6B7280" strokeWidth={1} />
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Search for product"
                  className="w-full rounded-lg border border-zinc-200 bg-white py-3 pr-4 pl-10 text-sm text-zinc-900 placeholder-zinc-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none dark:border-zinc-600 dark:bg-zinc-700 dark:text-zinc-100 dark:placeholder-zinc-400"
                  autoFocus
                />
              </div>
              {/* Recent Searches */}
              <div className="border-t border-zinc-200 pt-4 dark:border-zinc-600">
                <h4 className="mb-3 text-sm font-medium text-zinc-700 dark:text-zinc-300">Recent searches</h4>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => {
                      setSearchQuery('Jeans')
                      // Optionally trigger search immediately:
                      // router.push('/search?q=Jeans')
                    }}
                    className="rounded-full bg-zinc-100 px-3 py-1.5 text-xs font-medium text-zinc-700 transition-colors hover:bg-zinc-200 dark:bg-zinc-600 dark:text-zinc-300 dark:hover:bg-zinc-500"
                  >
                    Jeans
                  </button>
                  <button
                    onClick={() => setSearchQuery('T-shirts')}
                    className="rounded-full bg-zinc-100 px-3 py-1.5 text-xs font-medium text-zinc-700 transition-colors hover:bg-zinc-200 dark:bg-zinc-600 dark:text-zinc-300 dark:hover:bg-zinc-500"
                  >
                    T-shirts
                  </button>
                  <button
                    onClick={() => setSearchQuery('Shirts')}
                    className="rounded-full bg-zinc-100 px-3 py-1.5 text-xs font-medium text-zinc-700 transition-colors hover:bg-zinc-200 dark:bg-zinc-600 dark:text-zinc-300 dark:hover:bg-zinc-500"
                  >
                    Shirts
                  </button>
                  <button
                    onClick={() => setSearchQuery('Shoes')}
                    className="rounded-full bg-zinc-100 px-3 py-1.5 text-xs font-medium text-zinc-700 transition-colors hover:bg-zinc-200 dark:bg-zinc-600 dark:text-zinc-300 dark:hover:bg-zinc-500"
                  >
                    Shoes
                  </button>
                </div>
              </div>

              {/* Search Button for Mobile */}
              <button
                onClick={handleSearch}
                className="rounded-lg bg-blue-600 px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none md:hidden"
              >
                Search
              </button>
            </div>
          </PopoverPanel>
        </>
      )}
    </Popover>
  )
}

export default SearchIconPopover
