const tape = (
  <svg xmlns="http://www.w3.org/2000/svg" width="95" height="80" viewBox="0 0 95 80" fill="none">
    <path d="M1 45L70.282 5L88.282 36.1769L19 76.1769L1 45Z" fill="#172033" fillOpacity="0.9" />
    <path
      d="M69.6829 39.997C74.772 36.9233 80.2799 35.022 85.4464 32.0415C85.5584 31.9769 85.6703 31.912 85.782 31.8468L83.9519 38.6769C80.2833 32.3886 75.7064 26.4975 72.2275 20.0846C70.0007 15.9783 67.7966 11.8425 65.6183 7.69261L72.9746 9.66373C70.566 10.9281 68.1526 12.1837 65.7375 13.4301C59.1543 16.828 52.5477 20.1634 45.9059 23.4675C39.2779 26.7637 32.6138 30.0293 25.946 33.2683C21.417 35.4683 16.8774 37.6611 12.3408 39.8468C10.3494 40.8065 8.36335 41.7623 6.37228 42.7203C4.88674 43.4348 3.40117 44.1492 1.91563 44.8637C1.70897 44.9628 1.48389 45.0108 1.28779 44.994C1.0916 44.977 0.940536 44.8975 0.866099 44.7681C0.791689 44.6386 0.798739 44.4674 0.882816 44.289C0.966978 44.111 1.12195 43.9408 1.31146 43.8119C2.68692 42.8791 4.06239 41.9462 5.43785 41.0134C6.96571 39.9774 8.49068 38.9427 10.0185 37.9078C20.0958 31.0952 30.2295 24.9403 40.8884 19.3523C51.1302 12.084 60.5527 4.41789 68.1502 1.30751C70.2985 0.211054 72.8781 0.719848 73.9745 2.86814C78.7359 11.1701 85.981 22.1424 93.4198 33.2106C94.9454 36.1998 94.2374 39.789 91.2483 41.3146C86.8458 43.7492 78.4208 47.3647 67.7901 54.1904C55.9262 59.1653 43.5464 66.7102 30.5954 72.3951C27.928 75.4406 24.9338 77.2712 20.8427 79.3685C18.9858 80.3162 16.7561 79.8764 15.8084 78.0196C10.1771 64.3053 5.4569 51.2592 0.707979 45.6366C0.664122 45.5378 0.643515 45.4304 0.652618 45.3375C0.661818 45.2445 0.699512 45.1734 0.760479 45.1383C0.821487 45.1032 0.902318 45.1064 0.987373 45.1452C1.07223 45.1841 1.15414 45.256 1.21749 45.3435C10.9968 59.12 21.6379 74.6539 21.6379 74.6539L17.477 73.539C30.2295 64.9403 43.1287 56.4797 56.1947 48.2951C61.9671 44.6777 67.8458 41.1091 69.6829 39.997Z"
      fill="#172033"
      fillOpacity="0.9"
    />
  </svg>
)

const columns = [
  {
    title: "Product",
    links: ["Features", "Pricing", "Integrations", "Updates"],
  },
  {
    title: "Company",
    links: ["About", "Customers", "Careers", "Contact"],
  },
  {
    title: "Resources",
    links: ["Help Center", "Guides", "API", "Status"],
  },
]

export function Component() {
  return (
    <footer className="relative mx-auto mt-12 w-full max-w-6xl text-left text-[#172033] md:mt-14">
      <div className="relative rounded-[2rem] border border-white/50 bg-white/80 px-6 py-10 shadow-sm backdrop-blur-md md:px-10">
        <div className="hidden md:block absolute -top-5 -left-8 h-9 w-20 scale-75">{tape}</div>
        <div className="hidden md:block absolute -top-5 -right-8 h-9 w-20 rotate-90 scale-75">{tape}</div>

        <div className="grid gap-10 md:grid-cols-[1.2fr_2fr]">
          <div>
            <a href="#" className="flex items-center gap-3 text-2xl font-light tracking-tight text-[#172033]">
              <img src="/flowpilot-logo.svg" alt="" className="h-8 w-auto" aria-hidden="true" />
              <span>Flowpilot</span>
            </a>
            <p className="mt-4 max-w-sm text-sm font-light leading-relaxed text-black/55">
              AI-powered project management for teams that want clarity without the chaos.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {columns.map((column) => (
              <div key={column.title} className="space-y-4">
                <h4 className="text-xs font-medium uppercase tracking-[0.16em] text-black/45">{column.title}</h4>
                <div className="flex flex-col gap-3">
                  {column.links.map((link) => (
                    <a
                      key={link}
                      href={link === "Features" ? "#features" : link === "Pricing" ? "#pricing" : "#"}
                      className="text-sm font-light text-black/55 transition duration-200 hover:text-[#172033]"
                    >
                      {link}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-black/10 pt-5 text-sm font-light text-black/45 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Flowpilot. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#pricing" className="transition hover:text-[#172033]">
              Pricing
            </a>
            <a href="#features" className="transition hover:text-[#172033]">
              Features
            </a>
            <a href="#" className="transition hover:text-[#172033]">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
