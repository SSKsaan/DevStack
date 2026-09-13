function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-footer-tint text-slate-500">
      <div className="mx-auto max-w-6xl px-4 pt-10 pb-6 text-center lg:px-8 sm:text-left">
        {/* Brand */}
        <div className="mx-auto flex max-w-md flex-col sm:mx-0">
          <div className="mb-2 flex items-center justify-center gap-2 text-lg font-bold text-slate-900 sm:justify-start">
            <img src="/favicon.svg" alt="Dev Stack logo" className="h-6 w-6" />
            <span className="flex items-baseline gap-1">
              <span>Dev</span>
              <span className="text-gradient">Stack</span>
            </span>
          </div>
          <p className="text-sm text-slate-500">
            Curated tools, technologies, and resources for developers building modern software.
          </p>
          <div className="mt-4 flex items-center justify-center gap-2 text-sm sm:justify-start">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="font-bold text-slate-900 hover-gradient">GitHub</a>
            <span className="h-1 w-1 rounded-full bg-slate-400" />
            <a href="https://x.com" target="_blank" rel="noreferrer" className="font-bold text-slate-900 hover-gradient">Twitter(X)</a>
            <span className="h-1 w-1 rounded-full bg-slate-400" />
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="font-bold text-slate-900 hover-gradient">LinkedIn</a>
          </div>
        </div>

        {/* Product / Company / Legal */}
        <div className="mt-8 grid grid-cols-3 gap-6">
          {/* Product */}
          <div>
            <h4 className="mb-2 text-xs font-semibold text-slate-500 sm:mb-3 sm:text-sm sm:text-slate-900">Product</h4>
            <ul className="space-y-1.5 text-xs sm:space-y-2 sm:text-sm">
              <li><a href="#" className="hover-gradient">Home</a></li>
              <li><a href="#technologies" className="hover-gradient">Technologies</a></li>
              <li><a href="#" className="hover-gradient">Projects</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="mb-2 text-xs font-semibold text-slate-500 sm:mb-3 sm:text-sm sm:text-slate-900">Company</h4>
            <ul className="space-y-1.5 text-xs sm:space-y-2 sm:text-sm">
              <li><a href="#" className="hover-gradient">About</a></li>
              <li><a href="#" className="hover-gradient">Contact</a></li>
              <li><a href="#" className="hover-gradient">Careers</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="mb-2 text-xs font-semibold text-slate-500 sm:mb-3 sm:text-sm sm:text-slate-900">Legal</h4>
            <ul className="space-y-1.5 text-xs sm:space-y-2 sm:text-sm">
              <li><a href="#" className="hover-gradient">Privacy Policy</a></li>
              <li><a href="#" className="hover-gradient">Terms of Service</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl border-t border-slate-200 px-4 py-6 text-center text-xs text-slate-400 lg:px-8">
        &copy; {year} Dev Stack Builder. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer