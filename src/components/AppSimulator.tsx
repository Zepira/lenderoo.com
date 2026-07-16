import React, { useState, useEffect } from "react";
import {
  Plus,
  Search,
  BookOpen,
  Wrench,
  Gamepad,
  Tent,
  Layers,
  Bell,
  Check,
  X,
  Users,
  Sun,
  Moon,
  MessageSquare,
  Sparkles
} from "lucide-react";
import KangarooLogo from "./KangarooLogo";

interface Item {
  id: string;
  name: string;
  category: "book" | "tool" | "game" | "outdoor" | "other";
  status: "available" | "lent" | "borrowed";
  assignedTo?: string;
}

interface Friend {
  id: string;
  name: string;
  avatar: string;
  sharedCount: number;
  status: "connected" | "pending";
}

interface Request {
  id: string;
  friendName: string;
  friendAvatar: string;
  itemName: string;
  type: "incoming" | "outgoing";
  status: "pending" | "approved" | "declined";
  date: string;
}

export default function AppSimulator() {
  const [appDarkMode, setAppDarkMode] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<"library" | "friends" | "requests">("library");
  
  // Simulated items state
  const [items, setItems] = useState<Item[]>([
    { id: "1", name: "Sapiens: A Brief History", category: "book", status: "available" },
    { id: "2", name: "DeWalt Cordless Drill", category: "tool", status: "lent", assignedTo: "Alex" },
    { id: "3", name: "Catan Board Game", category: "game", status: "available" },
    { id: "4", name: "4-Person Camping Tent", category: "outdoor", status: "available" },
  ]);

  // Simulated friends state
  const [friends, setFriends] = useState<Friend[]>([
    { id: "1", name: "Alex Rivers", avatar: "/avatars/kangaroo.png", sharedCount: 12, status: "connected" },
    { id: "2", name: "Chloe Chen", avatar: "/avatars/cockatoo.png", sharedCount: 8, status: "connected" },
    { id: "3", name: "Marcus Brody", avatar: "/avatars/koala.png", sharedCount: 3, status: "connected" },
  ]);

  // Simulated requests state
  const [requests, setRequests] = useState<Request[]>([
    { id: "1", friendName: "Chloe Chen", friendAvatar: "/avatars/cockatoo.png", itemName: "Catan Board Game", type: "incoming", status: "pending", date: "Just now" },
    { id: "2", friendName: "Alex Rivers", friendAvatar: "/avatars/kangaroo.png", itemName: "DeWalt Cordless Drill", type: "incoming", status: "approved", date: "2 days ago" }
  ]);

  // New item modal form state
  const [isAddingItem, setIsAddingItem] = useState<boolean>(false);
  const [newItemName, setNewItemName] = useState<string>("");
  const [newItemCategory, setNewItemCategory] = useState<Item["category"]>("book");

  // Push notification state
  const [notification, setNotification] = useState<{ title: string; body: string } | null>(null);
  const [showNotification, setShowNotification] = useState<boolean>(false);

  // Trigger push notification
  const triggerNotification = (title: string, body: string) => {
    setNotification({ title, body });
    setShowNotification(true);
  };

  useEffect(() => {
    if (showNotification) {
      const timer = setTimeout(() => {
        setShowNotification(false);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [showNotification]);

  // Handle request actions
  const handleApproveRequest = (requestId: string) => {
    setRequests(prev =>
      prev.map(req => {
        if (req.id === requestId) {
          // Update item state to lent
          setItems(itemsPrev =>
            itemsPrev.map(item =>
              item.name === req.itemName ? { ...item, status: "lent", assignedTo: req.friendName } : item
            )
          );
          triggerNotification(
            "Request Approved! 🚀",
            `Chloe Chen has been notified. Arrangements for '${req.itemName}' are underway.`
          );
          return { ...req, status: "approved" };
        }
        return req;
      })
    );
  };

  const handleDeclineRequest = (requestId: string) => {
    setRequests(prev =>
      prev.map(req => {
        if (req.id === requestId) {
          triggerNotification(
            "Request Declined",
            `You declined Chloe's request to borrow '${req.itemName}'.`
          );
          return { ...req, status: "declined" };
        }
        return req;
      })
    );
  };

  // Add new item
  const handleAddItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newItemName.trim()) return;

    const newItem: Item = {
      id: Date.now().toString(),
      name: newItemName,
      category: newItemCategory,
      status: "available"
    };

    setItems([newItem, ...items]);
    setNewItemName("");
    setIsAddingItem(false);
    triggerNotification(
      "Item Added! 🎉",
      `'${newItem.name}' is now in your Lenderoo library and ready for friends to borrow.`
    );
  };

  // Add a new friend connection
  const handleAddFriend = () => {
    const names = ["Sarah Jenkins", "Emily Taylor", "Liam O'Connor"];
    const avatars = [
      "/avatars/kookaburra.png",
      "/avatars/echidna.png",
      "/avatars/platypus.png"
    ];
    
    // Choose one not added yet
    const currentFriendNames = friends.map(f => f.name);
    const availableIndex = names.findIndex(name => !currentFriendNames.includes(name));

    if (availableIndex !== -1) {
      const newFriend: Friend = {
        id: Date.now().toString(),
        name: names[availableIndex],
        avatar: avatars[availableIndex],
        sharedCount: 0,
        status: "connected"
      };
      setFriends([...friends, newFriend]);
      triggerNotification(
        "New Connection! 🤝",
        `You are now connected with ${newFriend.name} on Lenderoo!`
      );
    } else {
      triggerNotification("Already Connected", "You have connected with all available demo friends!");
    }
  };

  const getCategoryIcon = (category: Item["category"]) => {
    switch (category) {
      case "book":
        return <BookOpen className="w-4 h-4" />;
      case "tool":
        return <Wrench className="w-4 h-4" />;
      case "game":
        return <Gamepad className="w-4 h-4" />;
      case "outdoor":
        return <Tent className="w-4 h-4" />;
      default:
        return <Layers className="w-4 h-4" />;
    }
  };

  return (
    <div id="simulator-container" className="relative flex flex-col items-center">
      {/* Glow Effects */}
      <div className="absolute -top-10 -left-10 w-48 h-48 bg-teal-400 rounded-full filter blur-3xl opacity-20 dark:opacity-10 animate-pulse"></div>
      <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-blue-500 rounded-full filter blur-3xl opacity-25 dark:opacity-15 animate-pulse delay-1000"></div>

      {/* Interactive Floating Hint */}
      <div className="absolute -top-12 z-20 bg-[#00BFA6] text-white text-xs font-semibold px-4 py-1.5 rounded-full shadow-md flex items-center gap-1.5 border border-teal-400 animate-bounce">
        <Sparkles className="w-3.5 h-3.5" />
        <span>Try Interactive Demo Below!</span>
      </div>

      {/* Phone Case Outer */}
      <div className="relative w-[340px] h-[680px] bg-slate-900 dark:bg-slate-950 rounded-[48px] p-3.5 shadow-2xl border-4 border-slate-800 dark:border-slate-900 ring-1 ring-slate-700/50">
        
        {/* Dynamic Screen Container */}
        <div 
          className={`relative w-full h-full rounded-[36px] overflow-hidden flex flex-col select-none transition-colors duration-300 ${
            appDarkMode 
              ? "bg-slate-900 text-slate-100" 
              : "bg-[#f8fafc] text-slate-800"
          }`}
        >
          {/* Phone Top Notch Speaker */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-900 rounded-b-2xl z-40 flex items-start justify-center pt-1.5">
            <div className="w-12 h-1 bg-slate-800 rounded-full"></div>
          </div>

          {/* Phone Screen Status Bar */}
          <div className="h-7 pt-1 px-6 flex justify-between items-center text-[11px] font-semibold z-30">
            <span>7:00 PM</span>
            <div className="flex items-center gap-1">
              {/* Network */}
              <div className="flex items-end gap-0.5 h-2">
                <span className="w-0.5 h-1 bg-current rounded-full"></span>
                <span className="w-0.5 h-1.5 bg-current rounded-full"></span>
                <span className="w-0.5 h-2 bg-current rounded-full"></span>
                <span className="w-0.5 h-2.5 bg-current rounded-full"></span>
              </div>
              <span>5G</span>
              {/* Battery */}
              <div className="w-5 h-2.5 border border-current rounded-sm p-0.5 flex items-center">
                <div className="h-full w-4 bg-current rounded-2xs"></div>
              </div>
            </div>
          </div>

          {/* Animated App Push Notification Banner (inside Phone Viewport) */}
          <div 
            className={`absolute top-8 left-3 right-3 z-50 bg-slate-900/95 dark:bg-slate-800/95 text-white p-3 rounded-2xl shadow-xl border border-slate-700/50 flex items-start gap-2.5 transition-all duration-500 ease-out transform ${
              showNotification 
                ? "translate-y-0 opacity-100 scale-100" 
                : "-translate-y-24 opacity-0 scale-95 pointer-events-none"
            }`}
          >
            <div className="bg-[#00BFA6] p-1.5 rounded-lg flex-shrink-0">
              <KangarooLogo size={18} variant="icon" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-center mb-0.5">
                <span className="text-[10px] font-bold text-teal-400 uppercase tracking-wider">Lenderoo Notification</span>
                <span className="text-[9px] text-slate-400">now</span>
              </div>
              <h5 className="text-xs font-bold truncate text-white">{notification?.title}</h5>
              <p className="text-[10px] text-slate-300 leading-tight mt-0.5">{notification?.body}</p>
            </div>
            <button 
              onClick={() => setShowNotification(false)}
              className="text-slate-400 hover:text-white p-0.5"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Simulator App Header */}
          <div className={`pt-2 px-4 pb-2 border-b flex justify-between items-center ${
            appDarkMode ? "border-slate-800 bg-slate-900/50" : "border-slate-200 bg-white"
          }`}>
            <div className="flex items-center gap-1.5">
              <KangarooLogo size={24} variant="silhouette" />
              <span className="font-extrabold text-base tracking-tight text-[#00BFA6]">Lenderoo</span>
            </div>
            
            {/* Inner App Theme Toggle */}
            <button
              onClick={() => {
                setAppDarkMode(!appDarkMode);
                triggerNotification(
                  `${!appDarkMode ? "Dark" : "Light"} Mode Enabled 🌓`,
                  `Lenderoo adapts seamlessly to your device's interface settings.`
                );
              }}
              className={`p-1.5 rounded-full border transition-colors ${
                appDarkMode 
                  ? "border-slate-700 hover:bg-slate-800 text-yellow-400" 
                  : "border-slate-200 hover:bg-slate-100 text-slate-500"
              }`}
              title="Toggle App Theme"
            >
              {appDarkMode ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
            </button>
          </div>

          {/* Simulator Content Area */}
          <div className="flex-1 overflow-y-auto px-4 py-3 flex flex-col">
            
            {/* TAB: LIBRARY */}
            {activeTab === "library" && (
              <div className="flex-1 flex flex-col">
                <div className="flex justify-between items-center mb-3">
                  <div>
                    <h3 className="text-sm font-extrabold">My Library</h3>
                    <p className={`text-[10px] ${appDarkMode ? "text-slate-400" : "text-slate-500"}`}>
                      {items.length} items to share with friends
                    </p>
                  </div>
                  <button
                    onClick={() => setIsAddingItem(true)}
                    className="flex items-center gap-1 text-[11px] font-bold text-white bg-[#00BFA6] hover:bg-[#0da48d] px-2.5 py-1.5 rounded-full transition-colors shadow-sm"
                  >
                    <Plus className="w-3 h-3" />
                    <span>Add</span>
                  </button>
                </div>

                {/* Search box placeholder */}
                <div className={`relative mb-3 flex items-center rounded-lg px-2.5 py-1.5 text-xs ${
                  appDarkMode ? "bg-slate-800 text-slate-400" : "bg-slate-100 text-slate-500"
                }`}>
                  <Search className="w-3.5 h-3.5 mr-2" />
                  <input 
                    type="text" 
                    placeholder="Search my library..." 
                    className="bg-transparent border-none outline-none w-full"
                    disabled
                  />
                </div>

                {/* Items list */}
                <div className="space-y-2 flex-1">
                  {items.map((item) => (
                    <div
                      key={item.id}
                      className={`p-2.5 rounded-xl border flex items-center justify-between transition-all ${
                        appDarkMode 
                          ? "border-slate-800 bg-slate-800/40 hover:bg-slate-800/60" 
                          : "border-slate-200 bg-white hover:bg-slate-50"
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <div className={`p-2 rounded-lg ${
                          appDarkMode ? "bg-slate-700 text-teal-400" : "bg-teal-50 text-teal-600"
                        }`}>
                          {getCategoryIcon(item.category)}
                        </div>
                        <div>
                          <h4 className="text-xs font-bold leading-tight">{item.name}</h4>
                          <span className="text-[9px] capitalize text-slate-400 font-medium">
                            {item.category}
                          </span>
                        </div>
                      </div>

                      {/* Status indicator */}
                      <div>
                        {item.status === "available" && (
                          <span className="text-[9px] font-semibold text-emerald-600 bg-emerald-50 dark:bg-emerald-950/30 dark:text-emerald-400 px-2 py-0.5 rounded-full">
                            Available
                          </span>
                        )}
                        {item.status === "lent" && (
                          <span className="text-[9px] font-semibold text-sky-600 bg-sky-50 dark:bg-sky-950/30 dark:text-sky-400 px-2 py-0.5 rounded-full">
                            Lent to {item.assignedTo}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB: FRIENDS */}
            {activeTab === "friends" && (
              <div className="flex-1 flex flex-col">
                <div className="flex justify-between items-center mb-3">
                  <div>
                    <h3 className="text-sm font-extrabold">Friend Connections</h3>
                    <p className={`text-[10px] ${appDarkMode ? "text-slate-400" : "text-slate-500"}`}>
                      {friends.length} friends sharing with you
                    </p>
                  </div>
                  <button
                    onClick={handleAddFriend}
                    className="flex items-center gap-1 text-[11px] font-bold text-teal-600 bg-teal-50 hover:bg-teal-100 dark:bg-slate-800 dark:text-teal-400 dark:hover:bg-slate-700 px-2.5 py-1.5 rounded-full transition-colors border border-teal-200/50"
                  >
                    <Plus className="w-3 h-3" />
                    <span>Connect</span>
                  </button>
                </div>

                <div className="space-y-2 flex-1">
                  {friends.map((friend) => (
                    <div
                      key={friend.id}
                      className={`p-2.5 rounded-xl border flex items-center justify-between transition-all ${
                        appDarkMode 
                          ? "border-slate-800 bg-slate-800/40" 
                          : "border-slate-200 bg-white"
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <img
                          src={friend.avatar}
                          alt={friend.name}
                          referrerPolicy="no-referrer"
                          className="w-8 h-8 rounded-full object-cover border border-slate-200"
                        />
                        <div>
                          <h4 className="text-xs font-bold leading-tight">{friend.name}</h4>
                          <span className="text-[9px] text-slate-400 font-medium">
                            {friend.sharedCount > 0 ? `${friend.sharedCount} shared items` : "No items shared yet"}
                          </span>
                        </div>
                      </div>

                      <button className={`p-1.5 rounded-full ${
                        appDarkMode ? "bg-slate-700 hover:bg-slate-600 text-teal-400" : "bg-teal-50 hover:bg-teal-100 text-teal-600"
                      }`}>
                        <MessageSquare className="w-3 h-3" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB: REQUESTS */}
            {activeTab === "requests" && (
              <div className="flex-1 flex flex-col">
                <div className="mb-3">
                  <h3 className="text-sm font-extrabold">Active Requests</h3>
                  <p className={`text-[10px] ${appDarkMode ? "text-slate-400" : "text-slate-500"}`}>
                    Manage your borrowing and lending
                  </p>
                </div>

                <div className="space-y-3 flex-1">
                  {requests.map((req) => (
                    <div
                      key={req.id}
                      className={`p-3 rounded-xl border flex flex-col gap-2 transition-all ${
                        appDarkMode 
                          ? "border-slate-800 bg-slate-800/40" 
                          : "border-slate-200 bg-white"
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-2">
                          <img
                            src={req.friendAvatar}
                            alt={req.friendName}
                            referrerPolicy="no-referrer"
                            className="w-7 h-7 rounded-full object-cover"
                          />
                          <div>
                            <p className="text-xs font-bold leading-tight">
                              {req.friendName}
                            </p>
                            <p className="text-[8px] text-slate-400">{req.date}</p>
                          </div>
                        </div>

                        <span className={`text-[8px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded ${
                          req.type === "incoming" 
                            ? "bg-amber-100 text-amber-800 dark:bg-amber-950/30 dark:text-amber-400" 
                            : "bg-blue-100 text-blue-800 dark:bg-blue-950/30 dark:text-blue-400"
                        }`}>
                          {req.type === "incoming" ? "Borrow Request" : "Your Request"}
                        </span>
                      </div>

                      <div className={`p-2 rounded-lg text-xs font-semibold flex items-center gap-1.5 ${
                        appDarkMode ? "bg-slate-700/50" : "bg-slate-50"
                      }`}>
                        <span className="text-slate-400 font-normal">Wants to borrow:</span>
                        <span className="text-teal-600 dark:text-teal-400">{req.itemName}</span>
                      </div>

                      {/* Request actions */}
                      {req.status === "pending" && req.type === "incoming" && (
                        <div className="flex gap-2 mt-1">
                          <button
                            onClick={() => handleDeclineRequest(req.id)}
                            className="flex-1 flex items-center justify-center gap-1 py-1.5 rounded-lg border border-slate-200 text-[10px] font-bold text-slate-500 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-400 dark:hover:bg-slate-800 transition-colors"
                          >
                            <X className="w-3 h-3" />
                            <span>Decline</span>
                          </button>
                          <button
                            onClick={() => handleApproveRequest(req.id)}
                            className="flex-1 flex items-center justify-center gap-1 py-1.5 rounded-lg bg-[#00BFA6] hover:bg-[#0da48d] text-white text-[10px] font-bold shadow-sm transition-colors"
                          >
                            <Check className="w-3 h-3" />
                            <span>Approve</span>
                          </button>
                        </div>
                      )}

                      {req.status === "approved" && (
                        <div className="text-[10px] text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1 mt-1">
                          <Check className="w-3.5 h-3.5 bg-emerald-100 dark:bg-emerald-950/30 p-0.5 rounded-full" />
                          <span>Approved & Handed Over</span>
                        </div>
                      )}

                      {req.status === "declined" && (
                        <div className="text-[10px] text-red-500 font-bold flex items-center gap-1 mt-1">
                          <X className="w-3.5 h-3.5 bg-red-100 dark:bg-red-950/30 p-0.5 rounded-full" />
                          <span>Declined</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Add Item Bottom Modal Sheet */}
          {isAddingItem && (
            <div className="absolute inset-0 bg-black/60 z-40 flex items-end">
              <form 
                onSubmit={handleAddItem}
                className={`w-full rounded-t-3xl p-5 border-t animate-slide-up ${
                  appDarkMode ? "bg-slate-800 border-slate-700" : "bg-white border-slate-200"
                }`}
              >
                <div className="flex justify-between items-center mb-4">
                  <h4 className="text-sm font-extrabold">Add New Item</h4>
                  <button 
                    type="button"
                    onClick={() => setIsAddingItem(false)}
                    className="p-1 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                <div className="space-y-3 mb-4">
                  <div>
                    <label className={`block text-[10px] font-bold uppercase tracking-wider mb-1 ${
                      appDarkMode ? "text-slate-400" : "text-slate-500"
                    }`}>
                      Item Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g., Catan Board Game, Camping Tent"
                      value={newItemName}
                      onChange={(e) => setNewItemName(e.target.value)}
                      className={`w-full px-3 py-2 text-xs rounded-lg border outline-none ${
                        appDarkMode 
                          ? "bg-slate-700 border-slate-600 text-white focus:border-teal-500" 
                          : "bg-slate-50 border-slate-200 text-slate-800 focus:border-teal-500"
                      }`}
                    />
                  </div>

                  <div>
                    <label className={`block text-[10px] font-bold uppercase tracking-wider mb-1 ${
                      appDarkMode ? "text-slate-400" : "text-slate-500"
                    }`}>
                      Category
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {(["book", "tool", "game", "outdoor", "other"] as Item["category"][]).map((cat) => (
                        <button
                          key={cat}
                          type="button"
                          onClick={() => setNewItemCategory(cat)}
                          className={`py-1.5 px-2 rounded-lg border text-[10px] font-bold capitalize flex items-center justify-center gap-1 transition-colors ${
                            newItemCategory === cat
                              ? "border-teal-600 bg-teal-50 text-teal-600 dark:bg-slate-700 dark:text-teal-400 dark:border-teal-500"
                              : "border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700"
                          }`}
                        >
                          {getCategoryIcon(cat)}
                          <span>{cat}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#00BFA6] hover:bg-[#0da48d] text-white font-bold py-2 rounded-xl text-xs shadow-md transition-colors flex items-center justify-center gap-1.5"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add to Personal Library</span>
                </button>
              </form>
            </div>
          )}

          {/* Simulator App Bottom Navigation Bar */}
          <div className={`h-14 border-t flex justify-around items-center px-2 pb-1.5 ${
            appDarkMode ? "border-slate-800 bg-slate-900/80" : "border-slate-100 bg-white"
          }`}>
            <button
              onClick={() => setActiveTab("library")}
              className={`flex flex-col items-center flex-1 py-1 transition-colors ${
                activeTab === "library" 
                  ? "text-[#00BFA6]" 
                  : "text-slate-400 hover:text-slate-600"
              }`}
            >
              <Layers className="w-5 h-5 mb-0.5" />
              <span className="text-[9px] font-bold">My Library</span>
            </button>

            <button
              onClick={() => setActiveTab("friends")}
              className={`flex flex-col items-center flex-1 py-1 transition-colors ${
                activeTab === "friends" 
                  ? "text-[#00BFA6]" 
                  : "text-slate-400 hover:text-slate-600"
              }`}
            >
              <Users className="w-5 h-5 mb-0.5" />
              <span className="text-[9px] font-bold">Friends</span>
            </button>

            <button
              onClick={() => setActiveTab("requests")}
              className={`relative flex flex-col items-center flex-1 py-1 transition-colors ${
                activeTab === "requests" 
                  ? "text-[#00BFA6]" 
                  : "text-slate-400 hover:text-slate-600"
              }`}
            >
              {requests.some(r => r.status === "pending") && (
                <span className="absolute top-1 right-6 w-2 h-2 bg-amber-500 rounded-full"></span>
              )}
              <Bell className="w-5 h-5 mb-0.5" />
              <span className="text-[9px] font-bold">Requests</span>
            </button>
          </div>

          {/* iOS Bottom Indicator Bar */}
          <div className="h-4 w-full flex items-center justify-center pb-1">
            <div className={`w-28 h-1 rounded-full ${appDarkMode ? "bg-slate-700" : "bg-slate-300"}`}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
