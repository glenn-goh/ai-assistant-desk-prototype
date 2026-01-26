export function DashboardWidgets() {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Calendar Widget */}
        <div className="bg-white/30 backdrop-blur-[10px] rounded-xl p-4 shadow-sm border border-white/40 transition-all hover:-translate-y-0.5 hover:shadow-md">
          <div className="flex items-center gap-2 mb-3 pb-3 border-b border-white/30">
            <div className="w-6 h-6 flex items-center justify-center text-lg">📅</div>
            <div className="font-semibold text-gray-900">Calendar</div>
          </div>
          <div className="text-center text-sm font-semibold text-gray-600 mb-2">November 2025</div>
          <div className="grid grid-cols-7 gap-1">
            {/* Day headers */}
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
              <div key={day} className="text-center text-[10px] font-semibold text-gray-400 py-1">
                {day}
              </div>
            ))}
            
            {/* Calendar days */}
            {/* Previous month days */}
            {[26, 27, 28, 29, 30, 31].map(day => (
              <div key={`prev-${day}`} className="aspect-square flex items-center justify-center text-xs text-gray-300 rounded-md">
                {day}
              </div>
            ))}
            <div className="aspect-square flex items-center justify-center text-xs rounded-md hover:bg-gray-100 cursor-pointer transition-colors">1</div>
            
            {/* Current month days */}
            <div className="aspect-square flex items-center justify-center text-xs rounded-md hover:bg-gray-100 cursor-pointer transition-colors">2</div>
            <div className="aspect-square flex items-center justify-center text-xs rounded-md hover:bg-gray-100 cursor-pointer transition-colors relative">
              3
              <div className="absolute bottom-1 w-1 h-1 bg-green-500 rounded-full"></div>
            </div>
            <div className="aspect-square flex items-center justify-center text-xs rounded-md hover:bg-gray-100 cursor-pointer transition-colors">4</div>
            <div className="aspect-square flex items-center justify-center text-xs rounded-md hover:bg-gray-100 cursor-pointer transition-colors relative">
              5
              <div className="absolute bottom-1 w-1 h-1 bg-green-500 rounded-full"></div>
            </div>
            <div className="aspect-square flex items-center justify-center text-xs rounded-md hover:bg-gray-100 cursor-pointer transition-colors">6</div>
            <div className="aspect-square flex items-center justify-center text-xs rounded-md hover:bg-gray-100 cursor-pointer transition-colors">7</div>
            <div className="aspect-square flex items-center justify-center text-xs rounded-md hover:bg-gray-100 cursor-pointer transition-colors">8</div>
            
            <div className="aspect-square flex items-center justify-center text-xs rounded-md hover:bg-gray-100 cursor-pointer transition-colors">9</div>
            <div className="aspect-square flex items-center justify-center text-xs rounded-md hover:bg-gray-100 cursor-pointer transition-colors">10</div>
            <div className="aspect-square flex items-center justify-center text-xs rounded-md hover:bg-gray-100 cursor-pointer transition-colors">11</div>
            <div className="aspect-square flex items-center justify-center text-xs rounded-md hover:bg-gray-100 cursor-pointer transition-colors relative">
              12
              <div className="absolute bottom-1 w-1 h-1 bg-green-500 rounded-full"></div>
            </div>
            <div className="aspect-square flex items-center justify-center text-xs rounded-md hover:bg-gray-100 cursor-pointer transition-colors">13</div>
            <div className="aspect-square flex items-center justify-center text-xs rounded-md hover:bg-gray-100 cursor-pointer transition-colors">14</div>
            <div className="aspect-square flex items-center justify-center text-xs rounded-md hover:bg-gray-100 cursor-pointer transition-colors relative">
              15
              <div className="absolute bottom-1 w-1 h-1 bg-green-500 rounded-full"></div>
            </div>
            
            <div className="aspect-square flex items-center justify-center text-xs rounded-md hover:bg-gray-100 cursor-pointer transition-colors">16</div>
            <div className="aspect-square flex items-center justify-center text-xs rounded-md hover:bg-gray-100 cursor-pointer transition-colors">17</div>
            <div className="aspect-square flex items-center justify-center text-xs rounded-md hover:bg-gray-100 cursor-pointer transition-colors relative">
              18
              <div className="absolute bottom-1 w-1 h-1 bg-green-500 rounded-full"></div>
            </div>
            <div className="aspect-square flex items-center justify-center text-xs rounded-md hover:bg-gray-100 cursor-pointer transition-colors">19</div>
            <div className="aspect-square flex items-center justify-center text-xs rounded-md hover:bg-gray-100 cursor-pointer transition-colors">20</div>
            <div className="aspect-square flex items-center justify-center text-xs rounded-md hover:bg-gray-100 cursor-pointer transition-colors">21</div>
            <div className="aspect-square flex items-center justify-center text-xs rounded-md hover:bg-gray-100 cursor-pointer transition-colors">22</div>
            
            <div className="aspect-square flex items-center justify-center text-xs rounded-md hover:bg-gray-100 cursor-pointer transition-colors">23</div>
            <div className="aspect-square flex items-center justify-center text-xs rounded-md hover:bg-gray-100 cursor-pointer transition-colors">24</div>
            <div className="aspect-square flex items-center justify-center text-xs rounded-md hover:bg-gray-100 cursor-pointer transition-colors">25</div>
            <div className="aspect-square flex items-center justify-center text-xs rounded-md bg-indigo-600 text-white font-semibold relative">
              26
              <div className="absolute bottom-1 w-1 h-1 bg-white rounded-full"></div>
            </div>
            <div className="aspect-square flex items-center justify-center text-xs rounded-md hover:bg-gray-100 cursor-pointer transition-colors">27</div>
            <div className="aspect-square flex items-center justify-center text-xs rounded-md hover:bg-gray-100 cursor-pointer transition-colors relative">
              28
              <div className="absolute bottom-1 w-1 h-1 bg-green-500 rounded-full"></div>
            </div>
            <div className="aspect-square flex items-center justify-center text-xs rounded-md hover:bg-gray-100 cursor-pointer transition-colors">29</div>
            
            <div className="aspect-square flex items-center justify-center text-xs rounded-md hover:bg-gray-100 cursor-pointer transition-colors">30</div>
          </div>
        </div>

        {/* GovTech News Feed Widget */}
        <div className="bg-white/30 backdrop-blur-[10px] rounded-xl p-4 shadow-sm border border-white/40 transition-all hover:-translate-y-0.5 hover:shadow-md">
          <div className="flex items-center gap-2 mb-3 pb-3 border-b border-white/30">
            <div className="w-6 h-6 flex items-center justify-center text-lg">📰</div>
            <div className="font-semibold text-gray-900">GovTech News</div>
          </div>
          <div className="space-y-3">
            <div className="py-3 border-b border-white/20 cursor-pointer hover:bg-white/20 hover:-mx-2 hover:px-2 rounded-md transition-all">
              <span className="inline-block text-[10px] font-semibold uppercase text-indigo-600 bg-indigo-50 px-2 py-1 rounded mb-2">
                Digital Services
              </span>
              <div className="text-sm font-semibold text-gray-900 mb-1 leading-tight">
                New AI-powered citizen portal launches nationwide
              </div>
              <div className="flex items-center gap-3 text-xs text-gray-500">
                <span className="font-medium">GovTech Insights</span>
                <span>•</span>
                <span>2 hours ago</span>
              </div>
            </div>
            
            <div className="py-3 border-b border-white/20 cursor-pointer hover:bg-white/20 hover:-mx-2 hover:px-2 rounded-md transition-all">
              <span className="inline-block text-[10px] font-semibold uppercase text-indigo-600 bg-indigo-50 px-2 py-1 rounded mb-2">
                Cybersecurity
              </span>
              <div className="text-sm font-semibold text-gray-900 mb-1 leading-tight">
                Enhanced security measures for government platforms
              </div>
              <div className="flex items-center gap-3 text-xs text-gray-500">
                <span className="font-medium">Tech.gov</span>
                <span>•</span>
                <span>5 hours ago</span>
              </div>
            </div>
            
            <div className="py-3 border-b border-white/20 cursor-pointer hover:bg-white/20 hover:-mx-2 hover:px-2 rounded-md transition-all">
              <span className="inline-block text-[10px] font-semibold uppercase text-indigo-600 bg-indigo-50 px-2 py-1 rounded mb-2">
                Innovation
              </span>
              <div className="text-sm font-semibold text-gray-900 mb-1 leading-tight">
                Smart nation initiative expands to 50 more cities
              </div>
              <div className="flex items-center gap-3 text-xs text-gray-500">
                <span className="font-medium">Digital Gov</span>
                <span>•</span>
                <span>1 day ago</span>
              </div>
            </div>
            
            <div className="py-3 cursor-pointer hover:bg-white/20 hover:-mx-2 hover:px-2 rounded-md transition-all">
              <span className="inline-block text-[10px] font-semibold uppercase text-indigo-600 bg-indigo-50 px-2 py-1 rounded mb-2">
                Policy
              </span>
              <div className="text-sm font-semibold text-gray-900 mb-1 leading-tight">
                New data protection regulations take effect
              </div>
              <div className="flex items-center gap-3 text-xs text-gray-500">
                <span className="font-medium">GovTech Weekly</span>
                <span>•</span>
                <span>2 days ago</span>
              </div>
            </div>
          </div>
        </div>

        {/* Recently Used Assistant Widget */}
        <div className="bg-white/30 backdrop-blur-[10px] rounded-xl p-4 shadow-sm border border-white/40 transition-all hover:-translate-y-0.5 hover:shadow-md">
          <div className="flex items-center gap-2 mb-3 pb-3 border-b border-white/30">
            <div className="w-6 h-6 flex items-center justify-center text-lg">🤖</div>
            <div className="font-semibold text-gray-900">Recently Used Assistant</div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2 p-2 rounded-lg border border-white/20 cursor-pointer hover:bg-white/20 hover:border-white/30 transition-all">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center text-lg flex-shrink-0 bg-gradient-to-br from-indigo-500 to-purple-600">
                📝
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-semibold text-gray-900">Campaign Writer</div>
                <div className="text-xs text-gray-600 leading-tight">Create marketing content and campaign briefs</div>
              </div>
              <div className="text-[11px] text-gray-500 whitespace-nowrap">10 min ago</div>
            </div>
            
            <div className="flex items-center gap-2 p-2 rounded-lg border border-white/20 cursor-pointer hover:bg-white/20 hover:border-white/30 transition-all">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center text-lg flex-shrink-0 bg-gradient-to-br from-green-500 to-emerald-600">
                📊
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-semibold text-gray-900">Data Analyzer</div>
                <div className="text-xs text-gray-600 leading-tight">Analyze campaign metrics and generate reports</div>
              </div>
              <div className="text-[11px] text-gray-500 whitespace-nowrap">2 hours ago</div>
            </div>
            
            <div className="flex items-center gap-2 p-2 rounded-lg border border-white/20 cursor-pointer hover:bg-white/20 hover:border-white/30 transition-all">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center text-lg flex-shrink-0 bg-gradient-to-br from-orange-400 to-amber-600">
                🎨
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-semibold text-gray-900">Design Helper</div>
                <div className="text-xs text-gray-600 leading-tight">Generate creative concepts and visual ideas</div>
              </div>
              <div className="text-[11px] text-gray-500 whitespace-nowrap">Yesterday</div>
            </div>
            
            <div className="flex items-center gap-2 p-2 rounded-lg border border-white/20 cursor-pointer hover:bg-white/20 hover:border-white/30 transition-all">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center text-lg flex-shrink-0 bg-gradient-to-br from-red-500 to-rose-600">
                📱
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-semibold text-gray-900">Social Media Pro</div>
                <div className="text-xs text-gray-600 leading-tight">Schedule posts and optimize engagement</div>
              </div>
              <div className="text-[11px] text-gray-500 whitespace-nowrap">2 days ago</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
