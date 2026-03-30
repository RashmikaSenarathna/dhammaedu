import { useState } from 'react';
import { 
  School, 
  UserCheck, 
  Calendar, 
  GraduationCap, 
  Users, 
  Sparkles, 
  BarChart3, 
  Plus, 
  HelpCircle, 
  LogOut, 
  Search, 
  Bell,
  Check,
  X,
  ChevronLeft,
  ChevronRight,
  Filter,
  AlertTriangle,
  Mail,
  Save
} from 'lucide-react';
import { motion } from 'motion/react';
import { MOCK_STUDENTS, MOCK_ALERTS, WEEKLY_DISTRIBUTION } from './constants';
import { AttendanceStatus } from './types';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="flex min-h-screen bg-surface text-on-surface font-sans">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 z-40 h-screen w-72 bg-[#f5eadd] p-6 flex flex-col">
        <div className="mb-10 px-2 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white">
            <School size={24} />
          </div>
          <div>
            <h1 className="text-primary font-bold text-lg leading-tight">Serene Academy</h1>
            <p className="text-on-surface-variant text-xs font-medium">Dhamma Education Portal</p>
          </div>
        </div>

        <nav className="flex-1 space-y-1">
          <NavItem icon={<UserCheck size={20} />} label="Registration" />
          <NavItem icon={<Calendar size={20} />} label="Attendance" active />
          <NavItem icon={<GraduationCap size={20} />} label="Examinations" />
          <NavItem icon={<Users size={20} />} label="Teachers" />
          <NavItem icon={<Sparkles size={20} />} label="Activities" />
          <NavItem icon={<BarChart3 size={20} />} label="Reports" />
        </nav>

        <div className="pt-6 mt-auto border-t border-outline-variant/10 space-y-1">
          <button className="w-full mb-4 py-3 px-4 bg-primary text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
            <Plus size={20} />
            New Enrollment
          </button>
          <NavItem icon={<HelpCircle size={20} />} label="Help Center" />
          <NavItem icon={<LogOut size={20} />} label="Logout" />
        </div>
      </aside>

      {/* Main Content */}
      <main className="ml-72 flex-1 p-8 pb-20">
        {/* Header */}
        <header className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-4xl font-extrabold tracking-tight text-primary">Weekly Attendance</h2>
            <p className="text-on-surface-variant text-lg mt-1">Samanera Level 2 • Week of Oct 23rd, 2023</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-surface-container flex items-center px-4 py-2 rounded-full text-on-surface-variant">
              <Search size={20} className="mr-2" />
              <input 
                className="bg-transparent border-none focus:outline-none text-sm w-48" 
                placeholder="Search student..." 
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <button className="w-12 h-12 flex items-center justify-center rounded-full bg-surface-container-high text-on-surface-variant hover:bg-primary-container/20 transition-colors">
              <Bell size={24} />
            </button>
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary-container">
              <img 
                alt="Administrator Profile" 
                className="w-full h-full object-cover" 
                src="https://picsum.photos/seed/admin/100/100"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-12 gap-6 mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="col-span-8 bg-surface-container-low rounded-[2rem] p-8 flex items-center justify-between"
          >
            <div className="space-y-4">
              <h3 className="text-primary font-bold text-xl">Class Average</h3>
              <div className="flex items-baseline gap-2">
                <span className="text-6xl font-black text-on-surface">94.2</span>
                <span className="text-2xl font-bold text-tertiary">%</span>
              </div>
              <p className="text-on-surface-variant text-sm">Consistent with previous week's performance</p>
            </div>
            <div className="flex gap-4">
              <StatBox value="42" label="Students" />
              <StatBox value="38" label="Present Today" color="tertiary" />
              <StatBox value="4" label="Absences" color="error" />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="col-span-4 bg-gradient-to-br from-primary to-primary-container rounded-[2rem] p-8 text-white shadow-xl shadow-primary/10 flex flex-col justify-between"
          >
            <div>
              <h3 className="font-bold text-xl mb-2">Weekly Goal</h3>
              <p className="text-white/80 text-sm">Targeting 95% attendance for meditation retreat eligibility.</p>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-bold">
                <span>PROGRESS</span>
                <span>94.2%</span>
              </div>
              <div className="h-3 w-full bg-white/20 rounded-full overflow-hidden">
                <div className="h-full bg-white rounded-full w-[94.2%]"></div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Attendance Table */}
        <section className="bg-surface-container-low rounded-[2rem] p-4">
          <div className="flex justify-between items-center px-6 py-4 mb-2">
            <div className="flex items-center gap-6">
              <button className="flex items-center gap-2 text-primary font-bold px-4 py-2 bg-primary-container/20 rounded-full hover:bg-primary-container/30 transition-colors">
                <Check size={16} />
                Mark All Present
              </button>
              <div className="h-6 w-px bg-outline-variant/30"></div>
              <div className="flex gap-4">
                <LegendItem color="bg-tertiary" label="Present" />
                <LegendItem color="bg-error" label="Absent" />
                <LegendItem color="bg-surface-container-highest" label="Unmarked" />
              </div>
            </div>
            <button className="flex items-center gap-2 text-on-surface-variant font-medium hover:text-primary">
              <Filter size={20} />
              Filter
            </button>
          </div>

          <div className="overflow-x-auto rounded-3xl bg-white">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="text-on-surface-variant bg-surface-container-high/50">
                  <th className="px-8 py-5 font-bold uppercase tracking-wider text-[10px]">Student Name</th>
                  {['Mon 23', 'Tue 24', 'Wed 25', 'Thu 26', 'Fri 27'].map(day => (
                    <th key={day} className="px-4 py-5 font-bold text-center uppercase tracking-wider text-[10px]">{day}</th>
                  ))}
                  <th className="px-8 py-5 font-bold text-right uppercase tracking-wider text-[10px]">Summary</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant/10">
                {MOCK_STUDENTS.map((student) => (
                  <tr key={student.id} className="hover:bg-primary-container/5 transition-colors group">
                    <td className="px-8 py-5">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-primary-container/20 flex items-center justify-center font-bold text-primary">
                          {student.initials}
                        </div>
                        <div>
                          <p className="font-bold text-on-surface">{student.name}</p>
                          <p className="text-xs text-on-surface-variant">ID: {student.studentId}</p>
                        </div>
                      </div>
                    </td>
                    {['Mon 23', 'Tue 24', 'Wed 25', 'Thu 26', 'Fri 27'].map(day => (
                      <td key={day} className="px-4 py-5 text-center">
                        <AttendanceCell status={student.attendance[day]} />
                      </td>
                    ))}
                    <td className="px-8 py-5 text-right">
                      <div className="inline-flex items-center gap-3">
                        <span className={`text-sm font-bold ${student.summary === 100 ? 'text-tertiary' : 'text-on-surface'}`}>
                          {student.summary}%
                        </span>
                        <div className="w-24 h-2 bg-surface-container-highest rounded-full overflow-hidden">
                          <div 
                            className={`h-full ${student.summary === 100 ? 'bg-tertiary' : 'bg-primary'} transition-all`} 
                            style={{ width: `${student.summary}%` }}
                          />
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex justify-between items-center px-8 py-6">
            <p className="text-sm text-on-surface-variant">Showing 1-12 of 42 students</p>
            <div className="flex items-center gap-2">
              <PaginationButton icon={<ChevronLeft size={20} />} />
              <PaginationButton label="1" active />
              <PaginationButton label="2" />
              <PaginationButton label="3" />
              <PaginationButton icon={<ChevronRight size={20} />} />
            </div>
          </div>
        </section>

        {/* Bottom Section */}
        <section className="mt-12 grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-5 bg-surface-container rounded-[2.5rem] p-10">
            <h4 className="text-2xl font-bold text-primary mb-6">Critical Attendance Alerts</h4>
            <div className="space-y-4">
              {MOCK_ALERTS.map(alert => (
                <div key={alert.id} className={`flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm border-l-4 ${alert.type === 'warning' ? 'border-error' : 'border-primary-container'}`}>
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${alert.type === 'warning' ? 'bg-error-container/30 text-error' : 'bg-primary-container/10 text-primary'}`}>
                    {alert.type === 'warning' ? <AlertTriangle size={24} /> : <Mail size={24} />}
                  </div>
                  <div>
                    <p className="font-bold text-on-surface">{alert.studentName}</p>
                    <p className="text-sm text-on-surface-variant">{alert.message}</p>
                  </div>
                  <button className={`ml-auto font-bold text-sm ${alert.type === 'warning' ? 'text-primary' : 'text-on-surface-variant'}`}>
                    {alert.actionLabel}
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="col-span-12 lg:col-span-7 bg-white rounded-[2.5rem] p-10 shadow-sm border border-outline-variant/10">
            <div className="flex justify-between items-start mb-8">
              <div>
                <h4 className="text-2xl font-bold text-on-surface">Weekly Distribution</h4>
                <p className="text-on-surface-variant">Average student arrival time: 08:42 AM</p>
              </div>
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-surface-container rounded-full text-xs font-bold text-on-surface-variant">MONDAY</span>
                <span className="px-3 py-1 bg-primary text-white rounded-full text-xs font-bold">CURRENT</span>
              </div>
            </div>
            <div className="flex items-end justify-between h-48 gap-4 px-4">
              {WEEKLY_DISTRIBUTION.map(data => (
                <div key={data.day} className="flex-1 flex flex-col items-center gap-2">
                  <div 
                    className={`w-full rounded-t-xl transition-colors relative group ${data.isCurrent ? 'bg-tertiary' : 'bg-surface-container-high hover:bg-tertiary/50'}`} 
                    style={{ height: `${data.percentage}%` }}
                  >
                    <span className={`absolute -top-8 left-1/2 -translate-x-1/2 text-xs font-bold transition-opacity ${data.isCurrent ? 'opacity-100 text-tertiary' : 'opacity-0 group-hover:opacity-100'}`}>
                      {data.percentage}%
                    </span>
                  </div>
                  <span className={`text-[10px] font-bold ${data.isCurrent ? 'text-primary' : 'text-on-surface-variant'}`}>
                    {data.day}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* FAB */}
      <button className="fixed bottom-8 right-8 w-16 h-16 rounded-full bg-gradient-to-tr from-primary to-primary-container text-white shadow-2xl shadow-primary/40 flex items-center justify-center hover:scale-105 transition-transform active:scale-95 group z-50">
        <Save size={28} />
        <span className="absolute right-20 px-4 py-2 bg-inverse-surface text-white rounded-xl text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl">
          Save Records
        </span>
      </button>
    </div>
  );
}

function NavItem({ icon, label, active = false }: { icon: React.ReactNode, label: string, active?: boolean }) {
  return (
    <a 
      href="#" 
      className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all active:translate-x-1 duration-200 ${
        active 
          ? 'bg-white text-primary shadow-sm font-semibold' 
          : 'text-on-surface-variant hover:bg-white/50 font-medium'
      }`}
    >
      {icon}
      <span className="text-sm">{label}</span>
    </a>
  );
}

function StatBox({ value, label, color = 'primary' }: { value: string, label: string, color?: 'primary' | 'tertiary' | 'error' }) {
  const colorClasses = {
    primary: 'bg-white text-primary border-outline-variant/10',
    tertiary: 'bg-white text-tertiary border-outline-variant/10',
    error: 'bg-error-container/20 text-error border-error-container/30'
  };

  return (
    <div className={`text-center p-4 rounded-2xl shadow-sm border ${colorClasses[color]}`}>
      <span className="block font-bold text-2xl">{value}</span>
      <span className="text-xs font-medium opacity-80">{label}</span>
    </div>
  );
}

function LegendItem({ color, label }: { color: string, label: string }) {
  return (
    <span className="flex items-center gap-2 text-sm text-on-surface-variant">
      <span className={`w-3 h-3 rounded-full ${color}`}></span> {label}
    </span>
  );
}

function AttendanceCell({ status }: { status: AttendanceStatus }) {
  if (status === 'present') {
    return (
      <div className="w-8 h-8 mx-auto rounded-xl flex items-center justify-center bg-tertiary text-white">
        <Check size={16} strokeWidth={3} />
      </div>
    );
  }
  if (status === 'absent') {
    return (
      <div className="w-8 h-8 mx-auto rounded-xl flex items-center justify-center bg-error-container text-error">
        <X size={16} strokeWidth={3} />
      </div>
    );
  }
  return (
    <div className="w-8 h-8 mx-auto rounded-xl flex items-center justify-center bg-surface-container-highest group-hover:bg-error-container/40 transition-colors">
      {/* Empty or placeholder */}
    </div>
  );
}

function PaginationButton({ label, icon, active = false }: { label?: string, icon?: React.ReactNode, active?: boolean }) {
  return (
    <button className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
      active 
        ? 'bg-primary text-white font-bold' 
        : 'bg-surface-container-low text-on-surface-variant hover:bg-surface-container-high'
    }`}>
      {label || icon}
    </button>
  );
}
