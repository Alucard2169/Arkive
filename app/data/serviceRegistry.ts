import { Bookmark, Code, NotebookTabs, Rss, Star, Video } from "lucide-react";

export const SERVICES = [
    {
      id: "github",
      title: "GitHub",
      description: "Stores your GitHub Stars",
      icon: Star,
    },
    {
      id: "bookmarks",
      title: "Bookmarks",
      description: "Stores your Bookmarks",
      icon: Bookmark,
    },
    {
      id: "youtube",
      title: "YouTube",
      description: "Stores your YouTube Playlists",
      icon: Video,
    },
    {
      id: "rss",
      title: "RSS",
      description: "Stores your RSS feeds",
      icon: Rss,
    },
    {
      id: "stackoverflow",
      title: "Stack Overflow",
      description: "Stores your Stack Overflow questions",
      icon: Code,
    },
    {
      id: "notes",
      title: "Notes",
      description: "Stores your notes",
      icon: NotebookTabs,
    },
  ];
  