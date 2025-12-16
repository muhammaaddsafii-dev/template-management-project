// import { NavLink, useLocation } from 'react-router-dom';
// import { cn } from '@/lib/utils';
// import { useSettingsStore } from '@/stores/settingsStore';
// import {
//   LayoutDashboard,
//   FileText,
//   Gavel,
//   Briefcase,
//   Users,
//   Wrench,
//   Shield,
//   Archive,
//   Settings,
//   ChevronLeft,
//   ChevronRight,
//   Moon,
//   Sun,
// } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import { useState } from 'react';

// const menuItems = [
//   { path: '/', label: 'Dashboard', icon: LayoutDashboard },
//   { path: '/pra-kontrak', label: 'Pra Kontrak Non Lelang', icon: FileText },
//   { path: '/lelang', label: 'Pra Kontrak Lelang', icon: Gavel },
//   { path: '/pekerjaan', label: 'Pekerjaan', icon: Briefcase },
//   { path: '/tenaga-ahli', label: 'Database Tenaga Ahli', icon: Users },
//   { path: '/alat', label: 'Database Alat', icon: Wrench },
//   { path: '/legalitas', label: 'Legalitas & Sertifikat', icon: Shield },
//   { path: '/arsip', label: 'Arsip Pekerjaan', icon: Archive },
//   { path: '/settings', label: 'Profil & Settings', icon: Settings },
// ];

// export function Sidebar() {
//   const location = useLocation();
//   const [collapsed, setCollapsed] = useState(false);
//   const { settings, toggleTheme } = useSettingsStore();

//   return (
//     <aside
//       className={cn(
//         'h-screen bg-white dark:bg-sidebar text-foreground dark:text-sidebar-foreground flex flex-col transition-all duration-300 border-r border-border',
//         collapsed ? 'w-16' : 'w-64'
//       )}
//     >
//       {/* Logo */}
//       <div className="h-16 flex items-center justify-between px-4 border-b border-sidebar-border">
//         {!collapsed && (
//           <div className="flex items-center gap-2">
//             <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
//               <span className="text-primary-foreground font-bold text-sm">K</span>
//             </div>
//             <span className="font-semibold text-lg">KSC Project</span>
//           </div>
//         )}
//         <Button
//           variant="ghost"
//           size="icon"
//           onClick={() => setCollapsed(!collapsed)}
//           className="text-foreground dark:text-sidebar-foreground hover:bg-muted dark:hover:bg-sidebar-accent"
//         >
//           {collapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
//         </Button>
//       </div>

//       {/* Navigation */}
//       <nav className="flex-1 py-4 overflow-y-auto scrollbar-thin">
//         <ul className="space-y-1 px-2">
//           {menuItems.map((item) => {
//             const isActive = location.pathname === item.path;
//             return (
//               <li key={item.path}>
//                 <NavLink
//                   to={item.path}
//                   className={cn(
//                     'flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors',
//                     isActive
//                       ? 'bg-primary text-primary-foreground'
//                       : 'text-foreground dark:text-sidebar-foreground hover:bg-muted dark:hover:bg-sidebar-accent'
//                   )}
//                 >
//                   <item.icon className="h-5 w-5 flex-shrink-0" />
//                   {!collapsed && <span>{item.label}</span>}
//                 </NavLink>
//               </li>
//             );
//           })}
//         </ul>
//       </nav>

//       {/* Theme Toggle */}
//       <div className="p-4 border-t border-sidebar-border">
//         <Button
//           variant="ghost"
//           size={collapsed ? 'icon' : 'default'}
//           onClick={toggleTheme}
//           className={cn(
//             'w-full text-foreground dark:text-sidebar-foreground hover:bg-muted dark:hover:bg-sidebar-accent',
//             collapsed ? 'justify-center' : 'justify-start'
//           )}
//         >
//           {settings.theme === 'light' ? (
//             <Moon className="h-4 w-4" />
//           ) : (
//             <Sun className="h-4 w-4" />
//           )}
//           {!collapsed && (
//             <span className="ml-2">
//               {settings.theme === 'light' ? 'Dark Mode' : 'Light Mode'}
//             </span>
//           )}
//         </Button>
//       </div>
//     </aside>
//   );
// }


import { NavLink, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { useSettingsStore } from '@/stores/settingsStore';
import {
  LayoutDashboard,
  FileText,
  Gavel,
  Briefcase,
  Users,
  Wrench,
  Shield,
  Archive,
  Settings,
  ChevronLeft,
  ChevronRight,
  Moon,
  Sun,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const menuGroups = [
  {
    label: 'MENU UTAMA',
    items: [
      { path: '/', label: 'Dashboard', icon: LayoutDashboard },
    ],
  },
  {
    label: 'PROJECT',
    items: [
      { path: '/pra-kontrak', label: 'Non Lelang', icon: FileText },
      { path: '/lelang', label: 'Lelang', icon: Gavel },
    ],
  },
  {
    label: 'DATA',
    items: [
      { path: '/pekerjaan', label: 'Pekerjaan', icon: Briefcase },
      { path: '/tenaga-ahli', label: 'Tenaga Ahli', icon: Users },
      { path: '/alat', label: 'Alat', icon: Wrench },
    ],
  },
  {
    label: 'LEGAL DAN ARSIP',
    items: [
      { path: '/legalitas', label: 'Sertifikat', icon: Shield },
      { path: '/arsip', label: 'Arsip', icon: Archive },
    ],
  },
];

export function Sidebar() {
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);
  const { settings, toggleTheme } = useSettingsStore();

  return (
    <div
      className={cn(
        'flex flex-col h-screen bg-card border-r transition-all duration-300',
        collapsed ? 'w-16' : 'w-64'
      )}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b">
        {!collapsed && (
          <div className="flex justify-between items-center gap-2">
            <img src="https://www.kurniasylva.com/wp-content/uploads/2024/09/cropped-logo-ksc-scaled-1.jpg" alt="KSC Logo" className="h-8 w-auto" />
            <h1 className="text-lg font-bold text-primary">KSC</h1>
          </div>

        )}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setCollapsed(!collapsed)}
          className="ml-auto"
        >
          {collapsed ? (
            <ChevronRight className="h-4 w-4" />
          ) : (
            <ChevronLeft className="h-4 w-4" />
          )}
        </Button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto p-2">
        {menuGroups.map((group, groupIndex) => (
          <div key={groupIndex} className="mb-4">
            {/* Group Label */}
            {!collapsed && (
              <div className="px-3 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                {group.label}
              </div>
            )}
            {collapsed && groupIndex > 0 && (
              <div className="my-2 border-t" />
            )}

            {/* Group Items */}
            <div className="space-y-1">
              {group.items.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;

                return (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    className={cn(
                      'flex items-center gap-3 px-3 py-2 rounded-lg transition-colors',
                      'hover:bg-accent hover:text-accent-foreground',
                      isActive && 'bg-primary text-primary-foreground hover:bg-primary/90',
                      collapsed && 'justify-center'
                    )}
                    title={collapsed ? item.label : undefined}
                  >
                    <Icon className="h-5 w-5 flex-shrink-0" />
                    {!collapsed && (
                      <span className="text-sm font-medium">{item.label}</span>
                    )}
                  </NavLink>
                );
              })}
            </div>
          </div>
        ))}

        {/* Settings - Separate from groups */}
        <div className="mt-auto pt-4 border-t">
          <NavLink
            to="/settings"
            className={cn(
              'flex items-center gap-3 px-3 py-2 rounded-lg transition-colors',
              'hover:bg-accent hover:text-accent-foreground',
              location.pathname === '/settings' &&
              'bg-primary text-primary-foreground hover:bg-primary/90',
              collapsed && 'justify-center'
            )}
            title={collapsed ? 'Profil & Settings' : undefined}
          >
            <Settings className="h-5 w-5 flex-shrink-0" />
            {!collapsed && (
              <span className="text-sm font-medium">Settings</span>
            )}
          </NavLink>
        </div>
      </nav>

      {/* Theme Toggle */}
      <div className="p-4 border-t">
        <Button
          variant="outline"
          size={collapsed ? 'icon' : 'default'}
          onClick={toggleTheme}
          className="w-full"
          title={collapsed ? 'Toggle Theme' : undefined}
        >
          {settings.theme === 'dark' ? (
            <Sun className="h-4 w-4" />
          ) : (
            <Moon className="h-4 w-4" />
          )}
          {!collapsed && (
            <span className="ml-2">
              {settings.theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
            </span>
          )}
        </Button>
      </div>
    </div>
  );
}
