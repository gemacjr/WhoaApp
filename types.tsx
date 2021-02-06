export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type MainTabParamList = {
  Camera: undefined;
  Chats: undefined;
  Status: undefined;
  Calls: undefined;
};

export type TabOneParamList = {
  TabOneScreen: undefined;
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};

export type User = {
  id: string;
  name: string;
  imageUrl: string;
}

export type Message = {
  id: string;
  content: string;
  createdAt: number;
  
}

export type ChatRoom = {
  id: string;
  users: [User];
  lastMessage: Message;
}