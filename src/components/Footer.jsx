function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-footer-tint text-slate-500">
      <div className="mx-auto max-w-6xl px-4 pt-10 pb-6 text-center lg:px-8 md:text-left">
        <div className="md:grid md:grid-cols-[2fr_1fr_1fr_1fr] md:gap-x-8 lg:gap-x-12">
          {/* Brand */}
<div className="mx-auto flex max-w-md flex-col md:mx-0">
          <div className="mb-2 flex items-center justify-center gap-2 text-lg font-bold text-slate-900 md:justify-start">
              <img src="/favicon.svg" alt="Dev Stack logo" className="h-6 w-6" />
              <span className="flex items-baseline gap-1">
                <span>Dev</span>
                <span className="text-gradient">Stack</span>
              </span>
            </div>
            <p className="text-sm text-slate-500">
              Curated tools, technologies, and resources for developers building modern software.
            </p>
            <div className="mt-4 flex items-center justify-center gap-2 text-sm md:justify-start">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="font-bold text-slate-900 hover-gradient">GitHub</a>
              <span className="h-1 w-1 rounded-full bg-slate-400" />
              <a href="https://x.com" target="_blank" rel="noreferrer" className="font-bold text-slate-900 hover-gradient">Twitter(X)</a>
              <span className="h-1 w-1 rounded-full bg-slate-400" />
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="font-bold text-slate-900 hover-gradient">LinkedIn</a>
            </div>
          </div>

          {/* Product / Company / Legal */}
          <div className="mt-8 grid grid-cols-3 gap-6 md:contents">
            {/* Product */}
            <div>
              <h4 className="mb-2 text-xs font-bold text-slate-500 sm:mb-3 sm:text-sm">Product</h4>
              <ul className="space-y-1.5 text-xs sm:space-y-2 sm:text-sm">
                <li><a href="#" className="hover-gradient">Home</a></li>
                <li><a href="#technologies" className="hover-gradient">Technologies</a></li>
                <li><a href="#" className="hover-gradient">Projects</a></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="mb-2 text-xs font-bold text-slate-500 sm:mb-3 sm:text-sm">Company</h4>
              <ul className="space-y-1.5 text-xs sm:space-y-2 sm:text-sm">
                <li><a href="#" className="hover-gradient">About</a></li>
                <li><a href="#" className="hover-gradient">Contact</a></li>
                <li><a href="#" className="hover-gradient">Careers</a></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="mb-2 text-xs font-bold text-slate-500 sm:mb-3 sm:text-sm">Legal</h4>
              <ul className="space-y-1.5 text-xs sm:space-y-2 sm:text-sm">
                <li><a href="#" className="hover-gradient">Privacy Policy</a></li>
                <li><a href="#" className="hover-gradient">Terms of Service</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-6xl items-center justify-between border-t border-slate-200 px-7 py-6 text-xs text-slate-400 md:px-6 lg:px-8">
        <p>&copy; {year} Dev Stack Builder. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href="#" title="Privacy Policy" aria-label="Privacy Policy" className="transition hover:opacity-80">
            <img src="/icons/privacy-policy.svg" alt="" className="h-5 w-5" />
          </a>
          <a href="#" title="Terms of Service" aria-label="Terms of Service" className="transition hover:opacity-80">
            <img src="/icons/terms-of-service.svg" alt="" className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer