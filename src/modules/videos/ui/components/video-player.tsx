"use client";
import MuxPlayer from "@mux/mux-player-react";
import { THUMBNAIL_FALLBACK } from "../../constants";

interface VideoPlayerProps {
  playbackId?: string | null | undefined;
  thumbnailUrl?: string | null | undefined;
  autoplay?: boolean;
  onPlay?: () => void;
}

export const VideoPlayerSkeleton = () => {
  return <div className="aspect-video bg-black rounded-xl" />;
};

export const VideoPlayer = ({
  playbackId,
  thumbnailUrl,
  autoplay,
  onPlay,
}: VideoPlayerProps) => {
  if (!playbackId) {
    return null;
  }

  return (
    <MuxPlayer
      playbackId={playbackId || ""}
      poster={thumbnailUrl || THUMBNAIL_FALLBACK}
      playerInitTime={0}
      autoPlay={autoplay}
      thumbnailTime={0}
      className="w-full h-full object-contain"
      accentColor="#ff2056"
      onPlay={onPlay}
    />
  );
};
