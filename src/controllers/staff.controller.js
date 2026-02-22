const prisma = require('../config/db');

exports.syncStaff = async (req, res) => {
  try {
    const {
      staffId,
      name,
      email,
      isSuperAdmin,
      permissions,
      departmentId,
      subDepartmentId,
      role,
      status
    } = req.body;

    // Check if staff already exists in chat backend
    let staff = await prisma.staffPresence.findUnique({
      where: { staffId }
    });

    if (staff) {
      // Update existing staff presence
      staff = await prisma.staffPresence.update({
        where: { staffId },
        data: {
          name,
          email,
          isSuperAdmin,
          permissions,
          departmentId,
          subDepartmentId,
          role,
          status,
          lastSeen: new Date()
        }
      });
    } else {
      // Create new staff presence
      staff = await prisma.staffPresence.create({
        data: {
          staffId,
          name,
          email,
          isSuperAdmin,
          permissions,
          departmentId,
          subDepartmentId,
          role,
          status
        }
      });
    }
    // console.log("staff created chat backend",staff)
    return res.json({ message: 'Staff presence synced', staff });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// exports.getStaffStatus = async (req, res) => {
//   try {
//     const { staffId } = req.params;

//     const presence = await prisma.staffPresence.findUnique({
//       where: { staffId },
//       select: {
//         status: true,
//         lastSeen: true,
//         socketId: true
//       }
//     });

//     if (!presence) {
//       return res.json({
//         staffId,
//         status: 'OFFLINE',
//         lastSeen: null
//       });
//     }

//     res.json({
//       staffId,
//       status: presence.status,
//       lastSeen: presence.lastSeen
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Server error' });
//   }
// };

// exports.staffLogout = async (req, res) => {
//   try {
//     const { staffId } = req.body;

//     await prisma.staffPresence.update({
//       where: { staffId },
//       data: {
//         status: 'OFFLINE',
//         socketId: null,
//         lastSeen: new Date()
//       }
//     });

//     res.json({ 
//       success: true,
//       message: 'Staff logged out from chat' 
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Server error' });
//   }
// };

// exports.getStaffDashboard = async (req, res) => {
//   try {
//     const staffId = req.user.id;
    
//     // Get staff details with permissions
//     const staff = await prisma.staff.findUnique({
//       where: { id: staffId },
//       include: {
//         department: true,
//         subDepartment: true
//       }
//     });

//     // Get assigned chats from chat backend
//     let assignedChats = [];
//     let unassignedChats = [];
//     let onlineStaff = [];
    
//     try {
//       // Fetch data from chat backend
//       const [assignedRes, unassignedRes, staffRes] = await Promise.all([
//         fetch(`${process.env.CHAT_BACKEND_URL}/api/staff/${staffId}/assigned-chats`, {
//           headers: {
//             'Authorization': `Bearer ${process.env.INTERNAL_API_KEY}`
//           }
//         }),
//         fetch(`${process.env.CHAT_BACKEND_URL}/api/chat/unassigned`, {
//           headers: {
//             'Authorization': `Bearer ${process.env.INTERNAL_API_KEY}`
//           }
//         }),
//         fetch(`${process.env.CHAT_BACKEND_URL}/api/chat/staff/online`, {
//           headers: {
//             'Authorization': `Bearer ${process.env.INTERNAL_API_KEY}`
//           }
//         })
//       ]);

//       if (assignedRes.ok) assignedChats = await assignedRes.json();
//       if (unassignedRes.ok) unassignedChats = await unassignedRes.json();
//       if (staffRes.ok) onlineStaff = await staffRes.json();

//     } catch (error) {
//       console.error('Error fetching chat data:', error.message);
//     }

//     // Get assigned tasks from main backend
//     const assignedTasks = await prisma.task.findMany({
//       where: {
//         assignedToId: staffId,
//         status: { not: 'COMPLETED' }
//       },
//       orderBy: { dueDate: 'asc' },
//       take: 10
//     });

//     res.json({
//       staff: {
//         id: staff.id,
//         name: staff.name,
//         email: staff.email,
//         role: staff.role,
//         permissions: staff.permissions,
//         department: staff.department,
//         subDepartment: staff.subDepartment
//       },
//       chat: {
//         assignedChats,
//         unassignedChats,
//         onlineStaff,
//         canRespond: staff.permissions.includes('RESPOND_CHAT')
//       },
//       tasks: {
//         assigned: assignedTasks,
//         total: assignedTasks.length
//       },
//       stats: {
//         activeChats: assignedChats.length,
//         pendingTasks: assignedTasks.length,
//         onlineStaffCount: onlineStaff.length
//       }
//     });

//   } catch (error) {
//     console.error('Dashboard error:', error);
//     res.status(500).json({ message: 'Server error' });
//   }
// };

// exports.getAssignedChats = async (req, res) => {
//   try {
//     const { staffId } = req.params;

//     const assignedChats = await prisma.chatSession.findMany({
//       where: {
//         agentId: staffId,
//         status: { in: ['ASSIGNED', 'IN_PROGRESS'] }
//       },
//       include: {
//         messages: {
//           orderBy: { createdAt: 'desc' },
//           take: 1
//         },
//         chatQueue: true
//       },
//       orderBy: { updatedAt: 'desc' }
//     });

//     res.json(assignedChats);
//   } catch (error) {
//     console.error('Get assigned chats error:', error);
//     res.status(500).json({ message: 'Server error' });
//   }
// };