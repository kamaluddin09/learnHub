// import React, { useState } from 'react';
// import { 
//   BookOpen, 
//   Play, 
//   Clock, 
//   Award, 
//   MessageCircle, 
//   User, 
//   Settings, 
//   Bell,
//   Search,
//   Filter,
//   Calendar,
//   TrendingUp,
//   Star,
//   CheckCircle,
//   BarChart3,
//   Import
// } from 'lucide-react';
// import { Button } from './ui/button';
// import { ImageWithFallback } from './ui/imageWithFallback';
// import { Label } from './ui/label';
// import { Input } from './ui/input';
// import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
// import { Progress } from './ui/progress';
// import { Badge } from './ui/badge';
// import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
// import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
// import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarProvider, SidebarTrigger } from './ui/sidebar';
// // import { ImageWithFallback } from './figma/ImageWithFallback';

// export function StudentDashboard() {
//   const [activeTab, setActiveTab] = useState('overview');

//   const enrolledCourses = [
//     {
//       id: 1,
//       title: "Complete React Development Course",
//       instructor: "John Smith",
//       progress: 65,
//       totalLessons: 45,
//       completedLessons: 29,
//       image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=300&h=200&fit=crop",
//       lastAccessed: "2 days ago",
//       estimatedTime: "12h left",
//       rating: 4.8
//     },
//     {
//       id: 2,
//       title: "Advanced Python for Data Science",
//       instructor: "Sarah Johnson",
//       progress: 30,
//       totalLessons: 38,
//       completedLessons: 11,
//       image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=300&h=200&fit=crop",
//       lastAccessed: "1 week ago",
//       estimatedTime: "20h left",
//       rating: 4.9
//     },
//     {
//       id: 3,
//       title: "UI/UX Design Masterclass",
//       instructor: "Mike Chen",
//       progress: 85,
//       totalLessons: 32,
//       completedLessons: 27,
//       image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=300&h=200&fit=crop",
//       lastAccessed: "Yesterday",
//       estimatedTime: "3h left",
//       rating: 4.7
//     }
//   ];

//   const recentActivity = [
//     {
//       id: 1,
//       type: 'lesson_completed',
//       title: 'Completed "React Hooks Deep Dive"',
//       course: 'Complete React Development Course',
//       time: '2 hours ago'
//     },
//     {
//       id: 2,
//       type: 'quiz_passed',
//       title: 'Passed JavaScript Fundamentals Quiz',
//       course: 'Complete React Development Course',
//       time: '1 day ago',
//       score: 95
//     },
//     {
//       id: 3,
//       type: 'certificate_earned',
//       title: 'Earned Certificate',
//       course: 'UI/UX Design Masterclass',
//       time: '3 days ago'
//     }
//   ];

//   const upcomingDeadlines = [
//     {
//       id: 1,
//       title: 'Python Assignment #3',
//       course: 'Advanced Python for Data Science',
//       dueDate: 'Tomorrow',
//       type: 'assignment'
//     },
//     {
//       id: 2,
//       title: 'React Final Project',
//       course: 'Complete React Development Course',
//       dueDate: 'Next week',
//       type: 'project'
//     }
//   ];

//   const achievements = [
//     {
//       id: 1,
//       title: 'First Course Completed',
//       description: 'Completed your first course',
//       icon: '🎓',
//       earned: true,
//       date: 'Dec 15, 2024'
//     },
//     {
//       id: 2,
//       title: 'Quick Learner',
//       description: 'Completed 5 lessons in one day',
//       icon: '⚡',
//       earned: true,
//       date: 'Dec 10, 2024'
//     },
//     {
//       id: 3,
//       title: 'Perfect Score',
//       description: 'Got 100% on a quiz',
//       icon: '💯',
//       earned: false
//     }
//   ];

//   const sidebarItems = [
//     { id: 'overview', label: 'Overview', icon: BarChart3 },
//     { id: 'courses', label: 'My Courses', icon: BookOpen },
//     { id: 'certificates', label: 'Certificates', icon: Award },
//     { id: 'messages', label: 'Messages', icon: MessageCircle },
//     { id: 'profile', label: 'Profile', icon: User },
//     { id: 'settings', label: 'Settings', icon: Settings }
//   ];

//   return (
//     <SidebarProvider>
//       <div className="flex h-screen bg-background">
//         <Sidebar className="border-r">
//           <SidebarContent>
//             <div className="p-4">
//               <h2 className="text-lg font-semibold">Student Dashboard</h2>
//             </div>
//             <SidebarGroup>
//               <SidebarGroupLabel>Navigation</SidebarGroupLabel>
//               <SidebarGroupContent>
//                 <SidebarMenu>
//                   {sidebarItems.map((item) => (
//                     <SidebarMenuItem key={item.id}>
//                       <SidebarMenuButton
//                         onClick={() => setActiveTab(item.id)}
//                         isActive={activeTab === item.id}
//                       >
//                         <item.icon className="h-4 w-4" />
//                         <span>{item.label}</span>
//                       </SidebarMenuButton>
//                     </SidebarMenuItem>
//                   ))}
//                 </SidebarMenu>
//               </SidebarGroupContent>
//             </SidebarGroup>
//           </SidebarContent>
//         </Sidebar>

//         <div className="flex-1 flex flex-col overflow-hidden">
//           {/* Header */}
//           <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
//             <div className="flex h-16 items-center justify-between px-6">
//               <div className="flex items-center gap-4">
//                 <SidebarTrigger />
//                 <div className="flex-1 max-w-sm">
//                   <div className="relative">
//                     <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
//                     <Input placeholder="Search courses..." className="pl-8" />
//                   </div>
//                 </div>
//               </div>
//               <div className="flex items-center gap-4">
//                 <Button variant="ghost" size="icon">
//                   <Bell className="h-4 w-4" />
//                 </Button>
//                 <Avatar className="h-8 w-8">
//                   <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face" />
//                   <AvatarFallback>JD</AvatarFallback>
//                 </Avatar>
//               </div>
//             </div>
//           </header>

//           {/* Main Content */}
//           <main className="flex-1 overflow-auto">
//             <div className="p-6">
//               {activeTab === 'overview' && (
//                 <div className="space-y-6">
//                   <div>
//                     <h1 className="text-2xl font-bold mb-2">Welcome back, John!</h1>
//                     <p className="text-muted-foreground">Continue your learning journey</p>
//                   </div>

//                   {/* Stats Cards */}
//                   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//                     <Card>
//                       <CardContent className="p-6">
//                         <div className="flex items-center justify-between">
//                           <div>
//                             <p className="text-sm text-muted-foreground">Enrolled Courses</p>
//                             <p className="text-2xl font-bold">3</p>
//                           </div>
//                           <BookOpen className="h-8 w-8 text-primary" />
//                         </div>
//                       </CardContent>
//                     </Card>

//                     <Card>
//                       <CardContent className="p-6">
//                         <div className="flex items-center justify-between">
//                           <div>
//                             <p className="text-sm text-muted-foreground">Completed Lessons</p>
//                             <p className="text-2xl font-bold">67</p>
//                           </div>
//                           <CheckCircle className="h-8 w-8 text-green-500" />
//                         </div>
//                       </CardContent>
//                     </Card>

//                     <Card>
//                       <CardContent className="p-6">
//                         <div className="flex items-center justify-between">
//                           <div>
//                             <p className="text-sm text-muted-foreground">Certificates</p>
//                             <p className="text-2xl font-bold">1</p>
//                           </div>
//                           <Award className="h-8 w-8 text-yellow-500" />
//                         </div>
//                       </CardContent>
//                     </Card>

//                     <Card>
//                       <CardContent className="p-6">
//                         <div className="flex items-center justify-between">
//                           <div>
//                             <p className="text-sm text-muted-foreground">Learning Streak</p>
//                             <p className="text-2xl font-bold">12 days</p>
//                           </div>
//                           <TrendingUp className="h-8 w-8 text-blue-500" />
//                         </div>
//                       </CardContent>
//                     </Card>
//                   </div>

//                   {/* Continue Learning */}
//                   <Card>
//                     <CardHeader>
//                       <CardTitle>Continue Learning</CardTitle>
//                     </CardHeader>
//                     <CardContent>
//                       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//                         {enrolledCourses.slice(0, 2).map((course) => (
//                           <div key={course.id} className="flex gap-4 p-4 border rounded-lg hover:bg-muted/50 transition-colors">
//                             <ImageWithFallback
//                               src={course.image}
//                               alt={course.title}
//                               className="w-20 h-16 object-cover rounded"
//                             />
//                             <div className="flex-1">
//                               <h3 className="font-medium mb-1">{course.title}</h3>
//                               <p className="text-sm text-muted-foreground mb-2">{course.instructor}</p>
//                               <div className="flex items-center gap-2 mb-2">
//                                 <Progress value={course.progress} className="flex-1" />
//                                 <span className="text-sm">{course.progress}%</span>
//                               </div>
//                               <div className="flex items-center justify-between text-sm text-muted-foreground">
//                                 <span>{course.completedLessons}/{course.totalLessons} lessons</span>
//                                 <span>{course.estimatedTime}</span>
//                               </div>
//                             </div>
//                             <Button size="sm">
//                               <Play className="h-4 w-4 mr-1" />
//                               Continue
//                             </Button>
//                           </div>
//                         ))}
//                       </div>
//                     </CardContent>
//                   </Card>

//                   <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//                     {/* Recent Activity */}
//                     <Card>
//                       <CardHeader>
//                         <CardTitle>Recent Activity</CardTitle>
//                       </CardHeader>
//                       <CardContent>
//                         <div className="space-y-4">
//                           {recentActivity.map((activity) => (
//                             <div key={activity.id} className="flex items-start gap-3">
//                               <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
//                               <div className="flex-1">
//                                 <p className="font-medium text-sm">{activity.title}</p>
//                                 <p className="text-sm text-muted-foreground">{activity.course}</p>
//                                 <p className="text-xs text-muted-foreground">{activity.time}</p>
//                               </div>
//                               {activity.score && (
//                                 <Badge variant="secondary">{activity.score}%</Badge>
//                               )}
//                             </div>
//                           ))}
//                         </div>
//                       </CardContent>
//                     </Card>

//                     {/* Upcoming Deadlines */}
//                     <Card>
//                       <CardHeader>
//                         <CardTitle>Upcoming Deadlines</CardTitle>
//                       </CardHeader>
//                       <CardContent>
//                         <div className="space-y-4">
//                           {upcomingDeadlines.map((deadline) => (
//                             <div key={deadline.id} className="flex items-center justify-between p-3 border rounded-lg">
//                               <div className="flex items-center gap-3">
//                                 <Calendar className="h-4 w-4 text-muted-foreground" />
//                                 <div>
//                                   <p className="font-medium text-sm">{deadline.title}</p>
//                                   <p className="text-xs text-muted-foreground">{deadline.course}</p>
//                                 </div>
//                               </div>
//                               <Badge variant={deadline.dueDate === 'Tomorrow' ? 'destructive' : 'secondary'}>
//                                 {deadline.dueDate}
//                               </Badge>
//                             </div>
//                           ))}
//                         </div>
//                       </CardContent>
//                     </Card>
//                   </div>

//                   {/* Achievements */}
//                   <Card>
//                     <CardHeader>
//                       <CardTitle>Achievements</CardTitle>
//                     </CardHeader>
//                     <CardContent>
//                       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//                         {achievements.map((achievement) => (
//                           <div 
//                             key={achievement.id} 
//                             className={`p-4 border rounded-lg text-center ${achievement.earned ? 'bg-muted/50' : 'opacity-50'}`}
//                           >
//                             <div className="text-2xl mb-2">{achievement.icon}</div>
//                             <h3 className="font-medium mb-1">{achievement.title}</h3>
//                             <p className="text-sm text-muted-foreground mb-2">{achievement.description}</p>
//                             {achievement.earned && achievement.date && (
//                               <Badge variant="secondary" className="text-xs">{achievement.date}</Badge>
//                             )}
//                           </div>
//                         ))}
//                       </div>
//                     </CardContent>
//                   </Card>
//                 </div>
//               )}

//               {activeTab === 'courses' && (
//                 <div className="space-y-6">
//                   <div className="flex items-center justify-between">
//                     <h1 className="text-2xl font-bold">My Courses</h1>
//                     <div className="flex gap-2">
//                       <Button variant="outline" size="sm">
//                         <Filter className="h-4 w-4 mr-1" />
//                         Filter
//                       </Button>
//                     </div>
//                   </div>

//                   <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//                     {enrolledCourses.map((course) => (
//                       <Card key={course.id}>
//                         <div className="relative">
//                           <ImageWithFallback
//                             src={course.image}
//                             alt={course.title}
//                             className="w-full h-48 object-cover rounded-t-lg"
//                           />
//                           <div className="absolute top-4 right-4">
//                             <Badge>{course.progress}% Complete</Badge>
//                           </div>
//                         </div>
//                         <CardContent className="p-6">
//                           <div className="flex items-start justify-between mb-3">
//                             <div>
//                               <h3 className="font-semibold mb-1">{course.title}</h3>
//                               <p className="text-sm text-muted-foreground">{course.instructor}</p>
//                             </div>
//                             <div className="flex items-center gap-1">
//                               <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
//                               <span className="text-sm">{course.rating}</span>
//                             </div>
//                           </div>
                          
//                           <div className="space-y-3">
//                             <div>
//                               <div className="flex items-center justify-between text-sm mb-1">
//                                 <span>Progress</span>
//                                 <span>{course.completedLessons}/{course.totalLessons} lessons</span>
//                               </div>
//                               <Progress value={course.progress} />
//                             </div>
                            
//                             <div className="flex items-center justify-between text-sm text-muted-foreground">
//                               <span>Last accessed: {course.lastAccessed}</span>
//                               <span>{course.estimatedTime}</span>
//                             </div>
                            
//                             <Button className="w-full">
//                               <Play className="h-4 w-4 mr-2" />
//                               Continue Learning
//                             </Button>
//                           </div>
//                         </CardContent>
//                       </Card>
//                     ))}
//                   </div>
//                 </div>
//               )}

//               {activeTab === 'certificates' && (
//                 <div className="space-y-6">
//                   <h1 className="text-2xl font-bold">Certificates</h1>
//                   <Card>
//                     <CardContent className="p-8 text-center">
//                       <Award className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
//                       <h3 className="text-lg font-semibold mb-2">No certificates yet</h3>
//                       <p className="text-muted-foreground mb-4">Complete courses to earn certificates</p>
//                       <Button>Browse Courses</Button>
//                     </CardContent>
//                   </Card>
//                 </div>
//               )}

//               {activeTab === 'messages' && (
//                 <div className="space-y-6">
//                   <h1 className="text-2xl font-bold">Messages</h1>
//                   <Card>
//                     <CardContent className="p-8 text-center">
//                       <MessageCircle className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
//                       <h3 className="text-lg font-semibold mb-2">No messages</h3>
//                       <p className="text-muted-foreground">Your conversations will appear here</p>
//                     </CardContent>
//                   </Card>
//                 </div>
//               )}

//               {activeTab === 'profile' && (
//                 <div className="space-y-6">
//                   <h1 className="text-2xl font-bold">Profile</h1>
//                   <Card>
//                     <CardContent className="p-6">
//                       <div className="flex items-center gap-4 mb-6">
//                         <Avatar className="h-20 w-20">
//                           <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face" />
//                           <AvatarFallback>JD</AvatarFallback>
//                         </Avatar>
//                         <div>
//                           <h2 className="text-xl font-semibold">John Doe</h2>
//                           <p className="text-muted-foreground">Student since December 2024</p>
//                           <Button variant="outline" size="sm" className="mt-2">
//                             Edit Profile
//                           </Button>
//                         </div>
//                       </div>
//                       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                         <div>
//                           <h3 className="font-semibold mb-2">Learning Statistics</h3>
//                           <div className="space-y-2">
//                             <div className="flex justify-between">
//                               <span>Courses Enrolled:</span>
//                               <span>3</span>
//                             </div>
//                             <div className="flex justify-between">
//                               <span>Lessons Completed:</span>
//                               <span>67</span>
//                             </div>
//                             <div className="flex justify-between">
//                               <span>Total Learning Time:</span>
//                               <span>45h 30m</span>
//                             </div>
//                           </div>
//                         </div>
//                         <div>
//                           <h3 className="font-semibold mb-2">Achievements</h3>
//                           <div className="space-y-2">
//                             <Badge variant="secondary">First Course Completed</Badge>
//                             <Badge variant="secondary">Quick Learner</Badge>
//                           </div>
//                         </div>
//                       </div>
//                     </CardContent>
//                   </Card>
//                 </div>
//               )}

//               {activeTab === 'settings' && (
//                 <div className="space-y-6">
//                   <h1 className="text-2xl font-bold">Settings</h1>
//                   <Card>
//                     <CardHeader>
//                       <CardTitle>Account Settings</CardTitle>
//                     </CardHeader>
//                     <CardContent className="space-y-4">
//                       <div>
//                         <Label>Email Notifications</Label>
//                         <div className="flex items-center space-x-2 mt-2">
//                           <Checkbox id="course-updates" />
//                           <Label htmlFor="course-updates">Course updates</Label>
//                         </div>
//                         <div className="flex items-center space-x-2 mt-2">
//                           <Checkbox id="marketing" />
//                           <Label htmlFor="marketing">Marketing emails</Label>
//                         </div>
//                       </div>
//                       <div>
//                         <Label>Privacy</Label>
//                         <div className="flex items-center space-x-2 mt-2">
//                           <Checkbox id="profile-public" />
//                           <Label htmlFor="profile-public">Make profile public</Label>
//                         </div>
//                       </div>
//                     </CardContent>
//                   </Card>
//                 </div>
//               )}
//             </div>
//           </main>
//         </div>
//       </div>
//     </SidebarProvider>
//   );
// }