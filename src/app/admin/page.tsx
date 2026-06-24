import Link from "next/link";

export default function AdminDashboardPage() {
  return (
    <div className="min-h-screen flex bg-background text-on-background font-body-md text-left w-full">
      {/* Sidebar Navigation */}
      <aside className="hidden md:flex flex-col w-64 bg-surface-container-lowest border-r border-outline-variant h-screen sticky top-0 shrink-0">
        <div className="p-gutter border-b border-outline-variant">
          <Link href="/" className="font-headline-sm text-headline-sm text-primary hover:opacity-80 transition-opacity">
            Admin Panel
          </Link>
        </div>
        <nav className="flex-1 py-stack-md flex flex-col gap-stack-sm px-stack-sm">
          <Link 
            className="flex items-center gap-stack-sm px-stack-md py-stack-sm rounded-lg bg-surface-container-low text-primary font-label-md text-label-md transition-colors" 
            href="/admin"
          >
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>dashboard</span>
            Dashboard
          </Link>
          <Link 
            className="flex items-center gap-stack-sm px-stack-md py-stack-sm rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-primary transition-colors font-label-md text-label-md" 
            href="/blogs"
          >
            <span className="material-symbols-outlined">article</span>
            Blogs
          </Link>
          <Link 
            className="flex items-center gap-stack-sm px-stack-md py-stack-sm rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-primary transition-colors font-label-md text-label-md" 
            href="/blogs"
          >
            <span className="material-symbols-outlined">category</span>
            Categories
          </Link>
          <Link 
            className="flex items-center gap-stack-sm px-stack-md py-stack-sm rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-primary transition-colors font-label-md text-label-md" 
            href="/admin"
          >
            <span className="material-symbols-outlined">perm_media</span>
            Media
          </Link>
          <Link 
            className="flex items-center gap-stack-sm px-stack-md py-stack-sm rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-primary transition-colors font-label-md text-label-md mt-auto" 
            href="/admin"
          >
            <span className="material-symbols-outlined">settings</span>
            Settings
          </Link>
        </nav>
        <div className="p-gutter border-t border-outline-variant">
          <div className="flex items-center gap-stack-md">
            <div className="w-10 h-10 rounded-full bg-surface-variant flex items-center justify-center text-primary font-headline-sm text-headline-sm">
              R
            </div>
            <div>
              <p className="font-label-md text-label-md text-on-surface">Rishika Shukla</p>
              <p className="font-caption text-caption text-on-surface-variant">Admin</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-grow flex flex-col h-screen overflow-y-auto w-full">
        
        {/* Mobile Top Bar */}
        <header className="md:hidden flex items-center justify-between p-margin-mobile bg-surface-container-lowest border-b border-outline-variant sticky top-0 z-10 w-full">
          <Link href="/" className="font-headline-sm text-headline-sm text-primary">
            Admin Panel
          </Link>
          <button className="text-on-surface p-2 rounded-lg hover:bg-surface-container transition-colors cursor-pointer">
            <span className="material-symbols-outlined">menu</span>
          </button>
        </header>

        {/* Content Canvas */}
        <div className="p-margin-mobile md:p-gutter max-w-container-max mx-auto w-full flex-1">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-stack-lg gap-stack-md">
            <div>
              <h2 className="font-headline-md text-headline-md text-on-surface">Overview</h2>
              <p className="text-on-surface-variant mt-stack-sm">Welcome back, here's what's happening with your content today.</p>
            </div>
            <Link 
              className="bg-primary text-on-primary px-stack-md py-stack-sm rounded-lg font-label-md text-label-md hover:opacity-90 transition-opacity flex items-center gap-stack-sm shadow-[0_4px_20px_rgba(0,0,0,0.04)] cursor-pointer text-center" 
              href="/admin/new"
            >
              <span className="material-symbols-outlined">add</span>
              New Post
            </Link>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-stack-md mb-stack-lg">
            
            {/* Stat Card 1 */}
            <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-gutter hover:shadow-[0_4px_20px_rgba(0,0,0,0.04)] transition-shadow group relative overflow-hidden">
              <div className="absolute right-0 top-0 w-24 h-24 bg-surface-container-low rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
              <div className="flex items-center gap-stack-sm mb-stack-sm text-on-surface-variant relative z-10">
                <span className="material-symbols-outlined">article</span>
                <h3 className="font-label-md text-label-md uppercase tracking-wider">Total Blogs</h3>
              </div>
              <p className="font-headline-md text-headline-md text-on-surface relative z-10">142</p>
              <div className="flex items-center gap-1 mt-stack-sm text-tertiary font-caption text-caption relative z-10">
                <span className="material-symbols-outlined text-[16px]">trending_up</span>
                <span>+12 this month</span>
              </div>
            </div>

            {/* Stat Card 2 */}
            <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-gutter hover:shadow-[0_4px_20px_rgba(0,0,0,0.04)] transition-shadow group relative overflow-hidden">
              <div className="absolute right-0 top-0 w-24 h-24 bg-surface-container-low rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
              <div className="flex items-center gap-stack-sm mb-stack-sm text-on-surface-variant relative z-10">
                <span className="material-symbols-outlined">visibility</span>
                <h3 className="font-label-md text-label-md uppercase tracking-wider">Total Views</h3>
              </div>
              <p className="font-headline-md text-headline-md text-on-surface relative z-10">48.2k</p>
              <div className="flex items-center gap-1 mt-stack-sm text-tertiary font-caption text-caption relative z-10">
                <span className="material-symbols-outlined text-[16px]">trending_up</span>
                <span>+5.4% vs last month</span>
              </div>
            </div>

            {/* Stat Card 3 */}
            <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-gutter hover:shadow-[0_4px_20px_rgba(0,0,0,0.04)] transition-shadow group relative overflow-hidden">
              <div className="absolute right-0 top-0 w-24 h-24 bg-surface-container-low rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
              <div className="flex items-center gap-stack-sm mb-stack-sm text-on-surface-variant relative z-10">
                <span className="material-symbols-outlined">bar_chart</span>
                <h3 className="font-label-md text-label-md uppercase tracking-wider">Monthly Views</h3>
              </div>
              <p className="font-headline-md text-headline-md text-on-surface relative z-10">12.5k</p>
              <div className="flex items-center gap-1 mt-stack-sm text-error font-caption text-caption relative z-10">
                <span className="material-symbols-outlined text-[16px]">trending_down</span>
                <span>-1.2% vs last week</span>
              </div>
            </div>

            {/* Stat Card 4 */}
            <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-gutter hover:shadow-[0_4px_20px_rgba(0,0,0,0.04)] transition-shadow group relative overflow-hidden">
              <div className="absolute right-0 top-0 w-24 h-24 bg-surface-container-low rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
              <div className="flex items-center gap-stack-sm mb-stack-sm text-on-surface-variant relative z-10">
                <span className="material-symbols-outlined">star</span>
                <h3 className="font-label-md text-label-md uppercase tracking-wider">Popular Article</h3>
              </div>
              <p className="font-body-md text-body-md font-semibold text-on-surface truncate relative z-10">The Art of Minimalism in Web Design</p>
              <div className="flex items-center gap-1 mt-stack-sm text-on-surface-variant font-caption text-caption relative z-10">
                <span>3.2k views</span>
              </div>
            </div>
          </div>

          {/* Main Bento Area */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-stack-md">
            
            {/* Recent Activity List */}
            <div className="lg:col-span-2 bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden flex flex-col">
              <div className="p-gutter border-b border-outline-variant flex justify-between items-center bg-surface-container-lowest">
                <h3 className="font-headline-sm text-headline-sm text-on-surface">Recent Activity</h3>
                <Link className="text-primary hover:text-primary-container font-label-md text-label-md transition-colors flex items-center gap-1" href="/admin">
                  View All <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </Link>
              </div>
              <div className="flex-1 overflow-y-auto">
                <ul className="divide-y divide-outline-variant">
                  <li className="p-gutter flex items-start gap-stack-md hover:bg-surface-container-low transition-colors group">
                    <div className="w-10 h-10 rounded-full bg-surface-variant flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors shrink-0">
                      <span className="material-symbols-outlined">edit</span>
                    </div>
                    <div className="flex-1">
                      <p className="font-body-md text-body-md text-on-surface">
                        <span className="font-semibold text-primary">Rishika Shukla</span> updated the post <span className="italic">Design Systems</span>
                      </p>
                      <p className="font-caption text-caption text-on-surface-variant mt-1">2 hours ago</p>
                    </div>
                  </li>
                  <li className="p-gutter flex items-start gap-stack-md hover:bg-surface-container-low transition-colors group">
                    <div className="w-10 h-10 rounded-full bg-surface-variant flex items-center justify-center text-tertiary group-hover:bg-tertiary group-hover:text-on-tertiary transition-colors shrink-0">
                      <span className="material-symbols-outlined">publish</span>
                    </div>
                    <div className="flex-1">
                      <p className="font-body-md text-body-md text-on-surface">
                        <span className="font-semibold text-primary">Rishika Shukla</span> published a new post <span className="italic">Typography in 2024</span>
                      </p>
                      <p className="font-caption text-caption text-on-surface-variant mt-1">5 hours ago</p>
                    </div>
                  </li>
                  <li className="p-gutter flex items-start gap-stack-md hover:bg-surface-container-low transition-colors group">
                    <div className="w-10 h-10 rounded-full bg-surface-variant flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-on-secondary transition-colors shrink-0">
                      <span className="material-symbols-outlined">chat_bubble</span>
                    </div>
                    <div className="flex-1">
                      <p className="font-body-md text-body-md text-on-surface">
                        New comment on <span className="italic">Minimalist UI</span> by <span className="font-semibold">Alex G.</span>
                      </p>
                      <p className="font-caption text-caption text-on-surface-variant mt-1">Yesterday</p>
                    </div>
                  </li>
                  <li className="p-gutter flex items-start gap-stack-md hover:bg-surface-container-low transition-colors group">
                    <div className="w-10 h-10 rounded-full bg-surface-variant flex items-center justify-center text-error group-hover:bg-error group-hover:text-on-error transition-colors shrink-0">
                      <span className="material-symbols-outlined">delete</span>
                    </div>
                    <div className="flex-1">
                      <p className="font-body-md text-body-md text-on-surface">
                        <span className="font-semibold text-primary">Rishika Shukla</span> deleted the draft <span className="italic">Untitled</span>
                      </p>
                      <p className="font-caption text-caption text-on-surface-variant mt-1">Yesterday</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Quick Actions & Traffic Sources */}
            <div className="flex flex-col gap-stack-md">
              
              {/* Quick Actions */}
              <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-gutter">
                <h3 className="font-headline-sm text-headline-sm text-on-surface mb-stack-md">Quick Actions</h3>
                <div className="grid grid-cols-2 gap-stack-sm">
                  <Link 
                    href="/admin/new"
                    className="p-stack-sm border border-outline-variant rounded-lg hover:border-primary hover:text-primary hover:bg-surface-container-low transition-all flex flex-col items-center justify-center gap-2 text-on-surface-variant group text-center"
                  >
                    <span className="material-symbols-outlined text-2xl group-hover:scale-110 transition-transform">edit_document</span>
                    <span className="font-label-md text-label-md">Draft</span>
                  </Link>
                  <button className="p-stack-sm border border-outline-variant rounded-lg hover:border-primary hover:text-primary hover:bg-surface-container-low transition-all flex flex-col items-center justify-center gap-2 text-on-surface-variant group cursor-pointer">
                    <span className="material-symbols-outlined text-2xl group-hover:scale-110 transition-transform">image</span>
                    <span className="font-label-md text-label-md">Upload</span>
                  </button>
                  <button className="p-stack-sm border border-outline-variant rounded-lg hover:border-primary hover:text-primary hover:bg-surface-container-low transition-all flex flex-col items-center justify-center gap-2 text-on-surface-variant group cursor-pointer">
                    <span className="material-symbols-outlined text-2xl group-hover:scale-110 transition-transform">category</span>
                    <span className="font-label-md text-label-md">Category</span>
                  </button>
                  <button className="p-stack-sm border border-outline-variant rounded-lg hover:border-primary hover:text-primary hover:bg-surface-container-low transition-all flex flex-col items-center justify-center gap-2 text-on-surface-variant group cursor-pointer">
                    <span className="material-symbols-outlined text-2xl group-hover:scale-110 transition-transform">settings</span>
                    <span className="font-label-md text-label-md">Config</span>
                  </button>
                </div>
              </div>

              {/* Traffic Source */}
              <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-gutter flex-1 relative overflow-hidden group">
                <h3 className="font-headline-sm text-headline-sm text-on-surface mb-stack-md">Traffic Source</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between font-label-md text-label-md mb-1">
                      <span className="text-on-surface">Organic Search</span>
                      <span className="text-primary font-semibold">65%</span>
                    </div>
                    <div className="w-full bg-surface-variant rounded-full h-2 overflow-hidden">
                      <div className="bg-primary h-2 rounded-full" style={{ width: "65%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between font-label-md text-label-md mb-1">
                      <span className="text-on-surface">Direct</span>
                      <span className="text-tertiary font-semibold">20%</span>
                    </div>
                    <div className="w-full bg-surface-variant rounded-full h-2 overflow-hidden">
                      <div className="bg-tertiary h-2 rounded-full" style={{ width: "20%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between font-label-md text-label-md mb-1">
                      <span className="text-on-surface">Social</span>
                      <span className="text-secondary font-semibold">15%</span>
                    </div>
                    <div className="w-full bg-surface-variant rounded-full h-2 overflow-hidden">
                      <div className="bg-secondary h-2 rounded-full" style={{ width: "15%" }}></div>
                    </div>
                  </div>
                </div>
                {/* Glow backdrop decorative effect */}
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-primary-fixed opacity-20 rounded-full blur-2xl group-hover:opacity-40 transition-opacity"></div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
