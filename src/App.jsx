import React, { useState } from 'react';
import {
  Search, Bell, LayoutGrid, Users, ShoppingBag, CreditCard,
  LogOut, User, Percent, AlertTriangle, Tag, FileText,
  Plus, Ban, ChevronDown, Eye, X
} from 'lucide-react';

// ============================================================
// PROFILE IMAGE CONFIGURATION
// ============================================================
// To replace the profile picture:
// 1. Add your image file to the /public folder (e.g., /public/profile.jpg)
// 2. Change the value of PROFILE_IMAGE below to match your filename
//    Example: const PROFILE_IMAGE = '/my-photo.png';
// 3. Save the file and refresh the browser — done!
// ============================================================
const PROFILE_IMAGE = '/prof.png';
// ============================================================

// ─────────────────────────────────────────────
// SUSPEND USER MODAL
// ─────────────────────────────────────────────
const SuspendUserModal = ({ isOpen, onClose }) => {
  const [reason, setReason] = useState('');

  if (!isOpen) return null;

  const handleSuspend = () => {
    console.log('Suspending user with reason:', reason);
    setReason('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative bg-white border border-[#e5e7eb] w-full max-w-[800px] p-10 sm:p-12 shadow-lg mx-4">

        {/* Header */}
        <div className="flex justify-between items-start">
          <h1 className="text-[32px] font-semibold text-[#2d2d2d] tracking-tight">
            Suspend User
          </h1>
          <button
            onClick={onClose}
            className="text-[#6b7280] hover:text-[#111827] transition-colors p-1 -mr-2 -mt-1"
            aria-label="Close"
          >
            <X size={28} strokeWidth={1.25} />
          </button>
        </div>

        {/* Subtext */}
        <p className="text-[#8c8c8c] text-[17px] mt-4 mb-6">
          Are you sure you want to suspend this user? This will prevent them
          from accessing their account.
        </p>

        <hr className="border-t border-[#e5e7eb] mb-8" />

        {/* Textarea */}
        <div className="flex flex-col">
          <label
            htmlFor="suspension-reason"
            className="text-[22px] font-medium text-[#2d2d2d] mb-5"
          >
            Reason for suspension
          </label>
          <textarea
            id="suspension-reason"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            placeholder="Enter reason of suspension"
            className="w-full h-[180px] border border-[#e2e2e2] p-5 text-[16px] text-[#4b5563] placeholder-[#a3a3a3] resize-none focus:outline-none focus:border-[#d1d5db] focus:ring-1 focus:ring-[#f3f4f6] transition-shadow"
          />
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-5 mt-14">
          <button
            onClick={onClose}
            className="flex-1 py-[15px] text-[16px] font-normal text-[#111827] bg-white border border-[#e2e2e2] hover:bg-[#f9fafb] transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleSuspend}
            className="flex-1 py-[15px] text-[16px] font-normal text-white bg-[#f83a3a] hover:bg-[#e02e2e] transition-colors border border-transparent"
          >
            Suspend User
          </button>
        </div>
      </div>
    </div>
  );
};

// ─────────────────────────────────────────────
// INVITE USER MODAL
// ─────────────────────────────────────────────
const InviteUserModal = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');

  if (!isOpen) return null;

  const handleInvite = () => {
    console.log('Inviting user with email:', email);
    setEmail('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-[850px] bg-white border border-gray-200 p-10 sm:p-12 shadow-lg mx-4">

        {/* Header */}
        <div className="flex justify-between items-start mb-3">
          <h1 className="text-[36px] font-bold text-[#202020] tracking-tight">
            Invite User
          </h1>
          <button
            onClick={onClose}
            className="text-gray-800 hover:text-black transition-colors pt-2 pr-1"
          >
            <X size={32} strokeWidth={1} />
          </button>
        </div>

        <p className="text-[20px] text-[#9ca3af] mb-6">
          Send a user an Invite to join the platform
        </p>

        <hr className="border-t border-[#e5e7eb] w-full mb-10" />

        {/* Email Input */}
        <div className="mb-20">
          <label
            htmlFor="email"
            className="block text-[24px] font-medium text-[#202020] mb-5"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter users email address"
            className="w-full border border-[#e5e7eb] px-6 py-5 text-[18px] text-[#202020] placeholder-[#a1a1aa] focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400 transition-all bg-white"
          />
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 mt-8">
          <button
            type="button"
            onClick={onClose}
            className="flex-1 border border-[#e5e7eb] bg-white text-[#111827] text-[18px] py-5 px-6 hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleInvite}
            className="flex-1 bg-[#1a3129] text-white text-[18px] py-5 px-6 hover:bg-[#12241d] transition-colors"
          >
            Send Invite
          </button>
        </div>
      </div>
    </div>
  );
};

// ─────────────────────────────────────────────
// SIDEBAR ITEM
// ─────────────────────────────────────────────
const SidebarItem = ({ icon: Icon, label, active, onClick }) => (
  <a
    href="#"
    onClick={(e) => { e.preventDefault(); onClick(); }}
    className={`flex items-center px-6 py-3.5 transition-colors duration-200 
      ${active
        ? 'bg-[#f6f4eb] border-l-[3px] border-gray-900 text-gray-900 font-medium'
        : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900 border-l-[3px] border-transparent'
      }`}
  >
    <Icon
      className={`w-5 h-5 mr-4 ${active ? 'text-gray-900' : 'text-gray-400'}`}
      strokeWidth={active ? 2 : 1.5}
    />
    {label}
  </a>
);

// ─────────────────────────────────────────────
// DASHBOARD PAGE
// ─────────────────────────────────────────────
const DashboardPage = () => {
  const recentActivities = [
    { id: 1,  activity: 'Order #45123 placed',       user: 'Blue Hoodie',         role: 'Customer', date: '4/4/25', status: 'Pending',      action: 'View order'   },
    { id: 2,  activity: 'KYC documents submitted',   user: 'Premium fashion LTd', role: 'Vendor',   date: '4/4/25', status: 'Under Review', action: 'Review KYC'   },
    { id: 3,  activity: 'Homepage banner updated',   user: 'Admin',               role: 'Admin',    date: '4/4/25', status: 'Live',         action: 'View Banner'  },
    { id: 4,  activity: '₦250,000 payout triggered', user: 'System',              role: 'Platform', date: '4/4/25', status: 'Successful',   action: 'View pay-out' },
    { id: 5,  activity: 'Order #45124 placed',       user: 'Red Sneakers',        role: 'Customer', date: '4/3/25', status: 'Completed',    action: 'View order'   },
    { id: 6,  activity: 'New vendor registration',   user: 'Fashion Hub Inc',     role: 'Vendor',   date: '4/3/25', status: 'Pending',      action: 'Review'       },
    { id: 7,  activity: 'Refund processed',          user: 'Jane Smith',          role: 'Customer', date: '4/3/25', status: 'Completed',    action: 'View details' },
    { id: 8,  activity: 'Product listing updated',   user: 'TechGear Pro',        role: 'Vendor',   date: '4/2/25', status: 'Live',         action: 'View listing' },
    { id: 9,  activity: 'Order #45125 cancelled',    user: 'Mike Johnson',        role: 'Customer', date: '4/2/25', status: 'Cancelled',    action: 'View order'   },
    { id: 10, activity: 'Payout request submitted',  user: 'Luxe Styles',         role: 'Vendor',   date: '4/2/25', status: 'Processing',   action: 'View request' },
    { id: 11, activity: 'New user registered',       user: 'Tom Wilson',          role: 'Customer', date: '4/1/25', status: 'Active',       action: 'View profile' },
    { id: 12, activity: 'Product review flagged',    user: 'Sarah Lee',           role: 'Customer', date: '4/1/25', status: 'Pending',      action: 'Review'       },
  ];

  return (
    <div className="flex-1 overflow-y-auto p-8">

      {/* ── Stats Cards ── */}
      <div className="grid grid-cols-4 gap-6 mb-10">

        {/* Total Users */}
        <div className="bg-white p-6 rounded-[4px] shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-8 h-8 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center">
              <User className="w-4 h-4 text-gray-600" strokeWidth={2} />
            </div>
            <h3 className="text-[13px] font-medium text-gray-400 tracking-wide">
              Total Users
            </h3>
          </div>
          <p className="text-3xl font-bold text-gray-900 mb-2">12,847</p>
          <p className="text-[13px] font-medium text-emerald-400">+122 this month</p>
        </div>

        {/* Total Vendors */}
        <div className="bg-white p-6 rounded-[4px] shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-8 h-8 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center">
              <User className="w-4 h-4 text-gray-600" strokeWidth={2} />
            </div>
            <h3 className="text-[13px] font-medium text-gray-400 tracking-wide">
              Total Vendors
            </h3>
          </div>
          <p className="text-3xl font-bold text-gray-900 mb-2">156</p>
          <p className="text-[13px] font-medium text-emerald-400">+12 this month</p>
        </div>

        {/* Total Orders */}
        <div className="bg-white p-6 rounded-[4px] shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-8 h-8 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center">
              <ShoppingBag className="w-4 h-4 text-gray-600" strokeWidth={2} />
            </div>
            <h3 className="text-[13px] font-medium text-gray-400 tracking-wide">
              Total Orders
            </h3>
          </div>
          <p className="text-3xl font-bold text-gray-900 mb-2">2,045</p>
          <p className="text-[13px] font-medium text-emerald-400">+567 this month</p>
        </div>

        {/* Total Revenue */}
        <div className="bg-white p-6 rounded-[4px] shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-8 h-8 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center">
              <Percent className="w-4 h-4 text-gray-600" strokeWidth={2} />
            </div>
            <h3 className="text-[13px] font-medium text-gray-400 tracking-wide">
              Total Revenue
            </h3>
          </div>
          <p className="text-3xl font-bold text-gray-900 mb-2">$284,591</p>
          <p className="text-[13px] font-medium text-emerald-400">+18.2% this month</p>
        </div>
      </div>

      {/* ── Pending Actions ── */}
      <div className="mb-10">
        <h2 className="text-base font-bold text-gray-900 mb-4">Pending Actions</h2>
        <div className="grid grid-cols-2 gap-6">

          {/* Card 1 */}
          <div className="bg-white p-6 rounded-[4px] shadow-[0_2px_10px_rgba(0,0,0,0.02)] flex flex-col justify-between">
            <div>
              <div className="flex items-center mb-1">
                <AlertTriangle className="w-5 h-5 text-red-500 mr-3" strokeWidth={1.5} />
                <h3 className="text-[15px] font-medium text-gray-800">
                  Vendor Approvals Pending
                </h3>
                <div className="ml-3 w-5 h-5 rounded-full bg-[#f44336] text-white flex items-center justify-center text-[11px] font-bold">
                  5
                </div>
              </div>
              <p className="text-[13px] text-gray-400 ml-8 mb-6">
                5 new vendors awaiting approval
              </p>
            </div>
            <button className="w-full py-2.5 border border-gray-300 text-gray-700 text-sm font-medium rounded-sm hover:bg-gray-50 transition-colors">
              Review Application
            </button>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 rounded-[4px] shadow-[0_2px_10px_rgba(0,0,0,0.02)] flex flex-col justify-between">
            <div>
              <div className="flex items-center mb-1">
                <AlertTriangle className="w-5 h-5 text-red-500 mr-3" strokeWidth={1.5} />
                <h3 className="text-[15px] font-medium text-gray-800">
                  Update promotion Banner
                </h3>
                <div className="ml-3 w-5 h-5 rounded-full bg-[#f44336] text-white flex items-center justify-center text-[11px] font-bold">
                  12
                </div>
              </div>
              <p className="text-[13px] text-gray-400 ml-8 mb-6">Expires in 2 days</p>
            </div>
            <button className="w-full py-2.5 border border-gray-300 text-gray-700 text-sm font-medium rounded-sm hover:bg-gray-50 transition-colors">
              Go to Promotions
            </button>
          </div>
        </div>
      </div>

      {/* ── Recent Activities ── */}
      <div className="bg-white rounded-[4px] shadow-[0_2px_10px_rgba(0,0,0,0.02)] p-8">
        <div className="mb-8">
          <h2 className="text-base font-bold text-gray-900 mb-1">Recent Activities</h2>
          <p className="text-[14px] text-gray-400">
            View your most recent activities of both users and Vendors of the platform
          </p>
        </div>

        <div className="overflow-x-auto max-h-[400px] overflow-y-auto">
          <table className="w-full text-left border-collapse">
            <thead className="sticky top-0 bg-white z-10">
              <tr>
                <th className="pb-4 text-[12px] font-medium text-gray-400 uppercase tracking-wider w-[25%]">Activity</th>
                <th className="pb-4 text-[12px] font-medium text-gray-400 uppercase tracking-wider w-[20%]">User</th>
                <th className="pb-4 text-[12px] font-medium text-gray-400 uppercase tracking-wider w-[15%]">Role</th>
                <th className="pb-4 text-[12px] font-medium text-gray-400 uppercase tracking-wider w-[15%]">Date</th>
                <th className="pb-4 text-[12px] font-medium text-gray-400 uppercase tracking-wider w-[15%]">Status</th>
                <th className="pb-4 text-[12px] font-medium text-gray-400 uppercase tracking-wider w-[10%]">Action</th>
              </tr>
            </thead>
            <tbody className="text-[14px]">
              {recentActivities.map((item) => (
                <tr key={item.id} className="border-t border-gray-100">
                  <td className="py-5 flex items-center text-gray-800">
                    <input
                      type="checkbox"
                      className="w-4 h-4 mr-4 rounded-[3px] border-gray-300 text-gray-900 focus:ring-gray-900"
                    />
                    {item.activity}
                  </td>
                  <td className="py-5 text-gray-800">{item.user}</td>
                  <td className="py-5 text-gray-800">{item.role}</td>
                  <td className="py-5 text-gray-800">{item.date}</td>
                  <td className="py-5 text-gray-800">{item.status}</td>
                  <td className="py-5">
                    <button className="text-[#eab308] font-medium hover:text-yellow-600 transition-colors">
                      {item.action}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="h-8" />
    </div>
  );
};

// ─────────────────────────────────────────────
// USERS & VENDORS PAGE
// ─────────────────────────────────────────────
const UsersVendorsPage = ({ onOpenInviteModal, onOpenSuspendModal }) => {
  const [activeTab, setActiveTab] = useState('users');

  const usersData = [
    { id: 1, month: 'Jan 2024', email: 'john@example.com',  joined: '2024-01-15', status: 'Active',    activity: '2 hours ago',  orders: 12, spent: '$854.08'   },
    { id: 2, month: 'Jan 2024', email: 'sarah@example.com', joined: '2024-01-15', status: 'Suspended', activity: '1 weeks ago',   orders: 1,  spent: '$854.08'   },
    { id: 3, month: 'Feb 2024', email: 'mike@example.com',  joined: '2024-02-10', status: 'Suspended', activity: '1 weeks ago',   orders: 0,  spent: '$490.51'   },
    { id: 4, month: 'Feb 2024', email: 'emma@example.com',  joined: '2024-02-20', status: 'Suspended', activity: '1 weeks ago',   orders: 0,  spent: '$782.01'   },
    { id: 5, month: 'Mar 2024', email: 'alex@example.com',  joined: '2024-03-05', status: 'Active',    activity: '5 hours ago',   orders: 8,  spent: '$1,245.00' },
    { id: 6, month: 'Mar 2024', email: 'lisa@example.com',  joined: '2024-03-12', status: 'Active',    activity: '1 day ago',     orders: 3,  spent: '$320.50'   },
    { id: 7, month: 'Mar 2024', email: 'david@example.com', joined: '2024-03-18', status: 'Active',    activity: '3 hours ago',   orders: 15, spent: '$2,100.00' },
    { id: 8, month: 'Apr 2024', email: 'nina@example.com',  joined: '2024-04-01', status: 'Suspended', activity: '2 weeks ago',   orders: 0,  spent: '$0.00'     },
  ];

  const vendorsData = [
    { id: 1, month: 'Jan 2024', email: 'premiumfashion@example.com', joined: '2024-01-10', status: 'Active',    activity: '1 hour ago',  orders: 156, spent: '$12,854.08' },
    { id: 2, month: 'Jan 2024', email: 'techgear@example.com',       joined: '2024-01-20', status: 'Active',    activity: '3 hours ago', orders: 89,  spent: '$8,234.50'  },
    { id: 3, month: 'Feb 2024', email: 'luxestyles@example.com',     joined: '2024-02-05', status: 'Suspended', activity: '1 week ago',  orders: 23,  spent: '$2,490.51'  },
    { id: 4, month: 'Feb 2024', email: 'fashionhub@example.com',     joined: '2024-02-15', status: 'Active',    activity: '30 mins ago', orders: 201, spent: '$18,782.01' },
    { id: 5, month: 'Mar 2024', email: 'streetwear@example.com',     joined: '2024-03-01', status: 'Active',    activity: '2 hours ago', orders: 67,  spent: '$5,245.00'  },
    { id: 6, month: 'Mar 2024', email: 'homegoodspro@example.com',   joined: '2024-03-10', status: 'Suspended', activity: '3 days ago',  orders: 12,  spent: '$920.50'    },
  ];

  const tableData = activeTab === 'users' ? usersData : vendorsData;

  return (
    <div className="flex-1 overflow-y-auto p-8">

      {/* ── Page Title & Actions ── */}
      <div className="mb-8">
        <h1 className="text-[22px] font-bold text-gray-900">
          User & Vendors Management
        </h1>
        <p className="text-sm text-gray-500 mt-1">
          Manage all platform users, Vendors and their activities
        </p>

        <div className="flex items-center justify-between mt-6">
          {/* Tabs */}
          <div className="flex bg-white rounded-md overflow-hidden shadow-sm border border-gray-200 text-sm">
            <button
              onClick={() => setActiveTab('users')}
              className={`px-8 py-2.5 font-medium transition-colors ${
                activeTab === 'users'
                  ? 'bg-[#1c2e24] text-white'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              Users
            </button>
            <button
              onClick={() => setActiveTab('vendors')}
              className={`px-8 py-2.5 font-medium transition-colors ${
                activeTab === 'vendors'
                  ? 'bg-[#1c2e24] text-white'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              Vendors
            </button>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-3">
            <button
              onClick={onOpenInviteModal}
              className="flex items-center px-4 py-2.5 bg-[#1c2e24] text-white text-sm font-medium rounded shadow-sm hover:bg-[#15231b] transition-colors"
            >
              <Plus className="w-4 h-4 mr-2" />
              {activeTab === 'users' ? 'Invite User' : 'Add Vendor'}
            </button>
            <button
              onClick={onOpenSuspendModal}
              className="flex items-center px-4 py-2.5 bg-[#f04438] text-white text-sm font-medium rounded shadow-sm hover:bg-[#d93a2f] transition-colors"
            >
              <Ban className="w-4 h-4 mr-2" />
              {activeTab === 'users' ? 'Suspend User' : 'Suspend Vendor'}
            </button>
          </div>
        </div>
      </div>

      {/* ── Search & Table Card ── */}
      <div className="bg-white rounded-lg shadow-[0_1px_3px_rgba(0,0,0,0.05)] border border-gray-100 p-6">

        <h2 className="text-lg font-semibold text-gray-900">
          Search {activeTab === 'users' ? 'Users' : 'Vendors'}
        </h2>
        <p className="text-sm text-gray-500 mt-1 mb-5">
          Quickly find any {activeTab === 'users' ? 'user' : 'vendor'} by name,
          email, or ID to view details, manage status, or perform admin actions.
        </p>

        {/* Filters */}
        <div className="flex space-x-4 mb-6">
          <div className="flex-1 relative">
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder={`Search ${activeTab} by name, email, activity`}
              className="w-full pl-9 pr-4 py-2 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-[#1c2e24] focus:border-[#1c2e24] placeholder-gray-400"
            />
          </div>
          <div className="relative w-48">
            <select className="w-full appearance-none pl-4 pr-10 py-2 border border-gray-200 rounded-md text-sm text-gray-700 bg-white focus:outline-none focus:ring-1 focus:ring-[#1c2e24] focus:border-[#1c2e24]">
              <option>Active</option>
              <option>Suspended</option>
              <option>All</option>
            </select>
            <ChevronDown className="w-4 h-4 text-gray-500 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        {/* Data Table */}
        <div className="overflow-x-auto max-h-[500px] overflow-y-auto">
          <table className="w-full text-left border-collapse">
            <thead className="sticky top-0 bg-white z-10">
              <tr className="border-b border-gray-200">
                <th className="py-3 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  {activeTab === 'users' ? 'User' : 'Vendor'}
                </th>
                <th className="py-3 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="py-3 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Activity
                </th>
                <th className="py-3 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Orders
                </th>
                <th className="py-3 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  {activeTab === 'users' ? 'Total Spent' : 'Total Sales'}
                </th>
                <th className="py-3 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {tableData.map((row) => (
                <tr key={row.id} className="hover:bg-gray-50/50 transition-colors">
                  <td className="py-4 px-4">
                    <div className="flex flex-col">
                      <span className="text-[13px] text-gray-500 mb-1.5">{row.month}</span>
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          className="w-3.5 h-3.5 mr-2.5 rounded border-gray-300 text-[#1c2e24] focus:ring-[#1c2e24]"
                        />
                        <span className="text-[14px] text-gray-700">{row.email}</span>
                      </div>
                      <span className="text-[13px] text-gray-400 mt-1">Joined {row.joined}</span>
                    </div>
                  </td>
                  <td className="py-4 px-4 align-middle">
                    <span className={`text-[14px] font-medium ${
                      row.status === 'Active' ? 'text-emerald-500' : 'text-[#f04438]'
                    }`}>
                      {row.status}
                    </span>
                  </td>
                  <td className="py-4 px-4 align-middle text-[14px] font-medium text-gray-700">
                    {row.activity}
                  </td>
                  <td className="py-4 px-4 align-middle text-[14px] font-medium text-gray-700">
                    {row.orders}
                  </td>
                  <td className="py-4 px-4 align-middle text-[14px] font-medium text-gray-700">
                    {row.spent}
                  </td>
                  <td className="py-4 px-4 align-middle">
                    <div className="flex items-center space-x-2">
                      <button className="p-1.5 border border-gray-200 rounded text-gray-600 hover:bg-gray-50 transition-colors">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button
                        onClick={onOpenSuspendModal}
                        className="p-1.5 border border-[#f04438]/20 rounded text-[#f04438] hover:bg-[#f04438]/10 transition-colors"
                      >
                        <Ban className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

// ─────────────────────────────────────────────
// ROOT APP
// ─────────────────────────────────────────────
export default function App() {
  const [currentPage, setCurrentPage]             = useState('dashboard');
  const [isInviteModalOpen, setIsInviteModalOpen] = useState(false);
  const [isSuspendModalOpen, setIsSuspendModalOpen] = useState(false);

  return (
    <div className="flex h-screen bg-[#f8f9fa] font-sans text-gray-800 antialiased">

      {/* Modals */}
      <InviteUserModal
        isOpen={isInviteModalOpen}
        onClose={() => setIsInviteModalOpen(false)}
      />
      <SuspendUserModal
        isOpen={isSuspendModalOpen}
        onClose={() => setIsSuspendModalOpen(false)}
      />

      {/* ── Sidebar ── */}
      <aside className="w-64 bg-white flex flex-col justify-between flex-shrink-0 border-r border-gray-100 shadow-[2px_0_8px_rgba(0,0,0,0.02)] z-10 relative">
        <div className="pt-8">
          {/* Logo */}
          <div className="h-12 flex items-center px-6 mb-4">
            <span className="text-3xl font-serif italic font-medium text-gray-800 tracking-tight">
              Iyóge
            </span>
          </div>

          <nav className="space-y-1">
            <SidebarItem
              icon={LayoutGrid}
              label="Dashboard"
              active={currentPage === 'dashboard'}
              onClick={() => setCurrentPage('dashboard')}
            />
            <SidebarItem
              icon={Users}
              label="Users & Vendors"
              active={currentPage === 'users'}
              onClick={() => setCurrentPage('users')}
            />
            <SidebarItem
              icon={ShoppingBag}
              label="Orders"
              active={currentPage === 'orders'}
              onClick={() => setCurrentPage('orders')}
            />
            <SidebarItem
              icon={Tag}
              label="Promotions"
              active={currentPage === 'promotions'}
              onClick={() => setCurrentPage('promotions')}
            />
            <SidebarItem
              icon={CreditCard}
              label="Payout"
              active={currentPage === 'payout'}
              onClick={() => setCurrentPage('payout')}
            />
            <SidebarItem
              icon={FileText}
              label="Reports & Logs"
              active={currentPage === 'reports'}
              onClick={() => setCurrentPage('reports')}
            />
          </nav>
        </div>

        <div className="pb-8">
          <a
            href="#"
            className="flex items-center px-6 py-3.5 text-gray-500 hover:bg-gray-50 hover:text-gray-900 transition-colors"
          >
            <LogOut className="w-5 h-5 mr-4" strokeWidth={1.5} />
            Logout
          </a>
        </div>
      </aside>

      {/* ── Main Content ── */}
      <main className="flex-1 flex flex-col overflow-hidden">

        {/* Top Header */}
        <header className="h-16 bg-white flex items-center justify-between px-8 z-0 relative border-b border-gray-100">

          {/* Search Bar */}
          <div className="flex-1 flex items-center mr-6">
            <div className="relative w-full max-w-[500px]">
              <Search
                className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-300"
                strokeWidth={2}
              />
              <input
                type="text"
                placeholder="Type to search"
                className="w-full pl-10 pr-4 py-2 border border-gray-100 rounded-sm text-sm focus:outline-none focus:border-gray-300 placeholder-gray-400"
              />
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center space-x-3 flex-shrink-0">
            <button className="w-10 h-10 flex items-center justify-center border border-gray-100 rounded-sm text-gray-400 hover:bg-gray-50 hover:text-gray-600 transition-colors">
              <Bell className="w-5 h-5" strokeWidth={1.5} />
            </button>

            {/* ── Profile Picture ──
                Drop your photo into /public and update PROFILE_IMAGE above. */}
            <div className="w-10 h-10 rounded-sm overflow-hidden flex-shrink-0 cursor-pointer bg-gray-200">
              <img
                src={PROFILE_IMAGE}
                alt="Profile"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML =
                    '<div class="w-full h-full bg-[#1c2e24] flex items-center justify-center text-white text-sm font-bold">AD</div>';
                }}
              />
            </div>
          </div>
        </header>

        {/* Page Routing */}
        {currentPage === 'dashboard' && <DashboardPage />}

        {currentPage === 'users' && (
          <UsersVendorsPage
            onOpenInviteModal={() => setIsInviteModalOpen(true)}
            onOpenSuspendModal={() => setIsSuspendModalOpen(true)}
          />
        )}

        {currentPage !== 'dashboard' && currentPage !== 'users' && (
          <div className="flex-1 flex items-center justify-center bg-[#f8f9fa]">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-100 flex items-center justify-center">
                {currentPage === 'orders'     && <ShoppingBag className="w-8 h-8 text-gray-400" />}
                {currentPage === 'promotions' && <Tag         className="w-8 h-8 text-gray-400" />}
                {currentPage === 'payout'     && <CreditCard  className="w-8 h-8 text-gray-400" />}
                {currentPage === 'reports'    && <FileText    className="w-8 h-8 text-gray-400" />}
              </div>
              <h2 className="text-xl font-semibold text-gray-700 mb-2">
                {currentPage.charAt(0).toUpperCase() + currentPage.slice(1)} Page
              </h2>
              <p className="text-gray-500">This page is under construction</p>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
