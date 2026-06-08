import { users } from '../data/data';
import { FaEdit, FaTrash, FaEye } from 'react-icons/fa';

const UsersTable = () => {
  const statusColors = {
    Active: 'bg-green-100 text-green-700',
    Inactive: 'bg-red-100 text-red-700',
    Pending: 'bg-yellow-100 text-yellow-700',
  };

  const roleColors = {
    Admin: 'bg-purple-100 text-purple-700',
    Editor: 'bg-blue-100 text-blue-700',
    User: 'bg-gray-100 text-gray-700',
  };

  return (
    <div className="card p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-lg font-semibold text-gray-800">Users</h2>
          <p className="text-sm text-gray-500 mt-1">Manage user accounts and permissions</p>
        </div>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
          Add User
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-left text-sm text-gray-500 border-b border-gray-100">
              <th className="pb-3 font-medium">User</th>
              <th className="pb-3 font-medium hidden md:table-cell">Email</th>
              <th className="pb-3 font-medium hidden lg:table-cell">Role</th>
              <th className="pb-3 font-medium">Status</th>
              <th className="pb-3 font-medium hidden lg:table-cell">Last Login</th>
              <th className="pb-3 font-medium hidden lg:table-cell">Revenue</th>
              <th className="pb-3 font-medium text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {users.map((user) => (
              <tr key={user.id} className="hover:bg-gray-50 transition-colors">
                <td className="py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 font-medium">
                      {user.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">{user.name}</p>
                      <p className="text-xs text-gray-400">ID: #{user.id}</p>
                    </div>
                  </div>
                </td>
                <td className="py-4 hidden md:table-cell text-gray-600">{user.email}</td>
                <td className="py-4 hidden lg:table-cell">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${roleColors[user.role]}`}>
                    {user.role}
                  </span>
                </td>
                <td className="py-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusColors[user.status]}`}>
                    {user.status}
                  </span>
                </td>
                <td className="py-4 hidden lg:table-cell text-gray-600">{user.lastLogin}</td>
                <td className="py-4 hidden lg:table-cell text-gray-600 font-medium">${user.revenue.toLocaleString()}</td>
                <td className="py-4 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <button className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors" title="View">
                      <FaEye className="w-5 h-5" />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-yellow-600 hover:bg-yellow-50 rounded-lg transition-colors" title="Edit">
                      <FaEdit className="w-5 h-5" />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors" title="Delete">
                      <FaTrash className="w-5 h-5" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-100">
        <p className="text-sm text-gray-500">Showing 1 to 6 of 6 entries</p>
        <div className="flex gap-2">
          <button className="px-3 py-1 border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50 disabled:opacity-50" disabled>
            Previous
          </button>
          <button className="px-3 py-1 border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50 disabled:opacity-50" disabled>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default UsersTable;