import ChatInterface from '@/components/chat-interface';

export default function ChatPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 relative">
      <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#374151_1px,transparent_1px)] [background-size:16px_16px]"></div>
      <ChatInterface />
    </main>
  );
}
